
function TypingIndicator() {
   return (
    <div className="flex items-center gap-3 mb-6">

      <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
        <span className="text-xs font-bold text-white dark:text-black">
          AI
        </span>
      </div>

      <div className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]"></span>
        <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]"></span>
      </div>

    </div>
  );
}

export default TypingIndicator;