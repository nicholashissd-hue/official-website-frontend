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
 * Standard section opener: chip label, Clash Display headline,
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
        "mb-12 md:mb-16",
        centered && "flex flex-col items-center text-center",
        className,
      )}
    >
      <Eyebrow index={index} dark={dark}>
        {eyebrow}
      </Eyebrow>

      <h2
        className={cn(
          "mt-6 font-display text-[clamp(2rem,4.2vw,3.3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance",
          dark ? "text-bg-cream" : "text-primary",
          centered ? "max-w-4xl" : "max-w-3xl",
        )}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={cn(
            "mt-5 text-[15px] leading-[1.75] md:text-[17px]",
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
