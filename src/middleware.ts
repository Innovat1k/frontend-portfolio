import { NextRequest, NextResponse } from "next/server";

type Lang = "fr" | "en";

const defaultLang: Lang = "fr";
const langs: Lang[] = ["fr", "en"];

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const hasLocale = langs.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
  );
  if (hasLocale) return NextResponse.next();

  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang.split(",")[0].split("-")[0] as Lang;
  const lang = langs.includes(preferred) ? preferred : defaultLang;

  console.log("Proxy it:", request.nextUrl.pathname);

  return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
