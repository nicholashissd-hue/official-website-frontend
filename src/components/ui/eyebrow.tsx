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

/** Mono, letter-spaced kicker with a leading hairline: `── 01 / LABEL` */
const Eyebrow = ({ children, index, dark = false, className }: EyebrowProps) => {
  return (
    <p
      className={cn(
        "eyebrow",
        dark ? "text-border-light" : "text-success",
        className,
      )}
    >
      {index && (
        <span className="opacity-70">
          {index}
          <span className="mx-2 opacity-60">/</span>
        </span>
      )}
      {children}
    </p>
  );
};

export default Eyebrow;
