import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DronePipeline } from "@/components/product/DronePipeline";

export function DroneSection() {
  const t = useTranslations("drone");

  return (
    <Section id="drones" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-12">
        <DronePipeline />
      </div>
    </Section>
  );
}
