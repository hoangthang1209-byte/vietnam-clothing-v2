import {
    NextRequest,
    NextResponse,
  } from "next/server";
  
  const locales = [
    "en",
    "vi",
  ];
  
  export function middleware(
    request: NextRequest
  ) {
  
    const {
      pathname,
    } = request.nextUrl;
  
    const pathnameHasLocale =
      locales.some(
        (
          locale
        ) =>
  
          pathname.startsWith(
            `/${locale}`
          )
      );
  
    if (
      pathnameHasLocale
    ) {
  
      return NextResponse.next();
    }
  
    request.nextUrl.pathname =
      `/en${pathname}`;
  
    return NextResponse.redirect(
      request.nextUrl
    );
  }
  
  export const config = {
  
    matcher: [
  
      "/((?!_next|api|favicon.ico).*)",
    ],
  };