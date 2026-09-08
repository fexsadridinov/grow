import { brand } from "@/config/brand";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type WordmarkProps = {
  className?: string;
  href?: string;
  inverted?: boolean;
};

export function Wordmark({ className, href = "/", inverted = false }: WordmarkProps) {
  const mark = (
    <span
      className={cn(
        "inline-flex items-baseline font-sans text-[13px] font-medium tracking-[0.22em]",
        inverted ? "text-paper" : "text-ink",
        className,
      )}
    >
      {brand.wordmarkPrimary}
      <span className={cn("mx-[0.4em]", inverted ? "text-moss/80" : "text-olive")}>
        /
      </span>
      {brand.wordmarkSecondary}
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link href={href} className="inline-flex rounded-sm" aria-label={brand.productName}>
      {mark}
    </Link>
  );
}
