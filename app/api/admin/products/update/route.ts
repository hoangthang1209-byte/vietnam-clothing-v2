import {
    NextResponse,
  } from "next/server";
  
  import {
    createClient,
  } from "@/lib/supabase/server";
  
  export async function POST(
  
    request: Request
  
  ) {
  
    const formData =
      await request.formData();
  
    const id =
      formData.get(
        "id"
      );
  
    const title =
      formData.get(
        "title"
      );
  
    const slug =
      formData.get(
        "slug"
      );
  
    const category =
      formData.get(
        "category"
      );
  
    const image =
      formData.get(
        "image"
      );
  
    const description =
      formData.get(
        "description"
      );
  
    const supabase =
      await createClient();
  
    await supabase
  
      .from(
        "products"
      )
  
      .update({
  
        title,
  
        slug,
  
        category,
  
        image,
  
        description,
      })
  
      .eq(
        "id",
        id
      );
  
    return NextResponse.redirect(
  
      new URL(
  
        "/admin/products",
  
        request.url
      )
    );
  }