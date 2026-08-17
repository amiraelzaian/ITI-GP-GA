
import { useState } from "react"
function ChatInput({onSend,disabled}){
    
    const [message,setMessage] = useState("")
    const handelSend = ()=>{
      if (message.trim()===""){
        return
      }
      onSend(message)
      setMessage("")
    }



  return (
    <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-3xl bg-gray-50 dark:bg-[#2f2f2f] px-3 py-2 shadow-sm">

      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        disabled={disabled}
        placeholder="Ask about movies or TV shows..."
        className="flex-1 bg-transparent outline-none px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
      />

      <button
        onClick={handelSend}
        disabled={disabled || message.trim() === ""}
        className="w-9 h-9 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center disabled:opacity-30 transition"
      >
        ↑
      </button>

    </div>
  );

}
export default ChatInput