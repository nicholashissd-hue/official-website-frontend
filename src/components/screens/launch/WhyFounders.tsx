import type { ReactNode } from "react";
import { whyData, whyText } from "@/contents/screens/launch";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";
import { cn } from "@/lib/util";

const ICONS: ReactNode[] = [
  // Technical leadership — guiding compass
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </>,
  // Faster execution — fast-forward
  <path d="M4 6l7 6-7 6V6Zm9 0l7 6-7 6V6Z" />,
  // Flexible engagement — expand/contract
  <>
    <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" />
    <path d="M9 12h6" />
  </>,
  // Infrastructure for growth — ascending bars
  <>
    <path d="M4 20h16" />
    <rect x="6" y="13" width="3" height="5" rx="1" />
    <rect x="11" y="9" width="3" height="9" rx="1" />
    <rect x="16" y="5" width="3" height="13" rx="1" />
  </>,
  // One partner end to end — linked nodes
  <>
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="12" r="3" />
    <path d="M9 12h6" />
  </>,
];

const WhyFounders = () => {
  return (
    <section id="why-elderops" className="scroll-mt-24 bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="04"
          eyebrow="The Advantage"
          title={whyText.title}
          lede={whyText.subtext}
          align="center"
          ledeWidth="max-w-2xl"
        />

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {whyData.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.07}
              className={cn(
                "lg:col-span-2",
                index === 3 && "lg:col-span-3",
                index === 4 && "lg:col-span-3",
              )}
            >
              <Lift className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-primary/10 hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] md:p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-success/10 text-success">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="size-6"
                  >
                    {ICONS[index]}
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-accent-one">
                  {item.description}
                </p>
              </Lift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFounders;
