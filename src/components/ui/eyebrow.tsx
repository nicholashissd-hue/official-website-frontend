import { cn } from "@/lib/util";
import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** Optional index shown before the label, e.g. "01". */
  index?: string;
  /** Set when rendered on a dark (primary green) surface. */
  dark?: boolean;
  className?: string;
}

/** Pill label chip with a status dot: `(• 01 LABEL)` */
const Eyebrow = ({ children, index, dark = false, className }: EyebrowProps) => {
  return (
    <p
      className={cn(
        "eyebrow",
        dark
          ? "bg-bg-cream/10 text-border-light ring-1 ring-inset ring-bg-cream/15"
          : "bg-primary/[0.07] text-primary ring-1 ring-inset ring-primary/10",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 shrink-0 rounded-full bg-success"
      />
      {index && <span className="opacity-60">{index}</span>}
      {children}
    </p>
  );
};

export default Eyebrow;
