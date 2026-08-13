import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "reliability-operations",

  seo: {
    title: "Reliability & Operations Engineering | ElderOps",
    description:
      "Improve system reliability, observability, incident response, and operational performance with embedded ElderOps SRE and operations engineers.",
  },

  hero: {
    kicker: "Reliability & Operations",
    title: "Engineer reliability before incidents make the decision for you",
    descriptor:
      "ElderOps embeds experienced site reliability and operations engineers into your organization to improve availability, performance, observability, incident response, and operational control.",
    primaryCta: "Talk to an SRE specialist",
    photoAlt:
      "Two engineers working an incident at night in an operations room, a wall of dashboards glowing behind them",
    photoPosition: "center 45%",
  },

  lead: "We help teams move from reactive support to an engineering-led operating model, reducing repetitive work, strengthening production systems, and creating clear evidence of how services behave under real conditions.",

  thesis: {
    title: "Reliability is a product capability",
    paragraphs: [
      "Customers do not experience your architecture diagrams, cloud strategy, or deployment pipeline. They experience whether the service is available, responsive, and trustworthy when they need it.",
      "Reliability problems rarely come from a single missing tool. They emerge from unclear responsibility, weak telemetry, fragile dependencies, manual operations, untested recovery, excessive alerting, and a delivery model that rewards new features without making space for operational health.",
      "The result is familiar: teams discover problems through customers, incidents require too many people, the same failures return, on-call engineers burn out, and the organization cannot explain what level of reliability it is actually providing.",
      "ElderOps helps turn reliability into an explicit engineering discipline. Our engineers work with product, development, infrastructure, security, and support teams to define what matters, improve visibility, automate repeated work, and design systems that can withstand failure more effectively.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "You may need reliability and operations support when:",
    items: [
      "Production incidents are increasing in frequency, duration, or business impact.",
      "Monitoring exists, but teams still struggle to understand why a service is failing.",
      "Alert noise makes it difficult to identify the signals that require action.",
      "Operational knowledge is concentrated in a few individuals.",
      "Engineers spend too much time on repetitive support and manual recovery.",
      "Backups, failover, capacity, or disaster-recovery assumptions have not been tested under realistic conditions.",
    ],
  },

  work: {
    title: "What our reliability and operations engineers do",
    groups: [
      {
        title: "Reliability strategy and service priorities",
        body: [
          "Not every system needs the same level of availability, latency, recovery, or operational investment.",
          "We work with technical and business stakeholders to identify critical services, customer journeys, dependencies, risk tolerances, and failure impact. This creates a practical basis for deciding where reliability engineering effort should be concentrated.",
        ],
      },
      {
        title: "Service-level indicators and objectives",
        body: [
          "Our engineers help define measurable indicators of service behavior and realistic objectives for availability, latency, throughput, correctness, freshness, or other customer-relevant outcomes.",
          "These objectives make reliability visible. They also help teams balance feature delivery against operational risk rather than relying on vague expectations such as the system should always be up.",
        ],
      },
      {
        title: "Observability engineering",
        body: [
          "We design and improve the telemetry required to understand distributed systems. This can include logs, metrics, traces, events, dashboards, service maps, deployment context, business signals, synthetic tests, and user-experience monitoring.",
          "We help connect signals across applications, infrastructure, cloud services, networks, data pipelines, and third-party dependencies. The objective is not simply to collect more data. It is to help engineers explain what is happening, why it is happening, and what needs to be done next.",
        ],
      },
      {
        title: "Alerting and on-call improvement",
        body: [
          "We reduce noisy, duplicated, low-value alerts and improve the signals that trigger action.",
          "Our engineers can define alert responsibility, severity, escalation, runbooks, on-call rotations, incident roles, and communication paths. We help teams move away from alerts based only on infrastructure thresholds toward signals connected to service behavior and customer impact.",
        ],
      },
      {
        title: "Incident management and restoration",
        body: [
          "During an incident, teams need clear command, useful information, and safe recovery options.",
          "We help establish incident-management processes, roles, communication templates, escalation paths, status reporting, decision records, and recovery procedures. Our engineers can also participate directly in incident response, investigate technical causes, and help restore services.",
        ],
      },
      {
        title: "Root-cause analysis and learning",
        body: [
          "An incident is not closed when the service comes back online.",
          "We facilitate blameless, evidence-based reviews that identify technical causes, contributing conditions, detection gaps, response issues, and organizational factors. Actions are prioritized around reducing recurrence and improving the system, not producing a document that no one revisits.",
        ],
      },
      {
        title: "Toil reduction and operational automation",
        body: [
          "Repeated manual work consumes engineering capacity and introduces inconsistency.",
          "We identify recurring checks, support tasks, restarts, access requests, deployments, data corrections, environment changes, and recovery procedures that should be automated or eliminated. Our engineers build the scripts, services, workflows, and self-service capabilities required to remove that toil.",
        ],
      },
      {
        title: "Resilience and failure testing",
        body: [
          "We help validate how systems behave when components, dependencies, regions, networks, or workloads fail.",
          "This can include load and stress testing, dependency-failure exercises, chaos experiments, backup restoration, regional failover, game days, and recovery simulations. Exercises are designed around meaningful business scenarios and conducted with appropriate safeguards.",
        ],
      },
      {
        title: "Performance and capacity engineering",
        body: [
          "Reliability includes the ability to deliver acceptable performance as demand changes.",
          "We analyze latency, throughput, resource utilization, contention, scaling behavior, database performance, queues, caching, and critical dependencies. We then help implement improvements and establish capacity planning based on real demand.",
        ],
      },
      {
        title: "Operational readiness and recovery",
        body: [
          "Before a new service or major change enters production, we help validate responsibility, monitoring, alerting, support expectations, dependencies, runbooks, rollback, backup, capacity, and recovery.",
          "This creates a consistent standard for production readiness and reduces the number of operational problems discovered after launch.",
        ],
      },
    ],
  },

  embedded: {
    title: "Reliability engineers embedded into your operating environment",
    paragraphs: [
      "ElderOps engineers can join an existing SRE function, embed within a product team, lead an operational improvement program, or establish a new reliability capability.",
      "They work in your monitoring systems, repositories, cloud environments, incident channels, and planning processes. They build automation, tune telemetry, respond to incidents, improve architecture, and coach teams in production responsibility.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "An embedded SRE for a critical product or platform.",
      "A reliability squad focused on operational stabilization.",
      "An observability engineer to redesign telemetry and incident visibility.",
      "A technical lead to establish SRE practices and service standards.",
      "A build-operate-transfer engagement that creates an internal reliability function.",
    ],
  },

  outcomes: {
    title: "What changes as a result",
    intro: "Effective reliability engineering should create:",
    items: [
      "Earlier detection and clearer diagnosis of production problems.",
      "Faster, more controlled incident response and recovery.",
      "Fewer repeated failures and stronger follow-through after incidents.",
      "Reduced operational toil and alert fatigue.",
      "Better understanding of service-level risk and customer impact.",
      "Tested recovery procedures rather than unverified assumptions.",
      "More engineering capacity available for planned improvement and product work.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "Our engineers have operated critical systems across global and multinational environments.",
      "They understand the difference between a dashboard that looks complete and an operating model that works under pressure. ElderOps can provide the practical engineering depth required to stabilize services immediately while building a more sustainable reliability capability over time.",
    ],
  },

  finalCta: {
    title: "Build systems your customers, and your engineers, can trust",
    body: "Improve visibility, resilience, response, and operational control with senior reliability engineers embedded directly into your environment.",
    primaryCta: "Speak with an SRE specialist",
  },

  faqs: [
    {
      q: "Is SRE only relevant to very large organizations?",
      a: "No. The formality and scale of the practice should match the organization, but service responsibility, useful observability, recovery planning, automation, and incident learning are valuable well before a company reaches enterprise scale.",
    },
    {
      q: "Can you help during active production instability?",
      a: "Yes. We can support stabilization, incident response, diagnostic improvement, performance investigation, and recovery. Once immediate control is established, we can address the systemic causes behind the instability.",
    },
    {
      q: "Can you work with our current monitoring tools?",
      a: "Yes. We first assess signal quality, coverage, use, and who acts on what. Existing tools may be improved, integrated, simplified, or replaced only where there is a clear reason.",
    },
    {
      q: "Do you provide around-the-clock operations?",
      a: "We can help design operating coverage, escalation, and support models, and can assemble globally distributed teams around an agreed service requirement. The precise coverage, responsibilities, and response commitments are defined as part of the engagement.",
    },
  ],
};

export default page;
