import { useEffect, useState } from "react";
import { toast } from "sonner";
import { submitChatLead } from "@/lib/chatbot/chatbotApi";
import type { ChatLead } from "@/lib/chatbot/types";
import { useGlobalStore } from "@/store/useGlobalStore";
import ChatLauncher from "./ChatLauncher";
import ChatPanel from "./ChatPanel";
import LeadCaptureForm from "./LeadCaptureForm";

/** True once the visitor has scrolled past (most of) the hero, so the
 *  launcher doesn't compete with the hero composition. rAF-batched. */
const usePastHero = () => {
  const [pastHero, setPastHero] = useState(
    () => window.scrollY > window.innerHeight * 0.9,
  );

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const next = window.scrollY > window.innerHeight * 0.9;
      setPastHero((prev) => (prev === next ? prev : next));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return pastHero;
};

const ChatWidget = () => {
  const { isChatOpen, setChatOpen, isMobileMenuOpen } = useGlobalStore();
  const [lead, setLead] = useState<ChatLead | null>(null);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const pastHero = usePastHero();

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
      {!isChatOpen && !isMobileMenuOpen && (
        <ChatLauncher visible={pastHero} onClick={() => setChatOpen(true)} />
      )}

      {isChatOpen && (
        <aside
          aria-label="ElderOps Hiring Advisor"
          className="fixed inset-x-4 bottom-4 z-[70] flex max-h-[calc(100dvh-2rem)] min-h-[30rem] flex-col overflow-hidden rounded-[1.75rem] border border-primary/20 bg-bg-cream shadow-[0_36px_90px_rgba(2,54,27,0.3)] sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[42rem] sm:w-[28rem]"
        >
          {!lead ? (
            <>
              <div className="grain relative flex items-start justify-between gap-4 bg-primary p-6">
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-border-light">
                    ElderOps — Hiring Advisor
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold leading-tight text-bg-cream">
                    Find the right engineer
                  </p>
                  <p className="mt-3 text-[13px] leading-[1.7] text-accent-four">
                    Share your details, then describe what you need built or
                    paste a JD. The advisor recommends the best technical role
                    to hire.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setChatOpen(false)}
                  aria-label="Close the Hiring Advisor"
                  className="relative grid size-9 shrink-0 cursor-pointer place-items-center rounded-full border border-bg-cream/30 text-lg leading-none text-bg-cream transition-colors duration-300 hover:bg-bg-cream hover:text-primary"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <LeadCaptureForm
                  isSubmitting={isSubmittingLead}
                  onSubmit={handleLeadSubmit}
                />
              </div>
            </>
          ) : (
            <ChatPanel
              lead={lead}
              onClose={() => setChatOpen(false)}
              onResetLead={() => setLead(null)}
            />
          )}
        </aside>
      )}
    </>
  );
};

export default ChatWidget;
