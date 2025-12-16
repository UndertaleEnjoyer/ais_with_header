import Layout from "@/components/Layout";
import { MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "other", text: "Привет! Как дела?" },
    { id: 2, sender: "user", text: "Привет! Спасибо, всё хорошо!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "user", text: input },
      ]);
      setInput("");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto h-[600px] flex flex-col">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground flex items-center gap-2">
            <MessageCircle className="w-8 h-8" />
            Чат
          </h1>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto bg-white rounded-xl border border-border p-6 mb-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Напишите сообщение..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-4 py-3 border border-input rounded-lg bg-white"
          />
          <button
            onClick={handleSend}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
