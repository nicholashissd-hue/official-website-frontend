export const heroText = {
  title: "Engineering Expertise That Drives Business Outcomes",
  subtext:
    "ElderOps helps organizations build, scale, modernize, and optimize technology through senior engineering execution, technical leadership, and accountable delivery. Whether you're strengthening infrastructure, improving data systems, enabling AI initiatives, or accelerating product development, our team provides the expertise needed to move forward with confidence.",
};

export const industriesText = {
  title: "Industries We Support",
  subtext:
    "Sector fluency backed by engineering rigor. Expand an industry to see how a representative engagement runs — the challenges, the ElderOps approach, and the outcomes it is built to produce.",
};

export interface IndustryCaseStudy {
  headline: string;
  summary: string;
  challenges: string[];
  approach: string[];
  outcomes: string[];
}

export interface Industry {
  id: number;
  number: string;
  title: string;
  caseStudy: IndustryCaseStudy;
}

export const industriesData: Industry[] = [
  {
    id: 1,
    number: "01",
    title: "FinTech & Payments",
    caseStudy: {
      headline: "Modernizing Payment Infrastructure for Scalability",
      summary:
        "A rapidly growing financial services organization was experiencing deployment bottlenecks, inconsistent environments, and growing operational risk as transaction volume increased.",
      challenges: [
        "Manual deployment processes",
        "Infrastructure drift across environments",
        "Limited monitoring and observability",
        "Scaling concerns during peak transaction periods",
      ],
      approach: [
        "Implemented Infrastructure as Code",
        "Automated deployment pipelines",
        "Established monitoring and alerting standards",
        "Improved environment consistency across development, staging, and production",
      ],
      outcomes: [
        "Faster release cycles",
        "Reduced deployment risk",
        "Improved platform reliability",
        "Increased operational visibility",
      ],
    },
  },
  {
    id: 2,
    number: "02",
    title: "Healthcare & HealthTech",
    caseStudy: {
      headline: "Improving Reliability for a Patient-Facing Platform",
      summary:
        "A healthcare technology provider needed stronger operational controls and infrastructure reliability to support growing user demand and evolving compliance requirements.",
      challenges: [
        "Inconsistent deployment processes",
        "Limited disaster recovery planning",
        "Growing infrastructure complexity",
        "Increased uptime expectations",
      ],
      approach: [
        "Standardized cloud infrastructure",
        "Enhanced backup and recovery processes",
        "Improved monitoring and incident visibility",
        "Established repeatable deployment workflows",
      ],
      outcomes: [
        "Increased system reliability",
        "Reduced operational risk",
        "Improved recovery preparedness",
        "Greater engineering efficiency",
      ],
    },
  },
  {
    id: 3,
    number: "03",
    title: "E-Commerce & Retail",
    caseStudy: {
      headline: "Preparing an Online Platform for Seasonal Growth",
      summary:
        "An e-commerce business needed to ensure its platform could handle increased traffic and transaction volume during peak sales periods.",
      challenges: [
        "Performance concerns under load",
        "Manual infrastructure management",
        "Limited operational visibility",
        "Scaling uncertainty",
      ],
      approach: [
        "Optimized cloud architecture",
        "Implemented infrastructure automation",
        "Added monitoring and performance metrics",
        "Improved deployment and rollback processes",
      ],
      outcomes: [
        "Improved scalability",
        "Better customer experience",
        "Reduced downtime risk",
        "Faster operational response",
      ],
    },
  },
  {
    id: 4,
    number: "04",
    title: "SaaS & B2B Software",
    caseStudy: {
      headline: "Building a Foundation for Product Growth",
      summary:
        "A software company was preparing for rapid customer growth but lacked mature engineering processes and operational standards.",
      challenges: [
        "Technical debt accumulation",
        "Slow deployment cycles",
        "Limited observability",
        "Inconsistent engineering workflows",
      ],
      approach: [
        "Implemented CI/CD pipelines",
        "Established monitoring and logging standards",
        "Improved development workflows",
        "Created documentation and operational processes",
      ],
      outcomes: [
        "Faster product delivery",
        "Improved engineering productivity",
        "Greater platform stability",
        "Increased organizational scalability",
      ],
    },
  },
  {
    id: 5,
    number: "05",
    title: "Logistics & Supply Chain",
    caseStudy: {
      headline: "Increasing Visibility Across Operational Systems",
      summary:
        "A logistics organization relied on multiple disconnected systems that limited operational visibility and reporting capabilities.",
      challenges: [
        "Fragmented data sources",
        "Delayed reporting",
        "Manual processes",
        "Limited operational insights",
      ],
      approach: [
        "Built centralized data pipelines",
        "Implemented reporting infrastructure",
        "Improved data accessibility",
        "Established governance and monitoring standards",
      ],
      outcomes: [
        "Faster decision making",
        "Improved operational visibility",
        "Reduced manual effort",
        "More reliable reporting",
      ],
    },
  },
  {
    id: 6,
    number: "06",
    title: "Media & Entertainment",
    caseStudy: {
      headline: "Scaling Content Delivery Infrastructure",
      summary:
        "A digital media organization required improved infrastructure and operational processes to support audience growth and increasing content demands.",
      challenges: [
        "Growing traffic volumes",
        "Infrastructure scalability concerns",
        "Limited monitoring capabilities",
        "Increasing operational complexity",
      ],
      approach: [
        "Modernized cloud infrastructure",
        "Improved monitoring and alerting",
        "Automated deployment workflows",
        "Enhanced operational documentation",
      ],
      outcomes: [
        "Improved platform performance",
        "Better scalability",
        "Reduced operational risk",
        "Faster issue resolution",
      ],
    },
  },
];

