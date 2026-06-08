import { useState } from "react";

interface ChatInputProps {
  disabled: boolean;
  onSubmit: (message: string) => Promise<void>;
}

const ChatInput = ({ disabled, onSubmit }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (disabled) return;

    const nextMessage = message.trim();
    if (!nextMessage) return;

    setMessage("");
    await onSubmit(nextMessage);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-2 border-t border-[#E2E8DA] bg-white p-3"
    >
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            event.currentTarget.form?.requestSubmit();
          }
        }}
        rows={1}
        placeholder="Ask about ElderOps..."
        className="max-h-24 min-h-11 flex-1 resize-none rounded-xl border border-[#DCE6D7] bg-[#FAFBF7] px-3 py-3 text-sm text-primary outline-none transition-colors placeholder:text-[#9A9A9A] focus:border-primary"
      />

      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="btn-glass-effect h-11 rounded-full border border-primary px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
