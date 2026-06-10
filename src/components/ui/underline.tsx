import { motion } from "framer-motion";
import { cn } from "@/lib/util";
import type { ReactNode } from "react";
import { EASE } from "./reveal";

interface UnderlinedProps {
  children: ReactNode;
  /** Seconds before the stroke starts drawing. */
  delay?: number;
  className?: string;
  strokeClassName?: string;
}

/** Wraps a key word with a hand-drawn green swash that draws itself in. */
const Underlined = ({
  children,
  delay = 0.8,
  className,
  strokeClassName = "text-success",
}: UnderlinedProps) => {
  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      {children}
      <svg
        viewBox="0 0 220 14"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={cn(
          "absolute -bottom-[0.12em] left-0 h-[0.22em] w-full",
          strokeClassName,
        )}
      >
        <motion.path
          d="M4 10.5 C 60 3.5, 150 2.5, 216 8"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay }}
        />
      </svg>
    </span>
  );
};

export default Underlined;
