// lib/supabase-client.ts - Client-side only Supabase configuration
// This file can be safely imported in client components and contexts

import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and keys - HARDCODED FOR NOW TO FIX DEPLOYMENT
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yjsdhrcdymzzaqwertzb.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlqc2RocmNkeW16emFxd2VydHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MjQyMjMsImV4cCI6MjA3NzUwMDIyM30.WpCbHOk-3nnlqmg4qrwLjDYxltLgXlceHMjiT59-chs';

// Client-side Supabase client (for browser)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});
