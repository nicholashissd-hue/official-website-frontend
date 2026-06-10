import { Link } from "react-router";
import { cn } from "@/lib/util";
import type { ReactNode } from "react";
import { ButtonArrow } from "./button";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  onClick?: () => void;
}

/** Inline editorial link: mono label, growing underline, nudging arrow. */
const ArrowLink = ({ to, children, dark = false, className, onClick }: ArrowLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "group/btn inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-300",
        dark
          ? "text-border-light hover:text-bg-cream"
          : "text-primary hover:text-success",
        className,
      )}
    >
      <span className="u-line pb-1">{children}</span>
      <ButtonArrow />
    </Link>
  );
};

export default ArrowLink;
