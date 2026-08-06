import type { ReactNode } from "react";
import Reveal from "./reveal";
import { cn } from "@/lib/util";

/**
 * Full-bleed photographic statement section (the McKinsey/BCG X moment):
 * a viewport-wide documentary image under a near-black scrim, with a
 * statement seated low-left. Imagery must show people and work; never
 * empty architecture, never decoration.
 */
const FullBleed = ({
  image,
  imageSet,
  alt,
  objectPosition = "center",
  minHeightClass = "min-h-[72svh]",
  children,
}: {
  image: string;
  /** srcSet string of width variants; sizes is always the full viewport. */
  imageSet?: string;
  alt: string;
  objectPosition?: string;
  minHeightClass?: string;
  children: ReactNode;
}) => (
  <section
    className={cn(
      "relative flex flex-col justify-end overflow-hidden bg-nearblack",
      minHeightClass,
    )}
  >
    <img
      src={image}
      srcSet={imageSet}
      sizes={imageSet ? "100vw" : undefined}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 size-full object-cover"
      style={{ objectPosition }}
    />
    {/* Two scrims: a base bottom-up lift plus a lower-left pocket where the
        statement sits, so legibility never depends on the photograph. */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.92)_0%,rgb(8_23_18/0.34)_58%,rgb(8_23_18/0.38)_100%)]"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(100deg,rgb(8_23_18/0.82)_0%,rgb(8_23_18/0.42)_38%,transparent_68%)]"
    />
    <div className="container relative pb-14 pt-28 md:pb-20">
      <Reveal>{children}</Reveal>
    </div>
  </section>
);

export default FullBleed;
