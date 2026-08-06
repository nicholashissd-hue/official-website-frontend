import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { proof, logosLabel } from "@/contents/screens/homeV4";
import { trustedCompaniesLogo } from "@/contents/screens/home";

/**
 * The proof ledger (v4.15 premium restructure): the trust line promoted to
 * an editorial statement, then the three figures in one hairline-divided
 * ledger row, lead number dominant. Logos are a single curated row, never
 * a ragged wall.
 */
const LOGO_ROW_COUNT = 8;

const ProofBand = () => (
  <section className="bg-paper">
    <div className="container pb-14 pt-24 md:pt-28">
      <Reveal>
        <Kicker>Proof</Kicker>
        <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.9rem,3.2vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em] text-ink">
          {proof.trustLine}
        </h2>
      </Reveal>

      <Reveal>
        <div className="mt-14 grid border-y border-hairline lg:grid-cols-[6fr_3fr_3fr] lg:divide-x lg:divide-hairline">
          <div className="py-10 max-lg:border-b max-lg:border-hairline lg:pr-12">
            <p className="font-display text-[clamp(6.5rem,11vw,10rem)] font-bold leading-[0.85] tracking-[-0.05em] text-primary">
              {proof.headline.value}
              <span className="opacity-45">{proof.headline.unit}</span>
            </p>
            <p className="mt-6 text-[18px] font-bold text-ink">
              {proof.headline.label}
            </p>
            <p className="mt-1 text-[14.5px] text-sub">
              {proof.headline.qualifier}
            </p>
          </div>

          {proof.secondary.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-end py-10 max-lg:border-b max-lg:border-hairline max-lg:last:border-b-0 lg:px-10"
            >
              <p className="font-display text-[clamp(2.2rem,3.2vw,2.9rem)] font-bold leading-none tracking-[-0.03em] text-primary">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[26ch] text-[14px] leading-[1.55] text-sub">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="mt-4 text-right font-mono text-[10.5px] uppercase tracking-[0.16em] text-sub/60">
          {proof.sampleNote}
        </p>
      </Reveal>
    </div>

    <div className="container pb-16 pt-6">
      <Reveal>
        <p className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink/45">
          {logosLabel}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          {trustedCompaniesLogo.slice(0, LOGO_ROW_COUNT).map((company) => (
            <img
              key={company.altText}
              src={company.defaultLogo}
              alt={company.altText}
              className="h-5 w-auto opacity-40 grayscale md:h-6"
            />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProofBand;
