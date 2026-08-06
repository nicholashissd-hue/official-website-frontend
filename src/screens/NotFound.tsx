import Reveal from "@/components/ui/reveal";
import { GhostLink, Kicker, SignalButton } from "@/components/ui/v4";

/**
 * Was the last V3 screen in the tree: a saturated green surface with grain,
 * a mono-caps eyebrow and two em dashes, all three of which the V4 doctrine
 * retires. It sits at a guessable URL, so it was the easiest place to catch
 * the site mid-redesign.
 */
const NotFound = () => (
  <section className="flex min-h-svh flex-col justify-center bg-nearblack">
    <div className="container py-32">
      <Reveal immediate y={20}>
        <Kicker onDark>Page not found</Kicker>
        <h1 className="mt-3 max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
          That page isn't here.
        </h1>
      </Reveal>

      <Reveal immediate delay={0.1} y={22}>
        <p className="mt-6 max-w-lg text-lg text-bg-cream/82">
          It may have been retired, or the address may be slightly off. The work
          itself is still where you left it.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
          <SignalButton to="/">Back to the homepage</SignalButton>
          <GhostLink to="/services" onDark>
            Explore services <span aria-hidden="true">→</span>
          </GhostLink>
        </div>
      </Reveal>
    </div>
  </section>
);

export default NotFound;
