import type { ChatMessage } from "@/lib/chatbot/types";
import RecommendationCard from "./RecommendationCard";

interface ChatMessagesProps {
  messages: ChatMessage[];
  sharingMessageId: string | null;
  sharedMessageIds: string[];
  onShareRecommendation: (message: ChatMessage) => void;
}

const ChatMessages = ({
  messages,
  sharingMessageId,
  sharedMessageIds,
  onShareRecommendation,
}: ChatMessagesProps) => {
  return (
    <div className="space-y-3.5">
      {messages.map((message) => {
        const isUser = message.role === "user";

        return (
          <div
            key={message.id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex w-full flex-col ${
                isUser ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[86%] px-4 py-3 text-sm leading-[1.7] ${
                  isUser
                    ? "rounded-2xl rounded-br-md bg-primary text-bg-cream"
                    : "rounded-2xl rounded-bl-md bg-white text-secondary ring-1 ring-primary/10"
                }`}
              >
                {message.content}
              </div>

              {!isUser && message.recommendation && (
                <RecommendationCard
                  recommendation={message.recommendation}
                  isSharing={sharingMessageId === message.id}
                  hasShared={sharedMessageIds.includes(message.id)}
                  onShare={() => onShareRecommendation(message)}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
