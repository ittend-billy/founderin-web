import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type PitchShootFormData = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  company_name: string;
  what_building: string;
  product_status: 'yes' | 'in_progress' | 'no';
  preferred_friday: string;
  time_window: 'morning' | 'afternoon';
  payment_status: 'pending' | 'completed' | 'failed';
  stripe_session_id?: string;
};
