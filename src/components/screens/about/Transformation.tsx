import { Fragment } from "react";
import { motion } from "framer-motion";
import { successStagesData, successText } from "@/contents/screens/about";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const STAGE_TONES = [
  {
    panel: "bg-white ring-1 ring-primary/10",
    tag: "bg-primary/[0.06] text-primary",
    title: "text-primary",
    body: "text-accent-one",
    label: "text-accent-three",
    item: "text-accent-one",
    bullet: "bg-primary/30",
    grain: false,
  },
  {
    panel: "bg-border-light",
    tag: "bg-primary/10 text-primary",
    title: "text-primary",
    body: "text-primary/70",
    label: "text-primary/60",
    item: "text-primary/70",
    bullet: "bg-success",
    grain: false,
  },
  {
    panel: "bg-primary",
    tag: "bg-bg-cream/10 text-border-light",
    title: "text-bg-cream",
    body: "text-accent-four",
    label: "text-border-light",
    item: "text-bg-light/85",
    bullet: "bg-success",
    grain: true,
  },
];

/** Connector between stages — a green arrow that draws itself in. */
const StageArrow = () => (
  <div className="flex items-center justify-center py-1 lg:py-0">
    <svg
      viewBox="0 0 32 10"
      fill="none"
      aria-hidden="true"
      className="w-8 rotate-90 text-success lg:rotate-0"
    >
      <motion.path
        d="M0 5h30m0 0-4-3.6M30 5l-4 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE }}
      />
    </svg>
  </div>
);

/**
 * "What Success Looks Like" — the horizontal transformation narrative the
 * brief asked for: Before → With ElderOps → The Result. No stock photos;
 * the story is told through progressive tone, from paper to deep green.
 */
const Transformation = () => {
  return (
    <section className="bg-bg-light/50">
      <div className="container section-space-block">
        <SectionHeading
          index="03"
          eyebrow="The Transformation"
          title={successText.title}
          lede={
            <>
              {successText.subtextLineOne}
              <br />
              {successText.subtextLineTwo}
            </>
          }
        />

        <div className="grid items-stretch gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:gap-4">
          {successStagesData.map((stage, index) => {
            const tone = STAGE_TONES[index];

            return (
              <Fragment key={stage.stage}>
                {index > 0 && <StageArrow />}

                <Reveal
                  delay={index * 0.12}
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-9",
                    tone.panel,
                    tone.grain && "grain",
                  )}
                >
                  <p
                    className={cn(
                      "w-fit rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em]",
                      tone.tag,
                    )}
                  >
                    {stage.stage}
                  </p>
                  <h3
                    className={cn(
                      "mt-5 font-display text-[1.4rem] font-semibold leading-snug tracking-[-0.01em]",
                      tone.title,
                    )}
                  >
                    {stage.title}
                  </h3>
                  <p className={cn("mt-4 flex-1 text-sm leading-[1.8]", tone.body)}>
                    {stage.description}
                  </p>

                  <div className="mt-7">
                    <p
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.22em]",
                        tone.label,
                      )}
                    >
                      {stage.listLabel}
                    </p>
                    <ul className="mt-3.5 space-y-2">
                      {stage.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            "flex gap-2.5 text-[13px] leading-[1.6]",
                            tone.item,
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-[0.45em] size-1.5 shrink-0 rounded-full",
                              tone.bullet,
                            )}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
