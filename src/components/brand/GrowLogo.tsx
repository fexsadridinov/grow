"use client";

import { brand } from "@/config/brand";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import {
  GROW_MARK_INNER,
  GROW_MARK_OUTER_DASH,
  GROW_MARK_OUTER_ELLIPSE,
  GROW_MARK_VIEWBOX,
} from "@/components/brand/growMarkGeometry";

export type GrowLogoProps = {
  variant?: "wordmark" | "mark";
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
  href?: string | null;
  className?: string;
  animate?: boolean;
};

const sizeClass = {
  sm: "text-[15px] sm:text-[16px]",
  md: "text-[22px]",
  lg: "text-[1.85rem] sm:text-[2.15rem]",
} as const;

function BrandO({
  animate,
  className,
}: {
  animate: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox={GROW_MARK_VIEWBOX}
      width="32"
      height="32"
      fill="none"
      aria-hidden="true"
      className={cn("block shrink-0 overflow-visible", className)}
    >
      <ellipse
        cx={GROW_MARK_OUTER_ELLIPSE.cx}
        cy={GROW_MARK_OUTER_ELLIPSE.cy}
        rx={GROW_MARK_OUTER_ELLIPSE.rx}
        ry={GROW_MARK_OUTER_ELLIPSE.ry}
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeDasharray={GROW_MARK_OUTER_DASH}
        className={animate ? "grow-mark-draw" : undefined}
      />
      <ellipse
        cx={GROW_MARK_INNER.cx}
        cy={GROW_MARK_INNER.cy}
        rx={GROW_MARK_INNER.rx}
        ry={GROW_MARK_INNER.ry}
        stroke="currentColor"
        strokeWidth="1.15"
        className={cn("text-growth", animate ? "grow-mark-inner" : "opacity-[0.88]")}
      />
    </svg>
  );
}

export function GrowLogo({
  variant = "wordmark",
  size = "sm",
  inverted = false,
  href = "/",
  className,
  animate = false,
}: GrowLogoProps) {
  const tone = inverted ? "text-paper" : "text-ink";

  const mark = (
    <span
      className={cn(
        "inline-flex items-center font-sans font-semibold leading-none tracking-[-0.04em]",
        tone,
        variant === "wordmark" ? sizeClass[size] : null,
        className,
      )}
    >
      {variant === "mark" ? (
        <BrandO
          animate={animate}
          className={
            size === "lg" ? "h-8 w-8" : size === "md" ? "h-6 w-6" : "h-4 w-[18px]"
          }
        />
      ) : (
        <>
          <span>GR</span>
          <BrandO
            animate={animate}
            className="mx-[0.04em] h-[0.78em] w-[0.86em]"
          />
          <span>W</span>
        </>
      )}
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link
      href={href}
      className="inline-flex rounded-sm"
      aria-label={brand.productName}
    >
      {mark}
    </Link>
  );
}
