import { NextResponse } from "next/server";
import { resend, isResendConfigured } from "@/lib/resend";
import { guestConfirmationEmail, staffNotificationEmail } from "@/lib/email-templates";
import type { ReservationInsert } from "@/lib/supabase";

// Shared resend.dev test domain can only deliver to the email the Resend
// account was created with, until a real domain is verified — see
// .env.example.
const FROM = process.env.RESEND_FROM || "Sala HAVEN <onboarding@resend.dev>";
const STAFF_EMAIL = process.env.TGLE_STAFF_EMAIL;

const STRING_FIELDS = [
  "travel_date",
  "reservation_time",
  "full_name",
  "phone",
  "email",
  "airline",
  "flight_number",
] as const;

function parseReservation(input: unknown): ReservationInsert | null {
  if (!input || typeof input !== "object") return null;
  const r = input as Record<string, unknown>;
  for (const field of STRING_FIELDS) {
    if (typeof r[field] !== "string" || !(r[field] as string).trim()) return null;
  }
  if (typeof r.guests !== "number") return null;
  if (r.celebration !== null && r.celebration !== undefined && typeof r.celebration !== "string") return null;
  return {
    ...(r as unknown as ReservationInsert),
    celebration: (r.celebration as string | null | undefined) ?? null,
    experience: null,
    language: r.language === "en" ? "en" : "es",
  };
}

export async function POST(request: Request) {
  if (!isResendConfigured || !resend) {
    return NextResponse.json({ error: "Resend is not configured." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { reservation?: unknown } | null;
  const reservation = parseReservation(body?.reservation);
  if (!reservation) {
    return NextResponse.json({ error: "Invalid reservation data." }, { status: 400 });
  }

  // Images and fonts in the emails are served from this same deployment.
  const assetBaseUrl = new URL(request.url).origin;

  const guest = guestConfirmationEmail(reservation, reservation.language, assetBaseUrl);
  const sends = [
    resend.emails.send({ from: FROM, to: reservation.email, subject: guest.subject, html: guest.html }),
  ];
  if (STAFF_EMAIL) {
    const staff = staffNotificationEmail(reservation, assetBaseUrl);
    sends.push(resend.emails.send({ from: FROM, to: STAFF_EMAIL, subject: staff.subject, html: staff.html }));
  }

  const results = await Promise.allSettled(sends);
  const failed = results.filter((r) => r.status === "rejected" || r.value.error);
  if (failed.length > 0) {
    console.error("send-confirmation failed", failed);
    return NextResponse.json({ error: "One or more emails failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
