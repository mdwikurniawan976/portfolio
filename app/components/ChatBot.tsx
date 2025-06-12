"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there! This is Dwi. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const reply = getReply(input);
    setTimeout(() => {
      setMessages([...newMessages, { sender: "bot", text: reply }]);
      setLoading(false);
    }, 1000);
  };

  const getReply = (message: string): string => {
    const text = message.toLowerCase();

    if (text.includes("name")) {
      return "My full name is M. Dwi Kurniawan.";
    }
    else if (text.includes("age")) {
      return "I'm 17 years old.";
    }
    else if (text.includes("school") || text.includes("college") || text.includes("study") || text.includes("education")) {
      return "I graduated from SMKN 1 Bangil and currently studying D4 Informatics Engineering at Politeknik Negeri Malang.";
    }
    else if (text.includes("achievement") || text.includes("awards")) {
      return "I was the 1st winner in the district LKS competition and ranked 7th in the provincial competition for IT Software Solutions for Business.";
    }
    else if (text.includes("skills") || text.includes("abilities")) {
      return "My skills include Web Development (Next.js, React.js, Laravel), Mobile Development (Kotlin), Desktop Development (C#, .NET, Entity Framework), and Databases (MySQL, SQL Server, SQLite, Access).";
    }
    else if (text.includes("hobby") || text.includes("interests")) {
      return "My hobbies are coding, learning new technologies, and developing software projects.";
    }
    else if (text.includes("where are you from") || text.includes("from where") || text.includes("live") || text.includes("location")) {
      return "I'm from Indonesia, East Java, Pasuruan.";
    }
    else if (text.includes("project") || text.includes("portfolio")) {
      return "I have built several projects such as Quranease, Ezy Kasir, BromoAirlines, Ranggakocomoto, Quizziz, EsemkaGym, EsemkaFoodCurt, and business service websites.";
    }
    else if (text.includes("work") || text.includes("business") || text.includes("startup")) {
      return "I am passionate about building impactful software solutions and plan to start my own digital startup in the future.";
    }
    else {
      return "I'm sorry, I don't have information about that. You can ask me about my personal profile, education, skills, achievements, or projects.";
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-0 right-0 z-50 p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom,20px))]">
      {!isOpen && (
        <button
          className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
          onClick={toggleChat}
        >
          <FaCommentDots size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 max-w-[90vw] max-h-[90vh] bg-[#181824] text-white rounded-2xl shadow-2xl flex flex-col border border-[#292b3d] overflow-hidden">
          <div className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-t-2xl">
            <h4 className="font-semibold text-lg">Dwi AI Assistant</h4>
            <button onClick={toggleChat}>
              <FaTimes size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.sender === "user"
                  ? "ml-auto bg-gradient-to-br from-purple-500 to-indigo-500"
                  : "mr-auto bg-[#2b2b3d]"
                  }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm animate-pulse">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-[#292b3d] flex items-center space-x-2">
            <input
              className="flex-grow bg-[#2b2b3d] text-white py-2 px-3 rounded-xl focus:outline-none text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-indigo-500 w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition"
              onClick={sendMessage}
            >
              <FaPaperPlane size={16} />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}