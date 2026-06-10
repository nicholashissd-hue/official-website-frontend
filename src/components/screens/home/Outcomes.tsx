import { businessOutcomesData, businessOutcomesText } from "@/contents/screens/home";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const CARD_TONES = [
  {
    card: "grain relative bg-primary",
    tag: "bg-bg-cream/10 text-border-light ring-1 ring-inset ring-bg-cream/15",
    title: "text-bg-cream",
    body: "text-accent-four",
  },
  {
    card: "bg-white ring-1 ring-primary/10",
    tag: "bg-success/10 text-success",
    title: "text-primary",
    body: "text-accent-one",
  },
  {
    card: "bg-bg-yellow",
    tag: "bg-primary/15 text-primary",
    title: "text-primary",
    body: "text-primary/90",
  },
];

/** "Real Business Challenges. Real Engineering Outcomes." — colored card deck. */
const Outcomes = () => {
  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="05"
          eyebrow="Outcomes"
          title={businessOutcomesText.title}
          lede={businessOutcomesText.subtext}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {businessOutcomesData.map((outcome, index) => {
            const tone = CARD_TONES[index % CARD_TONES.length];

            return (
              <Reveal key={outcome.title} delay={index * 0.08}>
                <Lift
                  className={cn("overflow-hidden rounded-3xl p-8 md:p-9", tone.card)}
                >
                <span
                  className={cn(
                    "inline-block rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em]",
                    tone.tag,
                  )}
                >
                  {outcome.tag}
                </span>
                <h3
                  className={cn(
                    "mt-6 font-display text-[1.4rem] font-semibold leading-snug tracking-[-0.01em]",
                    tone.title,
                  )}
                >
                  {outcome.title}
                </h3>
                <p className={cn("mt-3 text-[15px] leading-[1.75]", tone.body)}>
                  {outcome.description}
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

export default Outcomes;
