"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type FieldHealthScoreProps = {
  score: number;
  max?: number;
  size?: number;
  inverted?: boolean;
  className?: string;
};

export function FieldHealthScore({
  score,
  max = 100,
  size = 92,
  inverted = false,
  className,
}: FieldHealthScoreProps) {
  const t = useTranslations("productExperience");
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(score / max, 1);
  const offset = circumference - progress * circumference;

  useEffect(() => {
    let frame = requestAnimationFrame(() => {
      if (reduce) {
        setDisplay(score);
        return;
      }
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - t) ** 3;
        setDisplay(Math.round(score * eased));
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        }
      };
      frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [score, reduce]);

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 92 92" aria-hidden="true">
        <circle
          cx="46"
          cy="46"
          r={radius}
          fill="none"
          stroke={inverted ? "rgba(250,250,247,0.12)" : "rgba(19,32,25,0.1)"}
          strokeWidth="4"
        />
        <circle
          cx="46"
          cy="46"
          r={radius}
          fill="none"
          stroke="var(--signal)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 46 46)"
          style={{
            transition: reduce ? undefined : "stroke-dashoffset 1s ease",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          suppressHydrationWarning
          className={cn(
            "font-mono text-[22px] leading-none tracking-tight",
            inverted ? "text-paper" : "text-ink",
          )}
        >
          {display}
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[9px] tracking-[0.16em] uppercase",
            inverted ? "text-paper/45" : "text-olive",
          )}
        >
          / {max}
        </span>
      </div>
      <span className="sr-only">
        {t("fieldHealthScore", { score, max })}
      </span>
    </div>
  );
}
