"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { fieldOutlinePath, fieldZones, zoneFill, type FieldZone } from "@/data/fieldGeometry";
import type { SampleField } from "@/data/sampleFields";
import { FieldHealthScore } from "@/components/product/FieldHealthScore";
import { RiskBadge } from "@/components/product/RiskBadge";
import { ConceptualMark } from "@/components/ui/ConceptualMark";
import { cn, formatHectares } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

type FieldMapMockupProps = {
  field: SampleField;
  compact?: boolean;
  className?: string;
};

export function FieldMapMockup({
  field,
  compact = false,
  className,
}: FieldMapMockupProps) {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const reduce = useReducedMotion();
  const [activeZone, setActiveZone] = useState<FieldZone["id"] | null>(null);
  const unit = t("common.hectares");
  const primaryRisk = field.risks[0];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/8 bg-night text-paper shadow-[0_1px_0_rgb(255_255_255/0.04)]",
        className,
      )}
    >
      <div className="grid-night pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative flex items-center justify-between gap-3 border-b border-white/8 px-4 py-3 sm:px-5">
        <div className="min-w-0">
          <p className="tech-label text-moss/80">{t("fields.intelligence")}</p>
          <p className="mt-1 font-mono text-[13px] tracking-wide">
            {t(`fields.items.${field.id}.code`)} · {t(`fields.crops.${field.crop}`)} ·{" "}
            <span suppressHydrationWarning>
              {formatHectares(field.areaHectares, locale, unit)}
            </span>
          </p>
        </div>
        <ConceptualMark inverted />
      </div>

      <div className={cn("grid", compact ? "grid-cols-1" : "lg:grid-cols-[1.2fr_minmax(0,0.8fr)]")}>
        <div className="relative min-h-[280px] px-3 py-4 sm:min-h-[340px] sm:px-5">
          <svg
            viewBox="0 0 420 320"
            className="h-full w-full"
            role="img"
            aria-label={t("productExperience.mapAlt", {
              name: t(`fields.items.${field.id}.name`),
            })}
          >
            <defs>
              <filter id="field-soft" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="0.4" />
              </filter>
            </defs>
            <g opacity="0.18" stroke="rgba(250,250,247,0.5)" strokeWidth="0.4">
              {Array.from({ length: 12 }, (_, index) => (
                <line
                  key={`v-${index}`}
                  x1={30 + index * 32}
                  y1="24"
                  x2={30 + index * 32}
                  y2="296"
                />
              ))}
              {Array.from({ length: 9 }, (_, index) => (
                <line
                  key={`h-${index}`}
                  x1="24"
                  y1={28 + index * 32}
                  x2="396"
                  y2={28 + index * 32}
                />
              ))}
            </g>
            <path
              d={fieldOutlinePath}
              fill="rgba(23,60,43,0.55)"
              stroke="rgba(250,250,247,0.45)"
              strokeWidth="1.2"
            />
            {fieldZones.map((zone, index) => (
              <motion.path
                key={zone.id}
                d={zone.path}
                fill={zoneFill[zone.tone]}
                className={zone.tone === "stress" ? "zone-pulse" : undefined}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: zone.tone === "stress" ? 0.78 : 0.7 }}
                transition={{ duration: 0.9, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
                stroke={activeZone === zone.id ? "rgba(250,250,247,0.9)" : "rgba(15,23,18,0.25)"}
                strokeWidth={activeZone === zone.id ? 1.4 : 0.6}
                onMouseEnter={() => setActiveZone(zone.id)}
                onMouseLeave={() => setActiveZone(null)}
                onFocus={() => setActiveZone(zone.id)}
                onBlur={() => setActiveZone(null)}
                tabIndex={0}
                role="img"
                aria-label={t(`fields.zones.${zone.id}`)}
                style={{ cursor: "pointer" }}
              />
            ))}
            <rect
              className="scan-line origin-top"
              x="70"
              y="40"
              width="300"
              height="1.2"
              fill="rgba(250,250,247,0.55)"
            />
            <text
              x="86"
              y="292"
              fill="rgba(250,250,247,0.45)"
              fontSize="9"
              fontFamily="var(--font-ibm-plex-mono), ui-monospace, monospace"
              letterSpacing="0.12em"
            >
              49.24 N · 28.47 E
            </text>
          </svg>
          {activeZone ? (
            <div className="pointer-events-none absolute bottom-6 left-6 max-w-[min(100%,16rem)] rounded-md border border-white/10 bg-night/90 px-3 py-2">
              <p className="tech-label text-moss">
                {t(`fields.zones.${activeZone}`)}
              </p>
            </div>
          ) : null}
        </div>

        <div className={cn("flex min-w-0 flex-col gap-5 border-t border-white/8 p-5 lg:border-l lg:border-t-0", compact && "hidden")}>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="tech-label text-moss/80">{t("productExperience.fieldHealth")}</p>
              <p className="mt-2 text-sm text-paper/60">
                {t("productExperience.healthIndex")}
              </p>
            </div>
            <FieldHealthScore score={field.healthScore} inverted />
          </div>

          <div className="space-y-2">
            <p className="tech-label text-moss/80">{t("productExperience.status")}</p>
            <div className="flex flex-wrap gap-2">
              {field.risks.map((risk) => (
                <RiskBadge
                  key={risk.id}
                  label={t(`fields.risks.${risk.id}`)}
                  severity={risk.severity}
                  inverted
                />
              ))}
              <RiskBadge
                label={t("fields.soilMoistureStable")}
                severity="low"
                inverted
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 border-t border-white/8 pt-4">
            <div className="min-w-0">
              <p className="tech-label text-paper/40">{t("productExperience.weather")}</p>
              <p className="mt-1 font-mono text-sm">
                {field.weather.temperatureC}°C · {field.weather.humidityPercent}%
              </p>
              <p className="text-xs text-paper/50">
                {t(`fields.weather.${field.weather.condition}`)}
              </p>
            </div>
            <div className="min-w-0">
              <p className="tech-label text-paper/40">{t("productExperience.alerts")}</p>
              <p className="mt-1 text-sm">
                {primaryRisk
                  ? t(`fields.risks.${primaryRisk.id}`)
                  : t(`fields.status.${field.status}`)}
              </p>
              <p className="text-xs text-paper/50">{t("common.highConfidence")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
