// Required packages:
// npm install @google/generative-ai
// npm install -D @types/node

import { GoogleGenerativeAI } from '@google/generative-ai';

// Set your actual API key in a .env file as VITE_GEMINI_API_KEY
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
console.log(apiKey);
async function main(prompt) {
  alert(prompt);
  if (typeof prompt !== "string" || !prompt.trim()) {
    throw new Error("Prompt must be a non-empty string");
  }
  const genAI = new GoogleGenerativeAI(apiKey);

  // Load the model
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // Prepare prompt
  //const prompt = "What is the capital of Austria?";

  const result = await model.generateContent(prompt);
  const response = await result.response;

  console.log(response.text());
  return response.text();
}

//main().catch(console.error);

export default main;
