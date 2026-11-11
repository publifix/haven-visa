import type { ReservationInsert } from "./supabase";

// TGLE's external_reservation API. Development target is
// https://dev-back.tgle.mx with TGLE's test key; production URL and key
// come from TGLE when the integration goes live.
const API_URL = process.env.TGLE_API_URL?.replace(/\/+$/, "");
const API_KEY = process.env.TGLE_API_KEY;
// "VISA-HAVEN" entry of the /lounge_access_methods catalog. The id differs
// per environment and the method may not exist in TGLE's dev catalog —
// leave unset there (the field is optional).
const ACCESS_METHOD_ID = process.env.TGLE_LOUNGE_ACCESS_METHOD_ID;

export const isTgleConfigured = Boolean(API_URL && API_KEY);

export type TgleResult = { ok: true; id: string } | { ok: false; error: string };

// TGLE takes given names and surnames separately; the form collects one
// "full name" field. Mexican names usually end in two surnames.
export function splitFullName(fullName: string) {
  const words = fullName.trim().split(/\s+/);
  if (words.length <= 1) return { name: words[0] ?? "", lastNames: "" };
  const surnameCount = words.length >= 3 ? 2 : 1;
  return {
    name: words.slice(0, -surnameCount).join(" "),
    lastNames: words.slice(-surnameCount).join(" "),
  };
}

export async function createExternalReservation(
  reservation: ReservationInsert,
  notes: string,
): Promise<TgleResult> {
  if (!API_URL || !API_KEY) return { ok: false, error: "TGLE API is not configured." };

  const { name, lastNames } = splitFullName(reservation.full_name);
  const body = {
    name,
    lastNames,
    email: reservation.email,
    phone: reservation.phone,
    airline: reservation.airline,
    flightNumber: reservation.flight_number,
    // Local Mexico City time, no offset — TGLE stores it as -06:00.
    reservationDate: `${reservation.travel_date}T${reservation.reservation_time.slice(0, 5)}`,
    personsNumber: reservation.guests,
    terminal: "T1",
    source: "web",
    notes,
    ...(ACCESS_METHOD_ID ? { loungeAccessMethods: [ACCESS_METHOD_ID] } : {}),
  };

  try {
    const res = await fetch(`${API_URL}/api/external_reservation`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-API-KEY": API_KEY },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10_000),
    });
    const text = await res.text();
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}: ${text.slice(0, 500)}` };
    const data = JSON.parse(text) as { id?: unknown };
    return { ok: true, id: typeof data.id === "string" ? data.id : "" };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
