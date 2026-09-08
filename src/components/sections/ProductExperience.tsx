import { useTranslations } from "next-intl";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductWorkspace } from "@/components/product/ProductWorkspace";

export function ProductExperience() {
  const t = useTranslations("productExperience");

  return (
    <Section id="intelligence">
      <Reveal>
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")}>
          <p>{t("body")}</p>
        </SectionHeading>
      </Reveal>
      <div className="mt-12">
        <ProductWorkspace />
      </div>
    </Section>
  );
}
