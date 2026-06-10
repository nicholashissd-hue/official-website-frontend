import { Link } from "react-router";
import { cn } from "@/lib/util";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "light" | "outline" | "outline-light";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Internal route — renders a react-router Link. */
  to?: string;
  /** External URL — renders an anchor. */
  href?: string;
  /** Render the trailing arrow that nudges on hover. */
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-primary text-bg-cream hover:bg-deep",
  light: "bg-bg-cream text-primary hover:bg-border-light",
  outline:
    "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-bg-cream",
  "outline-light":
    "border border-bg-cream/35 text-bg-cream hover:border-bg-cream hover:bg-bg-cream hover:text-primary",
};

export const ButtonArrow = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={cn(
      "size-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1",
      className,
    )}
  >
    <path
      d="M1.5 8h12.5m0 0L9.2 3.2M14 8l-4.8 4.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </svg>
);

/** Rectangular, consulting-grade button. Quiet at rest, decisive on hover. */
const Button = ({
  children,
  variant = "primary",
  to,
  href,
  withArrow = false,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  const classes = cn(
    "group/btn inline-flex h-12 cursor-pointer touch-manipulation items-center justify-center gap-3 whitespace-nowrap rounded-[2px] px-7 font-sans text-sm font-medium tracking-wide transition-all duration-300",
    VARIANTS[variant],
    rest.disabled && "pointer-events-none opacity-50",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ButtonArrow />}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={(event) => {
          event.currentTarget.blur();
          onClick?.();
        }}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={rest.type ?? "button"}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
