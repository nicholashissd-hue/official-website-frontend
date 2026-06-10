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
      className="flex items-end gap-2.5 bg-bg-cream p-3.5 shadow-[0_-12px_24px_rgba(2,54,27,0.06)]"
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
        placeholder="Describe your project or paste a JD…"
        className="max-h-24 min-h-11 flex-1 resize-none rounded-2xl border border-primary/15 bg-white px-3.5 py-3 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-accent-three/70 focus:border-success"
      />

      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="h-11 cursor-pointer rounded-full bg-success px-5 font-sans text-sm font-bold text-deep transition-colors duration-300 hover:bg-primary hover:text-bg-cream disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
