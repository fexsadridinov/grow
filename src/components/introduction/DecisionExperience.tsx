"use client";

import { useId, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Crosshair, RotateCcw } from "lucide-react";
import { GrowLogo } from "@/components/brand/GrowLogo";
import { Reveal } from "@/components/ui/Reveal";

const scenarios = ["nitrogen", "water", "disease"] as const;
type Scenario = (typeof scenarios)[number];
const evidenceSteps = [
  "Observation",
  "Context",
  "Decision",
  "Outcome",
] as const;
const labels = ["observation", "context", "decision", "outcome"] as const;
const zones: Record<Scenario, string> = {
  nitrogen: "M175 112 L313 72 L358 171 L221 208 Z",
  water: "M282 235 L418 195 L463 300 L340 355 Z",
  disease: "M132 233 L221 208 L281 315 L194 353 Z",
};

export function DecisionExperience() {
  const t = useTranslations();
  const [scenario, setScenario] = useState<Scenario>("nitrogen");
  const [recorded, setRecorded] = useState(false);
  const reduce = useReducedMotion();
  const mapId = useId().replace(/:/g, "");
  const panelId = useId();
  return (
    <section id="intelligence" className="intro-section decision-section">
      <div className="intro-container">
        <Reveal>
          <div className="intro-section-header">
            <div>
              <p className="tech-label">{t("introduction.demoLabel")}</p>
              <h2 className="intro-heading">{t("introduction.demoTitle")}</h2>
            </div>
            <p className="intro-body">{t("introduction.demoBody")}</p>
          </div>
        </Reveal>
        <div className="decision-console">
          <div className="console-top">
            <GrowLogo inverted href={null} size="md" />
            <span className="console-sample">
              <span className="status-dot" />
              {t("introduction.sample")}
            </span>
          </div>
          <div
            className="scenario-selector"
            role="group"
            aria-label={t("introduction.scenarioLabel")}
          >
            {scenarios.map((value, index) => (
              <button
                key={value}
                type="button"
                aria-pressed={scenario === value}
                aria-controls={panelId}
                onClick={() => {
                  setScenario(value);
                  setRecorded(false);
                }}
              >
                <span className="scenario-number">0{index + 1}</span>
                {t(`introduction.${value}`)}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <div className="console-main" id={panelId}>
            <div className="simulation-map">
              <div className="map-heading">
                <span>{t("fields.items.field-14.name")}</span>
                <span>{t("fields.crops.winterWheat")}</span>
              </div>
              <svg
                viewBox="0 0 580 420"
                role="img"
                aria-label={t("productExperience.mapAlt", {
                  name: t("fields.items.field-14.name"),
                })}
              >
                <defs>
                  <pattern
                    id={`rows-${mapId}`}
                    width="10"
                    height="10"
                    patternTransform="rotate(-22)"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 0V10"
                      stroke="#a8b7a0"
                      strokeWidth="1"
                      opacity=".22"
                    />
                  </pattern>
                  <pattern
                    id={`grid-${mapId}`}
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M40 0H0V40"
                      fill="none"
                      stroke="#fff"
                      strokeOpacity=".06"
                    />
                  </pattern>
                </defs>
                <rect width="580" height="420" fill={`url(#grid-${mapId})`} />
                <g fill="none" stroke="#7f8d7a" strokeWidth=".6" opacity=".2">
                  <path d="M-20 100L325 0L630 310M-20 120L320 22L610 340M-20 140L310 44L585 370M-20 160L300 66L560 400" />
                </g>
                <path
                  d="M105 128L331 60L488 307L205 385L91 242Z"
                  fill="#213a2b"
                  stroke="#b7c3ac"
                  strokeWidth="1.5"
                />
                <path
                  d="M105 128L331 60L488 307L205 385L91 242Z"
                  fill={`url(#rows-${mapId})`}
                />
                <path
                  d="M157 107L300 359M207 92L350 345M259 77L400 331"
                  stroke="#a8b7a0"
                  opacity=".14"
                />
                <motion.path
                  d={zones.nitrogen}
                  initial={false}
                  animate={{ d: zones[scenario] }}
                  transition={{
                    duration: reduce ? 0 : 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  fill="rgba(201,169,74,.28)"
                  stroke="#c9a94a"
                  strokeWidth="1.4"
                  strokeDasharray="5 3"
                />
                <g fill="#e6e5d7" stroke="#173c2b" strokeWidth="3">
                  {[
                    [207, 145],
                    [265, 124],
                    [280, 164],
                    [240, 170],
                    [306, 151],
                  ].map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r={recorded ? 5 : 3}
                      opacity={scenario === "nitrogen" ? 1 : 0.25}
                    />
                  ))}
                </g>
                <path
                  d="M500 65V35M494 43L500 35L506 43"
                  stroke="#a8b7a0"
                  fill="none"
                />
              </svg>
              <div className="map-status">
                <Crosshair size={17} />
                <span>
                  {recorded
                    ? t("introduction.reviewed")
                    : t("introduction.awaiting")}
                </span>
              </div>
              <div className="map-legend">
                <i />
                {t(`introduction.${scenario}`)}
              </div>
            </div>
            <div className="evidence-panel">
              <p className="tech-label">{t("introduction.inspect")}</p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.ol
                  key={scenario}
                  initial={{ opacity: 0, y: reduce ? 0 : 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.18 }}
                  className="evidence-trail"
                >
                  {evidenceSteps.map((step, index) => (
                    <li key={step}>
                      <span className="evidence-index">0{index + 1}</span>
                      <div>
                        <h3>{t(`introduction.${labels[index]}`)}</h3>
                        <p>{t(`introduction.${scenario}${step}`)}</p>
                      </div>
                    </li>
                  ))}
                </motion.ol>
              </AnimatePresence>
              <button
                className="record-button"
                type="button"
                disabled={recorded}
                onClick={() => setRecorded(true)}
              >
                {recorded ? <Check size={16} /> : <ArrowUpRight size={16} />}
                {t(recorded ? "introduction.reviewed" : "introduction.record")}
              </button>
              <div className="record-status" aria-live="polite">
                {recorded && (
                  <>
                    <p>{t("introduction.recorded")}</p>
                    <button type="button" onClick={() => setRecorded(false)}>
                      <RotateCcw size={13} />
                      {t("introduction.reset")}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
