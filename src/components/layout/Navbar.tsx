"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { primaryNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/ui/Wordmark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const XL_BREAKPOINT = 1280;

function lockPageScroll() {
  const scrollY = window.scrollY;
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  return scrollY;
}

function unlockPageScroll(scrollY: number) {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
}

export function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);
  const menuTitleId = useId();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }
    scrollYRef.current = lockPageScroll();
    const frame = window.requestAnimationFrame(() => {
      closeRef.current?.focus();
    });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth >= XL_BREAKPOINT) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      unlockPageScroll(scrollYRef.current);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-ink/10 bg-canvas/92 backdrop-blur-md"
          : "border-b border-transparent bg-canvas/40",
      )}
    >
      <div className="pt-[env(safe-area-inset-top)]">
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
              className="whitespace-nowrap text-[13.5px] font-medium tracking-[-0.01em] text-ink/70 transition-colors hover:text-ink"
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
          ref={hamburgerRef}
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
      </div>
    </header>
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-canvas xl:hidden"
          style={{ height: "100dvh", minHeight: "100dvh" }}
        >
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-ink/10 px-5 pt-[env(safe-area-inset-top)] sm:px-8">
            <span id={menuTitleId} className="sr-only">
              {t("common.mobileNav")}
            </span>
            <div className="flex h-16 w-full items-center justify-between sm:h-[4.25rem]">
              <Wordmark />
              <button
                ref={closeRef}
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink/10"
                aria-expanded={true}
                aria-controls="mobile-nav"
                onClick={closeMenu}
              >
                <X size={18} />
                <span className="sr-only">{t("common.closeMenu")}</span>
              </button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8">
            <nav className="flex flex-col gap-1 pt-4" aria-label={t("common.mobileNav")}>
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-ink/8 py-4 text-lg font-medium text-ink"
                  onClick={closeMenu}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher variant="mobile" onAfterSelect={closeMenu} />
            <div className="mt-8 flex flex-col gap-3 pb-4">
              <Button href="/#early-access" onClick={closeMenu}>
                {t("cta.requestAccess")}
              </Button>
              <Button href="/#system" variant="secondary" onClick={closeMenu}>
                {t("cta.exploreSystem")}
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
    </>
  );
}
