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
  
      const formData =
        await request.formData();
  
      const file =
        formData.get(
          "file"
        ) as File;
  
      if (!file) {
  
        return NextResponse.json(
  
          {
            error:
              "No file uploaded",
          },
  
          {
            status: 400,
          }
        );
      }
  
      const supabase =
        await createClient();
  
      const fileExt =
        file.name
          .split(".")
          .pop();
  
      const fileName =
  
        `${Date.now()}.${fileExt}`;
  
      const {
        error,
      } = await supabase
  
        .storage
  
        .from(
          "media"
        )
  
        .upload(
  
          fileName,
  
          file,
  
          {
  
            cacheControl:
              "3600",
  
            upsert: false,
          }
        );
  
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
  
      const {
        data,
      } = supabase
  
        .storage
  
        .from(
          "media"
        )
  
        .getPublicUrl(
          fileName
        );
  
      return NextResponse.json({
  
        url:
          data.publicUrl,
      });
  
    } catch (
      error
    ) {
  
      return NextResponse.json(
  
        {
          error:
            "Upload failed",
        },
  
        {
          status: 500,
        }
      );
    }
  }