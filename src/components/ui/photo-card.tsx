import { cn } from "@/lib/util";
import type { ReactNode } from "react";

interface PhotoCardProps {
  src: string;
  alt: string;
  /** Mono caption pill anchored bottom-left over the image. */
  caption?: string;
  /** Floating lime chip anchored top-right (gently bobbing). */
  chip?: string;
  className?: string;
  imgClassName?: string;
  children?: ReactNode;
}

/** Rounded photo card with optional caption pill and floating chip. */
const PhotoCard = ({
  src,
  alt,
  caption,
  chip,
  className,
  imgClassName,
  children,
}: PhotoCardProps) => {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("size-full object-cover", imgClassName)}
      />

      {/* Subtle brand grade so photography sits inside the palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-primary/15 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10"
      />

      {chip && (
        <span className="animate-float absolute right-4 top-4 rounded-full bg-border-light px-3.5 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-primary shadow-lg">
          {chip}
        </span>
      )}

      {caption && (
        <span className="absolute bottom-4 left-4 rounded-full bg-deep/65 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bg-cream backdrop-blur-sm">
          {caption}
        </span>
      )}

      {children}
    </div>
  );
};

export default PhotoCard;
