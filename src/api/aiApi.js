import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});



const SYSTEM_PROMPT = `
You are an AI Movie Assistant.

You only answer questions related to movies and TV shows.

If the user asks about an unrelated topic,
politely explain that you can only help with movie
and TV-related questions.
`;



let previousInteractionId = null
  export async function sendMessage(message) {
const interaction = await genAI.interactions.create({
    model: "gemini-3.6-flash",
    input: message,
    system_instruction: SYSTEM_PROMPT,
   previous_interaction_id:previousInteractionId

});
previousInteractionId = interaction.id

return interaction.output_text

   }