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
  
    const content =
      formData.get(
        "content"
      );
  
    const gallery =
      JSON.parse(
  
        String(
          formData.get(
            "gallery"
          ) || "[]"
        )
      );
  
    const supabase =
      await createClient();
  
    await supabase
  
      .from(
        "products"
      )
  
      .insert({
  
        title,
  
        slug,
  
        category,
  
        image,
  
        description,
  
        gallery,
  
        content,
      });
  
    return NextResponse.redirect(
  
      new URL(
  
        "/admin/products",
  
        request.url
      )
    );
  }