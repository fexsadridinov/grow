import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DiagnosisPanel } from "@/components/product/DiagnosisPanel";

export function VisionAnalysis() {
  const t = useTranslations("visionAnalysis");

  return (
    <Section id="analysis">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-12">
        <DiagnosisPanel />
      </div>
      <p className="mt-12 max-w-3xl font-sans text-[1.65rem] font-medium leading-snug tracking-[-0.02em] sm:text-3xl">
        {t("statement")}
      </p>
    </Section>
  );
}
