import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MorningDashboard } from "@/components/product/MorningDashboard";

export function MorningDashboardSection() {
  const t = useTranslations("dashboard");

  return (
    <Section id="dashboard" className="bg-panel">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-12">
        <MorningDashboard />
      </div>
    </Section>
  );
}
