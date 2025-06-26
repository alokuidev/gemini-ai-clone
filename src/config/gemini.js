// Required packages:
// npm install @google/generative-ai
// npm install -D @types/node

import { GoogleGenerativeAI } from '@google/generative-ai';

// Set your actual API key here or use env variable
// eslint-disable-next-line no-undef
const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyADk-953X54OJ5_J-onnvc-q5l_CvNXGlI';

async function main() {
  const genAI = new GoogleGenerativeAI(apiKey);

  // Load the model
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // Prepare prompt
  const prompt = "What is the capital of Austria?";

  const result = await model.generateContent(prompt);
  const response = await result.response;

  console.log(response.text());
}

main().catch(console.error);
