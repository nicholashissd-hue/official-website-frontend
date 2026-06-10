import {
  criticalInitiativesText,
  vettingPillarsData,
  vettingText,
} from "@/contents/screens/talents";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";

/** "Why Teams Trust ElderOps Engineers" — vetting pillars + critical-initiatives card. */
const VettingPillars = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="03"
          eyebrow="Vetting"
          title={vettingText.title}
          lede={vettingText.subtext}
        />

        <div className="grid border-l border-t border-primary/10 sm:grid-cols-2">
          {vettingPillarsData.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.07}
              className="group border-b border-r border-primary/10 p-8 transition-colors duration-500 hover:bg-white md:p-12"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-success">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-display text-xl leading-snug tracking-[-0.01em] text-primary md:text-2xl">
                {pillar.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-[1.8] text-accent-one">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="grain relative mt-6 grid items-center gap-8 overflow-hidden bg-primary p-9 md:grid-cols-[1fr_auto] md:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_100%_0%,#074527_0%,transparent_60%)]"
            />
            <div className="relative">
              <p className="eyebrow text-border-light">Selection Standard</p>
              <h3 className="mt-5 font-display text-2xl leading-snug tracking-[-0.01em] text-bg-cream md:text-3xl">
                {criticalInitiativesText.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-accent-four">
                {criticalInitiativesText.description}
              </p>
            </div>
            <Button to="/contact-us" variant="light" withArrow className="relative">
              Request a Shortlist
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VettingPillars;
