import FullBleed from "@/components/ui/full-bleed";
import { GhostLink, Kicker } from "@/components/ui/v4";
import { teamTeaser } from "@/contents/screens/homeV4";
import teamImage from "@/assets/webp/v4/team-dusk.webp";
import teamImage1600 from "@/assets/webp/v4/team-dusk-1600.webp";
import teamImage828 from "@/assets/webp/v4/team-dusk-828.webp";

/**
 * The team, as a full-bleed photographic section. Ships as a teaser only
 * until real names and bios exist: never fabricate people.
 */
const TeamTeaser = () => (
  <FullBleed
    image={teamImage}
    imageSet={`${teamImage828} 828w, ${teamImage1600} 1600w, ${teamImage} 2880w`}
    alt="ElderOps engineers talking a problem through together along a desk in a daylit office"
    objectPosition="center 30%"
    minHeightClass="min-h-[78svh]"
  >
    <Kicker onDark>{teamTeaser.eyebrow}</Kicker>
    <h2 className="mt-3 max-w-3xl font-display text-title font-bold tracking-[-0.03em] text-bg-cream">
      {teamTeaser.title}
    </h2>
    <p className="mt-6 max-w-xl text-lg text-bg-cream/80">{teamTeaser.body}</p>
    <GhostLink to="/about" onDark className="mt-8">
      {teamTeaser.cta} <span aria-hidden="true">→</span>
    </GhostLink>
  </FullBleed>
);

export default TeamTeaser;
