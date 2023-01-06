import { supabase } from "../supabase/client";

export const getAllProducts = async () => {
    let { data, error } = await supabase.from("productos").select("*");
    return { data, error };
  };