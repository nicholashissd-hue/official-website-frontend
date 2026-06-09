export type ChatLead = {
  name: string;
  email: string;
  company?: string;
};

export type ConfidenceLevel = "High" | "Medium" | "Low";

export type AlternativeRole = {
  role: string;
  reason: string;
};

export type HiringRecommendation = {
  primaryRole: string;
  confidence: ConfidenceLevel;
  summary: string;
  whyThisRole: string[];
  keySkills: string[];
  alternativeRoles: AlternativeRole[];
  suggestedSeniority: string;
  interviewFocusAreas: string[];
  followUpQuestions: string[];
  cta: string;
};

export type ChatLeadSubmission = ChatLead & {
  projectDescriptionOrJD?: string;
  recommendedRole?: string;
  confidence?: ConfidenceLevel;
  alternativeRoles?: string[];
  suggestedSeniority?: string;
  timeline?: string;
  budget?: string;
  notes?: string;
  source?: "chat-intake" | "hiring-advisor-bot";
};

export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  recommendation?: HiringRecommendation;
  originalInput?: string;
};

export type ChatRequestPayload = {
  lead: ChatLead;
  message: string;
  history: ChatMessage[];
};

export type ChatResponsePayload = {
  reply: string;
  mode: "mock" | "advisor" | "ai";
  suggestions?: string[];
  recommendation?: HiringRecommendation;
  originalInput?: string;
};

export type ChatLeadResponse = {
  ok: boolean;
  delivery: "sent" | "not_configured" | "failed";
};
