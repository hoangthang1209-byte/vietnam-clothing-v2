import {
    NextResponse,
  } from "next/server";
  
  import {
    v4 as uuidv4,
  } from "uuid";
  
  import {
    createClient,
  } from "@/lib/supabase/server";
  
  export async function POST(
  
    request: Request
  
  ) {
  
    const formData =
      await request.formData();
  
    const file =
      formData.get(
        "file"
      ) as File;
  
    if (
      !file
    ) {
  
      return NextResponse.json({
  
        error:
          "No file uploaded",
      });
    }
  
    const bytes =
      await file.arrayBuffer();
  
    const buffer =
      Buffer.from(
        bytes
      );
  
    const fileExt =
      file.name
        .split(".")
        .pop();
  
    const fileName =
      `${uuidv4()}.${fileExt}`;
  
    const supabase =
      await createClient();
  
    const {
      error,
    } = await supabase
      .storage
  
      .from(
        "products"
      )
  
      .upload(
  
        fileName,
  
        buffer,
  
        {
  
          contentType:
            file.type,
        }
      );
  
    if (
      error
    ) {
  
      return NextResponse.json({
  
        error:
          error.message,
      });
    }
  
    const {
      data,
    } = supabase
      .storage
  
      .from(
        "products"
      )
  
      .getPublicUrl(
        fileName
      );
  
    return NextResponse.json({
  
      url:
        data.publicUrl,
    });
  }