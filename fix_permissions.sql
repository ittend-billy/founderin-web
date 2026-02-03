-- Run this in Supabase SQL Editor to fix permissions

-- 1. Grant explicit permissions to the 'anon' role (public users)
GRANT INSERT, SELECT, UPDATE ON pitch_shoot_enquiries TO anon;
GRANT INSERT, SELECT, UPDATE ON pitch_shoot_enquiries TO authenticated;
GRANT INSERT, SELECT, UPDATE ON pitch_shoot_enquiries TO service_role;

-- 2. Ensure RLS is enabled
ALTER TABLE pitch_shoot_enquiries ENABLE ROW LEVEL SECURITY;

-- 3. Refresh the policies
DROP POLICY IF EXISTS "Enable insert for everyone" ON pitch_shoot_enquiries;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON pitch_shoot_enquiries;

-- Allow public inserts
CREATE POLICY "Enable insert for everyone" ON pitch_shoot_enquiries
FOR INSERT WITH CHECK (true);

-- Allow authenticated (logged in) users to read all
CREATE POLICY "Enable read access for authenticated users" ON pitch_shoot_enquiries
FOR SELECT TO authenticated USING (true);
