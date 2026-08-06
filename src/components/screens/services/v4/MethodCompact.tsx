import Reveal from "@/components/ui/reveal";
import { GhostLink, Kicker } from "@/components/ui/v4";
import { method } from "@/contents/screens/servicesV4";
import { METHOD } from "@/contents/taxonomy";

/** The named method, compact: three steps in text only, one link deeper. */
const MethodCompact = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{method.kicker}</Kicker>
        <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
          {method.title}
        </h2>
      </Reveal>

      <div className="mt-11 grid gap-x-10 gap-y-9 md:grid-cols-3">
        {METHOD.map((step, index) => (
          <Reveal key={step.num} delay={index * 0.08}>
            <div className="border-t border-hairline pt-5">
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-xs tracking-[0.1em] text-primary">
                  {step.num}
                </span>
                <span className="text-lg font-bold text-ink">{step.title}</span>
              </p>
              <p className="mt-2.5 text-sm text-sub">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <GhostLink to="/how-we-work" className="mt-10">
          {method.cta} <span aria-hidden="true">→</span>
        </GhostLink>
      </Reveal>
    </div>
  </section>
);

export default MethodCompact;
