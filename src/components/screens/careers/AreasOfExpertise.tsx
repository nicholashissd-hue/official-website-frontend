import type { ReactNode } from "react";
import { expertiseData, expertiseText } from "@/contents/screens/careers";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { Lift } from "@/components/ui/reveal";

const ICONS: Record<string, ReactNode> = {
  cloud: (
    <path d="M7 18h9a4 4 0 0 0 .5-7.97A6 6 0 0 0 5.2 11.3 3.5 3.5 0 0 0 7 18Z" />
  ),
  platform: (
    <>
      <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  software: <path d="M9 8l-4 4 4 4m6-8 4 4-4 4" />,
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
    </>
  ),
  ai: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" />
    </>
  ),
  security: <path d="M12 3l7 3v5c0 4.4-3 8-7 10-4-2-7-5.6-7-10V6l7-3Z" />,
};

/** "Areas of Expertise" — dark atlas of the disciplines we grow the network across. */
const AreasOfExpertise = () => {
  return (
    <section id="expertise" className="grain relative scroll-mt-24 overflow-hidden bg-pine">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_90%_at_85%_0%,#02361b_0%,transparent_60%)]"
      />

      <div className="container section-space-block relative">
        <SectionHeading
          dark
          index="03"
          eyebrow="Disciplines"
          title={expertiseText.title}
          lede={expertiseText.subtext}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseData.map((item, index) => (
            <Reveal key={item.key} delay={index * 0.06}>
              <Lift className="rounded-3xl bg-bg-cream/[0.05] p-8 ring-1 ring-bg-cream/12 hover:bg-bg-cream/[0.08]">
                <span className="grid size-12 place-items-center rounded-2xl bg-success/15 text-border-light">
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
                    {ICONS[item.key]}
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold leading-snug tracking-[-0.01em] text-bg-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.8] text-accent-four">
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

export default AreasOfExpertise;
