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

/** Plain mono section label with a status dot: `• 01 LABEL` (no pill). */
const Eyebrow = ({ children, index, dark = false, className }: EyebrowProps) => {
  return (
    <p
      className={cn(
        "eyebrow",
        dark ? "text-border-light" : "text-success",
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
