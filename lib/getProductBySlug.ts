import {
    supabase,
  } from "@/lib/supabase";
  
  export async function getProductBySlug(
    slug: string
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
        "slug",
        slug
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