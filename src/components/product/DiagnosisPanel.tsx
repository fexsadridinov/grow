"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { diagnosisCauses, diagnosisTests } from "@/data/knowledge";
import { formatPercent } from "@/lib/utils";
import { ConceptualMark } from "@/components/ui/ConceptualMark";

export function DiagnosisPanel() {
  const t = useTranslations("visionAnalysis");
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-paper">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[320px] bg-night p-5 sm:p-6">
          <p className="tech-label text-moss">{t("visualObservation")}</p>
          <svg
            viewBox="0 0 360 280"
            className="mt-4 h-[240px] w-full sm:h-[280px]"
            role="img"
            aria-label={t("leafAlt")}
          >
            <ellipse cx="190" cy="150" rx="138" ry="92" fill="#173C2B" />
            <path
              d="M190 58 C250 78 292 120 310 168 C268 196 232 214 190 228 C148 214 112 196 70 168 C88 120 130 78 190 58 Z"
              fill="#2A4A38"
            />
            <path
              d="M190 70 C188 120 188 170 190 226"
              stroke="rgba(250,250,247,0.25)"
              fill="none"
              strokeWidth="1.2"
            />
            <path
              d="M190 92 C150 112 118 140 96 168"
              stroke="rgba(250,250,247,0.16)"
              fill="none"
            />
            <path
              d="M190 92 C230 112 262 140 284 168"
              stroke="rgba(250,250,247,0.16)"
              fill="none"
            />
            <path
              d="M78 150 C110 128 142 148 154 176 C132 198 102 200 80 176 C72 164 72 156 78 150 Z"
              fill="#C9A94A"
              className="zone-pulse"
              opacity="0.85"
            />
            <path
              d="M70 168 C92 158 108 170 114 186 C98 198 80 196 70 180 Z"
              fill="#A65C42"
              opacity="0.9"
            />
            <text
              x="88"
              y="144"
              fill="#FAFAF7"
              fontSize="10"
              fontFamily="var(--font-geist-sans), var(--font-inter), sans-serif"
              letterSpacing="0.08em"
            >
              {t("olderLeaf")}
            </text>
          </svg>
          <div className="mt-2 flex flex-wrap gap-4 text-[13px] text-paper/70">
            <span>{t("observation")}</span>
            <span>{t("severity")}</span>
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-6 p-5 sm:p-6">
          <div>
            <p className="tech-label text-olive">{t("possibleCauses")}</p>
            <ul className="mt-4 space-y-3">
              {diagnosisCauses.map((cause) => (
                <li key={cause.id}>
                  <button
                    type="button"
                    className="w-full text-left"
                    onMouseEnter={() => setHovered(cause.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(cause.id)}
                    onBlur={() => setHovered(null)}
                  >
                    <div className="mb-1 flex items-baseline justify-between gap-3">
                      <span className="text-sm">{t(`causes.${cause.id}`)}</span>
                      <span className="font-mono text-[13px] text-ink/60">
                        {formatPercent(cause.confidence)}
                      </span>
                    </div>
                    <div className="h-[3px] overflow-hidden rounded-full bg-panel">
                      <div
                        className="h-full rounded-full bg-forest transition-[width] duration-700"
                        style={{
                          width: `${cause.confidence * 100}%`,
                          opacity: hovered && hovered !== cause.id ? 0.35 : 1,
                        }}
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="tech-label text-olive">{t("confirmation")}</p>
            <ul className="mt-3 space-y-2">
              {diagnosisTests.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink/80"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-forest" />
                  {t(`tests.${item}`)}
                </li>
              ))}
            </ul>
          </div>

          <ConceptualMark />
        </div>
      </div>
    </div>
  );
}
