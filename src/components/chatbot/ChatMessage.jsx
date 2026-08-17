
import ReactMarkdown from "react-markdown";

function ChatMessage({ role, message }) {
  let sender;
  let avatar;
  let messageStyle;

  if (role === "user") {
    sender = "You";
    avatar = "◉";
    messageStyle =
      "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100";
  } else {
    sender = "AI";
    avatar = "◉";
    messageStyle = "bg-blue-600 text-white";
  }

  return (
    <div className="flex gap-3 mb-6">

      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
        <span className="text-xs font-semibold">
          {avatar}
        </span>
      </div>

      <div className="max-w-[80%]">
        <strong className="text-sm font-semibold">
          {sender}
        </strong>

        <div className={`mt-1 px-4 py-3 rounded-2xl text-sm leading-6 ${messageStyle}`}>
          <ReactMarkdown>
            {message}
          </ReactMarkdown>
        </div>
      </div>

    </div>
  );
}

export default ChatMessage;