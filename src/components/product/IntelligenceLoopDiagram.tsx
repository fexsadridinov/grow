"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { intelligenceStepIds } from "@/data/knowledge";
import { cn } from "@/lib/utils";

export function IntelligenceLoopDiagram() {
  const t = useTranslations("intelligenceLoop");
  const reduce = useReducedMotion();

  return (
    <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
      {intelligenceStepIds.map((step, index) => (
        <motion.li
          key={step}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative min-w-0 rounded-lg border border-ink/10 bg-paper p-5",
            index === intelligenceStepIds.length - 1 && "xl:col-span-1",
          )}
        >
          <p className="font-mono text-[11px] tracking-[0.16em] text-olive">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-4 text-lg tracking-[-0.03em]">
            {t(`steps.${step}.label`)}
          </h3>
          <p className="mt-3 text-[14.5px] leading-6 text-ink/65">
            {t(`steps.${step}.copy`)}
          </p>
          {index < intelligenceStepIds.length - 1 ? (
            <span className="tech-label pointer-events-none absolute -right-2 top-6 hidden text-olive/50 xl:block">
              →
            </span>
          ) : null}
        </motion.li>
      ))}
    </ol>
  );
}
