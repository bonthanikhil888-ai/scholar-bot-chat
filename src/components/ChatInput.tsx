import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t bg-background/50 backdrop-blur-sm">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about schedules, facilities, dining & more..."
        disabled={disabled}
        className="flex-1 border-input focus:ring-2 focus:ring-primary/20"
      />
      <Button 
        type="submit" 
        disabled={!message.trim() || disabled}
        className="bg-primary hover:bg-primary-light transition-colors"
        size="icon"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;