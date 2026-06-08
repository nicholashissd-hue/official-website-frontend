import { chatbotKnowledge, chatbotSuggestedQuestions } from "@/contents/chatbotKnowledge";
import type {
  ChatLead,
  ChatLeadResponse,
  ChatMessage,
  ChatRequestPayload,
  ChatResponsePayload,
} from "./types";

const createFallbackReply = (message: string) => {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("service")) {
    const services = chatbotKnowledge.services
      .map((service) => service.title)
      .join(", ");

    return `ElderOps supports ${services}. We usually start by understanding your roadmap and then recommend the right team shape or delivery model.`;
  }

  if (
    normalizedMessage.includes("engagement") ||
    normalizedMessage.includes("model") ||
    normalizedMessage.includes("work")
  ) {
    const models = chatbotKnowledge.engagementModels
      .map((model) => model.title)
      .join(", ");

    return `ElderOps offers ${models}. The right fit depends on whether you need one specialist, a coordinated pod, or outcome-based delivery.`;
  }

  if (
    normalizedMessage.includes("talent") ||
    normalizedMessage.includes("engineer") ||
    normalizedMessage.includes("developer")
  ) {
    return chatbotKnowledge.talent;
  }

  return `${chatbotKnowledge.company} ${chatbotKnowledge.callToAction}`;
};

export const submitChatLead = async (
  lead: ChatLead,
): Promise<ChatLeadResponse> => {
  const response = await fetch("/api/chat-lead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead),
  });

  if (!response.ok) {
    throw new Error("Chat lead submission failed");
  }

  return response.json() as Promise<ChatLeadResponse>;
};

export const sendChatMessage = async (
  payload: ChatRequestPayload,
): Promise<ChatResponsePayload> => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Chat request failed");
  }

  return response.json() as Promise<ChatResponsePayload>;
};

export const getLocalChatReply = (
  message: string,
): ChatResponsePayload => ({
  reply: createFallbackReply(message),
  mode: "mock",
  suggestions: [...chatbotSuggestedQuestions],
});

export const createAssistantMessage = (content: string): ChatMessage => ({
  id: crypto.randomUUID(),
  role: "assistant",
  content,
});

export const createUserMessage = (content: string): ChatMessage => ({
  id: crypto.randomUUID(),
  role: "user",
  content,
});
