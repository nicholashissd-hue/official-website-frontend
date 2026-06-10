import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Signature easing for the V2 design language — long, settled, confident. */
export const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps
  extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "animate" | "transition"> {
  children: ReactNode;
  /** Seconds to wait before the reveal begins. Use index * 0.08 for stagger. */
  delay?: number;
  duration?: number;
  /** Vertical travel in px. */
  y?: number;
  /** Animate immediately on mount instead of when scrolled into view. */
  immediate?: boolean;
  as?: "div" | "li" | "article" | "section" | "span";
}

const MOTION_TAGS = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
  span: motion.span,
};

/**
 * Scroll-triggered entrance used across the site: a quiet rise + fade
 * with a long settle. Replaces the legacy `Animated` wrapper.
 */
const Reveal = ({
  children,
  delay = 0,
  duration = 0.9,
  y = 28,
  immediate = false,
  as = "div",
  ...props
}: RevealProps) => {
  const Component = MOTION_TAGS[as] as typeof motion.div;

  const target = { opacity: 1, y: 0 };

  return (
    <Component
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: target }
        : {
            whileInView: target,
            viewport: { once: true, margin: "-72px" },
          })}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
