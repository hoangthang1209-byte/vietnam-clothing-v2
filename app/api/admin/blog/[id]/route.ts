import {
    NextResponse,
  } from "next/server";
  
  export async function PATCH(
  
    request: Request,
  
    context: {
  
      params: {
  
        id: string;
      };
    }
  ) {
  
    try {
  
      const body =
        await request.json();
  
      return NextResponse.json({
  
        success: true,
  
        id:
          context.params.id,
  
        data:
          body,
      });
  
    } catch {
  
      return NextResponse.json(
  
        {
          error:
            "Update failed",
        },
  
        {
          status: 500,
        }
      );
    }
  }
  
  export async function DELETE(
  
    request: Request,
  
    context: {
  
      params: {
  
        id: string;
      };
    }
  ) {
  
    try {
  
      return NextResponse.json({
  
        success: true,
  
        deletedId:
          context.params.id,
      });
  
    } catch {
  
      return NextResponse.json(
  
        {
          error:
            "Delete failed",
        },
  
        {
          status: 500,
        }
      );
    }
  }