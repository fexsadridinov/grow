"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { RiskSeverity } from "@/data/sampleFields";

type RiskBadgeProps = {
  label: string;
  severity: RiskSeverity;
  className?: string;
  inverted?: boolean;
};

export function RiskBadge({
  label,
  severity,
  className,
  inverted = false,
}: RiskBadgeProps) {
  const t = useTranslations("fields");

  return (
    <span
      className={cn(
        "inline-flex max-w-full min-w-0 items-center gap-2 rounded-md border px-2.5 py-1 text-[12px] tracking-[-0.01em]",
        inverted && "text-paper",
        !inverted && "text-ink",
        severity === "high" &&
          (inverted
            ? "border-alert/40 bg-alert/20"
            : "border-alert/25 bg-alert/8"),
        severity === "moderate" &&
          (inverted
            ? "border-signal/40 bg-signal/20"
            : "border-signal/30 bg-signal/10"),
        severity === "low" &&
          (inverted
            ? "border-moss/35 bg-moss/15"
            : "border-olive/25 bg-moss/20"),
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rounded-full",
          severity === "high" && "bg-alert",
          severity === "moderate" && "bg-signal",
          severity === "low" && "bg-olive",
        )}
        aria-hidden="true"
      />
      <span className="min-w-0">{label}</span>
      <span className={cn("shrink-0", inverted ? "text-paper/50" : "text-ink/45")}>
        {t(`severity.${severity}`)}
      </span>
    </span>
  );
}
