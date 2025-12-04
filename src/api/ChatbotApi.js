import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI with API key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("VITE_GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY);

// System instruction to ensure the bot only answers food-related questions
const SYSTEM_INSTRUCTION = `You are a helpful food assistant chatbot for a Restaurant Management System. Your role is to provide expert advice and information about food, recipes, menus, cooking, and restaurant services.

IMPORTANT RULES:

1. You MUST ONLY answer questions related to:
   - Food and recipes
   - Menu items and dishes
   - Cooking techniques and methods
   - Food ingredients and nutrition
   - Ordering and restaurant services
   - Food-related tips and recommendations
   - Cuisine types and food cultures
   - Restaurant operations
   - Food preparation and storage
   - Dietary restrictions and food allergies
   - Food pairing and wine recommendations
   - Any other food, menu, recipe, or ordering-related topics

2. If a user asks ANY question that is NOT related to food, recipes, menu, ordering, or restaurants, you MUST respond with EXACTLY this message (nothing else):

"I can only answer food-related questions."

3. Do not provide information about:
   - General topics unrelated to food
   - Technology, programming, or software (unless specifically about restaurant technology)
   - Weather forecasts (unless related to food storage or outdoor dining)
   - General health advice (unless about nutrition or food allergies)
   - Plants or gardening (unless about edible plants or herbs)
   - Any other non-food topics

4. When answering food-related questions, be helpful, accurate, and provide detailed information about:
   - Recipe instructions and ingredients
   - Cooking techniques and tips
   - Menu recommendations
   - Food preparation methods
   - Ingredient substitutions
   - Dietary considerations
   - Food safety and storage
   - Restaurant ordering processes
   - Food pairing suggestions
   - Cuisine styles and origins

5. Always maintain a friendly and professional tone when discussing food topics.`;

// Get the Gemini Flash model
// Note: If "gemini-2.5-flash" doesn't work, try "gemini-1.5-flash" or "gemini-2.0-flash-exp"
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: SYSTEM_INSTRUCTION,
});

/**
 * Send a message to the Gemini chatbot
 * @param {string} message - The user's message
 * @param {Array} chatHistory - Previous conversation history (optional)
 * @returns {Promise<string>} - The AI's response
 */
export async function sendChatMessage(message, chatHistory = []) {
  try {
    if (!API_KEY) {
      throw new Error(
        "Gemini API key is not configured. Please set VITE_GEMINI_API_KEY in your .env file."
      );
    }

    // Start a chat session with history if available
    const chat = model.startChat({
      history: chatHistory.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
    });

    // Send the message
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error(
      error.message || "Failed to get response from the chatbot. Please try again."
    );
  }
}
