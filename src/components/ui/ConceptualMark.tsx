"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type ConceptualMarkProps = {
  className?: string;
  children?: React.ReactNode;
  inverted?: boolean;
};

export function ConceptualMark({
  className,
  children,
  inverted = false,
}: ConceptualMarkProps) {
  const t = useTranslations("common");

  return (
    <p
      className={cn(
        "tech-label",
        inverted ? "text-paper/45" : "text-olive/80",
        className,
      )}
    >
      {children ?? t("conceptual")}
    </p>
  );
}
