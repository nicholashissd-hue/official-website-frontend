import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { thirdPath, proof, logosLabel } from "@/contents/screens/homeV4";
import { trustedCompaniesLogo } from "@/contents/screens/home";
import pairingImage from "@/assets/webp/v4/pairing-night.webp";
import pairingImage828 from "@/assets/webp/v4/pairing-night-828.webp";

/** A single curated row, never a ragged wall. */
const LOGO_ROW_COUNT = 8;

/**
 * The positioning argument, and now the evidence for it.
 *
 * This is the first thing under the hero. It used to be third, behind a
 * one-line pain strip and a full proof band, so the page opened by telling
 * the reader what was wrong with their company and then reciting figures
 * before it had said what ElderOps is.
 *
 * The proof band's own headline is gone: it was set at page-title scale, so
 * a supporting claim was competing with the hero. What was worth keeping —
 * the vetting figure and the client logos — now closes this section as
 * evidence for the argument directly above it, which is where evidence
 * belongs.
 */
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
            srcSet={`${pairingImage828} 828w, ${pairingImage} 2480w`}
            sizes="(min-width: 1024px) 42vw, 100vw"
            alt="Two ElderOps engineers working a problem through together at one desk in a daylit office"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>

      {/* The evidence, at supporting scale: one figure and the sentence it
          supports. The two secondary tiles that used to sit beside it are
          gone, so the number no longer reads as one item in a dashboard. */}
      <Reveal>
        <div className="mt-16 grid items-end gap-x-16 gap-y-8 border-t border-ink/25 pt-10 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="font-display text-stat font-bold tracking-[-0.05em] text-primary">
              {proof.headline.value}
              <span className="opacity-45">{proof.headline.unit}</span>
            </p>
            <p className="mt-5 text-lg font-bold text-ink">
              {proof.headline.label}
            </p>
            <p className="mt-1.5 max-w-md text-sm text-sub">
              {proof.headline.qualifier}
            </p>
          </div>

          <p className="max-w-xl font-display text-lede font-semibold tracking-[-0.015em] text-ink">
            {proof.trustLine}
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-14 border-t border-hairline pt-8">
          <p className="font-display text-base font-semibold tracking-[-0.01em] text-ink/70">
            {logosLabel}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            {trustedCompaniesLogo.slice(0, LOGO_ROW_COUNT).map((company) => (
              <img
                key={company.altText}
                src={company.defaultLogo}
                alt={company.altText}
                width={company.width}
                height={company.height}
                loading="lazy"
                decoding="async"
                className="h-5 w-auto opacity-40 grayscale md:h-6"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ThirdPath;
