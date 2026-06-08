import type { ChatMessage } from "@/lib/chatbot/types";

interface ChatMessagesProps {
  messages: ChatMessage[];
}

const ChatMessages = ({ messages }: ChatMessagesProps) => {
  return (
    <div className="space-y-3">
      {messages.map((message) => {
        const isUser = message.role === "user";

        return (
          <div
            key={message.id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[84%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                isUser
                  ? "bg-primary text-white"
                  : "border border-[#E1EBDD] bg-[#F8FAF4] text-[#404040]"
              }`}
            >
              {message.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
