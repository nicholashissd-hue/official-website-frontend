import { Fragment } from "react";
import { successStagesData, successText } from "@/contents/screens/about";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const STAGE_TONES = [
  {
    panel: "border border-primary/15 bg-white",
    tag: "text-accent-three",
    title: "text-primary",
    body: "text-accent-one",
    label: "text-accent-three",
    item: "text-accent-one",
    bullet: "bg-primary/30",
    grain: false,
  },
  {
    panel: "border border-success/40 bg-bg-light/70",
    tag: "text-success",
    title: "text-primary",
    body: "text-accent-one",
    label: "text-accent-three",
    item: "text-secondary",
    bullet: "bg-success",
    grain: false,
  },
  {
    panel: "border border-primary bg-primary",
    tag: "text-border-light",
    title: "text-bg-cream",
    body: "text-accent-four",
    label: "text-border-light",
    item: "text-bg-light/85",
    bullet: "bg-success",
    grain: true,
  },
];

const StageArrow = () => (
  <div className="flex items-center justify-center py-1 lg:py-0">
    <svg
      viewBox="0 0 32 10"
      fill="none"
      aria-hidden="true"
      className="w-8 rotate-90 text-primary/35 lg:rotate-0"
    >
      <path
        d="M0 5h30m0 0-4-3.6M30 5l-4 3.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="square"
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
    <section className="border-t border-primary/10 bg-bg-light/50">
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
                    "relative flex flex-col overflow-hidden p-8 md:p-9",
                    tone.panel,
                    tone.grain && "grain",
                  )}
                >
                  <p
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.24em]",
                      tone.tag,
                    )}
                  >
                    [ {stage.stage} ]
                  </p>
                  <h3
                    className={cn(
                      "mt-5 font-display text-[1.4rem] leading-snug tracking-[-0.01em]",
                      tone.title,
                    )}
                  >
                    {stage.title}
                  </h3>
                  <p className={cn("mt-4 flex-1 text-sm leading-[1.8]", tone.body)}>
                    {stage.description}
                  </p>

                  <div
                    className={cn(
                      "mt-7 border-t pt-5",
                      tone.grain ? "border-bg-cream/15" : "border-primary/10",
                    )}
                  >
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
                              "mt-[0.5em] size-1 shrink-0 rotate-45",
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
