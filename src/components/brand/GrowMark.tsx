import { cn } from "@/lib/utils";
import {
  GROW_MARK_INNER,
  GROW_MARK_OUTER_DASH,
  GROW_MARK_OUTER_ELLIPSE,
  GROW_MARK_VIEWBOX,
} from "@/components/brand/growMarkGeometry";

type GrowMarkProps = {
  className?: string;
  title?: string;
  simplified?: boolean;
};

export function GrowMark({ className, title, simplified = false }: GrowMarkProps) {
  return (
    <svg
      viewBox={GROW_MARK_VIEWBOX}
      width="32"
      height="32"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn("block overflow-visible", className)}
    >
      {title ? <title>{title}</title> : null}
      <ellipse
        cx={GROW_MARK_OUTER_ELLIPSE.cx}
        cy={GROW_MARK_OUTER_ELLIPSE.cy}
        rx={GROW_MARK_OUTER_ELLIPSE.rx}
        ry={GROW_MARK_OUTER_ELLIPSE.ry}
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeDasharray={simplified ? undefined : GROW_MARK_OUTER_DASH}
      />
      <ellipse
        cx={GROW_MARK_INNER.cx}
        cy={GROW_MARK_INNER.cy}
        rx={GROW_MARK_INNER.rx}
        ry={GROW_MARK_INNER.ry}
        stroke="currentColor"
        strokeWidth="1.15"
        opacity="0.62"
      />
    </svg>
  );
}
