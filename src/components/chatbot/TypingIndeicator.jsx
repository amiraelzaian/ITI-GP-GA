function TypingIndicator() {
  return (
    <div className="mb-6 flex items-center gap-3">
      {/* AI Avatar */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent shadow-sm">
        <span className="text-[10px] font-extrabold tracking-wide text-white">
          AI
        </span>
      </div>

      {/* Typing Bubble */}
      <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />

        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:150ms]" />

        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export default TypingIndicator;
