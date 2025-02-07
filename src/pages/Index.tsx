import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { UserStatus } from "@/components/UserStatus";

// Mock data
const mockUsers = [
  { id: 1, name: "Alice", status: "online" as const },
  { id: 2, name: "Bob", status: "offline" as const },
  { id: 3, name: "Group Chat", type: "group", status: "online" as const },
];

const Index = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hey there! 👋",
      timestamp: "10:30 AM",
      isSent: false,
    },
    {
      id: 2,
      content: "Hi! How are you?",
      timestamp: "10:31 AM",
      isSent: true,
    },
  ]);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      id: messages.length + 1,
      content,
      timestamp: new Date().toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit" 
      }),
      isSent: true,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Users sidebar */}
      <div className="w-80 bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
        </div>
        <div className="overflow-y-auto">
          {mockUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer border-b"
            >
              <div>
                <h3 className="font-medium">{user.name}</h3>
                <UserStatus status={user.status} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="p-4 bg-white border-b flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Alice</h2>
            <UserStatus status="online" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}
        </div>

        {/* Input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Index;