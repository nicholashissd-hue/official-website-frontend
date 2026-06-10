import { capabilitiesData, capabilitiesText } from "@/contents/screens/solutions";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

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

        <div className="grid gap-px border border-bg-cream/12 bg-bg-cream/12 md:grid-cols-2 lg:grid-cols-6">
          {capabilitiesData.map((capability, index) => (
            <Reveal
              key={capability.id}
              delay={index * 0.06}
              className={cn(
                "group bg-primary p-8 transition-colors duration-500 hover:bg-pine/35 md:p-10",
                index < 2 ? "lg:col-span-3" : "lg:col-span-2",
                index === 4 && "max-lg:md:col-span-2",
              )}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-border-light/80">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl leading-snug tracking-[-0.01em] text-bg-cream md:text-2xl">
                {capability.title}
              </h3>
              <p className="mt-4 font-display text-[1.05rem] italic leading-[1.55] text-border-light/90">
                {capability.value}
              </p>
              <p className="mt-4 text-sm leading-[1.8] text-accent-four">
                {capability.description}
              </p>

              <ul className="mt-7 border-t border-bg-cream/10">
                {capability.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-bg-cream/10 py-2.5 text-[13px] text-bg-light/75"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1 rotate-45 bg-success/80"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
