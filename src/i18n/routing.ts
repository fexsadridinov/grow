import { defineRouting } from "next-intl/routing";

export const locales = ["en", "uk", "ru", "es", "de", "fr"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  ru: "Русский",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
};

/** Visible UI abbreviations. Not ISO language codes — Ukrainian stays `uk`. */
export const displayCodes: Record<Locale, string> = {
  en: "EN",
  uk: "UA",
  ru: "RU",
  es: "ES",
  de: "DE",
  fr: "FR",
};

export const localeCodes = displayCodes;

export const intlLocales: Record<Locale, string> = {
  en: "en-US",
  uk: "uk-UA",
  ru: "ru-RU",
  es: "es",
  de: "de-DE",
  fr: "fr-FR",
};

/**
 * Public URL prefixes. Ukrainian uses `/ua` while the locale remains `uk`.
 * English has no prefix (`localePrefix: as-needed`).
 */
export const localePathPrefixes: Record<Locale, string> = {
  en: "",
  uk: "/ua",
  ru: "/ru",
  es: "/es",
  de: "/de",
  fr: "/fr",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      uk: "/ua",
    },
  },
  localeDetection: false,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocalePathPrefix(locale: Locale): string {
  return localePathPrefixes[locale];
}

export function pathnameHasLocalePrefix(pathname: string): boolean {
  return locales.some((locale) => {
    const prefix = localePathPrefixes[locale];
    if (!prefix) {
      return false;
    }
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}

/** Legacy `/uk` URLs — redirect these to `/ua`. */
export function isLegacyUkrainianPath(pathname: string): boolean {
  return pathname === "/uk" || pathname.startsWith("/uk/");
}

export function rewriteLegacyUkrainianPath(pathname: string): string {
  return pathname.replace(/^\/uk(?=\/|$)/, "/ua");
}
