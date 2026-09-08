import { useTranslations } from "next-intl";
import { knowledgeSourceIds, retrievalFactorIds } from "@/data/knowledge";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function KnowledgeSection() {
  const t = useTranslations("knowledge");

  return (
    <Section id="knowledge">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {knowledgeSourceIds.map((source) => (
          <article
            key={source}
            className="rounded-lg border border-ink/10 bg-paper p-5"
          >
            <h3 className="text-[16px] tracking-[-0.02em]">
              {t(`sources.${source}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              {t(`sources.${source}.description`)}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 overflow-hidden rounded-xl border border-ink/10 bg-night px-5 py-8 text-paper sm:px-10">
        <p className="tech-label text-moss">{t("retrievalPriority")}</p>
        <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm tracking-[0.08em] sm:text-base">
          {retrievalFactorIds.map((factor, index) => (
            <span key={factor} className="inline-flex items-center gap-3">
              <span>{t(`factors.${factor}`)}</span>
              {index < retrievalFactorIds.length - 1 ? (
                <span className="text-signal">×</span>
              ) : null}
            </span>
          ))}
          <span className="text-signal">=</span>
          <span>{t("retrievalPriority")}</span>
        </p>
        <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-paper/90 sm:text-[1.85rem]">
          {t("quote")}
        </p>
      </div>
    </Section>
  );
}
