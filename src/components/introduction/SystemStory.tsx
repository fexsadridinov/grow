import {
  ArrowDownRight,
  Camera,
  CloudSun,
  Layers,
  Sprout,
  BookOpen,
  History,
  ClipboardCheck,
  ChartNoAxesCombined,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { GrowLogo } from "@/components/brand/GrowLogo";
import { Reveal } from "@/components/ui/Reveal";

const signals = [
  ["imagery", Camera],
  ["weather", CloudSun],
  ["soil", Layers],
  ["cropStage", Sprout],
  ["fieldHistory", History],
  ["agronomy", BookOpen],
  ["interventions", ClipboardCheck],
  ["outcomes", ChartNoAxesCombined],
] as const;
export function SystemStory() {
  const t = useTranslations();
  return (
    <section id="system" className="intro-section system-story">
      <div className="intro-container system-layout">
        <Reveal>
          <p className="tech-label">{t("fieldContext.eyebrow")}</p>
          <h2 className="intro-heading">{t("introduction.systemTitle")}</h2>
          <p className="intro-body">{t("introduction.systemBody")}</p>
          <ArrowDownRight className="story-arrow" size={48} strokeWidth={1} />
        </Reveal>
        <div className="context-engine">
          <div className="signal-grid">
            {signals.map(([id, Icon]) => (
              <div className="signal-cell" key={id}>
                <Icon size={20} strokeWidth={1.4} />
                <span>{t(`fieldContext.inputs.${id}`)}</span>
              </div>
            ))}
          </div>
          <div className="engine-connection" aria-hidden="true" />
          <div className="engine-core">
            <GrowLogo inverted size="md" href={null} />
            <span>{t("fieldContext.centerLabel")}</span>
            <span className="engine-dot" />
          </div>
          <div className="engine-connection" aria-hidden="true" />
          <p className="engine-output">{t("fieldContext.statement")}</p>
        </div>
      </div>
    </section>
  );
}
