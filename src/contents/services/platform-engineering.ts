import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "platform-engineering",

  seo: {
    title: "Turn infrastructure into a product your developers can use",
    description:
      "Build internal platforms, golden paths, and self-service developer experiences with senior platform engineers embedded into your organization.",
  },

  hero: {
    kicker: "Platform Engineering",
    title: "Turn infrastructure into a product your developers can use",
    descriptor:
      "We build the internal platform and golden paths that let product teams ship on their own instead of queueing behind a specialist.",
    primaryCta: "Talk to a platform engineer",
    photoAlt:
      "A platform engineer explaining an architecture sketch at a whiteboard to three developers in a dark office",
    photoPosition: "center 40%",
  },

  lead: "Our senior platform engineers embed directly into your organization to create self-service capabilities, reusable delivery patterns, secure defaults, and clear developer experiences, reducing the amount of infrastructure complexity every product team must solve for itself.",

  signals: {
    title: "When you would call us",
    items: [
      "Developers wait on infrastructure tickets for routine changes.",
      "Every product team maintains a different pipeline and deployment pattern.",
      "Kubernetes and cloud investment added complexity without improving developer experience.",
      "Security and compliance are applied manually, and inconsistently.",
      "An existing internal platform has low adoption because it was built around infrastructure, not developers.",
      "You are adding teams faster than your delivery model can absorb them.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Platform strategy and product definition",
        body: "Treat the platform as a product with users, a roadmap, and adoption goals.",
      },
      {
        title: "Internal developer platform architecture",
        body: "The underlying design: what is self-service, what is paved, what stays bespoke.",
      },
      {
        title: "Golden paths",
        body: "One well-supported way to build, ship, and run the service shapes you actually have.",
      },
      {
        title: "Self-service environments",
        body: "Developers provision what they need without filing a ticket.",
      },
      {
        title: "Standardized delivery",
        body: "One deployment pattern teams can rely on instead of eight they maintain.",
      },
      {
        title: "Security and governance by default",
        body: "Controls built into the path, so doing it right is the easy route.",
      },
      {
        title: "Observability built in",
        body: "Every service arrives with logging, metrics, and traces already wired.",
      },
      {
        title: "Developer portal and adoption",
        body: "Documentation, a catalog, and the enablement that makes teams actually use it.",
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

  caseStudy: {
    title: "A self-service delivery platform for eight product teams",
    client:
      "A Series B B2B SaaS company, about 60 engineers across eight product teams.",
    problem:
      "Every team had built its own pipeline and deployment pattern. Standing up a new service took the better part of a month, most of it spent waiting on a two-person infrastructure team that had become a ticket queue.",
    whatWeDid:
      "We defined golden paths for the two service shapes that covered most of their work, built a self-service template and a paved-road pipeline with security and observability wired in by default, then published a service catalog and ran a short enablement session per team.",
    results: [
      "A new service now reaches production within a day.",
      "Infrastructure tickets fell away as self-service took over.",
      "Most teams moved onto the golden path within a quarter.",
    ],
    kept: "A two-person internal platform team now owns and extends the paths we built.",
  },

  finalCta: {
    title: "Give your engineering teams a better way to deliver",
    body: "Create a supported, self-service platform that removes repeated work, embeds the right controls, and lets developers concentrate on products rather than infrastructure mechanics.",
    primaryCta: "Talk to a platform engineer",
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
