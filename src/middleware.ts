import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import i18n from "./i18n/config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.rewrite(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/images|_next/image|_next/icons|icons|images|favicon.ico|robots.txt|sitemap.xml|sitemap_index.xml|sitemap-en.xml|sitemap-pt.xml|ahrefs_e5c423a42930a9e32b5c3e79cdf31b07bce1c5d1f0d8fb13b18baf8464e6c6aa).*)",
  ],
};
