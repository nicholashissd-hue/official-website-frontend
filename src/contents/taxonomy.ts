/**
 * The service taxonomy — single source of truth (Revision Brief, Aug 2026).
 * Nav dropdowns, footer columns, capability grids, and the contact form's
 * focus-area options all read from here so the labels can never drift.
 */

export type Service = {
  /** Two-digit index, rendered in mono ("01" … "08"). */
  num: string;
  /** Stable id — used for anchors on /services (#cloud-infrastructure). */
  id: string;
  /** Noun-phrase label, exactly as specified in the brief. */
  label: string;
  /** One-line gerund value line shown under the label. */
  gerund: string;
  /** Pain-first partner-voice body sentence. */
  body: string;
  /** Sub-offering chips. */
  subs: string[];
};

export const SERVICES: Service[] = [
  {
    num: "01",
    id: "cloud-infrastructure",
    label: "Cloud & Infrastructure",
    gerund: "Modernizing your cloud foundation for reliability and speed.",
    body: "Half-finished migrations and hand-built environments slow every release; we help companies build cloud-native foundations, landing zones, and infrastructure as code that scale cleanly.",
    subs: ["Cloud migration", "Landing zones", "IaC"],
  },
  {
    num: "02",
    id: "platform-engineering",
    label: "Platform Engineering",
    gerund:
      "A scalable delivery foundation that cuts operational friction so teams ship faster.",
    body: "When every deploy needs a specialist, delivery crawls; we help companies build internal platforms and golden paths so product teams self-serve.",
    subs: ["Internal developer platform", "Golden paths", "Developer experience"],
  },
  {
    num: "03",
    id: "devops-delivery",
    label: "DevOps & Delivery",
    gerund:
      "Automation over ticket-driven ops, raising change velocity without sacrificing stability.",
    body: "Manual pipelines and approval queues cap how fast you can ship; we help companies automate CI/CD and release so change velocity rises and incidents fall.",
    subs: ["CI/CD", "Release automation", "Product engineering"],
  },
  {
    num: "04",
    id: "security-devsecops",
    label: "Security & DevSecOps",
    gerund:
      "Security embedded in every layer so trust is provable and cyber risk becomes a business metric.",
    body: "Bolt-on security fails audits and stalls launches; we help companies embed controls, scanning, and policy into the pipeline so trust is provable.",
    subs: ["DevSecOps", "Cloud security posture", "Compliance readiness"],
  },
  {
    num: "05",
    id: "reliability-operations",
    label: "Reliability & Operations",
    gerund:
      "Catching issues before they hit the business, so you build instead of firefight.",
    body: "Always-on expectations meet a team stretched thin on call; we help companies stand up observability, SLOs, and incident response that hold under load.",
    subs: ["Observability", "SLOs", "Incident response"],
  },
  {
    num: "06",
    id: "finops",
    label: "Cloud Cost Optimization (FinOps)",
    gerund:
      "Turning runaway cloud spend into a managed line item that lowers total cost of ownership.",
    body: "Cloud bills grow faster than usage and no one owns the number; we help companies instrument spend, right-size, and set FinOps guardrails that stick.",
    subs: ["Cost visibility", "Right-sizing", "FinOps guardrails"],
  },
  {
    num: "07",
    id: "data-modernization",
    label: "Data & Modernization",
    gerund:
      "Modernizing core systems and data foundations to cut tech debt and speed decisions.",
    body: "Aging systems and brittle pipelines slow every decision; we help companies modernize data platforms and retire tech debt without halting the business.",
    subs: ["Data platform", "Analytics and BI", "AI/ML enablement"],
  },
  {
    num: "08",
    id: "technology-advisory",
    label: "Technology Advisory (Fractional)",
    gerund:
      "Senior judgment on flexible terms; we advise, build, and hand off so your team owns it, at any stage.",
    body: "Sometimes you need direction before headcount; we help companies set architecture and roadmap, then build alongside your team and hand off.",
    subs: ["Fractional architecture", "Roadmap", "Technical due diligence"],
  },
];

/** Short labels for tight spaces (home index, footer column). */
export const serviceShortLabel = (s: Service) =>
  s.label.replace(" (FinOps)", "").replace(" (Fractional)", "");

/** The named method — one vocabulary sitewide. */
export const METHOD = [
  {
    num: "01",
    title: "Assess",
    body: "We map where risk, cost, and delivery drag actually live and give you a clear roadmap. You keep the assessment whether or not you continue with us.",
  },
  {
    num: "02",
    title: "Build",
    body: "Senior engineers embed and do the work: migrations, platforms, pipelines, security, and cost control, measured against the roadmap.",
  },
  {
    num: "03",
    title: "Own",
    body: "We document, upskill your team, and hand off. The goal is a system your team runs without us, with support on flexible terms if you want it.",
  },
] as const;
