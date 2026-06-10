import { heroText } from "@/contents/screens/about";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";

/** Philosophy-first opener: title, deck, third-path story, and the credo. */
const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px bg-primary/5 lg:block"
      />

      <div className="container relative pb-16 pt-36 md:pb-24 md:pt-44">
        <Reveal immediate y={20}>
          <Eyebrow>Our Philosophy</Eyebrow>
        </Reveal>

        <Reveal immediate delay={0.12} y={26}>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,5.4vw,4.3rem)] leading-[1.05] tracking-[-0.02em] text-primary">
            {heroText.titleLineOne}
            <br />
            <em className="italic text-success">{heroText.titleLineTwo}</em>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.26} y={22}>
          <p className="mt-9 max-w-2xl font-display text-[1.3rem] leading-[1.5] tracking-[-0.01em] text-primary md:text-[1.45rem]">
            {heroText.deck}
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-accent-one md:text-base">
            {heroText.body}
          </p>
        </Reveal>

        <Reveal immediate delay={0.4} y={24}>
          <blockquote className="mt-14 max-w-4xl border-l-2 border-success py-2 pl-7 md:mt-20 md:pl-10">
            <p className="font-display text-[clamp(1.35rem,2.7vw,2rem)] italic leading-[1.45] tracking-[-0.01em] text-primary">
              “{heroText.quote}”
            </p>
            <footer className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-accent-three">
              The ElderOps Philosophy
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
