import Reveal from "@/components/ui/reveal";
import { Kicker, signalButtonClass } from "@/components/ui/v4";
import { process, APPLY_MAILTO, hero } from "@/contents/screens/careersV4";

/** Apply, Vetting, Embed: how the network takes people in. */
const JoinProcess = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <Reveal>
        <Kicker>{process.kicker}</Kicker>
        <h2 className="mt-3 font-display text-heading font-bold tracking-[-0.03em] text-ink">
          {process.title}
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-3">
        {process.steps.map((step, index) => (
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
        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-hairline pt-8">
          <p className="text-base font-semibold text-ink">{process.note}</p>
          <a href={APPLY_MAILTO} className={signalButtonClass}>
            {hero.cta}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default JoinProcess;
