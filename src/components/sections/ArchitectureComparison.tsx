import { useTranslations } from "next-intl";
import { architectureLimits, architecturePath } from "@/data/knowledge";
import { Wordmark } from "@/components/ui/Wordmark";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ArchitectureComparison() {
  const t = useTranslations("architectureComparison");

  return (
    <Section id="architecture" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-ink/10 bg-canvas p-6 sm:p-8">
          <p className="tech-label text-olive">{t("chatbot")}</p>
          <p className="mt-6 font-mono text-sm tracking-[0.08em] text-ink/70">
            {t("questionAnswer")}
          </p>
          <ul className="mt-8 space-y-3 text-[15px] text-ink/70">
            {architectureLimits.map((item) => (
              <li key={item}>{t(`limits.${item}`)}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-forest/20 bg-forest p-6 text-paper sm:p-8">
          <Wordmark href={null} inverted size="sm" />
          <ol className="mt-6 space-y-2">
            {architecturePath.map((item, index) => (
              <li key={item} className="flex items-center gap-3 text-[15px]">
                <span className="font-mono text-[11px] text-moss">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {t(`path.${item}`)}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </Section>
  );
}
