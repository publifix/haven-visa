-- Sala HAVEN reservations table — full schema for a fresh project.
-- An existing project is brought up to date with the files in
-- supabase/migrations/ instead.

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- Fixed per the copy deck: access method is always the Visa Infinite
  -- card, so it isn't stored as free text.
  travel_date date not null,
  reservation_time time not null,
  guests smallint not null check (guests between 1 and 6),

  full_name text not null,
  phone text not null,
  email text not null,
  airline text not null,
  flight_number text not null,

  experience text, -- from the "Add an Experience" accordion, optional
  celebration text, -- from the "Celebrating something special?" accordion, optional

  language text not null check (language in ('es', 'en')),

  -- Outcome of forwarding the reservation to TGLE's external_reservation API.
  tgle_sync_status text not null default 'pending'
    check (tgle_sync_status in ('pending', 'synced', 'failed', 'skipped')),
  tgle_reservation_id text,
  tgle_sync_error text,
  tgle_synced_at timestamptz
);

-- RLS on with no policies: only the server (service role key, which
-- bypasses RLS) can read or write reservations. The public anon key has no
-- access at all.
alter table public.reservations enable row level security;
