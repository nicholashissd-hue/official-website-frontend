import FullBleed from "@/components/ui/full-bleed";
import { Kicker } from "@/components/ui/v4";
import { team } from "@/contents/screens/aboutV4";
import teamImage from "@/assets/webp/v4/team-dusk.webp";

/** The team, full-bleed. Stays a teaser until real names and bios exist. */
const AboutTeam = () => (
  <FullBleed
    image={teamImage}
    alt="ElderOps engineers in discussion around a table"
    objectPosition="center 30%"
    minHeightClass="min-h-[78svh]"
  >
    <Kicker onDark>{team.kicker}</Kicker>
    <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.6rem,5vw,4rem)] font-bold leading-none tracking-[-0.03em] text-bg-cream">
      {team.title}
    </h2>
    <p className="mt-6 max-w-xl text-[16.5px] leading-[1.6] text-bg-cream/80">
      {team.body}
    </p>
  </FullBleed>
);

export default AboutTeam;
