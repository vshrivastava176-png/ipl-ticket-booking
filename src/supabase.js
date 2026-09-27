import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qesaeyjxqqxylnppwjoq.supabase.co";
const supabaseKey = "sb_publishable_KOnCyj-B4xmwg3oDVB8BrQ_4lC7Rban";

export const supabase = createClient(supabaseUrl, supabaseKey);