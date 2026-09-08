import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DataInputGrid } from "@/components/product/DataInputGrid";

export function InputsSection() {
  const t = useTranslations("inputs");

  return (
    <Section id="inputs" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-12">
        <DataInputGrid />
      </div>
    </Section>
  );
}
