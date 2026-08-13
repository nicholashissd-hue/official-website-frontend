import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "devops-delivery",

  seo: {
    title: "DevOps & Software Delivery Services | ElderOps",
    description:
      "Improve CI/CD, release engineering, automation, and delivery performance with senior DevOps engineers embedded directly into your teams.",
  },

  hero: {
    kicker: "DevOps & Delivery",
    title: "Make software delivery faster, safer, and repeatable",
    descriptor:
      "ElderOps embeds senior DevOps and delivery engineers into your organization to remove friction from the path between a code change and a reliable production release.",
    primaryCta: "Talk to a DevOps engineer",
    photoAlt:
      "A group of engineers gathered behind a colleague at a desk, watching a deployment on a monitor at night",
    photoPosition: "center 42%",
  },

  lead: "We improve the systems, automation, controls, and working practices behind software delivery, helping teams release more confidently without trading speed for quality, security, or operational stability.",

  thesis: {
    title: "Delivery problems are rarely solved by adding another tool",
    paragraphs: [
      "A slow or unreliable release process is usually the visible symptom of a wider system.",
      "Builds are inconsistent. Tests take too long or cannot be trusted. Environments differ. Deployments require a sequence of manual steps known by only a few people. Security reviews happen after development is complete. Release dates depend on multiple teams coordinating perfectly, and a failed deployment creates enough disruption that teams become reluctant to release frequently.",
      "Organizations often respond by buying another tool. The underlying process remains unchanged.",
      "ElderOps looks at software delivery as an end-to-end engineering system. Our engineers examine the flow of work from planning and source control through build, test, security, deployment, verification, and production feedback. We then help remove the bottlenecks, automate repeated work, improve controls, and establish a delivery model that teams can operate and continuously improve.",
    ],
  },

  signals: {
    title: "Where organizations commonly need help",
    intro: "You may need DevOps and delivery support when:",
    items: [
      "Releases are infrequent, stressful, or dependent on a small number of people.",
      "Teams spend significant time preparing environments or coordinating manual handoffs.",
      "CI/CD pipelines exist but are unreliable, difficult to maintain, or different for every application.",
      "Testing and security checks create late-stage surprises.",
      "Deployment failures, rollbacks, and change-related incidents are increasing.",
      "Delivery performance is discussed through activity and deadlines, but the organization cannot see where work is actually slowing down.",
    ],
  },

  work: {
    title: "What our DevOps and delivery engineers do",
    groups: [
      {
        title: "Delivery assessment and value-stream analysis",
        body: [
          "We map the real path a change takes from idea to production. That includes queues, approvals, handoffs, build time, test time, environment preparation, security reviews, release coordination, deployment, and production verification.",
          "We identify where work waits, where failures are introduced, and where senior engineering time is being consumed by repeatable manual activity. The result is a prioritized improvement plan grounded in actual delivery behavior rather than assumptions.",
        ],
      },
      {
        title: "CI/CD architecture and implementation",
        body: [
          "Our engineers design, build, repair, and standardize continuous integration and continuous delivery pipelines.",
          "We can automate compilation, testing, security analysis, artifact creation, environment promotion, deployment, verification, rollback, and release reporting. Pipelines are treated as production software: version-controlled, reviewed, observable, maintainable, and designed around clear responsibility.",
        ],
      },
      {
        title: "Build and test automation",
        body: [
          "Fast delivery depends on feedback that is both timely and trustworthy.",
          "We help improve test strategy, test execution, dependency management, build caching, parallelization, test environments, quality gates, and failure reporting. The objective is not to add the maximum number of tests. It is to give engineers the right evidence at the right point in the delivery process.",
        ],
      },
      {
        title: "Release and deployment engineering",
        body: [
          "We help teams move away from high-risk release events toward smaller, controlled, and repeatable changes.",
          "Our engineers can implement progressive delivery, feature flags, automated rollback, blue-green deployments, canary releases, immutable artifacts, environment promotion, release orchestration, and post-deployment validation. The deployment approach is matched to the application's risk, architecture, customer impact, and operational maturity.",
        ],
      },
      {
        title: "Environment and infrastructure automation",
        body: [
          "Delivery cannot be reliable when infrastructure and environments are inconsistent.",
          "We automate environment provisioning, configuration, secrets integration, infrastructure changes, test environments, ephemeral environments, and supporting services. This reduces drift and gives teams a consistent basis for validating changes before production.",
        ],
      },
      {
        title: "Toolchain rationalization and integration",
        body: [
          "Many organizations have accumulated overlapping delivery tools without a coherent operating model.",
          "We evaluate the existing toolchain, identify redundant or poorly integrated components, clarify responsibility, and simplify where appropriate. We also connect source control, work management, CI/CD, artifact repositories, security tools, change systems, observability, and communication workflows so information moves with the delivery process.",
        ],
      },
      {
        title: "Delivery metrics and continuous improvement",
        body: [
          "We help teams measure flow, stability, and outcomes, not lines of code or the number of tickets completed.",
          "That may include deployment frequency, lead time, change failure, restoration time, build health, test reliability, pipeline duration, release wait time, and repeated sources of failure. Metrics are used to identify constraints and guide engineering decisions, not to rank individual developers.",
        ],
      },
      {
        title: "Delivery practices and team enablement",
        body: [
          "DevOps is not a separate team that receives work from development. It is a way of organizing responsibility across the software lifecycle.",
          "Our engineers help establish shared responsibility, practical working agreements, repository and branching practices, release duties, operational readiness criteria, documentation, and feedback loops. We coach teams while delivering alongside them, so improvements become part of normal engineering work.",
        ],
      },
    ],
  },

  embedded: {
    title: "Embedded engineers who improve the system around delivery",
    paragraphs: [
      "An ElderOps DevOps engineer can work inside an existing product team, support several teams through a shared enablement function, lead a pipeline modernization program, or establish a new delivery capability.",
      "They participate in planning, make changes in your repositories, build and operate pipelines, collaborate with security and operations, investigate failed releases, and help product engineers adopt improved practices.",
    ],
    modelsIntro: "We can provide:",
    models: [
      "A senior DevOps engineer embedded into a product or infrastructure team.",
      "A delivery specialist focused on a critical release or transformation.",
      "A squad to standardize CI/CD across multiple products.",
      "A technical lead to define delivery architecture and engineering standards.",
      "A build-operate-transfer team that establishes the capability and transitions it internally.",
    ],
  },

  outcomes: {
    title: "What changes as a result",
    intro: "A successful engagement should produce:",
    items: [
      "Shorter and more predictable paths to production.",
      "Fewer manual handoffs and repeated operational tasks.",
      "Faster, clearer feedback when a change is unsafe.",
      "More consistent pipelines and deployment practices.",
      "Smaller, lower-risk releases with reliable rollback options.",
      "Better visibility into delivery constraints and failure patterns.",
      "More engineering time directed toward products and customers.",
    ],
  },

  why: {
    title: "Why ElderOps",
    paragraphs: [
      "Our engineers have designed, repaired, and operated delivery systems in complex multinational environments.",
      "They understand that delivery improvement requires more than configuring a CI server. It requires technical depth across software engineering, infrastructure, testing, security, cloud, and production operations.",
      "ElderOps gives you that expertise in the form best suited to the problem, from one embedded engineer to a complete delivery squad or fractional technical lead.",
    ],
  },

  finalCta: {
    title: "Remove the friction between an idea and a production outcome",
    body: "Build a delivery system that helps your teams move with greater speed, control, and confidence.",
    primaryCta: "Speak with a DevOps specialist",
  },

  faqs: [
    {
      q: "Can you work with our existing CI/CD tools?",
      a: "Yes. We work with the existing environment where it remains appropriate. The first objective is to understand the delivery problem, not replace tools unnecessarily.",
    },
    {
      q: "Can you standardize delivery across multiple teams?",
      a: "Yes. We can establish reusable pipeline components, shared controls, common deployment patterns, and platform capabilities while preserving legitimate differences between products.",
    },
    {
      q: "Do you support legacy applications as well as cloud-native systems?",
      a: "Yes. Delivery engineering can improve mainframe, on-premises, virtualized, cloud, containerized, and hybrid environments. The techniques and deployment frequency will be adapted to the architecture and level of risk.",
    },
    {
      q: "Can you help with one urgent release?",
      a: "Yes. We can support a critical release, stabilize a failing pipeline, address a recurring deployment problem, or lead a broader delivery transformation depending on the immediate need.",
    },
  ],
};

export default page;
