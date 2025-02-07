import { cn } from "@/lib/utils";

interface UserStatusProps {
  status: "online" | "offline";
}

export const UserStatus = ({ status }: UserStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          "h-2.5 w-2.5 rounded-full",
          status === "online" ? "bg-whatsapp-primary" : "bg-gray-300"
        )}
      />
      <span className="text-sm text-gray-600 capitalize">{status}</span>
    </div>
  );
};