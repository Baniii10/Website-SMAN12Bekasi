import { createClient } from "@supabase/supabase-js";

// Supabase URL and anon public key. Store them in environment variables for security.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Initialize Supabase client.
 * This client can be imported and used throughout the app for auth and database queries.
 */
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
