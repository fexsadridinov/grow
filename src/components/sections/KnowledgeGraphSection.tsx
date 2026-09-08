import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { KnowledgeGraph } from "@/components/product/KnowledgeGraph";

export function KnowledgeGraphSection() {
  const t = useTranslations("knowledgeGraph");

  return (
    <Section id="knowledge-graph">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-12">
        <KnowledgeGraph />
      </div>
    </Section>
  );
}
