import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "vi"];

export function middleware(
  request: NextRequest
) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale =
    locales.some(
      (locale) =>
        pathname.startsWith(
          `/${locale}`
        )
    );

  if (
    pathname === "/"
  ) {
    return NextResponse.redirect(
      new URL(
        "/en",
        request.url
      )
    );
  }

  if (
    !pathnameHasLocale &&
    !pathname.startsWith("/_next") &&
    !pathname.startsWith("/api") &&
    !pathname.includes(".")
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
    "/((?!_next).*)",
  ],
};