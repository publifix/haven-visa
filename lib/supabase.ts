/**
 * True once the Supabase project is wired up (see .env.example). Until then
 * the reservation form runs in demo mode — see components/ReservationForm.tsx.
 * Reservations themselves are written server-side (app/api/reservations).
 */
export const isSupabaseConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);

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
