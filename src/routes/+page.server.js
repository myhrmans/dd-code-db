import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("codes").select();
  //Todo print the data to the console
  //console.table(data)
  return {
    codes: data ?? [],
  };
}