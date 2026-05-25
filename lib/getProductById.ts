import {
    supabase,
  } from "@/lib/supabase";
  
  export async function getProductById(
    id: string
  ) {
  
    const {
      data,
      error,
    } = await supabase
  
      .from(
        "products"
      )
  
      .select("*")
  
      .eq(
        "id",
        id
      )
  
      .single();
  
    if (
      error
    ) {
  
      console.error(
        error
      );
  
      return null;
    }
  
    return data;
  }