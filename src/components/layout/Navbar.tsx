"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { primaryNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-ink/10 bg-canvas/92 backdrop-blur-md"
          : "border-b border-transparent bg-canvas/40",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8 lg:px-12">
        <Wordmark />

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-x-4 gap-y-1 xl:flex xl:gap-x-6"
          aria-label={t("common.primaryNav")}
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13.5px] tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <Button href="/#early-access" className="h-10 px-4 text-[13.5px]">
            {t("cta.requestAccess")}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">
            {open ? t("common.closeMenu") : t("common.openMenu")}
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto bg-canvas px-6 py-8 xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label={t("common.mobileNav")}>
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-ink/8 py-4 text-lg text-ink"
                onClick={() => setOpen(false)}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <Button href="/#early-access" onClick={() => setOpen(false)}>
              {t("cta.requestAccess")}
            </Button>
            <Button
              href="/#system"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              {t("cta.exploreSystem")}
            </Button>
            <LanguageSwitcher variant="mobile" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
