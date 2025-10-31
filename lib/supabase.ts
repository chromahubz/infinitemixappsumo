// lib/supabase.ts - Supabase client configuration

import { createClient } from '@supabase/supabase-js';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Get Supabase URL and keys with fallbacks for build time
const getSupabaseUrl = () => process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const getSupabaseAnonKey = () => process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';
const getSupabaseServiceKey = () => process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

// Client-side Supabase client (for browser)
export const supabase = createClient(
  getSupabaseUrl(),
  getSupabaseAnonKey()
);

// Server-side Supabase client with service role (for API routes)
export const supabaseAdmin = createClient(
  getSupabaseUrl(),
  getSupabaseServiceKey(),
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Server-side client with cookies (for server components)
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    getSupabaseUrl(),
    getSupabaseAnonKey(),
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    }
  );
}

// Database types
export type Database = {
  public: {
    Tables: {
      appsumo_licenses: {
        Row: {
          id: string;
          user_id: string;
          license_key: string;
          plan_tier: 'creator' | 'pro' | 'studio' | 'agency';
          ai_credits_total: number;
          ai_credits_remaining: number;
          activated_at: string;
          status: 'active' | 'refunded' | 'suspended' | 'pending';
          first_ai_usage_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          license_key: string;
          plan_tier: 'creator' | 'pro' | 'studio' | 'agency';
          ai_credits_total: number;
          ai_credits_remaining: number;
          activated_at?: string;
          status?: 'active' | 'refunded' | 'suspended' | 'pending';
          first_ai_usage_at?: string | null;
          created_at?: string;
        };
        Update: {
          ai_credits_remaining?: number;
          status?: 'active' | 'refunded' | 'suspended' | 'pending';
          first_ai_usage_at?: string | null;
        };
      };
      credit_usage: {
        Row: {
          id: string;
          user_id: string;
          license_id: string;
          action_type: 'ai_music' | 'ai_thumbnail' | 'ai_description';
          credits_used: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          license_id: string;
          action_type: 'ai_music' | 'ai_thumbnail' | 'ai_description';
          credits_used?: number;
          created_at?: string;
        };
      };
      user_devices: {
        Row: {
          id: string;
          user_id: string;
          device_fingerprint: string;
          device_info: any;
          first_seen_at: string;
          last_seen_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          device_fingerprint: string;
          device_info?: any;
          first_seen_at?: string;
          last_seen_at?: string;
        };
      };
    };
  };
};

export type AppSumoLicense = Database['public']['Tables']['appsumo_licenses']['Row'];
export type CreditUsage = Database['public']['Tables']['credit_usage']['Row'];
export type UserDevice = Database['public']['Tables']['user_devices']['Row'];
