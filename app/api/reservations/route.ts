import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";
import { createExternalReservation, isTgleConfigured } from "@/lib/tgle";
import { resend } from "@/lib/resend";
import {
  celebrationLabels,
  guestConfirmationEmail,
  staffNotificationEmail,
  type TgleSyncSummary,
} from "@/lib/email-templates";
import type { ReservationInsert } from "@/lib/supabase";

export const maxDuration = 30;

// Shared resend.dev test domain can only deliver to the email the Resend
// account was created with, until a real domain is verified — see
// .env.example.
const FROM = process.env.RESEND_FROM || "Sala HAVEN <onboarding@resend.dev>";
const STAFF_EMAIL = process.env.TGLE_STAFF_EMAIL;

const MAX_GUESTS = 4;

function str(value: unknown, max = 200) {
  return typeof value === "string" && value.trim() && value.length <= max ? value.trim() : null;
}

function parseReservation(input: unknown): ReservationInsert | null {
  if (!input || typeof input !== "object") return null;
  const r = input as Record<string, unknown>;

  const travel_date = str(r.travel_date, 10);
  const reservation_time = str(r.reservation_time, 8);
  const full_name = str(r.full_name);
  const phone = str(r.phone, 40);
  const email = str(r.email, 254);
  const airline = str(r.airline);
  const flight_number = str(r.flight_number, 20);
  const guests = r.guests;

  if (!travel_date || !/^\d{4}-\d{2}-\d{2}$/.test(travel_date)) return null;
  if (!reservation_time || !/^\d{2}:\d{2}(:\d{2})?$/.test(reservation_time)) return null;
  if (!full_name || !phone || !airline || !flight_number) return null;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  if (typeof guests !== "number" || !Number.isInteger(guests) || guests < 1 || guests > MAX_GUESTS) return null;

  const celebration = r.celebration == null ? null : str(r.celebration, 500);
  if (r.celebration != null && celebration === null) return null;

  return {
    travel_date,
    reservation_time,
    guests,
    full_name,
    phone,
    email,
    airline,
    flight_number,
    experience: null,
    celebration,
    language: r.language === "en" ? "en" : "es",
  };
}

function tgleNotes(reservation: ReservationInsert) {
  const parts = ["Reservación desde la landing de Sala HAVEN (Visa Infinite)."];
  if (reservation.celebration) parts.push(`Celebración: ${celebrationLabels(reservation.celebration, "es")}.`);
  parts.push(`Idioma del huésped: ${reservation.language === "es" ? "español" : "inglés"}.`);
  return parts.join(" ");
}

async function sendEmails(reservation: ReservationInsert, assetBaseUrl: string, sync: TgleSyncSummary) {
  if (!resend) return;
  const guest = guestConfirmationEmail(reservation, reservation.language, assetBaseUrl);
  const sends = [resend.emails.send({ from: FROM, to: reservation.email, subject: guest.subject, html: guest.html })];
  if (STAFF_EMAIL) {
    const staff = staffNotificationEmail(reservation, assetBaseUrl, sync);
    sends.push(resend.emails.send({ from: FROM, to: STAFF_EMAIL, subject: staff.subject, html: staff.html }));
  }
  const results = await Promise.allSettled(sends);
  for (const r of results) {
    if (r.status === "rejected" || r.value.error) console.error("Confirmation email failed", r);
  }
}

export async function POST(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json({ error: "Reservations backend is not configured." }, { status: 503 });
  }

  const body = (await request.json().catch(() => null)) as { reservation?: unknown } | null;
  const reservation = parseReservation(body?.reservation);
  if (!reservation) {
    return NextResponse.json({ error: "Invalid reservation data." }, { status: 400 });
  }

  const { data: row, error: insertError } = await supabaseAdmin
    .from("reservations")
    .insert(reservation)
    .select("id")
    .single();
  if (insertError || !row) {
    console.error("Reservation insert failed", insertError);
    return NextResponse.json({ error: "Could not save the reservation." }, { status: 500 });
  }

  // The reservation is saved from here on; TGLE sync and emails must never
  // turn this into a failed submission.
  let sync: TgleSyncSummary = { status: "skipped" };
  if (isTgleConfigured) {
    const result = await createExternalReservation(reservation, tgleNotes(reservation));
    sync = result.ok ? { status: "synced", reservationId: result.id } : { status: "failed", error: result.error };
    if (!result.ok) console.error("TGLE sync failed", result.error);
  }

  const { error: updateError } = await supabaseAdmin
    .from("reservations")
    .update({
      tgle_sync_status: sync.status,
      tgle_reservation_id: sync.status === "synced" ? sync.reservationId : null,
      tgle_sync_error: sync.status === "failed" ? sync.error : null,
      tgle_synced_at: sync.status === "synced" ? new Date().toISOString() : null,
    })
    .eq("id", row.id);
  if (updateError) console.error("Recording TGLE sync status failed", updateError);

  await sendEmails(reservation, new URL(request.url).origin, sync);

  return NextResponse.json({ ok: true });
}
