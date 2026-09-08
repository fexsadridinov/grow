export type NavItem = {
  href: string;
  key: "system" | "howItWorks" | "intelligence" | "vision" | "agronomists" | "roadmap" | "earlyAccess";
};

export const primaryNav: readonly NavItem[] = [
  { href: "/#system", key: "system" },
  { href: "/#how-it-works", key: "howItWorks" },
  { href: "/#intelligence", key: "intelligence" },
  { href: "/#vision", key: "vision" },
  { href: "/#agronomists", key: "agronomists" },
  { href: "/#roadmap", key: "roadmap" },
];

export const footerNav: readonly NavItem[] = [
  { href: "/#system", key: "system" },
  { href: "/#vision", key: "vision" },
  { href: "/#roadmap", key: "roadmap" },
  { href: "/#early-access", key: "earlyAccess" },
];

export const legalNav = [
  { href: "/privacy", key: "privacy" },
  { href: "/terms", key: "terms" },
] as const;
