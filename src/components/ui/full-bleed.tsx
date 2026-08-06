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
  alt,
  objectPosition = "center",
  minHeightClass = "min-h-[72svh]",
  children,
}: {
  image: string;
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
      alt={alt}
      loading="lazy"
      className="absolute inset-0 size-full object-cover"
      style={{ objectPosition }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-[linear-gradient(to_top,rgb(8_23_18/0.88)_0%,rgb(8_23_18/0.18)_55%,rgb(8_23_18/0.32)_100%)]"
    />
    <div className="container relative pb-14 pt-28 md:pb-20">
      <Reveal>{children}</Reveal>
    </div>
  </section>
);

export default FullBleed;
