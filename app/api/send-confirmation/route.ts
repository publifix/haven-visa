import { NextResponse } from "next/server";
import { resend, isResendConfigured } from "@/lib/resend";
import { guestConfirmationEmail, staffNotificationEmail } from "@/lib/email-templates";
import type { ReservationInsert } from "@/lib/supabase";

// Shared resend.dev test domain can only deliver to the email the Resend
// account was created with, until a real domain is verified — see
// .env.example. RESEND_FROM / TGLE_STAFF_EMAIL default to that address so
// testing works out of the box.
const FROM = process.env.RESEND_FROM || "Sala HAVEN <onboarding@resend.dev>";
const STAFF_EMAIL = process.env.TGLE_STAFF_EMAIL;

type Body = {
  reservation: ReservationInsert;
};

export async function POST(request: Request) {
  if (!isResendConfigured || !resend) {
    return NextResponse.json({ error: "Resend is not configured." }, { status: 503 });
  }

  const { reservation } = (await request.json()) as Body;
  if (!reservation?.email || !reservation.full_name) {
    return NextResponse.json({ error: "Missing reservation data." }, { status: 400 });
  }

  const guest = guestConfirmationEmail(reservation, reservation.language);
  const results = await Promise.allSettled([
    resend.emails.send({
      from: FROM,
      to: reservation.email,
      subject: guest.subject,
      html: guest.html,
    }),
    ...(STAFF_EMAIL
      ? [
          (() => {
            const staff = staffNotificationEmail(reservation);
            return resend.emails.send({
              from: FROM,
              to: STAFF_EMAIL,
              subject: staff.subject,
              html: staff.html,
            });
          })(),
        ]
      : []),
  ]);

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length > 0) {
    return NextResponse.json({ error: "One or more emails failed to send.", details: failed }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
