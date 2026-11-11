-- Run in the Supabase SQL editor on the existing project.
--
-- STEP 1 — run before deploying the server-side reservation flow.
alter table public.reservations
  add column if not exists tgle_sync_status text not null default 'pending'
    check (tgle_sync_status in ('pending', 'synced', 'failed', 'skipped')),
  add column if not exists tgle_reservation_id text,
  add column if not exists tgle_sync_error text,
  add column if not exists tgle_synced_at timestamptz;

-- STEP 2 — run only after the new deploy is live and a test reservation
-- went through. Reservations are now inserted by the server with the
-- service role key, so the public anon key no longer needs write access.
-- drop policy if exists "Anyone can submit a reservation" on public.reservations;
