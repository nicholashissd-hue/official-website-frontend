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
      <div className="grain relative flex items-start justify-between gap-4 bg-primary p-5">
        <div className="relative">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-border-light">
            ElderOps — Hiring Advisor
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed text-accent-four">
            Recommendations are generated from ElderOps service logic.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close the Hiring Advisor"
          className="relative grid size-9 shrink-0 cursor-pointer place-items-center border border-bg-cream/30 text-lg leading-none text-bg-cream transition-colors duration-300 hover:bg-bg-cream hover:text-primary"
        >
          ×
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 border-b border-primary/10 bg-bg-light/50 px-5 py-2.5">
        <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-accent-one">
          Chatting as {lead.name}
        </p>
        <button
          type="button"
          onClick={onResetLead}
          className="u-line shrink-0 cursor-pointer pb-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary"
        >
          Change
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        <ChatMessages
          messages={messages}
          sharingMessageId={sharingMessageId}
          sharedMessageIds={sharedMessageIds}
          onShareRecommendation={(message) => void shareRecommendation(message)}
        />

        {isSending && (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-three">
            Advisor is typing
            <span className="animate-blink ml-1 inline-block h-2.5 w-[5px] translate-y-[2px] bg-success/80" />
          </p>
        )}

        {messages.length === 1 && (
          <p className="mt-5 border border-primary/10 bg-white px-3.5 py-2.5 text-[11px] leading-[1.7] text-accent-one">
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
                className="cursor-pointer rounded-[2px] border border-primary/15 bg-white px-3 py-2 text-left text-xs font-medium text-primary transition-colors duration-300 hover:border-success hover:text-success disabled:cursor-not-allowed disabled:opacity-60"
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
