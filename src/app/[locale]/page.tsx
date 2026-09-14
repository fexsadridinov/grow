import { setRequestLocale } from "next-intl/server";
import { resolveLocale } from "@/i18n/locale";
import { IntroductionHero } from "@/components/introduction/IntroductionHero";
import { SystemStory } from "@/components/introduction/SystemStory";
import { DecisionExperience } from "@/components/introduction/DecisionExperience";
import { ArchitectureStory } from "@/components/introduction/ArchitectureStory";
import { HeritageStory } from "@/components/introduction/HeritageStory";
import { IntelligenceLoop } from "@/components/sections/IntelligenceLoop";
import { OutcomeLearning } from "@/components/sections/OutcomeLearning";
import { AgronomistMode } from "@/components/sections/AgronomistMode";
import { UserGroups } from "@/components/sections/UserGroups";
import { Roadmap } from "@/components/sections/Roadmap";
import { FinalCTA } from "@/components/sections/FinalCTA";

type Props = { params: Promise<{ locale: string }> };
export default async function Home({ params }: Props) {
  const locale = await resolveLocale(params);
  setRequestLocale(locale);
  return (
    <main id="main" className="grow-introduction">
      <IntroductionHero />
      <SystemStory />
      <DecisionExperience />
      <IntelligenceLoop />
      <ArchitectureStory />
      <AgronomistMode />
      <OutcomeLearning />
      <HeritageStory />
      <UserGroups />
      <Roadmap />
      <FinalCTA />
    </main>
  );
}
