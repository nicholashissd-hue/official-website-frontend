import { useState } from "react";
import type { ChatLead } from "@/lib/chatbot/types";

interface LeadCaptureFormProps {
  isSubmitting: boolean;
  onSubmit: (lead: ChatLead) => Promise<void>;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LeadCaptureForm = ({ isSubmitting, onSubmit }: LeadCaptureFormProps) => {
  const [lead, setLead] = useState<ChatLead>({
    name: "",
    email: "",
    company: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = lead.name.trim();
    const email = lead.email.trim();

    if (name.length < 2) {
      setError("Please enter your name.");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    await onSubmit({
      name,
      email,
      company: lead.company?.trim() || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="chatbot-name"
          className="mb-2 block text-sm font-semibold text-primary"
        >
          Name
        </label>
        <input
          id="chatbot-name"
          type="text"
          value={lead.name}
          onChange={(event) =>
            setLead((currentLead) => ({
              ...currentLead,
              name: event.target.value,
            }))
          }
          placeholder="Enter your name"
          className="w-full rounded-xl border border-[#DCE6D7] bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-primary"
        />
      </div>

      <div>
        <label
          htmlFor="chatbot-email"
          className="mb-2 block text-sm font-semibold text-primary"
        >
          Email
        </label>
        <input
          id="chatbot-email"
          type="email"
          value={lead.email}
          onChange={(event) =>
            setLead((currentLead) => ({
              ...currentLead,
              email: event.target.value,
            }))
          }
          placeholder="Enter your email"
          className="w-full rounded-xl border border-[#DCE6D7] bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-primary"
        />
      </div>

      <div>
        <label
          htmlFor="chatbot-company"
          className="mb-2 block text-sm font-semibold text-primary"
        >
          Company <span className="font-medium text-[#748477]">(optional)</span>
        </label>
        <input
          id="chatbot-company"
          type="text"
          value={lead.company}
          onChange={(event) =>
            setLead((currentLead) => ({
              ...currentLead,
              company: event.target.value,
            }))
          }
          placeholder="Enter your company"
          className="w-full rounded-xl border border-[#DCE6D7] bg-white px-4 py-3 text-sm text-primary outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-primary"
        />
      </div>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-glass-effect w-full rounded-full border border-primary px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Starting advisor..." : "Start Hiring Advisor"}
      </button>
    </form>
  );
};

export default LeadCaptureForm;
