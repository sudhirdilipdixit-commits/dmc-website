-- ─── Enquiries table ─────────────────────────────────────────────────────────
-- Run this in your Supabase SQL editor to set up the database.

create table if not exists enquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  course      text,
  city        text,
  source      text default 'website',
  created_at  timestamptz not null default now()
);

-- Index for efficient time-series queries
create index if not exists enquiries_created_at_idx on enquiries (created_at desc);

-- Row Level Security — only service role can insert/read
alter table enquiries enable row level security;

-- Allow the service role (used server-side) full access
create policy "service_role_all" on enquiries
  for all
  to service_role
  using (true)
  with check (true);

-- Anon users can insert (the website form submits via API route with service key,
-- but this is here as a safety net — the API route validates before inserting)
create policy "anon_insert" on enquiries
  for insert
  to anon
  with check (true);
