import Reveal from "@/components/ui/reveal";
import { Eyebrow, GhostLink } from "@/components/ui/v4";
import { teamTeaser } from "@/contents/screens/homeV4";
import teamImage from "@/assets/webp/v4/team.webp";

/**
 * Named-team teaser. Ships as a teaser only until real names and bios exist:
 * never fabricate people (Revision Brief hard rule).
 */
const TeamTeaser = () => (
  <section className="border-t border-hairline bg-bone">
    <div className="container section-space-block">
      <div className="grid items-center gap-x-20 gap-y-12 lg:grid-cols-[7fr_5fr]">
        <Reveal>
          <img
            src={teamImage}
            alt="ElderOps engineers in discussion"
            loading="lazy"
            className="aspect-[3/2] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Eyebrow>{teamTeaser.eyebrow}</Eyebrow>
          <h2 className="mt-7 font-display text-[clamp(2.4rem,4vw,3.1rem)] font-bold leading-none tracking-[-0.03em] text-ink">
            {teamTeaser.title}
          </h2>
          <p className="mt-6 text-[16.5px] leading-[1.65] text-sub">
            {teamTeaser.body}
          </p>
          <GhostLink to="/about" className="mt-8">
            {teamTeaser.cta} <span aria-hidden="true">→</span>
          </GhostLink>
        </Reveal>
      </div>
    </div>
  </section>
);

export default TeamTeaser;
