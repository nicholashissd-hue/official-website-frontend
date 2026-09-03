import ServicesHero from "@/components/screens/services/v4/ServicesHero";
import ServicesPain from "@/components/screens/services/v4/ServicesPain";
import CapabilitySchematic from "@/components/screens/services/v4/CapabilitySchematic";
import ServicesInterlude from "@/components/screens/services/v4/ServicesInterlude";
import SeniorByDefault from "@/components/screens/services/v4/SeniorByDefault";

/**
 * Services, V4: one rich page. Dark dusk hero, the buyer's pain in one line,
 * all eight capabilities drawn as one schematic plate, then the delivery promise,
 * who does the work, and the evidence.
 *
 * It used to close with the positioning band and the method, both restating
 * the home page, so the page got less specific the further a buyer scrolled
 * and ended on someone else's argument. The method has its own page and the
 * interlude links to it. The trailing proof strip went the same way: its
 * figure now closes SeniorByDefault, which is the claim it proves.
 *
 * Deep links into the schematic's schedule are handled centrally by RouteArrival.
 */
const Services = () => (
  <>
    <ServicesHero />
    <ServicesPain />
    <CapabilitySchematic />
    <ServicesInterlude />
    <SeniorByDefault />
  </>
);

export default Services;
