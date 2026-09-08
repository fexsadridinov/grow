import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import {
  getLocalePathPrefix,
  isLegacyUkrainianPath,
  isLocale,
  pathnameHasLocalePrefix,
  rewriteLegacyUkrainianPath,
  routing,
} from "./i18n/routing";

const handleI18n = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isLegacyUkrainianPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = rewriteLegacyUkrainianPath(pathname);
    return NextResponse.redirect(url);
  }

  if (!pathnameHasLocalePrefix(pathname)) {
    const stored = request.cookies.get("NEXT_LOCALE")?.value;
    if (stored && isLocale(stored) && stored !== routing.defaultLocale) {
      const prefix = getLocalePathPrefix(stored);
      const url = request.nextUrl.clone();
      url.pathname = pathname === "/" ? prefix : `${prefix}${pathname}`;
      return NextResponse.redirect(url);
    }
  }

  return handleI18n(request);
}

export const config = {
  // Exclude Next metadata/image routes so they are not rewritten into `[locale]`.
  matcher: [
    "/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|favicon.ico|.*\\..*).*)",
  ],
};
