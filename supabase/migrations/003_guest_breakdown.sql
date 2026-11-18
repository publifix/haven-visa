-- Run in the Supabase SQL editor on the existing project, right after the
-- deploy that splits the guest name and party size in the form.
--
-- full_name and guests stay as the joined name and the total party size
-- (cardholder + adult companions + minors).
alter table public.reservations
  add column if not exists first_names text,
  add column if not exists last_names text,
  add column if not exists adult_companions smallint not null default 0
    check (adult_companions between 0 and 4),
  add column if not exists minors smallint not null default 0
    check (minors between 0 and 4);
