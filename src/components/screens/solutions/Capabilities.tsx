import { capabilitiesData, capabilitiesText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";
import PipelinePulse from "./PipelinePulse";

/** "Technical Capability Across Your Entire Roadmap" — dark capability atlas. */
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

        <Reveal className="mb-10 md:mb-12">
          <PipelinePulse />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {capabilitiesData.map((capability, index) => (
            <Reveal
              key={capability.id}
              delay={index * 0.06}
              className={cn(
                index < 2 ? "lg:col-span-3" : "lg:col-span-2",
                index === 4 && "max-lg:md:col-span-2",
              )}
            >
              <Lift className="group rounded-3xl bg-bg-cream/[0.05] p-8 ring-1 ring-bg-cream/12 hover:bg-bg-cream/[0.08] md:p-10">
              <span className="grid size-10 place-items-center rounded-full bg-success font-display text-base font-semibold text-deep">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-bg-cream md:text-2xl">
                {capability.title}
              </h3>
              <p className="mt-4 font-display text-[1.05rem] font-medium leading-[1.55] text-border-light">
                {capability.value}
              </p>
              <p className="mt-4 text-sm leading-[1.8] text-accent-four">
                {capability.description}
              </p>

              <ul className="mt-6 space-y-2.5 pt-5">
                {capability.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13px] text-bg-light/75"
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
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
