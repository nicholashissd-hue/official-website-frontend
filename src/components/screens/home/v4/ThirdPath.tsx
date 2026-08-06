import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { thirdPath } from "@/contents/screens/homeV4";
import pairingImage from "@/assets/webp/v4/pairing-dusk.webp";

/** The About page's north-star positioning, on light ground with green as accent only. */
const ThirdPath = () => (
  <section className="border-t border-hairline bg-paper">
    <div className="container section-space-block">
      <div className="grid items-center gap-x-20 gap-y-12 lg:grid-cols-[7fr_5fr]">
        <div>
          <Reveal>
            <Kicker>{thirdPath.eyebrow}</Kicker>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.6rem,4.6vw,3.5rem)] font-bold leading-none tracking-[-0.03em] text-ink">
              {thirdPath.title}
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-sub">
              {thirdPath.body}
            </p>
          </Reveal>

          <div className="mt-10">
            {thirdPath.pillars.map((pillar, index) => (
              <Reveal key={pillar.num} delay={index * 0.08}>
                <div className="flex gap-6 border-t border-hairline py-5.5">
                  <span className="pt-1 font-mono text-[11px] tracking-[0.1em] text-primary">
                    {pillar.num}
                  </span>
                  <p className="text-[15.5px] leading-[1.6]">
                    <span className="font-bold text-ink">{pillar.title}</span>
                    <span className="text-sub">: {pillar.body}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <img
            src={pairingImage}
            alt="Two ElderOps engineers working through a problem at one screen after dusk"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </div>
  </section>
);

export default ThirdPath;
