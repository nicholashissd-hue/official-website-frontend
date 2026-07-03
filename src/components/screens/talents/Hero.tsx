import { heroText } from "@/contents/screens/talents";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import CommandCenter from "./CommandCenter";

// Split the second title line so the swash lands on its final word only.
const lineTwoWords = heroText.titleLineTwo.split(" ");
const lineTwoLast = lineTwoWords[lineTwoWords.length - 1];
const lineTwoLead = lineTwoWords.slice(0, -1).join(" ");

/**
 * Full-viewport hero on laptops: fluid poster type and a scaled delivery
 * console, centered in the frame with tonal depth in the field.
 */
const Hero = () => {
  return (
    <section className="grain relative overflow-hidden bg-primary lg:flex lg:min-h-screen lg:flex-col lg:pt-20">
      {/* Engineering-paper grid + tonal depth + glow/vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(252,252,244,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(252,252,244,0.035)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_90%_at_15%_20%,rgba(1,33,18,0.9)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_80%_42%,rgba(6,156,78,0.14)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,transparent_55%,rgba(1,24,12,0.4)_100%)]"
      />

      <div className="container relative grid w-full grid-cols-1 items-center gap-14 pb-20 pt-36 md:pt-44 lg:flex-1 lg:content-center lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-10">
        <div>
          <Reveal immediate delay={0.05} y={26}>
            <h1 className="font-display text-[clamp(2.5rem,5.2vw,5rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-bg-cream">
              {heroText.titleLineOne}
              <br />
              <span className="text-border-light">
                {lineTwoLead}{" "}
                <Underlined delay={1.1}>{lineTwoLast}</Underlined>
              </span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.26} y={22}>
            <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-accent-four md:text-base lg:max-w-[34rem] lg:text-[17px]">
              {heroText.subtext}
            </p>
          </Reveal>

          <Reveal immediate delay={0.38} y={20}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact-us" variant="light" withArrow>
                Request a Shortlist
              </Button>
              <CalendlyCTA variant="outline-light" />
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.45} y={32}>
          <div className="lg:origin-left lg:scale-[1.05]">
            <CommandCenter />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
