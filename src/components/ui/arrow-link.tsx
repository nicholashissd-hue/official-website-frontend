import { Link } from "react-router";
import { cn } from "@/lib/util";
import type { ReactNode } from "react";

interface ArrowLinkProps {
  to: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
  onClick?: () => void;
}

/** Text link with a circled arrow that fills bright green on hover. */
const ArrowLink = ({ to, children, dark = false, className, onClick }: ArrowLinkProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-3 font-sans text-[15px] font-bold transition-colors duration-300",
        dark
          ? "text-border-light hover:text-bg-cream"
          : "text-primary hover:text-success",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-inset transition-all duration-300 group-hover:bg-success group-hover:text-deep group-hover:ring-success",
          dark ? "ring-bg-cream/30" : "ring-primary/20",
        )}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="size-3 transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path
            d="M1.5 8h12.5m0 0L9.2 3.2M14 8l-4.8 4.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
};

export default ArrowLink;
