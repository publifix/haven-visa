-- Sala HAVEN reservations table.
-- Run this once against the Supabase project once it exists
-- (SQL editor, or `supabase db push` if you adopt the CLI/migrations flow).

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

  language text not null check (language in ('es', 'en'))
);

alter table public.reservations enable row level security;

-- Allow the public anon key to insert reservations (the form runs
-- client-side, unauthenticated) but never read others' data back.
create policy "Anyone can submit a reservation"
  on public.reservations
  for insert
  to anon
  with check (true);

-- No select/update/delete policy for anon: reservations are managed from
-- the Supabase dashboard or a service-role backend, never read back
-- client-side.
