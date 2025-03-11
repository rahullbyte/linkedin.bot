import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generatePost() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Create a professional LinkedIn post about water delivery AQUA, Mineral 20 Litter (Normal, Cold). Include relevant hashtags and make it engaging.`;
  const response = await model.generateContent(prompt);
  return response.response.text();
}

export async function generateImage(industry) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt = `Create an AI-generated image representing ${industry} trends for a LinkedIn post.`;
  const response = await model.generateContent(prompt);
  return response.response.text();
}
