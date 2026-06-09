import { useState } from "react";
import { toast } from "sonner";
import { submitChatLead } from "@/lib/chatbot/chatbotApi";
import type { ChatLead } from "@/lib/chatbot/types";
import ChatLauncher from "./ChatLauncher";
import ChatPanel from "./ChatPanel";
import LeadCaptureForm from "./LeadCaptureForm";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lead, setLead] = useState<ChatLead | null>(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const handleLeadSubmit = async (nextLead: ChatLead) => {
    setIsSubmittingLead(true);

    try {
      await submitChatLead({
        ...nextLead,
        source: "chat-intake",
      });
    } catch (error) {
      console.warn("Chat lead API unavailable:", error);
    } finally {
      setLead(nextLead);
      setIsSubmittingLead(false);
      toast.success("Thanks. You can start the Hiring Advisor now.");
    }
  };

  return (
    <>
      {!isOpen && <ChatLauncher onClick={() => setIsOpen(true)} />}

      {isOpen && (
        <aside
          aria-label="ElderOps chat assistant"
          className="fixed inset-x-4 bottom-4 z-[70] flex max-h-[calc(100dvh-2rem)] min-h-[30rem] flex-col overflow-hidden rounded-[1.35rem] border border-[#DDE8D5] bg-white shadow-[0_30px_80px_rgba(2,54,27,0.22)] sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[42rem] sm:w-[28rem]"
        >
          {!lead ? (
            <>
              <div className="flex items-start justify-between gap-4 border-b border-[#E2E8DA] bg-[#FAFBF7] p-5">
                <div>
                  <p className="font-urbanist text-2xl font-semibold leading-tight text-primary">
                    Find the right engineer
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#5C675F]">
                    Share your details, then describe what you need built or
                    paste a JD. ElderOps will recommend the best technical role
                    to hire.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close ElderOps chat"
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-[#DCE6D7] text-lg leading-none text-primary transition-colors hover:bg-white"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <LeadCaptureForm
                  isSubmitting={isSubmittingLead}
                  onSubmit={handleLeadSubmit}
                />
              </div>
            </>
          ) : (
            <ChatPanel
              lead={lead}
              onClose={() => setIsOpen(false)}
              onResetLead={() => setLead(null)}
            />
          )}
        </aside>
      )}
    </>
  );
};

export default ChatWidget;
