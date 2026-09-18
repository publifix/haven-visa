import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * True once real Supabase credentials are set in the environment (see
 * .env.example). Until then the reservation form stays visible but its
 * submit button is disabled — see components/ReservationForm.tsx.
 */
export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;

export type ReservationInsert = {
  travel_date: string;
  reservation_time: string;
  guests: number;
  full_name: string;
  phone: string;
  email: string;
  airline: string;
  flight_number: string;
  experience: string | null;
  celebration: string | null;
  language: "es" | "en";
};

export async function insertReservation(reservation: ReservationInsert) {
  if (!supabase) {
    throw new Error("Supabase is not configured yet.");
  }
  return supabase.from("reservations").insert(reservation);
}
