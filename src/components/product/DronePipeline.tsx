"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { dronePipelineIds, vegetationIndices } from "@/data/knowledge";
import { ConceptualMark } from "@/components/ui/ConceptualMark";
import { RasterField } from "@/components/product/RasterField";

export function DronePipeline() {
  const t = useTranslations("drone");
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-xl border border-ink/10 bg-paper p-5 sm:p-6">
        <p className="tech-label text-olive">{t("pipelineLabel")}</p>
        <ol className="mt-6 space-y-0">
          {dronePipelineIds.map((step, index) => (
            <li key={step} className="relative flex gap-4 pb-4 last:pb-0">
              <div className="flex w-7 flex-col items-center">
                <motion.span
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 font-mono text-[11px]"
                  initial={reduce ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
                {index < dronePipelineIds.length - 1 ? (
                  <span className="mt-1 w-px flex-1 bg-ink/12" />
                ) : null}
              </div>
              <p className="min-w-0 pt-1 text-[15px]">{t(`steps.${step}`)}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-wrap gap-2">
          {vegetationIndices.map((index) => (
            <span
              key={index}
              className="rounded-md border border-ink/10 px-2.5 py-1 font-mono text-[11px] tracking-[0.12em]"
            >
              {index}
            </span>
          ))}
        </div>
        <ConceptualMark className="mt-6">{t("disclaimer")}</ConceptualMark>
      </div>
      <RasterField />
    </div>
  );
}
