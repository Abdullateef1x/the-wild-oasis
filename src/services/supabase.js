import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ucqbfyxkwtdokvmqwajh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWJmeXhrd3Rkb2t2bXF3YWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NTAzNjUsImV4cCI6MjA1MzIyNjM2NX0.vS_cf0_RLOrsC_DoAjO2v3T8qdXO6mh1b3cCQTFESJM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
