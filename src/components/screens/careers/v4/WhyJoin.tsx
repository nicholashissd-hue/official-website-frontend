import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { whyJoin } from "@/contents/screens/careersV4";

/** The supply-side value: ownership, flexible terms, senior peers. */
const WhyJoin = () => (
  <section className="bg-paper">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-10 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker>{whyJoin.kicker}</Kicker>
          <h2 className="mt-3 max-w-md font-display text-[clamp(2.4rem,4vw,3.1rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink">
            {whyJoin.title}
          </h2>
        </Reveal>

        <div>
          {whyJoin.items.map((item, index) => (
            <Reveal key={item.num} delay={index * 0.08}>
              <div className="flex gap-6 border-t border-hairline py-6 first:border-t-0 first:pt-1">
                <span className="pt-1 font-mono text-[11px] tracking-[0.1em] text-primary">
                  {item.num}
                </span>
                <div>
                  <p className="text-[17px] font-bold text-ink">{item.title}</p>
                  <p className="mt-2 max-w-xl text-[15.5px] leading-[1.62] text-sub">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyJoin;
