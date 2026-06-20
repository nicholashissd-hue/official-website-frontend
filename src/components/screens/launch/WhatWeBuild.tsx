import { buildText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import FullStackDiagram from "./FullStackDiagram";

/**
 * "What We Build" — a living full-stack system diagram (see FullStackDiagram):
 * layers assemble out of depth, data cascades through the stack, and hovering a
 * layer lifts it out of the tower. Communicates "we build the whole stack."
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
          align="center"
        />

        <Reveal>
          <FullStackDiagram />
        </Reveal>
      </div>
    </section>
  );
};

export default WhatWeBuild;
