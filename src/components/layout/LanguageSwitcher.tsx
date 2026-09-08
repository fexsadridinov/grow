"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { displayCodes, localeNames, routing, type Locale } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

const HASH_STORAGE_KEY = "fieldos-locale-hash";

function queryOptions(root: HTMLDivElement | null): HTMLButtonElement[] {
  if (!root) {
    return [];
  }
  return Array.from(root.querySelectorAll<HTMLButtonElement>('[role="option"]'));
}

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    const frame = window.requestAnimationFrame(() => {
      const options = queryOptions(rootRef.current);
      const current = options.find(
        (option) => option.getAttribute("aria-current") === "true",
      );
      (current ?? options[0])?.focus();
    });
    return () => {
      window.cancelAnimationFrame(frame);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function moveFocus(delta: number) {
    const options = queryOptions(rootRef.current);
    if (options.length === 0) {
      return;
    }
    const index = options.findIndex((option) => option === document.activeElement);
    const next = index < 0 ? 0 : (index + delta + options.length) % options.length;
    options[next]?.focus();
  }

  function onMenuKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      queryOptions(rootRef.current)[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      const options = queryOptions(rootRef.current);
      options[options.length - 1]?.focus();
    }
  }

  useEffect(() => {
    const hash = sessionStorage.getItem(HASH_STORAGE_KEY);
    if (hash) {
      sessionStorage.removeItem(HASH_STORAGE_KEY);
      window.location.hash = hash;
    }
  }, [locale]);

  function switchLocale(next: Locale) {
    const hash = window.location.hash;
    if (hash) {
      sessionStorage.setItem(HASH_STORAGE_KEY, hash);
    }
    router.replace(pathname, { locale: next });
    setOpen(false);
  }

  if (variant === "mobile") {
    return (
      <div className="mt-8">
        <p className="tech-label text-olive">{t("language")}</p>
        <ul className="mt-3 space-y-1" role="listbox" aria-label={t("language")}>
          {routing.locales.map((item) => {
            const current = item === locale;
            return (
              <li key={item}>
                <button
                  type="button"
                  role="option"
                  aria-selected={current}
                  aria-current={current ? "true" : undefined}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-[15px]",
                    current ? "bg-forest text-paper" : "hover:bg-paper",
                  )}
                  onClick={() => switchLocale(item)}
                >
                  <span>{localeNames[item]}</span>
                  <span className="font-mono text-[11px] tracking-[0.12em]">
                    {displayCodes[item]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1 rounded-md border border-ink/10 px-2.5 text-[13px] tracking-[-0.01em] text-ink/80 transition-colors hover:border-ink/25 hover:text-ink"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={menuId}
        aria-label={open ? t("closeLanguageMenu") : t("openLanguageMenu")}
        ref={triggerRef}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <span className="font-medium">{displayCodes[locale]}</span>
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.ul
            id={menuId}
            role="listbox"
            aria-label={t("language")}
            tabIndex={-1}
            onKeyDown={onMenuKeyDown}
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 z-50 mt-2 min-w-[220px] rounded-lg border border-ink/10 bg-paper py-1.5 shadow-[0_8px_24px_rgb(19_32_25/0.08)]"
          >
            {routing.locales.map((item) => {
              const current = item === locale;
              return (
                <li key={item}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={current}
                    aria-current={current ? "true" : undefined}
                    className={cn(
                      "flex w-full items-center justify-between gap-6 px-3 py-2.5 text-left text-[14px] transition-colors",
                      current ? "bg-canvas text-ink" : "text-ink/75 hover:bg-canvas hover:text-ink",
                    )}
                    onMouseDown={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      switchLocale(item);
                    }}
                    onClick={() => switchLocale(item)}
                  >
                    <span className="inline-flex items-center gap-2">
                      {current ? <Check size={14} aria-hidden="true" /> : <span className="w-3.5" />}
                      {localeNames[item]}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.12em] text-olive">
                      {displayCodes[item]}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
