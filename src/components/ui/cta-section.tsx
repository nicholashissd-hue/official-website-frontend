import { useLocation } from "react-router";
import { ctaText as solutionsCTA } from "@/contents/screens/solutions";
import { ctaText as talentsCTA } from "@/contents/screens/talents";
import { ctaText as aboutCTA } from "@/contents/screens/about";
import { homeCTAText } from "@/contents/footer";
import Button from "./button";
import Eyebrow from "./eyebrow";
import Reveal from "./reveal";
import NetworkCanvas from "./network-canvas";
import CalendlyCTA from "../contactUs/react-calendly";

export interface CTAContent {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
}

const CTA_MAP: Record<string, CTAContent> = {
  "/": homeCTAText,
  "/solutions": solutionsCTA,
  "/talent": talentsCTA,
  "/about": aboutCTA,
};

/** Page-closing CTA: a giant rounded deep-green card with a living lattice. */
const CTASection = () => {
  const { pathname } = useLocation();
  const content = CTA_MAP[pathname];

  if (!content) return null;

  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 md:px-16 md:py-24">
            <NetworkCanvas className="opacity-60" spacing={56} />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(85%_120%_at_50%_-20%,#074527_0%,transparent_60%)]"
            />

            <div className="relative flex flex-col items-center text-center">
              <Eyebrow dark>{content.eyebrow}</Eyebrow>

              <h2 className="mt-7 max-w-3xl text-balance font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-bg-cream">
                {content.title}
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-accent-four md:text-[17px]">
                {content.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button to="/contact-us" variant="primary" withArrow>
                  {content.buttonText}
                </Button>
                <CalendlyCTA variant="outline-light" />
              </div>

              <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-four">
                Typical response — within one business day
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
