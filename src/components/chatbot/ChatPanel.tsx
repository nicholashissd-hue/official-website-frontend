import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { chatbotSuggestedQuestions } from "@/contents/chatbotKnowledge";
import {
  createAssistantMessage,
  createUserMessage,
  getLocalChatReply,
  sendChatMessage,
  submitChatLead,
} from "@/lib/chatbot/chatbotApi";
import type { ChatLead, ChatMessage } from "@/lib/chatbot/types";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

interface ChatPanelProps {
  lead: ChatLead;
  onClose: () => void;
  onResetLead: () => void;
}

const ChatPanel = ({ lead, onClose, onResetLead }: ChatPanelProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    createAssistantMessage(
      `Hi ${lead.name}. Describe what you need built, paste a JD, or explain a technical problem, and I will recommend the best engineer to hire.`,
    ),
  ]);
  const [isSending, setIsSending] = useState(false);
  const [sharingMessageId, setSharingMessageId] = useState<string | null>(null);
  const [sharedMessageIds, setSharedMessageIds] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  const submitMessage = async (content: string) => {
    if (isSending) return;

    const userMessage = createUserMessage(content);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setIsSending(true);

    try {
      const response = await sendChatMessage({
        lead,
        message: content,
        history: nextMessages,
      });

      setMessages((currentMessages) => [
        ...currentMessages,
        createAssistantMessage(response.reply, {
          recommendation: response.recommendation,
          originalInput: response.originalInput ?? content,
        }),
      ]);
    } catch (error) {
      console.warn("Chat API unavailable, using local fallback:", error);
      const fallbackResponse = getLocalChatReply(content);

      setMessages((currentMessages) => [
        ...currentMessages,
        createAssistantMessage(fallbackResponse.reply, {
          recommendation: fallbackResponse.recommendation,
          originalInput: fallbackResponse.originalInput ?? content,
        }),
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const shareRecommendation = async (message: ChatMessage) => {
    if (!message.recommendation || sharingMessageId) return;

    setSharingMessageId(message.id);

    try {
      await submitChatLead({
        ...lead,
        projectDescriptionOrJD: message.originalInput,
        recommendedRole: message.recommendation.primaryRole,
        confidence: message.recommendation.confidence,
        alternativeRoles: message.recommendation.alternativeRoles.map(
          (alternative) => alternative.role,
        ),
        suggestedSeniority: message.recommendation.suggestedSeniority,
        notes: "Visitor shared a Hiring Advisor recommendation.",
        source: "hiring-advisor-bot",
      });

      setSharedMessageIds((currentIds) => [...currentIds, message.id]);
      toast.success("Thanks. ElderOps received your hiring request.");
    } catch (error) {
      console.warn("Hiring advisor lead submission failed:", error);
      toast.error("We could not send that yet. Please try again.");
    } finally {
      setSharingMessageId(null);
    }
  };

  return (
    <>
      <div className="flex items-start justify-between gap-4 border-b border-[#E2E8DA] p-4">
        <div>
          <p className="font-urbanist text-xl font-semibold text-primary">
            ElderOps Hiring Advisor
          </p>
          <p className="mt-1 text-xs font-medium text-[#748477]">
            Role recommendations are generated from ElderOps service logic.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close ElderOps chat"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-[#DCE6D7] text-lg leading-none text-primary transition-colors hover:bg-[#F4F6DD]"
        >
          ×
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-[#E2E8DA] bg-[#FAFBF7] px-4 py-3">
        <p className="truncate text-xs font-semibold text-[#5F6F65]">
          Chatting as {lead.name}
        </p>
        <button
          type="button"
          onClick={onResetLead}
          className="shrink-0 text-xs font-bold text-primary underline-offset-4 hover:underline"
        >
          Change
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <ChatMessages
          messages={messages}
          sharingMessageId={sharingMessageId}
          sharedMessageIds={sharedMessageIds}
          onShareRecommendation={(message) => void shareRecommendation(message)}
        />

        {isSending && (
          <p className="mt-3 text-sm font-medium text-[#748477]">
            ElderOps is typing...
          </p>
        )}

        {messages.length === 1 && (
          <p className="mt-4 rounded-2xl border border-[#E6EDD9] bg-[#FAFBF7] px-3 py-2 text-xs leading-5 text-[#6D786F]">
            Privacy note: do not paste passwords, private keys, confidential
            customer data, or sensitive internal credentials.
          </p>
        )}

        {messages.length === 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {chatbotSuggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                disabled={isSending}
                onClick={() => void submitMessage(question)}
                className="rounded-full border border-[#DCE6D7] bg-white px-3 py-2 text-left text-xs font-semibold text-primary transition-colors hover:bg-[#F4F6DD] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput disabled={isSending} onSubmit={submitMessage} />
    </>
  );
};

export default ChatPanel;
