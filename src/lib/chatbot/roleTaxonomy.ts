import type { AlternativeRole } from "./types.js";

export type RoleTaxonomyEntry = {
  role: string;
  summary: string;
  whenToRecommend: string;
  signals: string[];
  skills: string[];
  alternatives: AlternativeRole[];
  defaultSeniority: string;
  interviewFocusAreas: string[];
  followUpQuestions: string[];
};

export const roleTaxonomy: RoleTaxonomyEntry[] = [
  {
    role: "Frontend Engineer",
    summary:
      "You need someone who can build browser-based user interfaces, dashboards, and polished web experiences.",
    whenToRecommend:
      "web pages, dashboards, UI implementation, React, Vue, Angular, or browser-based experiences",
    signals: [
      "frontend",
      "front end",
      "react",
      "vue",
      "angular",
      "dashboard",
      "landing page",
      "web page",
      "user interface",
      "browser",
      "responsive",
      "css",
      "tailwind",
    ],
    skills: ["React", "TypeScript", "HTML", "CSS", "Responsive UI", "Accessibility"],
    alternatives: [
      {
        role: "Full Stack Engineer",
        reason: "Useful if the same person also needs to build APIs or backend logic.",
      },
      {
        role: "UI/UX Designer",
        reason: "Useful if the product still needs wireframes, research, or visual design direction.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Component architecture",
      "Responsive implementation",
      "Accessibility",
      "State management",
      "API integration",
    ],
    followUpQuestions: [
      "Do you already have designs or wireframes?",
      "Which frontend framework are you using?",
      "Does this person also need to connect the UI to backend APIs?",
    ],
  },
  {
    role: "Backend Engineer",
    summary:
      "You need someone who can build server-side application logic, APIs, integrations, and database-connected services.",
    whenToRecommend:
      "APIs, server logic, authentication, payments, databases connected to apps, or integrations",
    signals: [
      "backend",
      "back end",
      "api",
      "apis",
      "server",
      "authentication",
      "auth",
      "payment",
      "stripe",
      "integration",
      "database connected",
      "business logic",
      "node",
      "express",
      "django",
    ],
    skills: ["API design", "Node.js", "Authentication", "Databases", "Integrations", "Security"],
    alternatives: [
      {
        role: "Full Stack Engineer",
        reason: "Useful if the same person must also build the customer-facing interface.",
      },
      {
        role: "Database Administrator",
        reason: "Useful if the main risk is schema design, SQL performance, or database reliability.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "API architecture",
      "Authentication and authorization",
      "Database integration",
      "Error handling",
      "Security practices",
    ],
    followUpQuestions: [
      "Which backend stack are you using?",
      "Will this person own database design too?",
      "Are there third-party systems or payments to integrate?",
    ],
  },
  {
    role: "Full Stack Engineer",
    summary:
      "You likely need one engineer who can own both the user-facing interface and the backend services behind it.",
    whenToRecommend:
      "both frontend and backend work, especially for an MVP, admin portal, SaaS platform, or small product team",
    signals: [
      "full stack",
      "fullstack",
      "frontend and backend",
      "front end and back end",
      "mvp",
      "saas",
      "platform",
      "admin portal",
      "web app",
      "build the whole",
      "end to end",
    ],
    skills: ["React", "TypeScript", "API design", "Databases", "Authentication", "Deployment basics"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if the product has heavier server-side logic than UI work.",
      },
      {
        role: "Frontend Engineer",
        reason: "Useful if the main priority is polish, usability, and browser-based implementation.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "End-to-end product ownership",
      "Frontend architecture",
      "Backend architecture",
      "Database design",
      "Shipping discipline",
    ],
    followUpQuestions: [
      "Is this an MVP or an existing product?",
      "Do you already have a backend or database?",
      "How important is UI polish compared with speed to launch?",
    ],
  },
  {
    role: "Mobile App Developer",
    summary:
      "You need someone who can build and ship mobile experiences for iOS, Android, or cross-platform frameworks.",
    whenToRecommend:
      "iOS, Android, Flutter, React Native, mobile app features, or mobile app publishing",
    signals: [
      "mobile",
      "ios",
      "android",
      "react native",
      "flutter",
      "app store",
      "play store",
      "mobile app",
      "tablet",
      "swift",
      "kotlin",
    ],
    skills: ["React Native", "Flutter", "iOS", "Android", "Mobile UI", "App publishing"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if the mobile app also needs APIs, authentication, or data services.",
      },
      {
        role: "UI/UX Designer",
        reason: "Useful if the mobile flows and user journeys still need to be designed.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Mobile architecture",
      "Platform-specific constraints",
      "API integration",
      "Performance",
      "App release process",
    ],
    followUpQuestions: [
      "Do you need iOS, Android, or both?",
      "Are you open to cross-platform development?",
      "Does the app need to connect to an existing backend?",
    ],
  },
  {
    role: "DevOps Engineer",
    summary:
      "You need someone who can improve deployments, CI/CD, containers, infrastructure automation, and release workflows.",
    whenToRecommend:
      "CI/CD, deployment pipelines, Docker, Kubernetes, infrastructure automation, or release workflows",
    signals: [
      "devops",
      "ci/cd",
      "cicd",
      "deployment",
      "deploy",
      "pipeline",
      "docker",
      "kubernetes",
      "terraform",
      "infrastructure automation",
      "release",
      "environment",
    ],
    skills: ["CI/CD", "Docker", "Kubernetes", "Terraform", "Monitoring", "Release automation"],
    alternatives: [
      {
        role: "Cloud Engineer",
        reason: "Useful if the main focus is cloud architecture, migration, or cost optimization.",
      },
      {
        role: "Site Reliability Engineer",
        reason: "Useful if the main issue is uptime, incident response, or production reliability.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Deployment pipelines",
      "Infrastructure as code",
      "Containerization",
      "Environment strategy",
      "Operational risk reduction",
    ],
    followUpQuestions: [
      "Which cloud provider are you using?",
      "Do you already have CI/CD in place?",
      "Is the bigger issue deployment speed or production reliability?",
    ],
  },
  {
    role: "Cloud Engineer",
    summary:
      "You need someone who can design, migrate, optimize, and manage cloud environments across AWS, Azure, or GCP.",
    whenToRecommend:
      "AWS, Azure, GCP, cloud migration, cloud architecture, cloud cost optimization, or environment setup",
    signals: [
      "cloud",
      "aws",
      "azure",
      "gcp",
      "google cloud",
      "migration",
      "cloud architecture",
      "cost optimization",
      "lambda",
      "serverless",
      "vpc",
      "cloudformation",
    ],
    skills: ["AWS", "Azure", "GCP", "Cloud architecture", "Cost optimization", "Security foundations"],
    alternatives: [
      {
        role: "DevOps Engineer",
        reason: "Useful if cloud work is tied to pipelines, containers, and release automation.",
      },
      {
        role: "Solutions Architect",
        reason: "Useful if the project requires broad technical planning across multiple systems.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Cloud architecture",
      "Networking",
      "Security controls",
      "Cost management",
      "Migration planning",
    ],
    followUpQuestions: [
      "Which cloud provider do you use today?",
      "Are you migrating, optimizing, or building from scratch?",
      "Do you need hands-on implementation or architecture guidance?",
    ],
  },
  {
    role: "Database Administrator",
    summary:
      "You need someone who can design, structure, optimize, and protect your application database.",
    whenToRecommend:
      "database design, schema design, SQL optimization, backups, performance, reliability, or data modelling",
    signals: [
      "database",
      "data modelling",
      "data modeling",
      "schema",
      "sql",
      "postgres",
      "postgresql",
      "mysql",
      "query optimization",
      "backup",
      "normalization",
      "indexing",
      "db administration",
    ],
    skills: ["SQL", "Data modelling", "Schema design", "Indexing", "Performance tuning", "Backup planning"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if the person also needs to build APIs and connect the database to the application.",
      },
      {
        role: "Data Engineer",
        reason: "Useful if the work includes pipelines, ETL, analytics, or large-scale data movement.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Schema design",
      "Normalization and indexing",
      "Query optimization",
      "Data integrity",
      "Backup and recovery",
    ],
    followUpQuestions: [
      "Do you already have an existing database?",
      "Which database technology are you using?",
      "Will this person also build backend APIs?",
    ],
  },
  {
    role: "Data Engineer",
    summary:
      "You need someone who can move, transform, model, and operationalize data across systems.",
    whenToRecommend:
      "data pipelines, ETL, warehouses, processing, analytics infrastructure, or data movement between systems",
    signals: [
      "data pipeline",
      "etl",
      "elt",
      "warehouse",
      "lakehouse",
      "data platform",
      "data movement",
      "airflow",
      "dbt",
      "spark",
      "snowflake",
      "bigquery",
      "databricks",
    ],
    skills: ["ETL", "SQL", "Data warehouses", "dbt", "Airflow", "Data quality"],
    alternatives: [
      {
        role: "Database Administrator",
        reason: "Useful if the main need is database design, performance, and reliability.",
      },
      {
        role: "Data Analyst",
        reason: "Useful if the main output is reporting, dashboards, and business insight.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Pipeline design",
      "Data modeling",
      "Data quality",
      "Warehouse architecture",
      "Monitoring and orchestration",
    ],
    followUpQuestions: [
      "Which systems need to exchange data?",
      "Do you already have a warehouse or lakehouse?",
      "Is the priority pipelines, analytics, or governance?",
    ],
  },
  {
    role: "Machine Learning / AI Engineer",
    summary:
      "You need someone who can design, integrate, and operationalize AI or machine-learning capabilities.",
    whenToRecommend:
      "AI models, AI chatbots, recommendations, NLP, computer vision, prediction systems, or embeddings",
    signals: [
      "ai",
      "machine learning",
      "ml",
      "llm",
      "chatbot",
      "natural language",
      "nlp",
      "computer vision",
      "prediction",
      "recommendation system",
      "embeddings",
      "rag",
      "ai model",
      "ml model",
      "model deployment",
      "inference",
    ],
    skills: ["LLMs", "Python", "Embeddings", "RAG", "Model evaluation", "API integration"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if the AI feature needs to be integrated into an existing application.",
      },
      {
        role: "Data Engineer",
        reason: "Useful if the AI system depends on document processing, indexing, or data pipelines.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Model selection",
      "Prompting and evaluation",
      "Data preparation",
      "Retrieval architecture",
      "Production monitoring",
    ],
    followUpQuestions: [
      "Is this a chatbot, prediction model, or automation workflow?",
      "Do you already have the data or documents prepared?",
      "Does the AI need to integrate with your product?",
    ],
  },
  {
    role: "QA / Test Automation Engineer",
    summary:
      "You need someone who can reduce bugs, validate releases, and automate testing before launch.",
    whenToRecommend:
      "testing, automated tests, bug detection, regression testing, or quality assurance before launch",
    signals: [
      "qa",
      "quality assurance",
      "test",
      "testing",
      "automation",
      "automated tests",
      "bugs",
      "regression",
      "playwright",
      "cypress",
      "selenium",
      "before launch",
    ],
    skills: ["Test automation", "Regression testing", "Playwright", "Cypress", "Bug reporting", "Release QA"],
    alternatives: [
      {
        role: "Technical Project Manager",
        reason: "Useful if the bigger need is coordinating release readiness across teams.",
      },
      {
        role: "Backend Engineer",
        reason: "Useful if the quality issues are concentrated in APIs or server-side behavior.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Test planning",
      "Automation frameworks",
      "Regression strategy",
      "Bug triage",
      "Release quality gates",
    ],
    followUpQuestions: [
      "Do you need manual QA, automation, or both?",
      "Which parts of the product are highest risk?",
      "Do you already have a test suite?",
    ],
  },
  {
    role: "Cybersecurity Engineer",
    summary:
      "You need someone who can identify vulnerabilities, harden systems, and reduce security risk.",
    whenToRecommend:
      "security review, penetration testing, vulnerability fixes, encryption, compliance support, or threat prevention",
    signals: [
      "security",
      "cybersecurity",
      "penetration",
      "pentest",
      "vulnerability",
      "encryption",
      "compliance",
      "attack",
      "secure",
      "soc 2",
      "hipaa",
      "threat",
      "risk assessment",
    ],
    skills: ["Security review", "Penetration testing", "Threat modeling", "Encryption", "Compliance", "Incident response"],
    alternatives: [
      {
        role: "Cloud Engineer",
        reason: "Useful if the risk is concentrated in cloud infrastructure and access controls.",
      },
      {
        role: "Backend Engineer",
        reason: "Useful if application security issues need code-level fixes.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Threat modeling",
      "Vulnerability management",
      "Cloud and application security",
      "Compliance controls",
      "Incident response",
    ],
    followUpQuestions: [
      "Are you looking for an audit, fixes, or ongoing security support?",
      "Which compliance standards matter to you?",
      "Has a specific vulnerability already been identified?",
    ],
  },
  {
    role: "UI/UX Designer",
    summary:
      "You need someone who can turn product ideas into usable flows, wireframes, prototypes, and polished interfaces.",
    whenToRecommend:
      "wireframes, product design, prototypes, user journeys, user research, or interface design",
    signals: [
      "ui",
      "ux",
      "designer",
      "wireframe",
      "prototype",
      "figma",
      "user journey",
      "research",
      "usability",
      "mockup",
      "interface design",
      "product design",
      "visual design",
    ],
    skills: ["Figma", "Wireframes", "Prototyping", "User research", "Design systems", "Usability"],
    alternatives: [
      {
        role: "Frontend Engineer",
        reason: "Useful if designs already exist and the priority is implementation.",
      },
      {
        role: "Product Manager",
        reason: "Useful if the product direction and requirements are still unclear.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Product thinking",
      "User flows",
      "Visual design",
      "Design systems",
      "Developer handoff",
    ],
    followUpQuestions: [
      "Do you need design strategy or production-ready screens?",
      "Do you already have brand guidelines?",
      "Will this person work directly with engineers?",
    ],
  },
  {
    role: "Product Manager",
    summary:
      "You need someone who can clarify product direction, prioritize features, and translate goals into a roadmap.",
    whenToRecommend:
      "roadmap planning, feature prioritization, product strategy, user requirements, or product direction",
    signals: [
      "product manager",
      "roadmap",
      "feature prioritization",
      "product strategy",
      "requirements",
      "user stories",
      "backlog",
      "discovery",
      "prioritize",
      "mvp scope",
    ],
    skills: ["Roadmapping", "Prioritization", "User stories", "Discovery", "Stakeholder management", "Metrics"],
    alternatives: [
      {
        role: "Business Analyst",
        reason: "Useful if the main need is documentation, workflows, and requirement gathering.",
      },
      {
        role: "Technical Project Manager",
        reason: "Useful if the product plan is clear but delivery needs coordination.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Product strategy",
      "Prioritization frameworks",
      "Discovery process",
      "Stakeholder alignment",
      "Outcome metrics",
    ],
    followUpQuestions: [
      "Do you already know what needs to be built?",
      "Is the priority strategy, requirements, or delivery?",
      "Who will own engineering execution?",
    ],
  },
  {
    role: "Technical Project Manager",
    summary:
      "You need someone who can coordinate engineering execution, timelines, sprint planning, and delivery accountability.",
    whenToRecommend:
      "sprint planning, delivery management, engineering timelines, and coordination across technical teams",
    signals: [
      "technical project manager",
      "project manager",
      "delivery",
      "timeline",
      "sprint",
      "scrum",
      "coordination",
      "manage engineers",
      "milestones",
      "handoff",
      "status reporting",
    ],
    skills: ["Agile delivery", "Sprint planning", "Technical coordination", "Risk management", "Stakeholder updates"],
    alternatives: [
      {
        role: "Product Manager",
        reason: "Useful if the product direction and prioritization still need ownership.",
      },
      {
        role: "Solutions Architect",
        reason: "Useful if delivery coordination depends on major architecture decisions.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Delivery governance",
      "Sprint planning",
      "Engineering coordination",
      "Risk management",
      "Stakeholder communication",
    ],
    followUpQuestions: [
      "Is the team already assembled?",
      "Are timelines slipping because of planning, staffing, or technical blockers?",
      "Do you need part-time oversight or full-time delivery ownership?",
    ],
  },
  {
    role: "Solutions Architect",
    summary:
      "You need someone who can design the overall technical approach and choose how systems should fit together.",
    whenToRecommend:
      "high-level architecture, system design, integration planning, or technology selection across a product",
    signals: [
      "solutions architect",
      "architecture",
      "system design",
      "technical planning",
      "choose technology",
      "integrations",
      "enterprise architecture",
      "platform design",
      "technical roadmap",
      "scalable architecture",
    ],
    skills: ["System design", "Architecture", "Integration planning", "Cloud strategy", "Technical tradeoffs"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if the architecture is already defined and the need is hands-on implementation.",
      },
      {
        role: "Cloud Engineer",
        reason: "Useful if the architecture work is mostly cloud infrastructure.",
      },
    ],
    defaultSeniority: "Senior to Lead",
    interviewFocusAreas: [
      "System design",
      "Technical tradeoffs",
      "Integration strategy",
      "Scalability",
      "Documentation and communication",
    ],
    followUpQuestions: [
      "Are you deciding what to build or ready to implement?",
      "Which systems need to integrate?",
      "Do you need architecture only or architecture plus delivery?",
    ],
  },
  {
    role: "Site Reliability Engineer",
    summary:
      "You need someone who can improve uptime, monitoring, incident response, and production reliability.",
    whenToRecommend:
      "reliability, uptime, monitoring, incident response, scaling production systems, or operational resilience",
    signals: [
      "sre",
      "site reliability",
      "reliability",
      "uptime",
      "monitoring",
      "observability",
      "incident",
      "on-call",
      "scaling",
      "production systems",
      "latency",
      "performance",
      "outage",
    ],
    skills: ["Observability", "Incident response", "SLOs", "Monitoring", "Performance", "Reliability engineering"],
    alternatives: [
      {
        role: "DevOps Engineer",
        reason: "Useful if reliability issues are tied to deployment pipelines and infrastructure automation.",
      },
      {
        role: "Cloud Engineer",
        reason: "Useful if production issues come from cloud architecture or capacity planning.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Monitoring and alerting",
      "Incident response",
      "SLOs and SLAs",
      "Capacity planning",
      "Root-cause analysis",
    ],
    followUpQuestions: [
      "Are you reacting to outages or proactively improving reliability?",
      "What monitoring tools do you use today?",
      "Which service has the biggest reliability risk?",
    ],
  },
  {
    role: "Blockchain Engineer",
    summary:
      "You need someone who can build smart contracts, wallets, tokens, dApps, or blockchain protocol integrations.",
    whenToRecommend:
      "smart contracts, wallets, tokens, dApps, web3 integrations, or blockchain protocols",
    signals: [
      "blockchain",
      "web3",
      "smart contract",
      "wallet",
      "token",
      "dapp",
      "solidity",
      "ethereum",
      "nft",
      "crypto",
    ],
    skills: ["Solidity", "Smart contracts", "Wallet integrations", "Web3", "Security review", "Protocol design"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if the blockchain component must integrate with a broader application backend.",
      },
      {
        role: "Cybersecurity Engineer",
        reason: "Useful if smart contract security and exploit prevention are the main concerns.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Smart contract design",
      "Security risks",
      "Wallet flows",
      "Protocol integration",
      "Testing and audits",
    ],
    followUpQuestions: [
      "Are you building smart contracts, wallet flows, or a full dApp?",
      "Which blockchain ecosystem are you using?",
      "Do you need a security audit as part of the work?",
    ],
  },
  {
    role: "Embedded Systems Engineer",
    summary:
      "You need someone who can work on firmware, IoT devices, sensors, hardware-adjacent software, or low-level systems.",
    whenToRecommend:
      "firmware, IoT, sensors, hardware-related software, low-level systems, or device programming",
    signals: [
      "embedded",
      "firmware",
      "iot",
      "sensor",
      "hardware",
      "device",
      "microcontroller",
      "arduino",
      "raspberry pi",
      "c++",
      "low-level",
    ],
    skills: ["C", "C++", "Firmware", "IoT", "Device protocols", "Hardware debugging"],
    alternatives: [
      {
        role: "Backend Engineer",
        reason: "Useful if devices need to send data to cloud APIs or application services.",
      },
      {
        role: "Cloud Engineer",
        reason: "Useful if the main need is cloud infrastructure for connected devices.",
      },
    ],
    defaultSeniority: "Senior",
    interviewFocusAreas: [
      "Firmware design",
      "Device communication",
      "Hardware constraints",
      "Testing strategy",
      "Performance and reliability",
    ],
    followUpQuestions: [
      "What hardware or device platform are you using?",
      "Does the work include firmware, cloud integration, or both?",
      "Are there real-time or safety constraints?",
    ],
  },
  {
    role: "Data Analyst",
    summary:
      "You need someone who can turn data into reports, dashboards, metrics, and business insights.",
    whenToRecommend:
      "reports, dashboards, metrics, BI, interpreting data, or turning business questions into insights",
    signals: [
      "data analyst",
      "reports",
      "reporting",
      "metrics",
      "kpi",
      "bi",
      "business intelligence",
      "tableau",
      "power bi",
      "looker",
      "insights",
      "analysis",
      "dashboard",
    ],
    skills: ["SQL", "Dashboards", "Metrics", "BI tools", "Data storytelling", "Analysis"],
    alternatives: [
      {
        role: "Data Engineer",
        reason: "Useful if data pipelines or warehouses must be built before analysis can happen.",
      },
      {
        role: "Business Analyst",
        reason: "Useful if the main work is gathering business requirements and defining workflows.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "SQL analysis",
      "Dashboard design",
      "Metric definitions",
      "Business interpretation",
      "Stakeholder communication",
    ],
    followUpQuestions: [
      "Do you already have clean data available?",
      "Which BI tool are you using?",
      "Are you looking for dashboards or deeper analysis?",
    ],
  },
  {
    role: "Business Analyst",
    summary:
      "You need someone who can gather requirements, map workflows, document needs, and translate business context into technical specs.",
    whenToRecommend:
      "requirements gathering, workflow documentation, stakeholder analysis, or translating business needs into specs",
    signals: [
      "business analyst",
      "requirements gathering",
      "workflow",
      "documentation",
      "stakeholder",
      "process mapping",
      "specs",
      "user requirements",
      "translate business",
      "acceptance criteria",
    ],
    skills: ["Requirements", "Process mapping", "Documentation", "Stakeholder analysis", "User stories"],
    alternatives: [
      {
        role: "Product Manager",
        reason: "Useful if the role also needs to own product direction and prioritization.",
      },
      {
        role: "Technical Project Manager",
        reason: "Useful if requirements are clear but execution needs coordination.",
      },
    ],
    defaultSeniority: "Mid-level to Senior",
    interviewFocusAreas: [
      "Requirements gathering",
      "Workflow documentation",
      "Stakeholder management",
      "Acceptance criteria",
      "Technical translation",
    ],
    followUpQuestions: [
      "Do stakeholders already agree on the requirements?",
      "Do you need documentation only or delivery support too?",
      "Are workflows already mapped?",
    ],
  },
];
