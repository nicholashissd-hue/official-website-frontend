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

/**
 * The proof carries only claims that are true today. It previously led with
 * engagement figures that the page itself disclaimed as samples, which
 * invited the reader to discount every other claim on the site.
 *
 * Two secondary tiles ("8 capabilities…", "Yours…") were cut on Nicholas's
 * call, 2026-08-13. What is left is one figure and the sentence it supports,
 * rendered inside ThirdPath on Home and SeniorByDefault on Services.
 */
export const proof = {
  headline: {
    value: "<4",
    unit: "%",
    label: "of applicants clear our technical bar",
    qualifier:
      "Vetted in deep technical conversations by engineers who have done the work, never a recruiter screen.",
  },
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
 * Client work on Home: three of the eight capability case studies, selected by
 * taxonomy id rather than written again here.
 *
 * These used to be three separate stories in an older shape (situation, what we
 * did, outcome) with no client, no handoff line, and vaguer outcomes than the
 * capability pages carry. Once the eight pages adopted the rebuild spec's format
 * (Sept 2026) the site was telling client stories two different ways, and Home's
 * were the weaker half. Referencing the real ones fixes that permanently: there
 * is one place a case study is written, so Home and the capability page can never
 * drift apart, and a reader who follows the link finds the same engagement rather
 * than a near-duplicate of it.
 *
 * They are illustrative composites, so this section carries the same tag and the
 * same note the capability pages do, from `caseStudyLabel`.
 */
export const caseFiles = {
  eyebrow: "Client work",
  title: "Real business challenges. Real engineering outcomes.",
  /** Taxonomy ids. Order is the order they appear. */
  featured: [
    "cloud-infrastructure",
    "data-modernization",
    "reliability-operations",
  ],
  cta: "Read the full case",
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
