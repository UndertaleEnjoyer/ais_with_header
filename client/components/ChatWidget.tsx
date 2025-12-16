import { useState } from "react";
import { MessageCircle, X, Send, Users } from "lucide-react";

interface OnlineUser {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: "online" | "idle";
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeView, setActiveView] = useState<"users" | "chat">("users");
  const [selectedUser, setSelectedUser] = useState<OnlineUser | null>(null);
  const [messages, setMessages] = useState<
    Array<{ id: number; sender: string; text: string; timestamp: string }>
  >([]);
  const [inputValue, setInputValue] = useState("");

  const onlineUsers: OnlineUser[] = [
    {
      id: 1,
      name: "Петрова Ольга",
      role: "Дизайнер",
      avatar: "ПО",
      status: "online",
    },
    {
      id: 2,
      name: "Миронов Дмитрий",
      role: "Разработчик",
      avatar: "МД",
      status: "online",
    },
    {
      id: 3,
      name: "Сазанцева Екатерина",
      role: "Project Manager",
      avatar: "СЕ",
      status: "idle",
    },
    {
      id: 4,
      name: "Булгакова Дарья",
      role: "Тестер",
      avatar: "БД",
      status: "online",
    },
    {
      id: 5,
      name: "Иванов Петр",
      role: "Наставник",
      avatar: "ИП",
      status: "online",
    },
    {
      id: 6,
      name: "Смирнова Виктория",
      role: "Доцент",
      avatar: "СВ",
      status: "idle",
    },
    {
      id: 7,
      name: "Акимов Вячеслав",
      role: "Студент",
      avatar: "АВ",
      status: "online",
    },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() && selectedUser) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: inputValue,
        timestamp: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");

      // Simulate response
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: "other",
          text: "Спасибо за сообщение! Я прочитал его.",
          timestamp: new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, response]);
      }, 500);
    }
  };

  const handleSelectUser = (user: OnlineUser) => {
    setSelectedUser(user);
    setActiveView("chat");
    setMessages([
      {
        id: 1,
        sender: "other",
        text: `Привет! Я ${user.name}`,
        timestamp: "10:30",
      },
    ]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setActiveView("users");
        }}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl transition-all transform z-40 ${
          isOpen
            ? "bg-primary text-primary-foreground shadow-lg scale-100"
            : "bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 bg-white rounded-2xl border border-border shadow-2xl flex flex-col z-40 h-[600px]">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <h3 className="font-bold text-lg">
                  {activeView === "users"
                    ? "Online сейчас"
                    : selectedUser?.name}
                </h3>
              </div>
              {activeView === "chat" && (
                <button
                  onClick={() => {
                    setActiveView("users");
                    setSelectedUser(null);
                  }}
                  className="hover:bg-primary-600 p-1 rounded transition-all"
                >
                  ←
                </button>
              )}
            </div>
            <p className="text-primary-foreground/80 text-xs mt-1">
              {activeView === "users"
                ? `${onlineUsers.length} пользователей`
                : selectedUser?.role}
            </p>
          </div>

          {/* Users List View */}
          {activeView === "users" && (
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {onlineUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => handleSelectUser(user)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-all text-left group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary flex items-center justify-center text-sm font-bold">
                      {user.avatar}
                    </div>
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        user.status === "online"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-colors">
                      {user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary-50 px-2 py-1 rounded">
                    →
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Chat View */}
          {activeView === "chat" && selectedUser && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "user"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="border-t border-border p-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Напишите сообщение..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 px-3 py-2 border border-input rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-primary text-primary-foreground p-2 rounded-lg hover:shadow-lg transition-all"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatWidget;
