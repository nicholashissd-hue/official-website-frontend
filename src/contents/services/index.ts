import { SERVICES } from "@/contents/taxonomy";
import type { ServicePage } from "./types";

import cloudInfrastructure from "./cloud-infrastructure";
import platformEngineering from "./platform-engineering";
import devopsDelivery from "./devops-delivery";
import securityDevsecops from "./security-devsecops";
import reliabilityOperations from "./reliability-operations";
import finops from "./finops";
import dataModernization from "./data-modernization";
import technologyAdvisory from "./technology-advisory";

export type { ServicePage } from "./types";

/** Keyed by taxonomy id, so a page can never exist for a capability we do not sell. */
export const SERVICE_PAGES: Record<string, ServicePage> = {
  "cloud-infrastructure": cloudInfrastructure,
  "platform-engineering": platformEngineering,
  "devops-delivery": devopsDelivery,
  "security-devsecops": securityDevsecops,
  "reliability-operations": reliabilityOperations,
  finops,
  "data-modernization": dataModernization,
  "technology-advisory": technologyAdvisory,
};

/** Every capability in the taxonomy must have a page; this is what proves it. */
export const MISSING_SERVICE_PAGES = SERVICES.filter(
  (service) => !SERVICE_PAGES[service.id],
).map((service) => service.id);

/**
 * "Why ElderOps" — the shared band that closes all eight pages, above the
 * site's own CTA.
 *
 * This is the one section the concise rewrite (Sept 2026) genuinely could
 * merge. Every page used to carry its own `why` block immediately above this
 * band, and the two said the same thing in sequence: senior engineers, matched
 * to the problem, who leave capability behind. The per-page version is gone
 * and this band now carries the kicker.
 *
 * The draft carried a headcount figure here ("a global network of more than
 * 250 engineers"). It is held back deliberately: the site's copy rules
 * forbid unverified numbers, and "network" is the staffing-marketplace word
 * the August copy pass removed from every buyer page. Swap the fourth label
 * back in once the figure is confirmed and the wording is agreed.
 */
export const sharedProof = {
  kicker: "Why ElderOps",
  title: "Senior expertise. Embedded delivery. Lasting capability.",
  paragraphs: [
    "ElderOps gives organizations direct access to senior engineers with experience across large, complex, and multinational technology environments.",
    "We can embed one specialist, assemble a multidisciplinary team, provide fractional technical leadership, or take responsibility for a defined engineering outcome.",
    "Our people work inside your delivery environment, alongside your engineers, product teams, security stakeholders, and business leaders. They bring the judgment to make difficult decisions, the technical depth to implement them, and the discipline to leave your organization with stronger systems and stronger internal capability.",
  ],
  points: [
    {
      label: "Senior by default",
      body: "Every engagement is led by an engineer who has run production systems for years.",
    },
    {
      label: "Embedded into your teams",
      body: "Engineers work within your systems, processes, and delivery environment.",
    },
    {
      label: "Advisory through execution",
      body: "From technical direction and architecture to implementation and production.",
    },
    {
      label: "Built for knowledge transfer",
      body: "Immediate delivery without creating unnecessary long-term dependency.",
    },
  ],
};

/**
 * The case-study band's illustrative tag. Currently NOT RENDERED anywhere:
 * Nicholas asked for it off "for now" (Sept 2026). Kept here, and kept as the
 * single definition, so turning it back on is a two line change in
 * ServiceCaseStudy and CaseFiles rather than rewriting the copy.
 */
export const caseStudyLabel = {
  kicker: "Illustrative example",
  note: "A composite of engagements of this shape, not a named client. We publish figures only when we can attribute them.",
};

/** Label for the cross-navigation strip at the foot of every capability page. */
export const otherCapabilities = {
  kicker: "The other capabilities",
  title: "One embedded team, eight capabilities.",
};

export const faqLabel = {
  kicker: "Questions",
  title: "Frequently asked questions.",
};
