import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { proof, logosLabel } from "@/contents/screens/homeV4";
import { trustedCompaniesLogo } from "@/contents/screens/home";

/**
 * One giant number, two subordinate stats, a quiet trust line, then the
 * client logos. Hierarchy over symmetry: never three equal tiles.
 */
const ProofBand = () => (
  <section className="bg-paper">
    <div className="container pb-14 pt-24 md:pt-28">
      <Reveal>
        <Kicker>Proof</Kicker>
      </Reveal>

      <div className="mt-11 grid items-end gap-x-16 gap-y-14 lg:grid-cols-[7fr_5fr]">
        <Reveal>
          <p className="font-display text-[clamp(8rem,13vw,12.25rem)] font-bold leading-[0.85] tracking-[-0.05em] text-primary">
            {proof.headline.value}
            <span className="opacity-50">{proof.headline.unit}</span>
          </p>
          <p className="mt-5 text-[19px] font-bold text-ink">
            {proof.headline.label}
          </p>
          <p className="mt-1 text-[15px] text-sub">{proof.headline.qualifier}</p>
        </Reveal>

        <div className="flex flex-col gap-9">
          {proof.secondary.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="border-t border-hairline pt-5">
                <p className="font-display text-[clamp(2.4rem,3.5vw,3.1rem)] font-bold leading-none tracking-[-0.03em] text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-sub">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <p className="text-[14.5px] text-sub">{proof.trustLine}</p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-sub/70">
            {proof.sampleNote}
          </p>
        </div>
      </Reveal>
    </div>

    <div className="container border-t border-hairline py-12">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          <p className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink/45">
            {logosLabel}
          </p>
          {trustedCompaniesLogo.map((company) => (
            <img
              key={company.altText}
              src={company.defaultLogo}
              alt={company.altText}
              className="h-6 w-auto opacity-45 grayscale md:h-7"
            />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProofBand;
