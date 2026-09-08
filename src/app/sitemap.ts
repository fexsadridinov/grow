import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/privacy", "/terms"] as const;

  return routing.locales.flatMap((locale) =>
    routes.map((href) => ({
      url: `${brand.siteUrl}${getPathname({ locale, href })}`,
      lastModified: new Date(),
      changeFrequency: href === "/" ? "monthly" : "yearly",
      priority: href === "/" ? 1 : 0.3,
    })),
  );
}
