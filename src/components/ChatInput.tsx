import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-white border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-whatsapp-primary"
      />
      <button
        type="submit"
        className="p-2 rounded-full bg-whatsapp-primary text-white hover:bg-whatsapp-dark transition-colors"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};