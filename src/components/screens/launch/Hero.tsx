import { heroText } from "@/contents/screens/launch";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import BuildWindow from "./BuildWindow";

const Hero = () => {
  return (
    <section className="grain relative overflow-hidden bg-primary lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(252,252,244,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,252,244,0.035)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_90%_at_18%_18%,rgba(1,33,18,0.9)_0%,transparent_70%)]"
      />

      <div className="container relative grid w-full grid-cols-1 items-center gap-14 pb-20 pt-36 md:pt-44 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-8">
        <div>
          <Reveal immediate delay={0.05} y={26}>
            <h1 className="font-display text-[clamp(2.5rem,5.4vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-bg-cream">
              {heroText.titleLineOne}
              <br />
              <span className="text-border-light">
                Build <Underlined delay={1.1}>Correctly.</Underlined>
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.26} y={22}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-accent-four md:text-base">
              {heroText.subtext}
            </p>
          </Reveal>

          <Reveal immediate delay={0.38} y={20}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact-us" variant="light" withArrow>
                {heroText.buttonText}
              </Button>
              <CalendlyCTA variant="outline-light" />
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.45} y={32}>
          <BuildWindow />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
