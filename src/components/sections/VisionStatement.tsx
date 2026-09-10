import { useTranslations } from "next-intl";
import { GrowMark } from "@/components/brand/GrowMark";

export function VisionStatement() {
  const t = useTranslations("vision");

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-night py-28 text-paper sm:py-36 lg:py-44"
    >
      <div className="grid-night pointer-events-none absolute inset-0 opacity-80" />
      <svg
        className="contour-drift pointer-events-none absolute -left-10 top-0 h-[140%] w-[140%] opacity-35"
        viewBox="0 0 800 600"
        aria-hidden="true"
      >
        <path
          d="M-20 120 C80 80 160 160 260 140 C360 120 420 40 540 70 C660 100 740 40 860 80"
          fill="none"
          stroke="rgba(168,183,160,0.35)"
          strokeWidth="1"
        />
        <path
          d="M-40 220 C60 180 180 260 300 230 C420 200 500 140 620 180 C740 220 820 150 900 190"
          fill="none"
          stroke="rgba(201,169,74,0.22)"
          strokeWidth="1"
        />
        <path
          d="M-30 340 C90 300 190 380 310 350 C430 320 530 250 650 300 C770 350 840 280 920 320"
          fill="none"
          stroke="rgba(250,250,247,0.16)"
          strokeWidth="1"
        />
        <path
          d="M-50 460 C70 410 210 500 340 460 C470 420 560 360 690 410 C800 450 860 400 940 430"
          fill="none"
          stroke="rgba(168,183,160,0.22)"
          strokeWidth="1"
        />
      </svg>
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[820px]">
          <p className="flex items-center gap-2.5 tech-label text-moss">
            <GrowMark className="h-3.5 w-[15px] text-growth" simplified />
            {t("eyebrow")}
          </p>
          <h2 className="mt-6 font-sans text-[2.1rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
            {t("title")}
          </h2>
          <div className="mt-10 max-w-xl space-y-4 text-lg leading-8 text-paper/70">
            <p>{t("history")}</p>
            <p>{t("intervention")}</p>
            <p>{t("evidence")}</p>
          </div>
          <p className="mt-10 max-w-2xl font-sans text-2xl font-medium leading-snug text-paper/90 sm:text-[1.9rem]">
            {t("body")}
          </p>
        </div>
      </div>
    </section>
  );
}
