import type { ServicePage } from "./types";

const page: ServicePage = {
  id: "devops-delivery",

  seo: {
    title: "Make software delivery faster, safer, and repeatable",
    description:
      "Improve CI/CD, release engineering, automation, and delivery performance with senior DevOps engineers embedded directly into your teams.",
  },

  hero: {
    kicker: "DevOps & Delivery",
    title: "Make software delivery faster, safer, and repeatable",
    descriptor:
      "We automate the path from commit to production so release velocity rises and change-related incidents fall.",
    primaryCta: "Talk to a delivery engineer",
    photoAlt:
      "A group of engineers gathered behind a colleague at a desk, watching a deployment on a monitor at night",
    photoPosition: "center 42%",
  },

  lead: "We improve the systems, automation, controls, and working practices behind software delivery, helping teams release more confidently without trading speed for quality, security, or operational stability.",

  signals: {
    title: "When you would call us",
    items: [
      "Releases are infrequent, stressful, or depend on a few people.",
      "Teams spend real time preparing environments and coordinating handoffs.",
      "Pipelines exist but are unreliable and different for every application.",
      "Testing and security checks create late-stage surprises.",
      "Deployment failures and rollbacks are increasing.",
      "You cannot see where delivery actually slows down.",
    ],
  },

  work: {
    title: "What we do",
    groups: [
      {
        title: "Delivery assessment",
        body: "Map the value stream and find the real constraint, which is rarely the tool.",
      },
      {
        title: "CI/CD architecture",
        body: "Pipelines that are consistent across services and maintainable by the team.",
      },
      {
        title: "Build and test automation",
        body: "Fast, trustworthy checks that catch problems before review, not after release.",
      },
      {
        title: "Release and deployment engineering",
        body: "Progressive delivery, feature flags, and rollbacks that are a button rather than an event.",
      },
      {
        title: "Environment automation",
        body: "Reproducible environments on demand instead of one shared bottleneck.",
      },
      {
        title: "Toolchain rationalization",
        body: "Fewer, better-integrated tools instead of an accumulated stack.",
      },
      {
        title: "Delivery metrics",
        body: "Lead time, deploy frequency, change-failure rate, and recovery time, measured honestly.",
      },
      {
        title: "Team enablement",
        body: "The practices and documentation that keep it working after we leave.",
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

  caseStudy: {
    title: "Releases were a Thursday night event",
    client:
      "A logistics software company, about 25 engineers, shipping monthly.",
    problem:
      "Each release ran most of the evening, needed most of the team on a call, and rolled back often enough that people planned around it. Environment preparation and manual regression testing were the real cost.",
    whatWeDid:
      "We mapped the value stream, automated build and test, containerized environments so they were reproducible on demand, moved the team to trunk-based development with feature flags, and introduced progressive rollout with an automated rollback path.",
    results: [
      "Monthly releases became weekly, then daily.",
      "Deployment went from an evening on a call to a routine step inside the working day.",
      "Rollback became a single action rather than an incident.",
    ],
    kept: "Documented and run entirely by their own engineers by the time we left.",
  },

  finalCta: {
    title: "Remove the friction between an idea and a production outcome",
    body: "Build a delivery system that helps your teams move with greater speed, control, and confidence.",
    primaryCta: "Talk to a delivery engineer",
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
