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
  
    const email =
      formData.get(
        "email"
      ) as string;
  
    const password =
      formData.get(
        "password"
      ) as string;
  
    const supabase =
      await createClient();
  
    const {
      error,
    } = await supabase.auth
  
      .signInWithPassword({
  
        email,
  
        password,
      });
  
    if (
      error
    ) {
  
      return NextResponse.redirect(
  
        new URL(
  
          "/admin/login",
  
          request.url
        )
      );
    }
  
    return NextResponse.redirect(
  
      new URL(
  
        "/admin/products",
  
        request.url
      )
    );
  }