/**
 * Home (V4) copy — production copy from the Revision Brief with the agreed
 * contradiction rulings. Proof values are SAMPLES flagged in the UI; swap in
 * real engagement figures before launch, or drop the tile (never invent).
 */

export const hero = {
  /** BCG X hero pattern: short statement over the launch film + one-line descriptor. */
  title: "Stop hiring. Start shipping.",
  descriptor: "ElderOps is the embedded senior engineering partner.",
  primaryCta: "Get in touch",
  secondaryCta: "See what we do",
};

export const painStrip = {
  lead: "Migrations stall, cloud bills climb, and reliability slips while your team keeps the lights on instead of building.",
  tail: "Senior engineering capacity is hard to hire and harder to keep.",
};

export const proof = {
  headline: {
    value: "38",
    unit: "%",
    label: "lower monthly cloud spend",
    qualifier: "after a FinOps and rightsizing engagement",
  },
  secondary: [
    {
      value: "days → minutes",
      label: "release lead time, after CI/CD and platform work",
    },
    {
      value: "99.95%",
      label: "uptime sustained, after reliability and on-call redesign",
    },
  ],
  trustLine:
    "Every engagement is led by a senior engineer who has run production systems for years.",
  sampleNote: "Sample values · real figures before launch",
};

export const logosLabel = "Teams we've delivered for";

export const thirdPath = {
  eyebrow: "Why ElderOps",
  title: "A third path between consulting and staffing.",
  body: "Consulting is expensive and hands you a deck. Staffing hands you a resume and no accountability. ElderOps embeds senior engineers who own the work end to end, then hand it back when your team is ready to run it.",
  pillars: [
    {
      num: "01",
      title: "Ownership, not headcount",
      body: "accountable for outcomes you can measure, not hours logged.",
    },
    {
      num: "02",
      title: "Integration, not transaction",
      body: "we work inside your stack, your standups, and your tooling.",
    },
    {
      num: "03",
      title: "Senior judgment on flexible terms",
      body: "scale up or down as the work changes, no long-term commitment.",
    },
  ],
};

export const capabilities = {
  eyebrow: "Capabilities",
  title: "What we do.",
  intro:
    "Senior engineers across the initiatives that carry the most risk and cost. Eight capabilities, one embedded team.",
  cta: "See all capabilities",
};

export const method = {
  eyebrow: "How we work",
  title: "Assess. Build. Own.",
};

export const caseFiles = {
  eyebrow: "Client work",
  title: "Real Business Challenges. Real Engineering Outcomes.",
  note: "Outcome figures ship as placeholders until real engagement numbers are confirmed",
  cases: [
    {
      title: "Cloud Modernization",
      situation:
        "A growing platform was running on aging infrastructure that broke under load and slowed every release.",
      whatWeDid:
        "We re-architected the environment, set up landing zones, and moved delivery to automated pipelines.",
      outcome:
        "[Real engagement result], with release lead time going from [X] to [Y] and downtime incidents down [Z]%.",
    },
    {
      title: "Data Platform Transformation",
      situation:
        "Reporting was manual, slow, and untrusted, so decisions waited on numbers no one was sure of.",
      whatWeDid:
        "We modernized the data foundation and pipelines and put governance around the data.",
      outcome:
        "[Real engagement result]: trusted data, with reporting time cut from [X] to [Y].",
    },
    {
      title: "Engineering Process Improvement",
      situation:
        "The team spent more time firefighting than building, with no clear picture of what was failing.",
      whatWeDid:
        "We introduced observability, an on-call structure, and DevOps practices that replaced ticket-driven ops.",
      outcome:
        "[Real engagement result]: [X]% fewer incidents and engineers back to shipping features.",
    },
  ],
};

export const interlude = {
  statement: "We build it so your team can own it.",
  body: "Every engagement ends in handoff: documentation, runbooks, and a team that runs the system without us.",
};

export const teamTeaser = {
  eyebrow: "The team",
  title: "The people doing the work.",
  body: "ElderOps is senior engineers, not a bench of resumes. The person who assesses your systems is the person who builds the fix. Meet the engineers you would actually work with.",
  cta: "Meet the team",
};
