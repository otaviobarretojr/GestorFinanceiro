import {createClient} from '@supabase/supabase-js';
const url=import.meta.env.VITE_SUPABASE_URL||'https://xpwibmjwruidoblgjsej.supabase.co';
const key=import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY||'sb_publishable_nS9zp8AZQQiXLRtGmYH5iw_JUMgPU7l';
export const supabase=createClient(url,key);