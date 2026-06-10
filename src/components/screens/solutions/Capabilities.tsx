import { capabilitiesData, capabilitiesText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";
import PipelinePulse from "./PipelinePulse";

/**
 * "Technical Capability Across Your Entire Roadmap" — wide, airy cards:
 * two per row (the fifth spans full width), capability lists flow in
 * columns instead of tall stacks.
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
          {capabilitiesData.map((capability, index) => {
            const isWide = index === capabilitiesData.length - 1;

            return (
              <Reveal
                key={capability.id}
                delay={index * 0.06}
                className={cn(isWide && "lg:col-span-2")}
              >
                <Lift className="rounded-3xl bg-bg-cream/[0.04] p-9 ring-1 ring-bg-cream/10 hover:bg-bg-cream/[0.07] md:p-11">
                  <div
                    className={cn(
                      isWide &&
                        "lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14",
                    )}
                  >
                    <div>
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
                    </div>

                    <ul
                      className={cn(
                        "mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2",
                        isWide && "lg:mt-0 lg:grid-cols-1 xl:grid-cols-2",
                      )}
                    >
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
                  </div>
                </Lift>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
