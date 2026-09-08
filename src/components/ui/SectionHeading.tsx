import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "tech-label mb-5",
            dark ? "text-moss" : "text-olive",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-sans text-[2rem] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {children ? (
        <div
          className={cn(
            "mt-5 max-w-2xl text-[17px] leading-7 sm:text-lg",
            dark ? "text-paper/70" : "text-ink/70",
            align === "center" && "mx-auto",
          )}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
