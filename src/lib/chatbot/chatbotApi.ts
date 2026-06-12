import { chatbotKnowledge, chatbotSuggestedQuestions } from "@/contents/chatbotKnowledge";
import {
  buildRecommendationReply,
  isLikelyHiringAdvisorRequest,
  recommendEngineerRole,
} from "./recommendationEngine";
import type {
  ChatLeadSubmission,
  ChatLeadResponse,
  ChatMessage,
  ChatRequestPayload,
  ChatResponsePayload,
} from "./types";

const createFallbackReply = (message: string) => {
  const normalizedMessage = message.toLowerCase();

  if (isLikelyHiringAdvisorRequest(message)) {
    const recommendation = recommendEngineerRole(message);

    return {
      reply: buildRecommendationReply(recommendation),
      mode: "advisor" as const,
      recommendation,
      originalInput: message,
      suggestions: [...chatbotSuggestedQuestions],
    };
  }

  if (normalizedMessage.includes("service")) {
    const services = chatbotKnowledge.services
      .map((service) => service.title)
      .join(", ");

    return {
      reply: `ElderOps supports ${services}. We usually start by understanding your roadmap and then recommend the right team shape or delivery model.`,
      mode: "mock" as const,
      suggestions: [...chatbotSuggestedQuestions],
    };
  }

  if (
    normalizedMessage.includes("engagement") ||
    normalizedMessage.includes("model") ||
    normalizedMessage.includes("work")
  ) {
    const models = chatbotKnowledge.engagementModels
      .map((model) => model.title)
      .join(", ");

    return {
      reply: `ElderOps offers ${models}. The right fit depends on whether you need one specialist, a coordinated pod, or outcome-based delivery.`,
      mode: "mock" as const,
      suggestions: [...chatbotSuggestedQuestions],
    };
  }

  if (
    normalizedMessage.includes("talent") ||
    normalizedMessage.includes("engineer") ||
    normalizedMessage.includes("developer")
  ) {
    return {
      reply: chatbotKnowledge.talent,
      mode: "mock" as const,
      suggestions: [...chatbotSuggestedQuestions],
    };
  }

  return {
    reply: `${chatbotKnowledge.company} ${chatbotKnowledge.callToAction}`,
    mode: "mock" as const,
    suggestions: [...chatbotSuggestedQuestions],
  };
};

const composeLeadDetails = (lead: ChatLeadSubmission) =>
  [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.company ? `Company: ${lead.company}` : "",
    lead.recommendedRole ? `Recommended role: ${lead.recommendedRole}` : "",
    lead.confidence ? `Confidence: ${lead.confidence}` : "",
    lead.suggestedSeniority
      ? `Suggested seniority: ${lead.suggestedSeniority}`
      : "",
    lead.alternativeRoles?.length
      ? `Alternative roles: ${lead.alternativeRoles.join(", ")}`
      : "",
    lead.projectDescriptionOrJD
      ? `Project description / JD: ${lead.projectDescriptionOrJD}`
      : "",
    lead.notes ? `Notes: ${lead.notes}` : "",
    `Source: ${lead.source ?? "Website chatbot"}`,
  ]
    .filter(Boolean)
    .join("\n");

export const submitChatLead = async (
  lead: ChatLeadSubmission,
): Promise<ChatLeadResponse> => {
  // Server route first — upgrades automatically when email keys exist.
  try {
    const response = await fetch("/api/chat-lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
    });

    if (response.ok) {
      const payload = (await response
        .json()
        .catch(() => null)) as ChatLeadResponse | null;
      if (payload?.ok) return payload;
    }
  } catch {
    // fall through to the browser-side relay
  }

  // FormSubmit blocks datacenter IPs, so the relay must run in-browser.
  const { sendViaFormRelay } = await import("@/lib/formRelay");
  await sendViaFormRelay({
    name: lead.name,
    email: lead.email,
    message: composeLeadDetails(lead),
    _subject: `Hiring Advisor lead — ${lead.name}`,
    _replyto: lead.email,
  });

  return { ok: true, delivery: "sent" } as ChatLeadResponse;
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
): ChatResponsePayload => createFallbackReply(message);

export const createAssistantMessage = (
  content: string,
  metadata?: Pick<ChatMessage, "recommendation" | "originalInput">,
): ChatMessage => ({
  id: crypto.randomUUID(),
  role: "assistant",
  content,
  ...metadata,
});

export const createUserMessage = (content: string): ChatMessage => ({
  id: crypto.randomUUID(),
  role: "user",
  content,
});
