import FullBleed from "@/components/ui/full-bleed";
import { Kicker } from "@/components/ui/v4";
import { team } from "@/contents/screens/aboutV4";
import teamImage from "@/assets/webp/v4/team-about-dusk.webp";
import teamImage1600 from "@/assets/webp/v4/team-about-dusk-1600.webp";
import teamImage828 from "@/assets/webp/v4/team-about-dusk-828.webp";

/** The team, full-bleed. Stays a teaser until real names and bios exist. */
const AboutTeam = () => (
  <FullBleed
    image={teamImage}
    imageSet={`${teamImage828} 828w, ${teamImage1600} 1600w, ${teamImage} 2880w`}
    alt="ElderOps engineers talking together in the office at dusk"
    objectPosition="center 35%"
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
