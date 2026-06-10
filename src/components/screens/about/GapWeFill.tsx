import {
  elderOpsStandardText,
  gapPillarsData,
  gapText,
} from "@/contents/screens/about";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";

/** "The Gap We Exist to Fill" — strategy / execution / accountability. */
const GapWeFill = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="02"
          eyebrow="The Gap"
          title={gapText.title}
          lede={
            <>
              {gapText.subtextLineOne}
              <br />
              {gapText.subtextLineTwo}
            </>
          }
        />

        <Reveal className="-mt-6 mb-12 md:-mt-10 md:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-three">
            Most providers solve one —{" "}
            <span className="text-success">ElderOps delivers all three</span>
          </p>
        </Reveal>

        <div className="grid gap-px border border-primary/10 bg-primary/10 lg:grid-cols-3">
          {gapPillarsData.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.08}
              className="group flex flex-col bg-bg-cream p-8 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-success">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl leading-snug tracking-[-0.01em] text-primary">
                {pillar.title}
              </h3>
              <p className="mt-4 font-display text-[1.02rem] italic leading-[1.55] text-success">
                {pillar.lead}
              </p>
              <p className="mt-4 flex-1 text-sm leading-[1.8] text-accent-one">
                {pillar.description}
              </p>

              <div className="mt-8 border-t border-primary/10 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-three">
                  Key Focus Areas
                </p>
                <ul className="mt-3.5 space-y-2">
                  {pillar.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex gap-2.5 text-[13px] leading-[1.6] text-accent-one"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.5em] size-1 shrink-0 rotate-45 bg-success"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The synthesis statement */}
        <Reveal className="flex flex-col items-center py-16 text-center md:py-24">
          <span aria-hidden="true" className="mb-9 h-12 w-px bg-success" />
          <p className="max-w-3xl text-balance font-display text-[clamp(1.6rem,3.4vw,2.5rem)] italic leading-[1.3] tracking-[-0.01em] text-primary">
            {gapText.statement}
          </p>
        </Reveal>

        {/* The ElderOps Standard */}
        <Reveal>
          <div className="grain relative overflow-hidden bg-primary p-9 md:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_100%_0%,#074527_0%,transparent_60%)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
              <div>
                <p className="eyebrow text-border-light">The Synthesis</p>
                <h3 className="mt-6 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15] tracking-[-0.01em] text-bg-cream">
                  {elderOpsStandardText.title}
                </h3>
                <div className="mt-6 space-y-5">
                  {elderOpsStandardText.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="max-w-2xl text-[15px] leading-[1.85] text-accent-four"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border border-bg-cream/15 bg-bg-cream/[0.04] p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-border-light">
                  {elderOpsStandardText.gainsLabel}
                </p>
                <ul className="mt-6">
                  {elderOpsStandardText.gains.map((gain) => (
                    <li
                      key={gain}
                      className="flex items-center gap-3 border-b border-bg-cream/10 py-3.5 text-sm text-bg-light/85 last:border-b-0"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1 shrink-0 rotate-45 bg-success"
                      />
                      {gain}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GapWeFill;
