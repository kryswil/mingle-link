import { cn } from "@/lib/utils";

interface ChatMessageProps {
  content: string;
  timestamp: string;
  isSent: boolean;
}

export const ChatMessage = ({ content, timestamp, isSent }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-message-fade-in",
        isSent ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[70%] rounded-lg px-4 py-2 shadow-sm",
          isSent ? "bg-whatsapp-light" : "bg-white"
        )}
      >
        <p className="text-sm">{content}</p>
        <p className="mt-1 text-right text-xs text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
};