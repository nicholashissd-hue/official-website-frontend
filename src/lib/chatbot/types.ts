export type ChatLead = {
  name: string;
  email: string;
};

export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

export type ChatRequestPayload = {
  lead: ChatLead;
  message: string;
  history: ChatMessage[];
};

export type ChatResponsePayload = {
  reply: string;
  mode: "mock" | "ai";
  suggestions?: string[];
};

export type ChatLeadResponse = {
  ok: boolean;
  delivery: "sent" | "not_configured" | "failed";
};
