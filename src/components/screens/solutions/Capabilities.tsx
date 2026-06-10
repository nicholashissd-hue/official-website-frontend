import {
  bespokeText,
  capabilitiesData,
  capabilitiesText,
} from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Button from "@/components/ui/button";
import Reveal, { Lift } from "@/components/ui/reveal";
import PipelinePulse from "./PipelinePulse";

/**
 * "Technical Capability Across Your Entire Roadmap" — a balanced 2×3 grid:
 * five capability cards plus a bespoke-engagement inquiry card.
 */
const Capabilities = () => {
  return (
    <section className="grain relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_10%_0%,#074527_0%,transparent_55%)]"
      />

      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="02"
          eyebrow="Capabilities"
          title={capabilitiesText.title}
          lede={capabilitiesText.subtext}
        />

        <Reveal className="mb-14">
          <PipelinePulse />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {capabilitiesData.map((capability, index) => (
            <Reveal key={capability.id} delay={index * 0.06}>
              <Lift className="rounded-3xl bg-bg-cream/[0.04] p-9 ring-1 ring-bg-cream/10 hover:bg-bg-cream/[0.07] md:p-11">
                <div className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-success font-display text-sm font-semibold text-deep">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-bg-cream md:text-2xl">
                    {capability.title}
                  </h3>
                </div>

                <p className="mt-7 font-display text-[1.05rem] font-medium leading-[1.6] text-border-light">
                  {capability.value}
                </p>
                <p className="mt-4 max-w-xl text-[15px] leading-[1.85] text-accent-four">
                  {capability.description}
                </p>

                <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {capability.capabilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm leading-[1.6] text-bg-light/80"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 shrink-0 rounded-full bg-success"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Lift>
            </Reveal>
          ))}

          {/* Bespoke engagement — solid brand green, deep text, dark pill */}
          <Reveal delay={capabilitiesData.length * 0.06}>
            <Lift className="flex flex-col rounded-3xl bg-success p-9 hover:shadow-[0_32px_70px_rgba(1,20,10,0.4)] md:p-11">
              <p className="eyebrow text-deep/80">
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-deep"
                />
                {bespokeText.eyebrow}
              </p>

              <h3 className="mt-6 font-display text-[1.6rem] font-semibold leading-snug tracking-[-0.01em] text-deep md:text-3xl">
                {bespokeText.title}
              </h3>
              <p className="mt-4 max-w-lg flex-1 text-[15px] font-medium leading-[1.85] text-deep/85">
                {bespokeText.description}
              </p>

              <div className="mt-9">
                <Button
                  to="/contact-us"
                  withArrow
                  className="bg-primary text-bg-cream hover:bg-deep"
                >
                  {bespokeText.buttonText}
                </Button>
              </div>
            </Lift>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
