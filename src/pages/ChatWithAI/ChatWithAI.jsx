import React, { useState, useRef, useEffect } from "react";
import { sendChatMessage } from "../../api/ChatbotApi";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const ChatWithAI = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hello! I'm your food assistant. Ask me anything about food, recipes, menus, or ordering!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");

    // Add user message to chat
    const updatedMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Get chat history (excluding the welcome message and current user message)
      const chatHistory = updatedMessages
        .filter((msg) => msg.role !== "bot" || !msg.content.includes("Hello! I'm your food assistant"))
        .slice(0, -1); // Exclude the current user message

      const response = await sendChatMessage(userMessage, chatHistory);
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Sorry, I'm having trouble responding right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-orange-50 to-orange-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <FaRobot className="text-4xl text-orange-500" />
            <h1 className="text-4xl font-bold text-orange-600">Chat with AI</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Your food assistant is here to help! Ask about recipes, menus, cooking tips, and more.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-2xl h-[calc(100vh-280px)] flex flex-col border border-gray-200">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg p-4 shadow-md ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.role === "bot" && (
                    <div className="flex items-center gap-2 mb-2">
                      <FaRobot className="text-orange-500 text-sm" />
                      <span className="text-xs font-semibold text-orange-600">Food Assistant</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-lg p-4 max-w-[75%] shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <FaRobot className="text-orange-500 text-sm" />
                    <span className="text-xs font-semibold text-orange-600">Food Assistant</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about food, recipes, menus, cooking techniques..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold shadow-md"
              >
                <FaPaperPlane />
                <span>Send</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              💡 Tip: Ask me about recipes, menu items, cooking tips, food ingredients, or ordering!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatWithAI;

