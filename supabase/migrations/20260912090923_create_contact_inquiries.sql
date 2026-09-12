/*
# Create contact_inquiries table for lead capture

1. New Tables
- `contact_inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person inquiring
  - `phone` (text, not null) — contact phone number
  - `email` (text) — optional email address
  - `service` (text) — which service the visitor is interested in
  - `message` (text) — optional message with additional details
  - `status` (text, default 'new') — lead status for tracking
  - `created_at` (timestamptz) — submission timestamp

2. Security
- Enable RLS on `contact_inquiries`.
- INSERT is public (TO anon, authenticated) so visitors can submit the contact form without signing in.
- No SELECT/UPDATE/DELETE policies for anon/authenticated — only the service role can read and manage submissions (admin dashboard, not part of this public website).
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON contact_inquiries;
CREATE POLICY "anon_insert_inquiries"
ON contact_inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);