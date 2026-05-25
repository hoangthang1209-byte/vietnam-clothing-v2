import {
    NextResponse,
  } from "next/server";
  
  import {
    createClient,
  } from "@/lib/supabase/server";
  
  export async function POST(
    request: Request
  ) {
  
    try {
  
      const body =
        await request.json();
  
      const supabase =
        await createClient();
  
      const {
        error,
      } = await supabase
  
        .from(
          "blogs"
        )
  
        .insert([
  
          {
            title:
              body.title,
  
            slug:
              body.slug,
  
            excerpt:
              body.excerpt,
  
            image:
              body.image,
  
            category:
              body.category,
  
            content:
              body.content,
  
            published:
              body.published,
          },
        ]);
  
      if (error) {
  
        return NextResponse.json(
  
          {
            error:
              error.message,
          },
  
          {
            status: 500,
          }
        );
      }
  
      return NextResponse.json({
  
        success: true,
      });
  
    } catch (
      error
    ) {
  
      return NextResponse.json(
  
        {
          error:
            "Server error",
        },
  
        {
          status: 500,
        }
      );
    }
  }