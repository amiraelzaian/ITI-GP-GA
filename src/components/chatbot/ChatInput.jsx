import { useState } from "react";
import { Send } from "lucide-react";

function ChatInput({ onSend, disabled }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "" || disabled) {
      return;
    }

    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const isEmpty = message.trim() === "";

  return (
    <div className="group flex items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-2 shadow-sm transition-all duration-200 focus-within:border-accent/50 focus-within:ring-2 focus-within:ring-accent/10">
      {/* Input */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about movies or TV shows..."
        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-text outline-none placeholder:text-text-muted disabled:cursor-not-allowed disabled:opacity-50"
      />

      {/* Send button */}
      <button
        type="button"
        onClick={handleSend}
        disabled={disabled || isEmpty}
        aria-label="Send message"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm transition-all duration-200 hover:scale-105 hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
      >
        <Send size={16} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default ChatInput;
