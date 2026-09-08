import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FieldMapMockup } from "@/components/product/FieldMapMockup";
import { featuredField } from "@/data/sampleFields";

export function Hero() {
  const t = useTranslations();

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-ink/8 pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32"
    >
      <div className="grid-paper pointer-events-none absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="max-w-xl">
            <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
            <h1 className="mt-6 max-w-[20ch] font-sans text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[4.25rem]">
              {t("hero.headline")}
            </h1>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-7 text-ink/70 sm:text-lg">
              {t("hero.body")}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/#early-access">{t("cta.requestAccess")}</Button>
              <Button href="/#system" variant="secondary">
                {t("cta.exploreSystem")}
              </Button>
            </div>
          </div>
          <FieldMapMockup field={featuredField} />
        </div>
      </div>
    </section>
  );
}
