import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { thirdPath } from "@/contents/screens/homeV4";
import pairingImage from "@/assets/webp/v4/pairing-night.webp";
import pairingImage828 from "@/assets/webp/v4/pairing-night-828.webp";

/** The About page's north-star positioning, on light ground with green as accent only. */
const ThirdPath = () => (
  <section className="border-t border-hairline bg-paper">
    <div className="container section-space-block">
      <div className="grid items-center gap-x-20 gap-y-12 lg:grid-cols-[7fr_5fr]">
        <div>
          <Reveal>
            <Kicker>{thirdPath.eyebrow}</Kicker>
            <h2 className="mt-3 max-w-2xl font-display text-heading font-bold tracking-[-0.03em] text-ink">
              {thirdPath.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-sub">{thirdPath.body}</p>
          </Reveal>

          <div className="mt-10">
            {thirdPath.pillars.map((pillar, index) => (
              <Reveal key={pillar.num} delay={index * 0.08}>
                <div className="flex gap-6 border-t border-hairline py-5.5">
                  <span className="pt-1 font-mono text-xs tracking-[0.1em] text-primary">
                    {pillar.num}
                  </span>
                  <p className="text-base">
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
            srcSet={`${pairingImage828} 828w, ${pairingImage} 1600w`}
            sizes="(min-width: 1024px) 42vw, 100vw"
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
