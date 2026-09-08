"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { agronomistPoints, agronomistReview } from "@/data/knowledge";
import { formatPercent } from "@/lib/utils";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ConceptualMark } from "@/components/ui/ConceptualMark";

type ReviewState = "idle" | "confirmed" | "corrected" | "noted";

export function AgronomistMode() {
  const t = useTranslations("agronomistMode");
  const [state, setState] = useState<ReviewState>("idle");

  return (
    <Section id="agronomists">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
            <p>{t("body")}</p>
            <ul className="mt-8 space-y-2 text-[15px] text-ink/75">
              {agronomistPoints.map((point) => (
                <li key={point}>{t(`points.${point}`)}</li>
              ))}
            </ul>
          </SectionHeading>
        </Reveal>

        <div className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="tech-label text-olive">{t("panelLabel")}</p>
            <ConceptualMark />
          </div>

          <div className="mt-6 rounded-lg bg-canvas px-4 py-4">
            <p className="tech-label text-olive">{t("aiAssessment")}</p>
            <p className="mt-2 text-lg">{t("aiLabel")}</p>
            <p className="font-mono text-sm text-ink/55">
              {formatPercent(agronomistReview.aiConfidence)}
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-alert/20 bg-alert/6 px-4 py-4">
            <p className="tech-label text-alert">{t("agronomistReview")}</p>
            <p className="mt-2">{t("incorrect")}</p>
            <p className="mt-1 text-sm text-ink/70">
              {t("correctClassification", { label: t("correction") })}
            </p>
            <p className="mt-3 text-sm text-ink/70">
              {t("expertNote", { note: t("note") })}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button
              type="button"
              className="h-10 px-4 text-sm"
              onClick={() => setState("confirmed")}
            >
              {t("confirm")}
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="h-10 px-4 text-sm"
              onClick={() => setState("corrected")}
            >
              {t("correct")}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="h-10 px-4 text-sm"
              onClick={() => setState("noted")}
            >
              {t("addContext")}
            </Button>
          </div>
          <p className="mt-4 min-h-6 text-sm text-ink/55" aria-live="polite">
            {t(state)}
          </p>
        </div>
      </div>
    </Section>
  );
}
