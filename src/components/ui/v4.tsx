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
      onDark ? "text-bg-cream/70" : "text-ink/70",
      className,
    )}
  >
    {children}
  </p>
);

/**
 * The primary action, defined once. It was hand-copied into six files, and
 * its entire response to being touched was a one-pixel lift: no press, and
 * (Tailwind's preflight) not even a pointer cursor. It now answers on hover
 * with a lift and a brighter fill, and on press by settling back and
 * compressing slightly. A fill-tone shift rather than a shadow, because the
 * site ships no shadows.
 */
export const signalButtonClass =
  "inline-flex items-center justify-center rounded-[14px] bg-signal px-7 py-4 text-base font-bold text-nearblack transition-[transform,filter] duration-300 hover:-translate-y-px hover:brightness-[1.06] active:translate-y-0 active:scale-[0.985] active:duration-75 disabled:opacity-60";

/** The primary action. Label is always "Get in touch" on buyer pages. */
export const SignalButton = ({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) => (
  <Link to={to} className={cn(signalButtonClass, className)}>
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
