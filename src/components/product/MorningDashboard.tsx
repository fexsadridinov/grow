"use client";

import { useLocale, useTranslations } from "next-intl";
import { morningSummary, sampleFields } from "@/data/sampleFields";
import { formatHectares } from "@/lib/utils";
import { RiskBadge } from "@/components/product/RiskBadge";
import { ConceptualMark } from "@/components/ui/ConceptualMark";
import type { Locale } from "@/i18n/routing";

const attentionFields = sampleFields.filter(
  (field) => field.status !== "stable",
);

export function MorningDashboard() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const unit = t("common.hectares");

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper">
      <div className="flex flex-col gap-2 border-b border-ink/8 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
        <div>
          <p className="tech-label text-olive">{t("dashboard.operations")}</p>
          <h3 className="mt-2 text-3xl tracking-[-0.04em] sm:text-4xl">
            {t("dashboard.greeting")}
          </h3>
        </div>
        <ConceptualMark />
      </div>

      <div className="grid grid-cols-2 gap-px bg-ink/8 sm:grid-cols-4">
        <Stat
          label={t("dashboard.fieldsMonitored")}
          value={String(morningSummary.fieldsMonitored)}
        />
        <Stat
          label={t("dashboard.totalArea")}
          value={formatHectares(morningSummary.totalHectares, locale, unit)}
        />
        <Stat
          label={t("dashboard.needAttention")}
          value={String(morningSummary.attentionCount)}
        />
        <Stat
          label={t("dashboard.priorityInspections")}
          value={String(morningSummary.priorityInspections)}
        />
      </div>

      <div className="divide-y divide-ink/8">
        {attentionFields.map((field) => (
          <article
            key={field.id}
            className="grid gap-3 px-5 py-5 transition-colors hover:bg-canvas/70 sm:grid-cols-[minmax(8rem,140px)_minmax(0,1fr)_auto] sm:items-center sm:px-7"
          >
            <div className="min-w-0">
              <p className="font-mono text-[12px] tracking-[0.12em] text-olive">
                {t(`fields.items.${field.id}.code`)}
              </p>
              <p className="text-sm text-ink/55">
                {t(`fields.items.${field.id}.name`)}
              </p>
            </div>
            <div className="min-w-0">
              <p className="text-[15px]">
                {field.id === "field-14" ||
                field.id === "field-7" ||
                field.id === "field-21"
                  ? t(`fields.items.${field.id}.primaryConcern`)
                  : t(`fields.status.${field.status}`)}
              </p>
              {field.affectedAreaHectares ? (
                <p className="mt-1 text-sm text-ink/55" suppressHydrationWarning>
                  {t("dashboard.affected", {
                    area: formatHectares(field.affectedAreaHectares, locale, unit),
                  })}
                </p>
              ) : null}
            </div>
            <RiskBadge
              label={
                field.priority === "high"
                  ? t("fields.priority.high")
                  : t("fields.priority.medium")
              }
              severity={field.priority === "high" ? "high" : "moderate"}
            />
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-px bg-ink/8 sm:grid-cols-3">
        <Stat
          label={t("dashboard.farmCondition")}
          value={t("fields.farmCondition.stable")}
        />
        <Stat
          label={t("dashboard.activeRiskArea")}
          value={formatHectares(morningSummary.activeRiskAreaHectares, locale, unit)}
        />
        <Stat label={t("dashboard.status")} value={t("dashboard.stableOverall")} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 bg-paper px-5 py-5 sm:px-7">
      <p className="tech-label text-olive">{label}</p>
      <p className="mt-2 font-mono text-2xl tracking-tight" suppressHydrationWarning>
        {value}
      </p>
    </div>
  );
}
