import Form from "@/components/contactUs/Form";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/ui/reveal";
import { useGlobalStore } from "@/store/useGlobalStore";

const NEXT_STEPS = [
  "Introductory conversation",
  "Technical discovery",
  "Recommended engagement model",
  "Curated shortlist or delivery proposal",
];

const WhatHappensNext = () => (
  <div className="grain relative overflow-hidden bg-primary p-7 md:p-9">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_100%_0%,#074527_0%,transparent_60%)]"
    />
    <div className="relative">
      <p className="eyebrow text-border-light">What Happens Next?</p>

      <ol className="mt-7">
        {NEXT_STEPS.map((step, index) => (
          <li
            key={step}
            className="flex items-baseline gap-4 border-b border-bg-cream/10 py-4 last:border-b-0"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-border-light/80">
              0{index + 1}
            </span>
            <span className="text-[15px] text-bg-light/90">{step}</span>
          </li>
        ))}
      </ol>

      <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-four">
        Typical turnaround —{" "}
        <span className="text-success">48 hours</span>
      </p>
    </div>
  </div>
);

const NotSureBand = () => {
  const { setChatOpen } = useGlobalStore();

  return (
    <section className="border-t border-primary/10 bg-bg-light/60">
      <div className="container section-space-block">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>No Pressure</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-[clamp(1.9rem,3.8vw,2.9rem)] leading-[1.1] tracking-[-0.015em] text-primary">
            Not Sure What You Need Yet?
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-accent-one">
            That's exactly why the conversation exists. We'll help you determine
            whether a single engineer, a dedicated team, or a structured
            delivery engagement is the best fit.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" withArrow onClick={() => setChatOpen(true)}>
              Ask the Hiring Advisor
            </Button>
            <CalendlyCTA variant="outline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const ContactUs = () => {
  return (
    <>
      <section className="border-b border-primary/10 bg-bg-cream">
        <div className="container pb-12 pt-36 md:pb-16 md:pt-44">
          <Reveal immediate y={20}>
            <Eyebrow>Start the Conversation</Eyebrow>
          </Reveal>

          <Reveal immediate delay={0.12} y={26}>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.4rem,5.2vw,4.1rem)] leading-[1.06] tracking-[-0.02em] text-primary">
              Let's Talk About{" "}
              <em className="italic text-success">What You're Building</em>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.26} y={22}>
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.85] text-accent-one md:text-base">
              Whether you're scaling infrastructure, accelerating product
              delivery, modernizing data platforms, or building AI capabilities,
              we'll help determine the right engineering model for your goals.
            </p>
            <p className="mt-6 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-three">
              <span className="animate-pulse-dot size-1.5 rounded-full bg-success" />
              Typical response — within one business day
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-cream">
        <div className="container grid gap-8 py-14 md:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          <Reveal>
            <Form />
          </Reveal>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.12}>
              <WhatHappensNext />
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border border-primary/10 bg-white p-7 md:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-three">
                  Prefer to talk it through?
                </p>
                <p className="mt-3.5 font-display text-lg leading-snug text-primary">
                  Put time directly on our calendar.
                </p>
                <div className="mt-5">
                  <CalendlyCTA variant="outline" withArrow />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <NotSureBand />
    </>
  );
};

export default ContactUs;
