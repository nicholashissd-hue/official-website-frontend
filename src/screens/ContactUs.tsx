import Form from "@/components/contactUs/Form";
import CalendlyCTA from "@/components/contactUs/react-calendly";
import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";
import PhotoCard from "@/components/ui/photo-card";
import Reveal from "@/components/ui/reveal";
import Underlined from "@/components/ui/underline";
import { useGlobalStore } from "@/store/useGlobalStore";
import cooperateLady from "@/assets/jpg/cooperate-lady.jpg";

const NEXT_STEPS = [
  "Introductory conversation",
  "Technical discovery",
  "Recommended engagement model",
  "Curated shortlist or delivery proposal",
];

const WhatHappensNext = () => (
  <div className="grain relative h-full overflow-hidden rounded-[2rem] bg-primary p-7 md:p-9">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_100%_0%,#074527_0%,transparent_60%)]"
    />
    <div className="relative flex h-full flex-col">
      <Eyebrow dark>What Happens Next?</Eyebrow>

      <ol className="mt-7 flex flex-1 flex-col justify-center gap-3">
        {NEXT_STEPS.map((step, index) => (
          <li
            key={step}
            className="flex items-center gap-4 rounded-xl bg-bg-cream/[0.04] px-4 py-3.5"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-bg-cream/10 font-display text-sm font-semibold text-border-light">
              {index + 1}
            </span>
            <span className="text-[15px] text-bg-light/90">{step}</span>
          </li>
        ))}
      </ol>

      <p className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-success/15 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-success">
        Typical turnaround — 48 hours
      </p>
    </div>
  </div>
);

const NotSureBand = () => {
  const { setChatOpen } = useGlobalStore();

  return (
    <section className="bg-border-light">
      <div className="container section-space-block">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>No Pressure</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-primary">
            Not Sure What You Need Yet?
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-primary/80">
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
      <section className="bg-bg-cream">
        <div className="container pb-12 pt-36 md:pb-16 md:pt-44">
          <Reveal immediate delay={0.05} y={26}>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5.2vw,4.1rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-primary">
              Let's Talk About{" "}
              <span className="text-success">
                What You're <Underlined>Building</Underlined>
              </span>
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
        <div className="container grid items-stretch gap-8 py-14 md:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
          <Reveal className="h-full">
            <Form />
          </Reveal>

          {/* Sidebar stretches to match the form so the section stays balanced */}
          <div className="flex flex-col gap-6">
            <Reveal delay={0.08}>
              <PhotoCard
                src={cooperateLady}
                alt="An ElderOps team member personally answering an inbound conversation"
                caption="Real humans. Fast answers."
                className="h-48"
              />
            </Reveal>

            <Reveal delay={0.12} className="flex-1">
              <WhatHappensNext />
            </Reveal>
          </div>
        </div>
      </section>

      <NotSureBand />
    </>
  );
};

export default ContactUs;
