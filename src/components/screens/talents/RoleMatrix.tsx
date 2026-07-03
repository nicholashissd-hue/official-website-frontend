import { useState } from "react";
import { motion } from "framer-motion";
import { rolesData, rolesText } from "@/contents/screens/talents";
import SectionHeading from "@/components/ui/section-heading";
import Reveal, { EASE } from "@/components/ui/reveal";
import { cn } from "@/lib/util";
import talentOne from "@/assets/png/talent-one.png";
import talentTwo from "@/assets/png/talent-two.png";
import talentThree from "@/assets/png/talent-three.png";

/** Portraits by role order: Senior, Staff, Principal. */
const ROLE_PORTRAITS = [talentOne, talentTwo, talentThree];

const FlipHint = ({ label, dark = false }: { label: string; dark?: boolean }) => (
  <span
    className={cn(
      "inline-flex w-fit items-center gap-2.5 rounded-full px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
      dark
        ? "bg-bg-cream/10 text-accent-four"
        : "bg-primary/[0.06] text-accent-three group-hover:text-success",
    )}
  >
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" className="size-3">
      <path
        d="M11.5 5.5a5 5 0 0 0-9-1.8M2.5 8.5a5 5 0 0 0 9 1.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
      <path d="M2.5 1.5v2.6h2.6M11.5 12.5V9.9H8.9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
    {label}
  </span>
);

const RoleList = ({ label, items }: { label: string; items: string[] }) => (
  <div>
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-border-light">
      {label}
    </p>
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-[13px] leading-[1.6] text-bg-light/85"
        >
          <span
            aria-hidden="true"
            className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-success"
          />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

/** "Expertise Matched to Your Mission" — three flip cards (per the brief). */
const RoleMatrix = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="bg-bg-cream">
      <div className="container section-space-block">
        <SectionHeading
          index="01"
          eyebrow="Roles"
          title={rolesText.title}
          lede={rolesText.subtext}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {rolesData.map((role, index) => {
            const isFlipped = flipped === index;

            return (
              <Reveal key={role.id} delay={index * 0.1} className="[perspective:1800px]">
                <button
                  type="button"
                  onClick={() => setFlipped(isFlipped ? null : index)}
                  aria-pressed={isFlipped}
                  aria-label={`${role.title} — ${isFlipped ? "show overview" : "show fit and responsibilities"}`}
                  className="group relative block h-[600px] w-full cursor-pointer text-left sm:h-[560px]"
                >
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.75, ease: EASE }}
                    className="relative size-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front */}
                    <div
                      style={{ backfaceVisibility: "hidden" }}
                      className="absolute inset-0 flex flex-col rounded-3xl bg-white p-8 ring-1 ring-primary/10 transition-all duration-500 group-hover:shadow-[0_24px_50px_rgba(2,54,27,0.1)] group-hover:ring-primary/25 md:p-9"
                    >
                      <span className="flex items-center gap-3">
                        <img
                          src={ROLE_PORTRAITS[index % ROLE_PORTRAITS.length]}
                          alt=""
                          className="size-14 rounded-full object-cover ring-2 ring-success/50"
                        />
                        <span className="rounded-full bg-success/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-success">
                          0{index + 1}
                        </span>
                      </span>
                      <h3 className="mt-6 font-display text-[1.55rem] font-semibold leading-tight tracking-[-0.01em] text-primary">
                        {role.title}
                      </h3>
                      <p className="mt-4 text-[15px] font-medium leading-[1.6] text-success">
                        {role.tagline}
                      </p>
                      <p className="mt-5 flex-1 text-sm leading-[1.85] text-accent-one">
                        {role.description}
                      </p>
                      <FlipHint label="Select for fit & responsibilities" />
                    </div>

                    {/* Back */}
                    <div
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                      className="grain absolute inset-0 flex flex-col overflow-hidden rounded-3xl bg-primary p-8 md:p-9"
                    >
                      <p className="font-display text-lg font-semibold leading-tight text-bg-cream">
                        {role.title}
                      </p>
                      <div className="scrollbar-hide mt-6 flex-1 space-y-7 overflow-y-auto">
                        <RoleList label="Ideal For" items={role.idealFor} />
                        <RoleList
                          label="Typical Responsibilities"
                          items={role.responsibilities}
                        />
                      </div>
                      <div className="pt-5">
                        <FlipHint label="Select to flip back" dark />
                      </div>
                    </div>
                  </motion.div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleMatrix;
