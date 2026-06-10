import { cn } from "@/lib/util";
import type { ReactNode } from "react";
import Eyebrow from "./eyebrow";
import Reveal from "./reveal";

interface SectionHeadingProps {
  eyebrow: string;
  index?: string;
  title: ReactNode;
  lede?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
  /** Max width utility for the lede paragraph. */
  ledeWidth?: string;
}

/**
 * Standard editorial section opener: eyebrow, serif display title,
 * optional supporting paragraph. Keeps rhythm consistent site-wide.
 */
const SectionHeading = ({
  eyebrow,
  index,
  title,
  lede,
  dark = false,
  align = "left",
  className,
  ledeWidth = "max-w-2xl",
}: SectionHeadingProps) => {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "mb-14 md:mb-20",
        centered && "flex flex-col items-center text-center",
        className,
      )}
    >
      <Eyebrow index={index} dark={dark}>
        {eyebrow}
      </Eyebrow>

      <h2
        className={cn(
          "mt-6 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.06] tracking-[-0.015em] text-balance",
          dark ? "text-bg-cream" : "text-primary",
          centered ? "max-w-4xl" : "max-w-3xl",
        )}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={cn(
            "mt-6 text-[15px] leading-[1.8] md:text-base",
            dark ? "text-accent-four" : "text-accent-one",
            ledeWidth,
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
};

export default SectionHeading;
