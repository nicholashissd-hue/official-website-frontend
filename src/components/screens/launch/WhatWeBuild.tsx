import { buildText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import SystemMap from "./SystemMap";

/**
 * "What We Build" — a live system map (see SystemMap): a product core with the
 * four disciplines radiating out as an interconnected topology that pulses,
 * sweeps, and cycles through each discipline's capabilities.
 */
const WhatWeBuild = () => {
  return (
    <section className="grain relative overflow-hidden bg-pine">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_85%_0%,#02361b_0%,transparent_60%)]"
      />

      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="02"
          eyebrow="The Stack"
          title={buildText.title}
          lede={buildText.subtext}
        />

        <Reveal>
          <SystemMap />
        </Reveal>
      </div>
    </section>
  );
};

export default WhatWeBuild;
