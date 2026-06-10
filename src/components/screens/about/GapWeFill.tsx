import {
  elderOpsStandardText,
  gapPillarsData,
  gapText,
} from "@/contents/screens/about";
import SectionHeading from "@/components/ui/section-heading";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import { cn } from "@/lib/util";

/** Pillar cards rotate through the light brand deck: white, lime, citrus. */
const PILLAR_TONES = [
  {
    card: "bg-white ring-1 ring-primary/10",
    badge: "bg-success/10 text-success",
    body: "text-accent-one",
    label: "text-accent-three",
    item: "text-accent-one",
  },
  {
    card: "bg-border-light",
    badge: "bg-primary/10 text-primary",
    body: "text-primary/70",
    label: "text-primary/60",
    item: "text-primary/70",
  },
  {
    card: "bg-bg-yellow",
    badge: "bg-primary/10 text-primary",
    body: "text-primary/70",
    label: "text-primary/60",
    item: "text-primary/70",
  },
];

const statementWords = gapText.statement.split(" ");
const statementLead = statementWords.slice(0, -1).join(" ");
const statementFinal = statementWords[statementWords.length - 1];

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

        <div className="grid gap-5 lg:grid-cols-3">
          {gapPillarsData.map((pillar, index) => {
            const tone = PILLAR_TONES[index % PILLAR_TONES.length];

            return (
              <Reveal
                key={pillar.title}
                delay={index * 0.08}
                className={cn(
                  "flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-10",
                  tone.card,
                )}
              >
                <span
                  className={cn(
                    "grid size-10 place-items-center rounded-full font-display text-base font-semibold",
                    tone.badge,
                  )}
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-display text-[1.02rem] font-medium leading-[1.55] text-success">
                  {pillar.lead}
                </p>
                <p className={cn("mt-4 flex-1 text-sm leading-[1.8]", tone.body)}>
                  {pillar.description}
                </p>

                <div className="mt-8">
                  <p
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.22em]",
                      tone.label,
                    )}
                  >
                    Key Focus Areas
                  </p>
                  <ul className="mt-3.5 space-y-2">
                    {pillar.focusAreas.map((area) => (
                      <li
                        key={area}
                        className={cn(
                          "flex gap-2.5 text-[13px] leading-[1.6]",
                          tone.item,
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-success"
                        />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* The synthesis statement */}
        <Reveal className="flex flex-col items-center py-16 text-center md:py-24">
          <p className="max-w-3xl text-balance font-display text-[clamp(1.6rem,3.4vw,2.5rem)] font-semibold leading-[1.3] tracking-[-0.01em] text-primary">
            {statementLead} <Underlined delay={0.4}>{statementFinal}</Underlined>
          </p>
        </Reveal>

        {/* The ElderOps Standard */}
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-primary p-9 md:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_100%_0%,#074527_0%,transparent_60%)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
              <div>
                <Eyebrow dark>The Synthesis</Eyebrow>
                <h3 className="mt-6 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-bg-cream">
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

              <div className="rounded-2xl bg-bg-cream/[0.06] p-7 ring-1 ring-bg-cream/15">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-border-light">
                  {elderOpsStandardText.gainsLabel}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {elderOpsStandardText.gains.map((gain) => (
                    <li
                      key={gain}
                      className="flex items-center gap-3 text-sm text-bg-light/85"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 shrink-0 rounded-full bg-success"
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
