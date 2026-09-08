import type { ReactNode } from "react";
import type { Metadata } from "next";
import { brand } from "@/config/brand";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
