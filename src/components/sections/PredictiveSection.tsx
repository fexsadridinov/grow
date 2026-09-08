import { useTranslations } from "next-intl";
import { predictiveModules } from "@/data/knowledge";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ConceptualMark } from "@/components/ui/ConceptualMark";

export function PredictiveSection() {
  const t = useTranslations("predictive");
  const common = useTranslations("common");

  return (
    <Section id="predictive">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {predictiveModules.map((module) => (
          <article
            key={module.id}
            className="min-h-[220px] rounded-xl border border-ink/10 bg-paper p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="min-w-0 text-xl tracking-[-0.03em]">
                {t(`modules.${module.id}.title`)}
              </h3>
              <ConceptualMark>{common("conceptualOutput")}</ConceptualMark>
            </div>
            {module.kind === "range" ? (
              <p className="mt-8 font-mono text-2xl tracking-tight">
                {t(`modules.${module.id}.from`)}
                <span className="mx-2 text-olive">→</span>
                {t(`modules.${module.id}.to`)}
              </p>
            ) : (
              <p className="mt-8 font-mono text-2xl tracking-tight">
                {t(`modules.${module.id}.value`)}
              </p>
            )}
            <p className="mt-4 max-w-md text-sm leading-6 text-ink/65">
              {t(`modules.${module.id}.reason`)}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
