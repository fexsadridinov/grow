export const brand = {
  name: "GROW",
  productName: "GROW",
  shortName: "GROW",
  category: "Agricultural Intelligence Platform",
  tagline: "The operating intelligence layer for agriculture.",
  statement: "Intelligence that grows with every field.",
  shortDescription: "Agricultural intelligence built around the field.",
  description:
    "GROW is an agricultural intelligence platform designed to combine field imagery, agronomic knowledge, weather, soil, history, and outcomes into better field decisions.",
  supportingLine: "Agricultural intelligence, built around the field.",
  accent: "#86A56E",
  contactEmail: "hello@grow.example",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://grow.example",
  social: {
    linkedin: "",
    x: "",
  },
} as const;

export type Brand = typeof brand;
