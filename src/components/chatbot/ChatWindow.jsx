

import { useState } from "react";
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
import  {sendMessage}  from "../../api/aiApi.js";
import TypingIndicator from './TypingIndeicator'



function ChatWindow(){
const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

     const handleSend = async (message) => {
     if (loading){
         return;
     }
     setError("");
     setLoading(true);
     
       const newMessage = {
         role: "user",
         text: message
       };
     
        setMessages((previousMessages) => [
       ...previousMessages,
       newMessage,
       
     ]);
    

try{


    const response = await sendMessage(message)
    
      const aiMessage = {
      role: "assistant",
      text: response
    };
    setMessages((previousMessages) => [
    ...previousMessages,
    
    aiMessage
    ]);
    

setLoading(false);

}catch(error){
console.error(error);

      setError("Something went wrong Please try again");
      setLoading(false)
}
     }



return (
  <div className="min-h-screen bg-white dark:bg-[#212121] text-gray-900 dark:text-gray-100">

    {/* Header */}
    <header className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center px-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-black text-sm font-bold">
            AI
          </span>
        </div>

        <div>
          <h1 className="text-sm font-semibold">
            AI Movie Assistant
          </h1>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Movie & TV Assistant
          </p>
        </div>
      </div>
    </header>


   
    <main className="max-w-3xl mx-auto h-[calc(100vh-120px)] overflow-y-auto px-4 py-8">

      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-center">

          <div className="w-14 h-14 rounded-full bg-gray-100 dark:bg-[#2f2f2f] flex items-center justify-center mb-5">
            <span className="text-xl">
              🎬
            </span>
          </div>

          <h2 className="text-2xl font-semibold mb-2">
            How can I help you with movies?
          </h2>

          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            Ask me for movie recommendations, summaries,
            actors, directors, genres, or similar movies.
          </p>

        </div>
      )}


      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            role={message.role}
            message={message.text}
          />
        );
      })}


      {loading && <TypingIndicator />}


      {error && (
        <div className="my-4 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

    </main>


    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#212121]">

      <div className="max-w-3xl mx-auto px-4 pb-4">

        <ChatInput
          onSend={handleSend}
          disabled={loading}
        />

        <p className="text-center text-xs text-gray-400 mt-2">
          AI Movie Assistant can make mistakes. Check important information.
        </p>

      </div>

    </div>

  </div>
);



}


export default  ChatWindow