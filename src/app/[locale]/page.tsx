import { setRequestLocale } from "next-intl/server";
import { resolveLocale } from "@/i18n/locale";
import { Hero } from "@/components/sections/Hero";
import { FieldContext } from "@/components/sections/FieldContext";
import { IntelligenceLoop } from "@/components/sections/IntelligenceLoop";
import { ProductExperience } from "@/components/sections/ProductExperience";
import { ArchitectureComparison } from "@/components/sections/ArchitectureComparison";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { InputsSection } from "@/components/sections/InputsSection";
import { VisionAnalysis } from "@/components/sections/VisionAnalysis";
import { DroneSection } from "@/components/sections/DroneSection";
import { PredictiveSection } from "@/components/sections/PredictiveSection";
import { OutcomeLearning } from "@/components/sections/OutcomeLearning";
import { AgronomistMode } from "@/components/sections/AgronomistMode";
import { GeographicSection } from "@/components/sections/GeographicSection";
import { KnowledgeGraphSection } from "@/components/sections/KnowledgeGraphSection";
import { MorningDashboardSection } from "@/components/sections/MorningDashboardSection";
import { UserGroups } from "@/components/sections/UserGroups";
import { Roadmap } from "@/components/sections/Roadmap";
import { VisionStatement } from "@/components/sections/VisionStatement";
import { FinalCTA } from "@/components/sections/FinalCTA";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const locale = await resolveLocale(params);
  setRequestLocale(locale);

  return (
    <main id="main">
      <Hero />
      <FieldContext />
      <IntelligenceLoop />
      <ProductExperience />
      <ArchitectureComparison />
      <KnowledgeSection />
      <InputsSection />
      <VisionAnalysis />
      <DroneSection />
      <PredictiveSection />
      <OutcomeLearning />
      <AgronomistMode />
      <GeographicSection />
      <KnowledgeGraphSection />
      <MorningDashboardSection />
      <UserGroups />
      <Roadmap />
      <VisionStatement />
      <FinalCTA />
    </main>
  );
}
