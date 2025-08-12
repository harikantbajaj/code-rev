import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI( process.env.GOOGLE_GEMINI_KEY, );
const model = ai.models.get("gemini-2.5-flash"); 
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();