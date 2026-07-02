import { whyData, whyText } from "@/contents/screens/careers";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

/** Tone per card — the feature card (index 0) is the deep-green anchor. */
const TONES = [
  {
    card: "grain relative bg-pine ring-1 ring-bg-cream/12",
    badge: "bg-bg-cream/10 text-border-light",
    title: "text-bg-cream",
    body: "text-accent-four",
  },
  {
    card: "bg-white ring-1 ring-primary/10",
    badge: "bg-success/10 text-success",
    title: "text-primary",
    body: "text-accent-one",
  },
  {
    card: "bg-bg-light",
    badge: "bg-success/10 text-success",
    title: "text-primary",
    body: "text-accent-one",
  },
];

/** "Why Engineers Choose ElderOps" — a bento with a deep-green feature card. */
const WhyJoin = () => {
  return (
    <section id="why-join" className="scroll-mt-24 bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="04"
          eyebrow="The Upside"
          title={whyText.title}
          lede={whyText.subtext}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {whyData.map((item, index) => {
            const feature = index === 0;
            const tone = feature ? TONES[0] : TONES[1 + (index % 2)];

            return (
              <Reveal
                key={item.title}
                delay={index * 0.07}
                className={cn(feature && "lg:col-span-2")}
              >
                <Lift
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-3xl p-8 md:p-9",
                    !feature && "hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)]",
                    tone.card,
                  )}
                >
                  {feature && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_100%_0%,#02361b_0%,transparent_60%)]"
                    />
                  )}
                  <span
                    className={cn(
                      "relative grid size-10 place-items-center rounded-full font-display text-base font-semibold",
                      tone.badge,
                    )}
                  >
                    {index + 1}
                  </span>
                  <h3
                    className={cn(
                      "relative mt-5 font-display font-semibold leading-snug tracking-[-0.01em]",
                      feature ? "text-[1.6rem] md:text-3xl" : "text-xl",
                      tone.title,
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-3 max-w-xl text-[15px] leading-[1.8]",
                      tone.body,
                    )}
                  >
                    {item.description}
                  </p>
                </Lift>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
