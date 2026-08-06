import type { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "@/lib/util";

/**
 * V4 primitives (approved 2026-08-05; refined 2026-08-06). One action color,
 * two button shapes. Radius belongs to buttons/chips only. Section context is
 * a quiet sentence-case kicker in the display family (the Apple lockup), never
 * a mono-caps eyebrow with a rule: mono is reserved for genuine data notes.
 */

/**
 * The "what you keep" line under a method step. One treatment everywhere the
 * method appears: a hairline above it and the sentence in ink, so it reads as
 * the payload of the step and the description above reads as the setup.
 *
 * Deliberately not a coloured rail. A green left bar on five paragraphs is a
 * chapter rail at paragraph scale, and it spends the one action colour on a
 * decorative rule.
 */
export const Keep = ({ children }: { children: ReactNode }) => (
  <p className="mt-5 max-w-xl border-t border-hairline pt-4 text-base font-semibold text-ink">
    {children}
  </p>
);

export const Kicker = ({
  children,
  onDark = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}) => (
  <p
    className={cn(
      "font-display text-base font-semibold tracking-[-0.01em]",
      onDark ? "text-bg-cream/60" : "text-ink/45",
      className,
    )}
  >
    {children}
  </p>
);

/** The primary action. Signal fill; label is always "Get in touch" on buyer pages. */
export const SignalButton = ({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) => (
  <Link
    to={to}
    className={cn(
      "inline-flex items-center justify-center rounded-[14px] bg-signal px-7 py-4 text-base font-bold text-nearblack transition-transform duration-300 hover:-translate-y-px",
      className,
    )}
  >
    {children}
  </Link>
);

/** Quiet underlined secondary action. */
export const GhostLink = ({
  to,
  onDark = false,
  children,
  className,
}: {
  to: string;
  onDark?: boolean;
  children: ReactNode;
  className?: string;
}) => (
  <Link
    to={to}
    className={cn(
      "inline-flex items-center gap-2 border-b pb-0.5 text-base font-semibold transition-colors duration-300",
      onDark
        ? "border-bg-cream/35 text-bg-cream/85 hover:text-bg-cream"
        : "border-hairline text-ink hover:text-primary",
      className,
    )}
  >
    {children}
  </Link>
);
