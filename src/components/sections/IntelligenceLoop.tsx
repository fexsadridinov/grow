import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IntelligenceLoopDiagram } from "@/components/product/IntelligenceLoopDiagram";

export function IntelligenceLoop() {
  const t = useTranslations("intelligenceLoop");

  return (
    <Section id="how-it-works" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-14">
        <IntelligenceLoopDiagram />
      </div>
    </Section>
  );
}
