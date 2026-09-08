"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { contextInputIds } from "@/data/knowledge";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FieldContext() {
  const t = useTranslations("fieldContext");
  const common = useTranslations("common");
  const reduce = useReducedMotion();
  const left = contextInputIds.slice(0, 4);
  const right = contextInputIds.slice(4);

  return (
    <Section id="system">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("p1")}</p>
          <p className="mt-4">{t("p2")}</p>
        </SectionHeading>
      </Reveal>

      <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_minmax(180px,240px)_1fr]">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {left.map((input, index) => (
            <motion.li
              key={input}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-md border border-ink/10 bg-paper px-4 py-3 text-sm"
            >
              {t(`inputs.${input}`)}
            </motion.li>
          ))}
        </ul>

        <div className="relative mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center rounded-full border border-ink/15 bg-forest px-4 text-center text-paper">
          <div className="absolute inset-4 rounded-full border border-white/10" />
          <div>
            <p className="tech-label text-moss">{common("center")}</p>
            <p className="mt-2 text-lg tracking-[-0.03em]">{t("centerLabel")}</p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {right.map((input, index) => (
            <motion.li
              key={input}
              initial={reduce ? false : { opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-md border border-ink/10 bg-paper px-4 py-3 text-sm"
            >
              {t(`inputs.${input}`)}
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-16 max-w-3xl text-center font-sans text-[1.7rem] font-medium leading-snug tracking-[-0.02em] text-ink sm:text-3xl lg:text-[2.35rem]">
        {t("statement")}
      </p>
    </Section>
  );
}
