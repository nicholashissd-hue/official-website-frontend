import { useState } from "react";
import type { ChatLead } from "@/lib/chatbot/types";
import Button from "@/components/ui/button";

interface LeadCaptureFormProps {
  isSubmitting: boolean;
  onSubmit: (lead: ChatLead) => Promise<void>;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClasses =
  "h-12 w-full rounded-[2px] border border-primary/15 bg-white px-4 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-accent-three/70 focus:border-success";

const labelClasses =
  "mb-2.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-accent-one";

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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="chatbot-name" className={labelClasses}>
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
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="chatbot-email" className={labelClasses}>
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
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="chatbot-company" className={labelClasses}>
          Company <span className="normal-case text-accent-three">(optional)</span>
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
          placeholder="Company, Inc."
          className={inputClasses}
        />
      </div>

      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        withArrow
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Starting advisor…" : "Start the Hiring Advisor"}
      </Button>

      <p className="font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-accent-three">
        Used only to follow up on your hiring question
      </p>
    </form>
  );
};

export default LeadCaptureForm;
