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
  contactEmail: "sadridinovfakhri@gmail.com",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  social: {
    linkedin: "",
    x: "",
  },
} as const;

export type Brand = typeof brand;
