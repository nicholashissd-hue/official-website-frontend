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

/**
 * The proof ledger carries only claims that are true today. It previously
 * led with engagement figures that the page itself disclaimed as samples,
 * which invited the reader to discount every other claim on the site. When
 * real engagement numbers are confirmed they drop into this same shape and
 * the layout does not move.
 */
export const proof = {
  headline: {
    value: "<4",
    unit: "%",
    label: "of applicants clear our technical bar",
    qualifier:
      "Vetted in deep technical conversations by engineers who have done the work, never a recruiter screen.",
  },
  secondary: [
    {
      value: "8",
      label:
        "capabilities, each run by senior engineers: cloud, platform, delivery, security, reliability, cost, data, and advisory",
    },
    {
      value: "Yours",
      label:
        "the assessment and roadmap are yours to keep, whether or not you continue with us",
    },
  ],
  trustLine:
    "Every engagement is led by a senior engineer who has run production systems for years.",
};

export const logosLabel = "Teams we've delivered for";

export const thirdPath = {
  eyebrow: "Why ElderOps",
  title: "A third path between consulting and staffing.",
  body: "Consulting is expensive and hands you a deck. Staffing hands you a resume and no accountability. ElderOps embeds senior engineers who own the work end to end, then hand it back when your team is ready to run it.",
  pillars: [
    {
      num: "01",
      title: "Accountability, not headcount",
      body: "measured on outcomes you can see, not hours logged.",
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
  title: "Assess. Build. Hand off.",
};

/**
 * Outcomes are stated qualitatively and completely. They previously shipped
 * bracketed placeholders ([X], [Y], [Z]) visible to the reader; a real
 * figure belongs here only once it is confirmed and attributable.
 */
export const caseFiles = {
  eyebrow: "Client work",
  title: "Real business challenges. Real engineering outcomes.",
  cases: [
    {
      title: "Cloud Modernization",
      situation:
        "A growing platform was running on aging infrastructure that broke under load and slowed every release.",
      whatWeDid:
        "We re-architected the environment, set up landing zones, and moved delivery to automated pipelines.",
      outcome:
        "Releases went from a hand-run checklist to a pipeline the team runs itself, and the load failures stopped.",
    },
    {
      title: "Data Platform Transformation",
      situation:
        "Reporting was manual, slow, and untrusted, so decisions waited on numbers no one was sure of.",
      whatWeDid:
        "We modernized the data foundation and pipelines and put governance around the data.",
      outcome:
        "Reporting runs on its own, and the numbers it produces are the ones the business now decides on.",
    },
    {
      title: "Engineering Process Improvement",
      situation:
        "The team spent more time firefighting than building, with no clear picture of what was failing.",
      whatWeDid:
        "We introduced observability, an on-call structure, and DevOps practices that replaced ticket-driven ops.",
      outcome:
        "The team can see what is failing before customers do, and the engineers are back on the roadmap.",
    },
  ],
};

export const interlude = {
  statement: "We build inside your team, not around it.",
  body: "Documentation, runbooks, and a team that runs the system after we leave.",
};

export const teamTeaser = {
  eyebrow: "The team",
  title: "The people doing the work.",
  body: "ElderOps is senior engineers, not a bench of resumes. The person who assesses your systems is the person who builds the fix. Meet the engineers you would actually work with.",
  cta: "Meet the team",
};
