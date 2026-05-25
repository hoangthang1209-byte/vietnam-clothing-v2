import {
    NextResponse,
  } from "next/server";
  
  type Props = {
  
    params: {
  
      id: string;
    };
  };
  
  export async function PATCH(
  
    request: Request,
  
    {
      params,
    }: Props
  ) {
  
    try {
  
      const body =
        await request.json();
  
      return NextResponse.json({
  
        success: true,
  
        id:
          params.id,
  
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
  
    {
      params,
    }: Props
  ) {
  
    try {
  
      return NextResponse.json({
  
        success: true,
  
        deletedId:
          params.id,
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