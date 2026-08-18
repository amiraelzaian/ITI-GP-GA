import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { sendMessage } from "../../api/aiApi.js";
import TypingIndicator from "./TypingIndeicator";

function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    const chat = chatRef.current;

    if (!chat) return;

    const handleScroll = () => {
      const isNearBottom =
        chat.scrollHeight - chat.scrollTop - chat.clientHeight < 150;

      setShowScrollButton(!isNearBottom);
    };

    chat.addEventListener("scroll", handleScroll);

    return () => {
      chat.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleSend = async (message) => {
    if (loading) {
      return;
    }

    setError("");
    setLoading(true);

    const newMessage = {
      role: "user",
      text: message,
    };

    setMessages((previousMessages) => [...previousMessages, newMessage]);

    try {
      const response = await sendMessage(message);

      const aiMessage = {
        role: "assistant",
        text: response,
      };

      setMessages((previousMessages) => [...previousMessages, aiMessage]);

      setLoading(false);

      setTimeout(() => {
        scrollToBottom();
      }, 0);
    } catch (error) {
      console.error(error);

      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <main
        ref={chatRef}
        className="mx-auto h-[calc(100vh-136px)] max-w-3xl overflow-y-auto scrollbar-hide px-4 py-8"
      >
        {messages.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
              <span className="text-2xl">🎬</span>
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-text">
              How can I help you with movies?
            </h2>

            <p className="max-w-md text-sm leading-6 text-text-muted">
              Ask me for movie recommendations, summaries, actors, directors,
              genres, or similar movies.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted">
                🎬 Movie recommendations
              </span>

              <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted">
                ⭐ Best movies
              </span>

              <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted">
                🎭 Actors & directors
              </span>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <ChatMessage key={index} role={message.role} message={message.text} />
        ))}

        {loading && <TypingIndicator />}

        {error && (
          <div className="my-4 rounded-lg border border-accent-secondary/20 bg-accent-secondary/10 px-4 py-3 text-sm text-accent-secondary">
            {error}
          </div>
        )}
      </main>

      {/* Scroll to bottom button */}
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          aria-label="Scroll to latest message"
          className="
            fixed bottom-28 right-6 z-50
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-border
            bg-surface
            text-accent
            shadow-lg
            transition-all duration-300
            hover:scale-110
            hover:shadow-xl
            active:scale-95
          "
        >
          ↓
        </button>
      )}

      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-bg/95 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 pb-4 pt-3">
          <ChatInput onSend={handleSend} disabled={loading} />

          <p className="mt-2 text-center text-xs text-text-muted">
            AI Movie Assistant can make mistakes. Check important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
