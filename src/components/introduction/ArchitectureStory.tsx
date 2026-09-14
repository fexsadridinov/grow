import { useTranslations } from "next-intl";
import {
  ArrowDown,
  ChevronDown,
  Radio,
  Network,
  Waypoints,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { InputsSection } from "@/components/sections/InputsSection";
import { DroneSection } from "@/components/sections/DroneSection";
import { PredictiveSection } from "@/components/sections/PredictiveSection";
import { GeographicSection } from "@/components/sections/GeographicSection";
import { KnowledgeGraphSection } from "@/components/sections/KnowledgeGraphSection";
import { ProductExperience } from "@/components/sections/ProductExperience";
import { MorningDashboardSection } from "@/components/sections/MorningDashboardSection";
import { VisionAnalysis } from "@/components/sections/VisionAnalysis";

const layers = [
  {
    key: "sensing",
    body: "sensingBody",
    icon: Radio,
    tags: "RGB / MULTISPECTRAL / THERMAL",
  },
  {
    key: "reasoning",
    body: "reasoningBody",
    icon: Network,
    tags: "VLM / RAG / FIELD MODEL",
  },
  {
    key: "operations",
    body: "operationsBody",
    icon: Waypoints,
    tags: "HUMAN IN THE LOOP / FEEDBACK",
  },
] as const;
export function ArchitectureStory() {
  const t = useTranslations();
  return (
    <section className="intro-section architecture-story">
      <div className="intro-container">
        <div className="intro-section-header">
          <div>
            <p className="tech-label">{t("introduction.architectureLabel")}</p>
            <h2 className="intro-heading">
              {t("introduction.architectureTitle")}
            </h2>
          </div>
          <p className="intro-body">{t("introduction.architectureBody")}</p>
        </div>
        <div className="architecture-layers">
          {layers.map(({ key, body, icon: Icon }, index) => (
            <Reveal key={key} delay={index * 0.08}>
              <article className="architecture-layer">
                <div className="layer-number">
                  0{index + 1}
                  <Icon size={30} strokeWidth={1.2} />
                </div>
                <h3>{t(`introduction.${key}`)}</h3>
                <p>{t(`introduction.${body}`)}</p>
                <div className="layer-port" aria-hidden="true">
                  <ArrowDown size={15} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <details className="technical-notes">
          <summary>
            {t("introduction.exploreTechnical")}
            <ChevronDown size={20} />
          </summary>
          <div className="technical-note-content">
            <ProductExperience />
            <MorningDashboardSection />
            <InputsSection />
            <KnowledgeSection />
            <VisionAnalysis />
            <DroneSection />
            <PredictiveSection />
            <GeographicSection />
            <KnowledgeGraphSection />
          </div>
        </details>
      </div>
    </section>
  );
}
