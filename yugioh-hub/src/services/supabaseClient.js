import { createClient } from "@supabase/supabase-js";
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseURL || !supabaseAnonKey) {
    console.warn(
        'Faltan variables de entorno de supabase (VITE_SUPABASE_URL o VITE_SUPABASEAnonKey). revisa tu archivo .env y reinicia el servidor'
    );
}
export const supabase = createClient(supabaseURL, supabaseAnonKey);