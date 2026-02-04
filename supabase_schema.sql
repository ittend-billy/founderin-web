-- Pitch Shoot Enquiries Table Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create pitch_shoot_enquiries table
CREATE TABLE IF NOT EXISTS pitch_shoot_enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Form fields
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT NOT NULL,
  what_building TEXT NOT NULL,
  product_status TEXT NOT NULL CHECK (product_status IN ('yes', 'in_progress', 'no')),
  preferred_friday DATE NOT NULL,
  time_window TEXT NOT NULL CHECK (time_window IN ('morning', 'afternoon')),

  -- Payment tracking
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  stripe_session_id TEXT,
  stripe_customer_id TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_pitch_shoot_enquiries_email ON pitch_shoot_enquiries(email);
CREATE INDEX IF NOT EXISTS idx_pitch_shoot_enquiries_created_at ON pitch_shoot_enquiries(created_at);
CREATE INDEX IF NOT EXISTS idx_pitch_shoot_enquiries_payment_status ON pitch_shoot_enquiries(payment_status);
CREATE INDEX IF NOT EXISTS idx_pitch_shoot_enquiries_preferred_friday ON pitch_shoot_enquiries(preferred_friday);

-- Add Row Level Security (RLS)
ALTER TABLE pitch_shoot_enquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for public form submissions)
CREATE POLICY "Enable insert for everyone" ON pitch_shoot_enquiries
  FOR INSERT WITH CHECK (true);

-- Create a policy that allows authenticated users to view all records
CREATE POLICY "Enable read access for authenticated users" ON pitch_shoot_enquiries
  FOR SELECT TO authenticated USING (true);

-- Optional: Create a view for easy data access
CREATE OR REPLACE VIEW pitch_shoot_enquiries_view AS
SELECT
  id,
  created_at,
  name,
  email,
  company_name,
  what_building,
  product_status,
  preferred_friday,
  time_window,
  payment_status,
  stripe_session_id,
  stripe_customer_id
FROM pitch_shoot_enquiries
ORDER BY created_at DESC;

-- Function to update payment status (call this from Stripe webhook)
CREATE OR REPLACE FUNCTION update_payment_status(
  p_id UUID,
  p_status TEXT,
  p_stripe_session_id TEXT,
  p_stripe_customer_id TEXT DEFAULT NULL
) RETURNS VOID AS $$
BEGIN
  UPDATE pitch_shoot_enquiries
  SET
    payment_status = p_status,
    stripe_session_id = p_stripe_session_id,
    stripe_customer_id = COALESCE(p_stripe_customer_id, stripe_customer_id)
  WHERE id = p_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
