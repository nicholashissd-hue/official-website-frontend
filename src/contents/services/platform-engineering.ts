import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "platform-engineering",

  seo: {
    title: "Platform Engineering Services | ElderOps",
    description:
      "Build internal platforms, golden paths, and self-service developer experiences with senior platform engineers embedded into your organization.",
  },

  hero: {
    kicker: "Platform Engineering",
    title: "Turn infrastructure into a product your developers can use",
    descriptor:
      "ElderOps helps organizations design, build, and operate internal platforms that give engineering teams a faster, safer, and more consistent route from idea to production.",
    primaryCta: "Talk to a platform engineer",
    photoAlt:
      "A platform engineer explaining an architecture sketch at a whiteboard to three developers in a dark office",
    photoPosition: "center 40%",
  },

  lead: "Our senior platform engineers embed directly into your organization to create self-service capabilities, reusable delivery patterns, secure defaults, and clear developer experiences, reducing the amount of infrastructure complexity every product team must solve for itself.",

  thesis: {
    title: "A platform is not a collection of tools",
    paragraphs: [
      "Many organizations already have the ingredients of a platform: cloud accounts, Kubernetes clusters, CI/CD systems, infrastructure modules, monitoring tools, security scanners, and internal documentation. The problem is that those ingredients often remain fragmented.",
      "Developers still raise tickets for environments. Each team builds its own pipeline. Security controls are interpreted differently from one service to the next. New engineers spend weeks discovering how to deploy. Infrastructure teams answer the same questions repeatedly, and the organization accumulates dozens of bespoke paths to production.",
      "Platform engineering changes that relationship. Instead of asking every product team to become an expert in cloud, networking, security, observability, and delivery tooling, a platform team turns those capabilities into reliable internal products. Developers receive a supported, self-service path for building and operating software, while the organization gains stronger consistency, governance, and reuse.",
      "ElderOps helps build the technical platform and the product discipline required for teams to adopt it.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "Platform engineering may be the right intervention when:",
    items: [
      "Developers wait on infrastructure tickets or depend on a small group of specialists to make routine changes.",
      "Every product team maintains a different pipeline, deployment pattern, or operational toolset.",
      "Kubernetes, cloud, and DevOps investments have increased complexity without materially improving developer experience.",
      "Security and compliance requirements are applied manually or inconsistently.",
      "An existing internal platform has low adoption because it was built around infrastructure needs rather than developer needs.",
      "Your organization is growing, but its delivery model does not scale with the number of teams and services.",
    ],
  },

  work: {
    title: "What our platform engineers do",
    groups: [
      {
        title: "Platform strategy and product definition",
        body: [
          "We begin by understanding the users of the platform: your developers, data engineers, application teams, operations teams, and security stakeholders.",
          "Our engineers identify the most significant sources of friction and cognitive load, map common delivery journeys, and define the platform capabilities that will create the greatest value. We help establish a platform vision, target architecture, service boundaries, responsibility model, adoption roadmap, and measurable objectives.",
          "This prevents the platform from becoming an open-ended infrastructure program with no clear user or outcome.",
        ],
      },
      {
        title: "Internal developer platform architecture",
        body: [
          "We design the technical foundation that connects cloud infrastructure, deployment systems, source control, identity, security, observability, and operational tooling into a coherent developer experience.",
          "The platform may include a developer portal, service catalog, templates, APIs, workflow orchestration, infrastructure automation, deployment capabilities, policy controls, and integrations with your existing toolchain.",
          "We work with the technology you already have where it remains fit for purpose. Platform engineering should simplify the estate, not introduce another unnecessary layer.",
        ],
      },
      {
        title: "Golden paths and reusable service patterns",
        body: [
          "Our engineers create supported paths for common workloads and development journeys. A golden path can give a team a pre-approved way to create a service, repository, pipeline, environment, database, dashboard, alerting configuration, and operational documentation using a consistent pattern.",
          "These paths reduce repeated design work while allowing exceptions when a product has a legitimate need. The objective is sensible standardization, not rigid central control.",
        ],
      },
      {
        title: "Self-service infrastructure and environments",
        body: [
          "We replace routine tickets and manual handoffs with governed self-service workflows.",
          "Developers can provision approved resources, create environments, deploy applications, access logs, request supported services, and manage routine configuration without waiting for an infrastructure engineer to perform every step. Controls remain embedded in the workflow through templates, permissions, policy, automated validation, and approved boundaries.",
        ],
      },
      {
        title: "Standardized delivery and deployment",
        body: [
          "Our platform engineers integrate CI/CD, testing, artifact management, release controls, environment promotion, feature management, and deployment strategies into repeatable platform capabilities.",
          "Teams gain consistent ways to build, test, release, roll back, and observe software. Improvements can then be made once at the platform level and made available across multiple engineering teams.",
        ],
      },
      {
        title: "Security and governance by default",
        body: [
          "We help turn organizational standards into platform behavior. Approved configurations, identity controls, secrets handling, encryption, logging, vulnerability checks, policy enforcement, network rules, and evidence collection can be built directly into platform workflows.",
          "This allows teams to move quickly without needing to reinterpret the same security and governance requirements for every new service.",
        ],
      },
      {
        title: "Observability and operational readiness",
        body: [
          "A platform should help teams operate what they build.",
          "We integrate logs, metrics, traces, dashboards, alerting, service responsibility, runbooks, health checks, and operational metadata into the developer journey. New services can begin with production readiness built in rather than adding it after the first incident.",
        ],
      },
      {
        title: "Developer portal, documentation, and adoption",
        body: [
          "Even a technically strong platform will fail if developers cannot understand or trust it.",
          "ElderOps engineers help create clear documentation, service catalogs, onboarding journeys, examples, support channels, feedback mechanisms, and platform product practices. We work directly with early users, observe where they struggle, and improve the platform based on real delivery experience.",
          "Adoption is treated as an engineering and product outcome, not an announcement.",
        ],
      },
    ],
  },

  embedded: {
    title: "Embedded platform engineers, not a platform built in isolation",
    paragraphs: [
      "Our engineers work alongside your developers, infrastructure teams, security specialists, architects, and engineering leaders.",
      "They can interview users, prioritize the platform backlog, build platform components, contribute code, establish engineering standards, support early adopters, operate the platform, and mentor internal team members.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "A platform engineer embedded into an existing enablement or infrastructure team.",
      "A platform lead to define direction, architecture, and operating practices.",
      "A multidisciplinary squad to build an internal developer platform.",
      "A build-operate-transfer team that launches the capability and transitions it internally.",
    ],
  },

  outcomes: {
    title: "What changes as a result",
    intro: "Effective platform engineering should create:",
    items: [
      "Faster onboarding and a clearer route from repository to production.",
      "Less time spent waiting on tickets or rebuilding common capabilities.",
      "Greater consistency across environments, pipelines, security, and operations.",
      "Reduced cognitive load for product engineers.",
      "More reusable engineering investments across teams.",
      "A platform that evolves as an internal product with visible users, priorities, and outcomes.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "ElderOps brings together platform, cloud, DevOps, security, and reliability experience in one embedded team.",
      "That breadth matters because an internal platform sits across multiple technical domains. It must work with the organization's architecture, delivery systems, risk requirements, and operating model, not just its infrastructure tools.",
      "Our engineers combine strategic judgment with hands-on delivery. They can help determine what the platform should be, build it with your team, and leave behind the capability required to sustain it.",
    ],
  },

  finalCta: {
    title: "Give your engineering teams a better way to deliver",
    body: "Create a supported, self-service platform that removes repeated work, embeds the right controls, and lets developers concentrate on products rather than infrastructure mechanics.",
    primaryCta: "Speak with a platform engineer",
  },

  faqs: [
    {
      q: "Do we need Kubernetes before we can adopt platform engineering?",
      a: "No. Platform engineering is an operating and product approach, not a requirement to use a particular technology. The right platform may use Kubernetes, managed cloud services, serverless technology, virtual machines, or a combination of runtimes.",
    },
    {
      q: "Can you improve an existing internal platform?",
      a: "Yes. We can assess the current platform, interview its users, identify adoption and reliability problems, rationalize the toolchain, improve core workflows, and help reposition the capability around developer needs.",
    },
    {
      q: "How is platform engineering different from DevOps?",
      a: "DevOps improves collaboration, automation, and flow across software delivery. Platform engineering creates reusable internal products that make those practices easier for multiple teams to consume. The disciplines overlap, but the platform has an explicit user, product roadmap, and self-service experience.",
    },
    {
      q: "Will a platform remove all flexibility from developers?",
      a: "It should not. A well-designed platform provides a reliable default path for common needs while supporting controlled exceptions. The objective is to remove unnecessary variation without preventing teams from making sound technical decisions.",
    },
  ],
};

export default page;
