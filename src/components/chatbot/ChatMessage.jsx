import ReactMarkdown from "react-markdown";

function ChatMessage({ role, message }) {
  const isUser = role === "user";

  const sender = isUser ? "You" : "AI";
  const avatar = isUser ? "◉" : "✦";

  const messageStyle = isUser
    ? "bg-surface border border-border text-text"
    : "bg-accent text-white";

  const avatarStyle = isUser
    ? "bg-surface border border-border text-text-muted"
    : "bg-accent text-white";

  return (
    <div
      className={`mb-6 flex gap-3 ${
        isUser ? "flex-row-reverse justify-start" : "flex-row justify-start"
      }`}
    >
      {/* Avatar */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${avatarStyle}`}
      >
        <span className="text-xs font-semibold">{avatar}</span>
      </div>

      {/* Message */}
      <div className={`max-w-[80%] ${isUser ? "items-end" : "items-start"}`}>
        <strong
          className={`block text-sm font-semibold ${
            isUser ? "text-right" : "text-left"
          } ${isUser ? "text-text" : "text-text"}`}
        >
          {sender}
        </strong>

        <div
          dir="auto"
          className={`mt-1 rounded-2xl px-4 py-3 text-sm leading-6 ${messageStyle}`}
        >
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
