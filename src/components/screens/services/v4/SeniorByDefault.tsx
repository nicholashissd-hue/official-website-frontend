import Reveal from "@/components/ui/reveal";
import { Kicker } from "@/components/ui/v4";
import { senior } from "@/contents/screens/servicesV4";

/** Who shows up: the seniority promise with the disciplines as a chip row. */
const SeniorByDefault = () => (
  <section className="border-y border-hairline bg-bone">
    <div className="container section-space-block">
      <div className="grid items-start gap-x-20 gap-y-10 lg:grid-cols-[5fr_7fr]">
        <Reveal>
          <Kicker>{senior.kicker}</Kicker>
          <h2 className="mt-3 font-display text-[clamp(2.6rem,4.4vw,3.4rem)] font-bold leading-none tracking-[-0.03em] text-ink">
            {senior.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="max-w-xl text-[17px] leading-[1.65] text-sub">
            {senior.body}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {senior.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-[14px] border border-ink/20 px-4 py-2 text-[14px] font-semibold text-ink"
              >
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default SeniorByDefault;
