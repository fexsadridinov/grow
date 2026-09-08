import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function Eyebrow({ children, className, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={cn(
        "tech-label",
        tone === "light" ? "text-olive" : "text-moss",
        className,
      )}
    >
      {children}
    </p>
  );
}