export const capabilitiesText = {
  title: "Technical Capability Across Your Entire Roadmap",
  subtext:
    "Build, modernize, optimize, and scale with experienced engineering teams.",
};

export const capabilitiesData = [
  {
    id: 1,
    title: "Cloud, DevOps & Reliability",
    value:
      "Build resilient cloud platforms that support growth, reliability, and faster delivery.",
    description:
      "Whether you're modernizing infrastructure, improving deployment velocity, or reducing operational risk, we provide engineers who help keep critical systems running and teams moving forward.",
    capabilities: [
      "Cloud architecture and modernization",
      "DevOps and platform engineering",
      "Infrastructure automation",
      "Reliability and observability",
    ],
  },
  {
    id: 2,
    title: "Data Platforms & Engineering",
    value:
      "Create trusted data foundations that support reporting, analytics, automation, and product innovation.",
    description:
      "From scalable pipelines to governed data platforms, we help organizations transform fragmented information into a strategic asset.",
    capabilities: [
      "Data platform architecture",
      "Data pipelines and integration",
      "Warehousing and lakehouse solutions",
      "Data governance and quality",
    ],
  },
  {
    id: 3,
    title: "Analytics & Business Intelligence",
    value:
      "Transform data into actionable insight that drives better decisions across the business.",
    description:
      "We help organizations establish meaningful metrics, executive visibility, and self-service analytics that improve performance and alignment.",
    capabilities: [
      "Executive dashboards",
      "KPI development",
      "Reporting modernization",
      "Analytics governance",
    ],
  },
  {
    id: 4,
    title: "AI / ML Enablement",
    value:
      "Operationalize AI initiatives with the engineering foundations required for long-term success.",
    description:
      "Whether you're launching your first AI-driven product or scaling existing models, we provide the infrastructure and expertise needed to move from proof-of-concept to production.",
    capabilities: [
      "AI platform engineering",
      "MLOps implementation",
      "Model deployment",
      "Performance monitoring",
    ],
  },
  {
    id: 5,
    title: "Product Engineering",
    value:
      "Deliver software products faster without sacrificing scalability, reliability, or user experience.",
    description:
      "Our engineers support the full product lifecycle, helping teams accelerate delivery while maintaining technical excellence.",
    capabilities: [
      "Application development",
      "API and backend engineering",
      "Platform services",
      "Front-end delivery",
    ],
  },
];

export const bespokeText = {
  eyebrow: "Bespoke",
  title: "Something more specific?",
  description:
    "Every roadmap is different. Tell us what you're building and we'll shape a bespoke engagement around it — the capability mix, team structure, and delivery model that fit your goals.",
  buttonText: "Make an Inquiry",
};

export const valueText = {
  title: "How We Drive Value",
  subtext: "The right engineering talent creates measurable business outcomes.",
};

export const valueData = [
  {
    title: "Ship Faster",
    description: "Strong delivery cadence, clean handoffs, clear ownership.",
  },
  {
    title: "Improve Reliability",
    description: "Observability practices, automation, incident readiness.",
  },
  {
    title: "Increase Engineering Efficiency",
    description:
      "Get more value from every engineering dollar through automation, improved processes, and senior-level execution.",
  },
  {
    title: "Make Better Decisions",
    description:
      "Create trusted reporting, meaningful metrics, and accessible insights that help teams act with confidence.",
  },
  {
    title: "Scale With Confidence",
    description:
      "Build systems, processes, and engineering foundations that support growth without creating operational chaos.",
  },
];

export const engagementText = {
  title: "Engineering Support That Fits Your Organization",
  subtext:
    "Whether you need a single specialist, a managed team, or delivery ownership for a strategic initiative, ElderOps adapts to your roadmap and goals.",
  footerText: "Start small. Scale when ready. The model adapts as your roadmap evolves.",
};

export const engagementModelsData = [
  {
    id: 1,
    scale: "Individual Engineer",
    title: "Team Extension",
    description:
      "Add experienced engineers directly into your existing team to accelerate delivery, fill skill gaps, and increase capacity without expanding permanent headcount.",
    bestFor: "Growing teams that need additional engineering expertise quickly.",
  },
  {
    id: 2,
    scale: "Dedicated Team",
    title: "Dedicated Engineering Teams",
    description:
      "Cross-functional engineering teams managed through structured delivery, accountability, and performance oversight.",
    bestFor:
      "Organizations building new products, modernizing platforms, or scaling multiple initiatives simultaneously.",
  },
  {
    id: 3,
    scale: "Managed Delivery",
    title: "Outcome-Based Delivery",
    description:
      "We take ownership of defined engineering initiatives from planning through execution, delivering against agreed objectives and milestones.",
    bestFor:
      "Strategic initiatives that require clear accountability and execution ownership.",
  },
];

export const gettingStartedText = {
  title: "Getting Started Is Simple",
  subtext:
    "A focused path from first conversation to engineers contributing on your roadmap.",
};

export const gettingStartedData = [
  {
    step: "01",
    title: "Define Your Objectives",
    description:
      "We align on technical requirements, business goals, team structure, and desired outcomes.",
  },
  {
    step: "02",
    title: "Review a Curated Shortlist",
    description:
      "Receive a focused selection of engineers matched to your technical and organizational needs.",
  },
  {
    step: "03",
    title: "Validate the Fit",
    description:
      "Interview candidates and confirm technical capability, communication style, and team alignment.",
  },
  {
    step: "04",
    title: "Launch with Confidence",
    description:
      "Structured onboarding and clear expectations ensure engineers contribute quickly and effectively.",
  },
];

export const ctaText = {
  eyebrow: "Engagement Design",
  title: "Let's Design the Right Engagement",
  description:
    "Tell us what you're building, and we'll recommend the team structure, delivery model, and expertise that best fits your goals.",
  buttonText: "Tell Us What You're Building",
};
