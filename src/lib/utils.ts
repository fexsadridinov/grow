import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { intlLocales, type Locale } from "@/i18n/routing";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatObservationDate(iso: string, locale: Locale): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat(intlLocales[locale], {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatHectares(
  value: number,
  locale: Locale,
  unit: string,
): string {
  return `${value.toLocaleString(intlLocales[locale])} ${unit}`;
}

export function formatPercent(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function splitDiagramLabel(label: string): readonly [string] | readonly [string, string] {
  if (label.length <= 16) {
    return [label];
  }
  const midpoint = Math.ceil(label.length / 2);
  const space = label.lastIndexOf(" ", midpoint);
  const index = space > 3 ? space : midpoint;
  return [label.slice(0, index).trim(), label.slice(index).trim()];
}
