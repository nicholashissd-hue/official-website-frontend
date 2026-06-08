interface ChatLauncherProps {
  onClick: () => void;
}

const ChatLauncher = ({ onClick }: ChatLauncherProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open ElderOps chat"
      className="group fixed bottom-4 right-4 z-[70] flex h-14 items-center gap-3 rounded-full border border-[#5D7B69] bg-primary bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_46%),linear-gradient(135deg,#02361B,#0B5A31)] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(2,54,27,0.24)] transition-transform duration-200 hover:-translate-y-1 sm:bottom-6 sm:right-6 sm:h-15 sm:px-5"
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-full bg-white/15 text-base"
      >
        EO
      </span>
      <span className="hidden sm:inline">Ask ElderOps</span>
    </button>
  );
};

export default ChatLauncher;
