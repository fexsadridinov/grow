import { GrowLogo, type GrowLogoProps } from "@/components/brand/GrowLogo";

type WordmarkProps = {
  className?: string;
  href?: string | null;
  inverted?: boolean;
  size?: GrowLogoProps["size"];
  animate?: boolean;
};

export function Wordmark({
  className,
  href = "/",
  inverted = false,
  size = "sm",
  animate = false,
}: WordmarkProps) {
  return (
    <GrowLogo
      variant="wordmark"
      href={href}
      inverted={inverted}
      size={size}
      animate={animate}
      className={className}
    />
  );
}
