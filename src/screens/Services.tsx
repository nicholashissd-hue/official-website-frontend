import ServicesHero from "@/components/screens/services/v4/ServicesHero";
import CapabilityChapters from "@/components/screens/services/v4/CapabilityChapters";
import ServicesInterlude from "@/components/screens/services/v4/ServicesInterlude";
import SeniorByDefault from "@/components/screens/services/v4/SeniorByDefault";
import ServicesProof from "@/components/screens/services/v4/ServicesProof";
import ThirdPathCompact from "@/components/screens/services/v4/ThirdPathCompact";
import MethodCompact from "@/components/screens/services/v4/MethodCompact";

/**
 * Services, V4: one rich page. Dark dusk hero, the buyer's pain in one
 * line, all eight capabilities as anchored chapters, then the supporting
 * bands: delivery promise, seniority, sample outcomes, positioning, method.
 *
 * Deep links into the chapters are handled centrally by RouteArrival.
 */
const Services = () => (
  <>
    <ServicesHero />
    <CapabilityChapters />
    <ServicesInterlude />
    <SeniorByDefault />
    <ServicesProof />
    <ThirdPathCompact />
    <MethodCompact />
  </>
);

export default Services;
