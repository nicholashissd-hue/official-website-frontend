export const heroText = {
  titleLineOne: "Global Engineering Talent.",
  titleLineTwo: "Enterprise Standards.",
  subtext:
    "Every engineer is technically assessed, communication evaluated, and matched to real-world delivery requirements.",
};

export const rolesText = {
  title: "Expertise Matched to Your Mission",
  subtext:
    "Three levels of senior capability, framed around the initiatives they own. Select a card to see where each role fits and what it takes responsibility for.",
};

export interface RoleProfile {
  id: number;
  title: string;
  tagline: string;
  description: string;
  idealFor: string[];
  responsibilities: string[];
}

export const rolesData: RoleProfile[] = [
  {
    id: 1,
    title: "Senior Engineer",
    tagline: "Owns delivery and technical execution across critical systems.",
    description:
      "Senior Engineers operate independently within established environments, taking ownership of implementation, system reliability, and delivery outcomes. They contribute immediately, collaborate effectively with stakeholders, and drive initiatives from planning through deployment.",
    idealFor: [
      "Feature development and platform enhancements",
      "Cloud infrastructure implementation",
      "CI/CD modernization initiatives",
      "Data pipeline development",
      "Application reliability improvements",
    ],
    responsibilities: [
      "End-to-end technical execution",
      "System design and implementation",
      "Code reviews and quality assurance",
      "Operational troubleshooting",
      "Delivery ownership within defined initiatives",
    ],
  },
  {
    id: 2,
    title: "Staff Engineer",
    tagline: "Leads cross-functional initiatives and guides architectural decisions.",
    description:
      "Staff Engineers bridge execution and strategy. They align teams, establish technical standards, and ensure engineering investments support broader business objectives. Their focus extends beyond individual systems to the health and scalability of the organization as a whole.",
    idealFor: [
      "Platform modernization efforts",
      "Multi-team engineering initiatives",
      "Reliability and observability programs",
      "Scaling cloud and data platforms",
      "Technical leadership without management overhead",
    ],
    responsibilities: [
      "Architecture review and guidance",
      "Cross-functional technical coordination",
      "Engineering standards and governance",
      "Mentorship and technical leadership",
      "Strategic planning for scalability and resilience",
    ],
  },
  {
    id: 3,
    title: "Principal Engineer / Architect",
    tagline:
      "Drives technical strategy, platform direction, and large-scale transformation initiatives.",
    description:
      "Principal Engineers and Architects provide executive-level technical leadership. They help organizations navigate complex decisions, modernize legacy environments, and build technology strategies capable of supporting long-term growth.",
    idealFor: [
      "Digital transformation programs",
      "Enterprise architecture initiatives",
      "AI and data platform strategy",
      "Cloud migration and modernization",
      "High-growth or highly regulated environments",
    ],
    responsibilities: [
      "Technology strategy development",
      "Enterprise architecture design",
      "Executive technical advisory",
      "Large-scale platform planning",
      "Organizational engineering transformation",
    ],
  },
];

export const integrationText = {
  title: "Engineers Who Feel Like They've Been on Your Team for Years",
  subtext:
    "We prioritize communication, accountability, and delivery ownership alongside technical excellence so integration happens naturally. Select a role to see what clients consistently notice first.",
};

export interface TestimonyEntry {
  pillar: string;
  quote: string;
  source: string;
}

export const testimonyData: Record<string, TestimonyEntry[]> = {
  "Senior Engineer": [
    {
      pillar: "Communication",
      quote: "Clear updates, strong documentation, and dependable delivery.",
      source: "Engineering Manager — SaaS",
    },
    {
      pillar: "Ownership",
      quote: "Takes initiatives from planning through implementation.",
      source: "VP Engineering — FinTech",
    },
    {
      pillar: "Technical Excellence",
      quote: "Deep expertise in cloud platforms and automation.",
      source: "CTO — HealthTech",
    },
    {
      pillar: "Team Integration",
      quote: "Works seamlessly alongside internal developers.",
      source: "Engineering Manager — E-Commerce",
    },
    {
      pillar: "Business Impact",
      quote: "Accelerates delivery without increasing management overhead.",
      source: "Founder — B2B Software",
    },
  ],
  "Staff Engineer": [
    {
      pillar: "Communication",
      quote: "Aligns stakeholders across engineering and product teams.",
      source: "VP Product — SaaS",
    },
    {
      pillar: "Ownership",
      quote: "Drives complex initiatives with minimal oversight.",
      source: "CTO — Logistics",
    },
    {
      pillar: "Technical Excellence",
      quote: "Provides architectural guidance and technical leadership.",
      source: "VP Engineering — FinTech",
    },
    {
      pillar: "Team Integration",
      quote: "Creates consistency across multiple teams.",
      source: "Engineering Director — Media",
    },
    {
      pillar: "Business Impact",
      quote: "Improves engineering velocity while reducing technical debt.",
      source: "COO — HealthTech",
    },
  ],
  "Principal Engineer": [
    {
      pillar: "Communication",
      quote: "Translates complex technical decisions into clear business language.",
      source: "CEO — B2B Software",
    },
    {
      pillar: "Ownership",
      quote: "Guides modernization efforts from strategy through execution.",
      source: "CTO — FinTech",
    },
    {
      pillar: "Technical Excellence",
      quote: "Designs systems capable of supporting long-term organizational growth.",
      source: "VP Engineering — E-Commerce",
    },
    {
      pillar: "Team Integration",
      quote: "Partners closely with executives, engineering leaders, and delivery teams.",
      source: "CIO — Healthcare",
    },
    {
      pillar: "Business Impact",
      quote: "Creates technology strategies that enable scale and operational efficiency.",
      source: "Founder — Logistics",
    },
  ],
};

export const vettingText = {
  title: "Why Teams Trust ElderOps Engineers",
  subtext:
    "We evaluate for more than technical skill. Every engineer in our network is assessed for technical depth, communication, ownership, and business alignment before reaching a client conversation.",
};

export const vettingPillarsData = [
  {
    title: "Technical Capability",
    description:
      "Our evaluation process goes beyond keyword matching and resumes. Engineers are assessed through architecture discussions, system design exercises, and real-world problem solving that reflects the challenges faced by modern engineering teams.",
  },
  {
    title: "Communication & Ownership",
    description:
      "Strong engineers do more than write code. We prioritize professionals who communicate clearly, collaborate effectively, and take responsibility for outcomes across distributed teams and stakeholder groups.",
  },
  {
    title: "Business Alignment",
    description:
      "Technical excellence only matters when it supports business goals. We evaluate how engineers think through tradeoffs, prioritize work, and connect technical decisions to measurable outcomes.",
  },
  {
    title: "Professional Validation",
    description:
      "Every engagement begins with confidence. We validate experience, review professional history, and verify that engineers have successfully delivered within complex environments.",
  },
];

export const criticalInitiativesText = {
  title: "Built for Critical Initiatives",
  description:
    "Whether you're modernizing infrastructure, scaling data platforms, launching AI capabilities, or accelerating product delivery, our engineers are selected for environments where execution matters.",
};

export const ctaText = {
  eyebrow: "Talent Network",
  title: "Ready to Accelerate Your Roadmap?",
  description:
    "Tell us what you're building, where you're stuck, or what expertise you're missing. We'll identify the right engineering capability and provide a curated shortlist within 48 hours.",
  buttonText: "Request a Shortlist",
};
