import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { method } from "@/contents/screens/homeV4";
import { METHOD } from "@/contents/taxonomy";
import { AssessDiagram, BuildDiagram, OwnDiagram } from "./MethodDiagrams";

const STEP_DIAGRAMS = [AssessDiagram, BuildDiagram, OwnDiagram];

/**
 * The named method, told as one drawn system in three states: the risk
 * ringed, the active path built, the whole boundary owned.
 */
const MethodSection = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{method.eyebrow}</Kicker>
        <h2 className="mt-3 font-display text-[clamp(2.75rem,4.8vw,3.6rem)] font-bold leading-none tracking-[-0.03em] text-ink">
          {method.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
        {METHOD.map((step, index) => {
          const Diagram = STEP_DIAGRAMS[index];
          return (
            <Reveal key={step.num} delay={index * 0.08} as="article">
              <Diagram />
              <p className="mt-6 flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                  {step.num}
                </span>
                <span className="text-[18px] font-bold text-ink">{step.title}</span>
              </p>
              <p className="mt-2.5 text-[15px] leading-[1.62] text-sub">
                {step.body}
              </p>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default MethodSection;
