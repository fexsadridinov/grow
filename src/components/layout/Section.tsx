import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-24 sm:py-28 lg:py-36",
        dark ? "bg-night text-paper" : "bg-canvas text-ink",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12",
          containerClassName,
        )}
      >
        <div className="mx-auto w-full max-w-[1280px]">{children}</div>
      </div>
    </section>
  );
}
