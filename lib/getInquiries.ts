import {
    supabase,
  } from "@/lib/supabase";
  
  export async function getInquiries() {
  
    const {
      data,
      error,
    } = await supabase
  
      .from(
        "inquiries"
      )
  
      .select("*")
  
      .order(
        "created_at",
        {
          ascending: false,
        }
      );
  
    if (
      error
    ) {
  
      console.error(
        error
      );
  
      return [];
    }
  
    return data;
  }