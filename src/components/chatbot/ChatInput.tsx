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
      className="flex items-end gap-2.5 border-t border-primary/10 bg-bg-cream p-3.5"
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
        className="max-h-24 min-h-11 flex-1 resize-none rounded-[2px] border border-primary/15 bg-white px-3.5 py-3 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-accent-three/70 focus:border-success"
      />

      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="h-11 cursor-pointer rounded-[2px] bg-primary px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-bg-cream transition-colors duration-300 hover:bg-deep disabled:cursor-not-allowed disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
