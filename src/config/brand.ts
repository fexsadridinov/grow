export const brand = {
  productName: "FIELDOS",
  shortName: "FIELDOS",
  wordmarkPrimary: "FIELD",
  wordmarkSecondary: "OS",
  category: "Agricultural Intelligence Platform",
  tagline: "The operating intelligence layer for agriculture.",
  description:
    "FIELDOS is an agricultural intelligence platform designed to combine field imagery, agronomic knowledge, weather, soil, history, and outcomes into better field decisions.",
  supportingLine:
    "Agricultural intelligence, built around the field.",
  contactEmail: "hello@fieldos.example",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fieldos.example",
  social: {
    linkedin: "",
    x: "",
  },
} as const;

export type Brand = typeof brand;
