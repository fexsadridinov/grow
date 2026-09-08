import { useTranslations } from "next-intl";
import { footerNav, legalNav } from "@/config/navigation";
import { Wordmark } from "@/components/ui/Wordmark";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-panel">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Wordmark href="/" />
            <p className="mt-4 text-[15px] leading-6 text-ink/65">
              {t("footer.supportingLine")}
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <p className="tech-label mb-4 text-olive">{t("common.navigate")}</p>
              <ul className="space-y-2.5">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-ink/75 transition-colors hover:text-ink"
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="tech-label mb-4 text-olive">{t("common.legal")}</p>
              <ul className="space-y-2.5">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[15px] text-ink/75 transition-colors hover:text-ink"
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1280px] flex-col gap-2 border-t border-ink/10 pt-6 text-[13px] text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("common.copyright", { year })}</p>
          <p>{t("common.conceptNote")}</p>
        </div>
      </div>
    </footer>
  );
}
