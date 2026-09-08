import { brand } from "@/config/brand";
import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export type AppPath = "/" | "/privacy" | "/terms";

export function localeUrl(locale: Locale, href: AppPath): string {
  return `${brand.siteUrl}${getPathname({ locale, href })}`;
}

export function localeAlternates(locale: Locale, href: AppPath) {
  const languages = Object.fromEntries(
    routing.locales.map((item) => [item, localeUrl(item, href)]),
  );

  return {
    canonical: localeUrl(locale, href),
    languages: {
      ...languages,
      "x-default": localeUrl("en", href),
    },
  };
}
