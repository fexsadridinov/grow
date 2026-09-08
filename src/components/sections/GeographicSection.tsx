import { useTranslations } from "next-intl";
import { geographyFilters, regionIds } from "@/data/knowledge";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function GeographicSection() {
  const t = useTranslations("geography");

  return (
    <Section id="geography" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {regionIds.map((region) => (
          <article
            key={region}
            className="flex min-h-[260px] min-w-0 flex-col rounded-lg border border-ink/10 bg-paper p-5"
          >
            <p className="tech-label text-olive">{t("region")}</p>
            <h3 className="mt-3 text-2xl tracking-[-0.04em]">
              {t(`regions.${region}.name`)}
            </h3>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-ink/50">{t("crop")}</dt>
                <dd className="text-right">{t(`regions.${region}.crop`)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink/50">{t("soil")}</dt>
                <dd className="text-right">{t(`regions.${region}.soil`)}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink/50">{t("climate")}</dt>
                <dd className="text-right">{t(`regions.${region}.climate`)}</dd>
              </div>
            </dl>
            <p className="mt-auto pt-6 text-[13.5px] leading-6 text-ink/70">
              {t(`regions.${region}.note`)}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {geographyFilters.map((filter) => (
          <span
            key={filter}
            className="rounded-md border border-ink/10 bg-paper px-3 py-1.5 text-[13px]"
          >
            {t(`filters.${filter}`)}
          </span>
        ))}
      </div>
    </Section>
  );
}
