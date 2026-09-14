import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";
import { GrowMark } from "@/components/brand/GrowMark";

export function HeritageStory() {
  const t = useTranslations("introduction");
  return (
    <section id="vision" className="heritage-story">
      <div className="intro-container heritage-layout">
        <div className="heritage-image">
          <Image
            src="/images/grow-landscape.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
          <div />
          <p>{t("heritageCaption")}</p>
        </div>
        <Reveal className="heritage-copy">
          <GrowMark className="heritage-mark" />
          <p className="tech-label">{t("heritageLabel")}</p>
          <h2 className="intro-heading">{t("heritageTitle")}</h2>
          <p>{t("heritageBody")}</p>
          <p className="heritage-end">{t("heritageEnd")}</p>
        </Reveal>
      </div>
    </section>
  );
}
