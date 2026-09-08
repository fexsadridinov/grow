import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest text-paper hover:bg-ink",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/35 hover:bg-paper/60",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  onDark: "bg-paper text-forest hover:bg-white",
  onDarkGhost:
    "bg-transparent text-paper border border-paper/20 hover:border-paper/45 hover:bg-paper/5",
};

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLink(props: ButtonProps): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 min-w-0 items-center justify-center rounded-lg px-5 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    variants[props.variant ?? "primary"],
    props.className,
  );

  if (isLink(props)) {
    if (props.href.startsWith("/") || props.href.startsWith("#")) {
      return (
        <Link href={props.href} className={classes} onClick={props.onClick}>
          {props.children}
        </Link>
      );
    }
    return (
      <a href={props.href} className={classes} onClick={props.onClick}>
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
