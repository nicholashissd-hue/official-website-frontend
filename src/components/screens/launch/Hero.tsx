import { heroText } from "@/contents/screens/launch";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import BuildWindow from "./BuildWindow";

/**
 * Product-forward hero: a centered statement headline, then the build console
 * shown large beneath it. The product is the hero visual, so it fills the tall
 * frame naturally instead of a landscape card floating in empty green. Plain
 * block flow (not flex) so the centered text wraps within the viewport.
 */
const Hero = () => {
  return (
    <section className="grain relative overflow-hidden bg-primary lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(252,252,244,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,252,244,0.035)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_18%,rgba(6,156,78,0.14)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_45%,transparent_50%,rgba(1,24,12,0.45)_100%)]"
      />

      <div className="container relative pb-16 pt-32 text-center md:pt-36 lg:py-8">
        <Reveal immediate delay={0.05} y={26}>
          <h1 className="font-display text-[clamp(2.5rem,5.6vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-bg-cream">
            {heroText.titleLineOne}
            <br className="lg:hidden" />{" "}
            <span className="text-border-light">
              Build <Underlined delay={1.1}>Correctly.</Underlined>
            </span>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.24} y={22}>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-[1.85] text-accent-four md:text-[17px] lg:mt-8">
            {heroText.subtext}
          </p>
        </Reveal>

        <Reveal immediate delay={0.36} y={20}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:mt-10">
            <Button to="/contact-us" variant="light" withArrow>
              {heroText.buttonText}
            </Button>
            <CalendlyCTA variant="outline-light" />
          </div>
        </Reveal>

        <Reveal immediate delay={0.5} y={40} className="mx-auto mt-14 w-full max-w-5xl lg:mt-14">
          <BuildWindow />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
