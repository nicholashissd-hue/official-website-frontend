interface ChatLauncherProps {
  onClick: () => void;
}

const ChatLauncher = ({ onClick }: ChatLauncherProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open the ElderOps Hiring Advisor"
      className="group fixed bottom-5 right-5 z-[70] flex h-12 cursor-pointer items-center gap-3 rounded-full border border-success/50 bg-primary px-5 shadow-[0_18px_45px_rgba(2,54,27,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-success sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="animate-pulse-dot size-1.5 rounded-full bg-success"
      />
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bg-cream">
        Hiring Advisor
      </span>
    </button>
  );
};

export default ChatLauncher;
