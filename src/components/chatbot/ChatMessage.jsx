import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

function ChatMessage({ role, message }) {
  const { t } = useTranslation();

  const isUser = role === "user";

  const sender = isUser ? t("chat.you") : t("chat.ai");
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
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${avatarStyle}`}
      >
        <span className="text-xs font-semibold">{avatar}</span>
      </div>

      <div className={`max-w-[80%] ${isUser ? "items-end" : "items-start"}`}>
        <strong
          className={`block text-sm font-semibold ${
            isUser ? "text-right" : "text-left"
          } text-text`}
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
