import { useEffect } from "react";
import { useLocation } from "react-router";
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
 */
const Services = () => {
  const { hash } = useLocation();

  // Footer and home-index links land on /services#<capability-id>. Layout's
  // ScrollToTop wins the race to the top first; this then takes us to the
  // chapter (rows carry scroll-mt for the fixed header).
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
  }, [hash]);

  return (
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
};

export default Services;
