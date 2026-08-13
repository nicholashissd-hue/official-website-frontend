import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "data-modernization",

  seo: {
    title: "Data & Technology Modernization | ElderOps",
    description:
      "Modernize legacy applications, data platforms, pipelines, and integrations with senior ElderOps engineers embedded into your organization.",
  },

  hero: {
    kicker: "Data & Modernization",
    title:
      "Modernize the systems and data your next stage of growth depends on",
    descriptor:
      "ElderOps helps organizations move beyond fragile legacy technology, fragmented data, and modernization programs that never reach production.",
    primaryCta: "Talk to a data engineer",
    photoAlt:
      "Two engineers working through a system at a desk at night beside a rain-streaked window",
    photoPosition: "center 42%",
  },

  lead: "Our senior engineers embed directly into your teams to assess the existing estate, define a practical target architecture, modernize applications and data platforms, execute low-risk migrations, and build the operational capability required to sustain the new environment.",

  thesis: {
    title: "Modernization is not a single migration event",
    paragraphs: [
      "Legacy technology often continues to deliver significant business value. The problem is the increasing cost and risk of changing it.",
      "Knowledge becomes concentrated in a small number of people. Integrations grow brittle. Release cycles slow down. Data is duplicated across systems and reconciled manually. Reporting teams disagree over definitions. New products depend on extracting information from platforms that were never designed for real-time use, cloud integration, or AI.",
      "A wholesale replacement may appear attractive, but replacing everything at once can introduce as much risk as doing nothing.",
      "ElderOps takes a phased, outcome-led approach. We help identify which systems should be retained, contained, replatformed, refactored, replaced, or retired. We modernize around clear business priorities and design coexistence deliberately, allowing the organization to create value before the entire transformation is complete.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "You may need data and modernization support when:",
    items: [
      "Legacy applications are difficult to change, expensive to operate, or dependent on scarce knowledge.",
      "Data is fragmented across operational systems, spreadsheets, warehouses, and departmental tools.",
      "Existing pipelines are brittle, slow, opaque, or difficult to recover when they fail.",
      "Reporting and analytics teams spend more time reconciling data than using it.",
      "Cloud, AI, automation, or new digital products are blocked by the current architecture.",
      "A modernization program has become too broad, too risky, or disconnected from near-term business outcomes.",
    ],
  },

  work: {
    title: "What our data and modernization engineers do",
    groups: [
      {
        title: "Estate discovery and modernization roadmap",
        body: [
          "We build a clear view of applications, data stores, integrations, dependencies, responsibility, operational risk, change frequency, cost, and business criticality.",
          "From that evidence, we help classify the estate and prioritize modernization opportunities. The roadmap balances strategic value, technical risk, delivery effort, business continuity, and the organization's capacity to absorb change.",
        ],
      },
      {
        title: "Target data and application architecture",
        body: [
          "Our engineers define the architecture required to support your future products, analytics, operations, and AI initiatives.",
          "That may include cloud data platforms, data lakes, warehouses, lakehouse patterns, operational stores, event streaming, APIs, microservices, integration platforms, containerized applications, serverless services, or modular boundaries around existing systems. The architecture is designed around actual use cases, not a generic technology blueprint.",
        ],
      },
      {
        title: "Modern data-platform engineering",
        body: [
          "We design and build scalable data platforms that make information easier to ingest, transform, govern, discover, and consume.",
          "Our engineers can implement storage, compute, orchestration, metadata, cataloging, access control, transformation frameworks, development environments, deployment automation, observability, and cost controls. We also help establish platform responsibility and self-service patterns so the data team does not become a bottleneck for every use case.",
        ],
      },
      {
        title: "Data pipelines and integration",
        body: [
          "We build and modernize batch, streaming, event-driven, and API-based data flows.",
          "Our work can include source integration, ingestion, transformation, validation, orchestration, schema management, change-data capture, data contracts, error handling, replay, lineage, and operational monitoring. Pipelines are treated as production systems with testing, deployment, responsibility, and recovery, not as one-off scripts.",
        ],
      },
      {
        title: "Application and service modernization",
        body: [
          "We help organizations improve legacy applications through the approach best suited to each system.",
          "That may involve rehosting, replatforming, refactoring, decomposing a monolith, exposing capabilities through APIs, extracting services, upgrading runtimes and frameworks, containerizing workloads, or replacing selected functionality. We focus on reducing risk and increasing changeability without introducing unnecessary architectural complexity.",
        ],
      },
      {
        title: "Migration and coexistence",
        body: [
          "Modernization programs often fail when migration is treated as a final technical step rather than a product and operational transition.",
          "Our engineers design phased migration, synchronization, validation, cutover, rollback, archival, and decommissioning. We account for users, downstream consumers, reporting, support, security, and regulatory needs. Where old and new platforms must coexist, we make the boundaries and synchronization model explicit.",
        ],
      },
      {
        title: "Data quality and governance engineering",
        body: [
          "Data quality cannot be repaired through policy documents alone.",
          "We implement validation, responsibility, data contracts, lineage, classification, access controls, retention, reconciliation, quality monitoring, issue workflows, and auditability directly into the data lifecycle. This helps teams understand which data can be trusted, who is responsible for it, and what happens when quality falls below an acceptable level.",
        ],
      },
      {
        title: "Analytics and AI readiness",
        body: [
          "AI and advanced analytics depend on accessible, relevant, governed, and operationally reliable data.",
          "We help prepare the technical foundation through improved data quality, metadata, lineage, access, feature pipelines, real-time flows, secure environments, scalable compute, and deployment practices. We can also help evaluate whether proposed AI use cases have the data, controls, economics, and operational support required to move beyond a proof of concept.",
        ],
      },
      {
        title: "Data and application operations",
        body: [
          "A modernized platform must still be operated.",
          "We establish observability, alerts, service-level expectations, incident processes, recovery procedures, capacity management, cost controls, deployment automation, and responsibility for applications and data pipelines. This ensures the new environment remains reliable after the migration team has moved on.",
        ],
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
    title: "What changes as a result",
    intro: "Successful modernization should create:",
    items: [
      "Systems that are safer and easier to change.",
      "More accessible, trustworthy, and reusable data.",
      "Reduced dependency on fragile integrations and undocumented knowledge.",
      "A phased route away from legacy risk without unnecessary disruption.",
      "Stronger foundations for analytics, automation, and AI.",
      "Better visibility into pipeline, application, and platform behavior.",
      "Internal teams capable of extending and operating the modernized environment.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "Modernization sits at the intersection of architecture, software, data, cloud, security, delivery, and operations.",
      "ElderOps assembles teams with the combination of skills required for the specific estate, without forcing the engagement into one predetermined platform or transformation method.",
      "Our engineers bring experience from large multinational environments, but the approach remains practical: understand the current reality, prioritize the right change, deliver it safely, and leave the organization stronger.",
    ],
  },

  finalCta: {
    title: "Move forward without putting the business at unnecessary risk",
    body: "Create a modernization roadmap that can be delivered, and place senior engineers directly into the work required to make it real.",
    primaryCta: "Speak with a data engineer",
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
