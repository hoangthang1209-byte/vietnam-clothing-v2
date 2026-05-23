import {
    NextResponse,
  } from "next/server";
  
  import type {
    NextRequest,
  } from "next/server";
  
  export function middleware(
    request: NextRequest
  ) {
  
    const pathname =
      request.nextUrl.pathname;
  
    const isMissingLocale =
  
      !pathname.startsWith(
        "/en"
      ) &&
  
      !pathname.startsWith(
        "/vi"
      );
  
    if (
      isMissingLocale
    ) {
  
      return NextResponse.redirect(
        new URL(
          `/en${pathname}`,
          request.url
        )
      );
    }
  
    return NextResponse.next();
  }
  
  export const config = {
  
    matcher: [
  
      "/((?!api|_next|favicon.ico).*)",
    ],
  };