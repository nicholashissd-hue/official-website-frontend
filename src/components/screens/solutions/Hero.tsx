import { heroText } from "@/contents/screens/solutions";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";
import CalendlyCTA from "@/components/contactUs/react-calendly";

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-bg-cream">
      {/* Faint structural rules, echoing the lattice motif on paper */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-primary/5 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-3/4 hidden w-px bg-primary/5 lg:block"
      />

      <div className="container relative pb-16 pt-36 md:pb-24 md:pt-44">
        <Reveal immediate y={20}>
          <Eyebrow>Solutions</Eyebrow>
        </Reveal>

        <Reveal immediate delay={0.12} y={26}>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,5.4vw,4.3rem)] leading-[1.05] tracking-[-0.02em] text-primary">
            Engineering Expertise That Drives{" "}
            <em className="italic text-success">Business Outcomes</em>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.26} y={22}>
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-accent-one md:text-base">
            {heroText.subtext}
          </p>
        </Reveal>

        <Reveal immediate delay={0.38} y={20}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to="/contact-us" variant="primary" withArrow>
              Start the Conversation
            </Button>
            <CalendlyCTA variant="outline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
