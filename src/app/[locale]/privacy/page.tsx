import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { brand } from "@/config/brand";
import { localeAlternates } from "@/i18n/metadata";
import { resolveLocale } from "@/i18n/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    openGraph: {
      title: t("privacyTitle"),
      description: t("privacyDescription"),
    },
    twitter: {
      title: t("privacyTitle"),
      description: t("privacyDescription"),
    },
    alternates: localeAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const locale = await resolveLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("legalPages");

  return (
    <main id="main" className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12">
      <article className="mx-auto max-w-2xl">
        <p className="tech-label text-olive">{t("privacyTitle")}</p>
        <h1 className="mt-4 text-4xl tracking-[-0.04em]">{t("privacyTitle")}</h1>
        <p className="mt-6 text-ink/70">{t("privacyP1")}</p>
        <p className="mt-4 text-ink/70">
          {t("privacyP2", { email: brand.contactEmail })}
        </p>
      </article>
    </main>
  );
}
