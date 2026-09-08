"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { featuredField, sampleFields } from "@/data/sampleFields";
import { FieldMapMockup } from "@/components/product/FieldMapMockup";
import { FieldIntelligencePanel } from "@/components/product/FieldIntelligencePanel";
import { FieldTimeline } from "@/components/product/FieldTimeline";
import { cn, formatHectares } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function ProductWorkspace() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [activeId, setActiveId] = useState(featuredField.id);
  const active = sampleFields.find((field) => field.id === activeId) ?? featuredField;
  const unit = t("common.hectares");

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-panel">
      <div className="flex min-h-[560px]">
        <aside className="hidden w-[min(280px,28%)] min-w-[220px] shrink-0 border-r border-ink/10 bg-paper/70 lg:block">
          <div className="border-b border-ink/8 px-4 py-4">
            <p className="tech-label text-olive">{t("productExperience.farm")}</p>
            <p className="mt-1 text-sm">{t("productExperience.farmName")}</p>
          </div>
          <ul className="p-2">
            {sampleFields.map((field) => (
              <li key={field.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(field.id)}
                  className={cn(
                    "flex w-full min-w-0 flex-col rounded-md px-3 py-2.5 text-left transition-colors",
                    field.id === active.id
                      ? "bg-forest text-paper"
                      : "hover:bg-canvas",
                  )}
                >
                  <span className="text-[13px] font-medium">
                    {t(`fields.items.${field.id}.name`)}
                  </span>
                  <span
                    className={cn(
                      "text-[12px]",
                      field.id === active.id ? "text-paper/60" : "text-ink/50",
                    )}
                  >
                    {t(`fields.crops.${field.crop}`)} ·{" "}
                    <span suppressHydrationWarning>
                      {formatHectares(field.areaHectares, locale, unit)}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <FieldMapMockup field={active} compact className="rounded-[10px]" />
        </div>

        <div className="hidden w-[min(340px,34%)] min-w-[280px] shrink-0 p-3 pl-0 xl:block">
          <FieldIntelligencePanel field={active} />
        </div>
      </div>

      <div className="border-t border-ink/10 bg-paper px-5 py-5 sm:px-6">
        <p className="tech-label mb-4 text-olive">{t("productExperience.timeline")}</p>
        <FieldTimeline events={active.timeline} />
      </div>

      <div className="border-t border-ink/10 p-4 xl:hidden">
        <FieldIntelligencePanel field={active} />
      </div>
    </div>
  );
}
