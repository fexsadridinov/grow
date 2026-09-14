import Image from "next/image";
import { ArrowDown, ArrowUpRight, ScanLine } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function IntroductionHero() {
  const t = useTranslations();
  return (
    <section className="intro-hero" aria-labelledby="intro-title">
      <div className="intro-container">
        <div className="intro-kicker">
          <span className="status-dot" />
          {t("hero.eyebrow")}
          <span className="intro-status">{t("introduction.status")}</span>
        </div>
        <div className="intro-hero-copy">
          <h1 id="intro-title">{t("introduction.headline")}</h1>
          <div className="intro-hero-aside">
            <p className="intro-positioning">{t("introduction.subhead")}</p>
            <p className="intro-description">{t("hero.body")}</p>
            <Button href="/#early-access">
              {t("cta.requestAccess")}
              <ArrowUpRight size={17} className="ml-4 shrink-0" />
            </Button>
          </div>
        </div>
        <div className="landscape-frame">
          <Image
            src="/images/grow-landscape.webp"
            alt={t("introduction.imageAlt")}
            fill
            sizes="(max-width: 1440px) 94vw, 1320px"
            preload
            className="landscape-image"
          />
          <div className="landscape-shade" />
          <div className="landscape-top">
            <span className="landscape-pill">
              <ScanLine size={14} />
              {t("introduction.sample")}
            </span>
            <span className="landscape-coordinates" aria-hidden="true">
              49° 42′ N / 30° 12′ E
            </span>
          </div>
          <svg
            className="landscape-boundary"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M470 165 L720 105 L870 310 L565 400 Z"
              fill="rgba(175,205,140,.08)"
              stroke="rgba(243,241,234,.75)"
              strokeWidth="1.5"
              strokeDasharray="6 5"
            />
            <path
              d="M530 205 L660 175 L715 260 L577 308 Z"
              fill="rgba(201,169,74,.22)"
              stroke="rgba(223,201,137,.8)"
              strokeWidth="1"
            />
          </svg>
          <div className="field-pin">
            <span className="field-pin-dot" />
            <span>
              {t("fields.items.field-14.code")}
              <small>{t("introduction.awaiting")}</small>
            </span>
          </div>
          <div className="landscape-bottom">
            <div>
              <span className="tech-label">
                {t("fieldContext.centerLabel")}
              </span>
              <p>{t("introduction.readiness")}</p>
            </div>
            <a
              href="#system"
              className="round-arrow"
              aria-label={t("introduction.scroll")}
            >
              <ArrowDown size={22} />
            </a>
          </div>
        </div>
        <p className="landscape-caption">{t("introduction.imageNote")}</p>
        <Reveal>
          <div className="intro-principle">
            <p className="tech-label">{t("introduction.systemLabel")}</p>
            <h2>{t("introduction.principle")}</h2>
            <p>{t("introduction.principleBody")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
