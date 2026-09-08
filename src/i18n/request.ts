import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "./routing";
import type en from "../../messages/en.json";

type Messages = typeof en;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeMessages(
  fallback: Record<string, unknown>,
  overlay: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...fallback };
  for (const [key, value] of Object.entries(overlay)) {
    const current = result[key];
    if (isRecord(current) && isRecord(value)) {
      result[key] = mergeMessages(current, value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const english = (await import("../../messages/en.json")).default as Messages;
  const localeMessages = (
    await import(`../../messages/${locale}.json`)
  ).default as Messages;

  const messages = (
    locale === "en" ? english : mergeMessages(english, localeMessages)
  ) as Messages;

  return {
    locale,
    messages,
    onError(error) {
      if (process.env.NODE_ENV !== "production") {
        console.error(error);
      }
    },
    getMessageFallback({ namespace, key }) {
      const path = namespace ? `${namespace}.${key}` : key;
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[i18n] Missing message: ${path}`);
      }
      return "";
    },
  };
});
