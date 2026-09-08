import { useTranslations } from "next-intl";
import { outcomeLoop } from "@/data/knowledge";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function OutcomeLearning() {
  const t = useTranslations("outcomeLearning");

  return (
    <Section id="outcomes" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>

      <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {outcomeLoop.map((item, index) => (
          <li
            key={item}
            className="min-w-0 rounded-lg border border-ink/10 bg-paper px-4 py-5"
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-olive">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-[15px]">{t(`loop.${item}`)}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 rounded-xl border border-ink/10 bg-forest px-6 py-10 text-paper sm:px-10">
        <p className="tech-label text-moss">{t("equationLabel")}</p>
        <p className="mt-6 font-mono text-sm leading-8 tracking-[0.04em] sm:text-lg">
          {t("image")}
          <span className="text-signal"> + </span>
          {t("fieldContext")}
          <span className="text-signal"> + </span>
          {t("recommendation")}
          <span className="text-signal"> + </span>
          {t("intervention")}
          <span className="text-signal"> + </span>
          {t("outcome")}
        </p>
        <p className="mt-8 max-w-2xl font-sans text-2xl font-medium leading-snug sm:text-[1.85rem]">
          {t("quote")}
        </p>
        <p className="mt-6 text-sm text-paper/55">{t("memory")}</p>
      </div>
    </Section>
  );
}
