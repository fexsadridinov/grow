import { locales } from "./routing";

export {
  locales,
  routing,
  localeNames,
  displayCodes,
  localeCodes,
  intlLocales,
  localePathPrefixes,
} from "./routing";
export type { Locale } from "./routing";

export const defaultLocale = "en" as const;
export const fallbackLocale = "en" as const;

export const supportedLocales = locales;
