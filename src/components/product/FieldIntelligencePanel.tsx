"use client";

import { useLocale, useTranslations } from "next-intl";
import type { SampleField } from "@/data/sampleFields";
import { formatHectares, formatObservationDate, formatPercent } from "@/lib/utils";
import { FieldHealthScore } from "@/components/product/FieldHealthScore";
import { ConceptualMark } from "@/components/ui/ConceptualMark";
import type { Locale } from "@/i18n/routing";

type FieldIntelligencePanelProps = {
  field: SampleField;
};

export function FieldIntelligencePanel({ field }: FieldIntelligencePanelProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const unit = t("common.hectares");
  const affected =
    field.affectedAreaPercent != null
      ? `${field.affectedAreaPercent[0]}–${field.affectedAreaPercent[1]}%`
      : null;
  const primaryRisk = field.risks[0];
  const primaryConcern =
    field.id === "field-14" || field.id === "field-7" || field.id === "field-21"
      ? t(`fields.items.${field.id}.primaryConcern`)
      : t(`fields.status.${field.status}`);
  const recommended =
    field.id === "field-14" ? t("fields.items.field-14.recommendedAction") : null;

  return (
    <aside className="flex h-full min-w-0 flex-col rounded-[10px] border border-ink/10 bg-paper p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="tech-label text-olive">{t("fields.intelligence")}</p>
          <h3 className="mt-2 text-lg tracking-[-0.03em]">
            {t(`fields.items.${field.id}.name`)}
          </h3>
          <p className="text-sm text-ink/60">
            {t(`fields.crops.${field.crop}`)} ·{" "}
            <span suppressHydrationWarning>
              {formatHectares(field.areaHectares, locale, unit)}
            </span>
          </p>
        </div>
        <FieldHealthScore score={field.healthScore} size={76} />
      </div>

      <dl className="mt-5 space-y-3 border-t border-ink/8 pt-4 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="tech-label text-olive">{t("productExperience.latestObservation")}</dt>
          <dd className="shrink-0 font-mono text-[13px]">
            <time dateTime={field.observationDate} suppressHydrationWarning>
              {formatObservationDate(field.observationDate, locale)}
            </time>
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="tech-label shrink-0 text-olive">
            {t("productExperience.primaryConcern")}
          </dt>
          <dd className="max-w-[180px] text-right">{primaryConcern}</dd>
        </div>
        {primaryRisk ? (
          <div className="flex justify-between gap-4">
            <dt className="tech-label text-olive">{t("productExperience.confidence")}</dt>
            <dd className="font-mono text-[13px]">
              {formatPercent(primaryRisk.confidence)}
            </dd>
          </div>
        ) : null}
        {affected ? (
          <div className="flex justify-between gap-4">
            <dt className="tech-label text-olive">{t("productExperience.affectedArea")}</dt>
            <dd className="font-mono text-[13px]">{affected}</dd>
          </div>
        ) : null}
      </dl>

      {recommended ? (
        <div className="mt-5 rounded-md bg-panel px-3 py-3">
          <p className="tech-label text-olive">{t("productExperience.recommendedAction")}</p>
          <p className="mt-2 text-[13.5px] leading-5 text-ink/80">{recommended}</p>
        </div>
      ) : null}

      <ConceptualMark className="mt-auto pt-5" />
    </aside>
  );
}
