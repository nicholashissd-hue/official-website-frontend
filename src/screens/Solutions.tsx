import Hero from "@/components/screens/talents/Hero";
import RoleMatrix from "@/components/screens/talents/RoleMatrix";
import Capabilities from "@/components/screens/solutions/Capabilities";
import VettingPillars from "@/components/screens/talents/VettingPillars";
import GettingStarted from "@/components/screens/solutions/GettingStarted";

/**
 * Solutions — the merged talent + solutions page. Opens with the talent hero
 * (and its ElderOps delivery console), then alternates dark/light surfaces:
 * roles → capabilities → the vetting bar → get started.
 */
const Solutions = () => {
  return (
    <>
      <Hero />
      <RoleMatrix />
      <Capabilities />
      <VettingPillars />
      <GettingStarted />
    </>
  );
};

export default Solutions;
