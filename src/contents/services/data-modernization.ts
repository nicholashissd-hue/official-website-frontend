import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "data-modernization",

  seo: {
    title:
      "Modernize the systems and data your next stage of growth depends on",
    description:
      "Modernize legacy applications, data platforms, pipelines, and integrations with senior ElderOps engineers embedded into your organization.",
  },

  hero: {
    kicker: "Data & Modernization",
    title:
      "Modernize the systems and data your next stage of growth depends on",
    descriptor:
      "We modernize core systems and data foundations in deliverable slices, so tech debt shrinks without halting the business.",
    primaryCta: "Talk to a data engineer",
    photoAlt:
      "Two engineers working through a system at a desk at night beside a rain-streaked window",
    photoPosition: "center 42%",
  },

  lead: "Our senior engineers embed directly into your teams to assess the existing estate, define a practical target architecture, modernize applications and data platforms, execute low-risk migrations, and build the operational capability required to sustain the new environment.",

  signals: {
    title: "When you would call us",
    items: [
      "Legacy applications are costly to change and depend on scarce knowledge.",
      "Data is fragmented across operational systems, spreadsheets, and departmental tools.",
      "Pipelines are brittle, slow, or hard to recover when they fail.",
      "Analysts spend more time reconciling data than using it.",
      "Cloud, AI, or new products are blocked by the current architecture.",
      "A modernization program has grown too broad and too risky to land.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Estate discovery and roadmap",
        body: "Understand what exists and sequence modernization into slices that ship.",
      },
      {
        title: "Target architecture",
        body: "A data and application design that matches where the business is going.",
      },
      {
        title: "Data platform engineering",
        body: "The warehouse, lakehouse, or storage layer, built to be operated.",
      },
      {
        title: "Pipelines and integration",
        body: "Orchestrated, tested, observable data movement instead of brittle nightly jobs.",
      },
      {
        title: "Application modernization",
        body: "Replatform, refactor, or rebuild, chosen per workload rather than by policy.",
      },
      {
        title: "Migration and coexistence",
        body: "Run old and new together safely rather than betting on a big-bang cutover.",
      },
      {
        title: "Data quality and governance",
        body: "Ownership, contracts, and definitions so the numbers can be trusted.",
      },
      {
        title: "Analytics and AI readiness",
        body: "Get the foundations right before the models go on top.",
      },
      {
        title: "Data operations",
        body: "Monitoring, recovery, and ownership for the pipelines that matter.",
      },
    ],
  },

  embedded: {
    title: "Engineers embedded from discovery through production",
    paragraphs: [
      "ElderOps can embed architects, data engineers, software engineers, cloud engineers, DevOps specialists, security engineers, and reliability engineers around the modernization outcome.",
      "They work within your teams and technology estate to analyze systems, build target components, migrate data, update applications, automate delivery, validate behavior, and support production transition.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "An embedded specialist for a defined data or application problem.",
      "A modernization squad responsible for a specific domain or platform.",
      "A technical lead to define architecture and sequence the program.",
      "A migration team for data, applications, or integrations.",
      "A build-operate-transfer engagement that establishes the new capability and transitions it internally.",
    ],
  },

  outcomes: {
    title: "What changes",
    items: [
      "Reporting is trusted and current.",
      "Modernization lands in increments, not one risky event.",
      "Legacy systems retire on a path, not on a deadline.",
    ],
  },

  caseStudy: {
    title: "Reporting took a week and nobody trusted the number",
    client:
      "A long-established services business with a legacy ERP at the center of operations.",
    problem:
      "Data lived across the ERP, a warehouse, spreadsheets, and departmental tools. Nightly jobs broke often and silently. Analysts spent most of the week reconciling figures, and a modernization program had grown so broad it had stopped shipping anything.",
    whatWeDid:
      "We cut the program into slices that could each deliver on their own, stood up a modern data platform, replaced the brittle jobs with orchestrated and tested pipelines, defined ownership and definitions for the core business entities, and moved reporting across while the legacy system kept running in coexistence rather than a risky cutover.",
    results: [
      "Reporting refreshes on a daily cycle instead of a weekly scramble.",
      "One agreed definition for the core metrics, used by every team.",
      "Analyst time shifted from reconciliation to actual analysis.",
    ],
    kept: "Their data engineer owns the platform. Legacy retirement is now incremental and scheduled.",
  },

  finalCta: {
    title: "Move forward without putting the business at unnecessary risk",
    body: "Create a modernization roadmap that can be delivered, and place senior engineers directly into the work required to make it real.",
    primaryCta: "Talk to a data engineer",
  },

  faqs: [
    {
      q: "Do we need to replace all our legacy systems?",
      a: "No. Modernization can include retaining, containing, integrating, rehosting, replatforming, refactoring, replacing, or retiring systems. The appropriate decision depends on business value, risk, cost, and future requirements.",
    },
    {
      q: "Can you modernize applications and data together?",
      a: "Yes. In many environments, applications, data stores, integrations, and reporting are tightly connected. Addressing them together can reduce migration risk and prevent the new platform from inheriting the same structural problems.",
    },
    {
      q: "Can you support a phased migration?",
      a: "Yes. We design migration waves, coexistence, validation, rollback, and decommissioning around business continuity. A phased approach is often preferable to a single high-risk cutover.",
    },
    {
      q: "Can you help us become ready for AI?",
      a: "Yes. We can assess data availability, quality, governance, architecture, security, operational readiness, and cost. We then help build the data and engineering foundations required for viable AI use cases.",
    },
  ],
};

export default page;
