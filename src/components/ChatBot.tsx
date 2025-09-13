import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hello! I'm your Smart Campus Assistant. I can help you with information about library hours, dining facilities, class schedules, campus facilities, and more. What would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("library")) {
      return "📚 The library is open from 9:00 AM to 8:00 PM Monday-Friday, and 10:00 AM to 6:00 PM on weekends. You can access digital resources 24/7 with your student ID.";
    } else if (lowerInput.includes("dining") || lowerInput.includes("canteen") || lowerInput.includes("food")) {
      return "🍽️ The main dining hall is open from 7:00 AM to 10:00 PM. We also have a café (8 AM - 6 PM) and food trucks on campus from 11 AM - 3 PM.";
    } else if (lowerInput.includes("schedule") || lowerInput.includes("class") || lowerInput.includes("timetable")) {
      return "📅 You can check your class schedules on the campus portal or mobile app. For general class timings, most classes run from 9 AM to 5 PM.";
    } else if (lowerInput.includes("facilities") || lowerInput.includes("sports") || lowerInput.includes("gym")) {
      return "🏟️ Campus facilities include: Sports complex (6 AM - 10 PM), Computer labs (24/7 access), Study rooms, Hostel facilities, and recreational areas.";
    } else if (lowerInput.includes("admission") || lowerInput.includes("fees") || lowerInput.includes("payment")) {
      return "💰 For admission and fee information, please visit the admissions office (Main Building, Room 101) or check the campus portal for detailed fee structures.";
    } else if (lowerInput.includes("wifi") || lowerInput.includes("internet")) {
      return "📶 Free WiFi is available across campus. Connect to 'CampusNet' using your student credentials. For technical support, contact IT helpdesk.";
    } else if (lowerInput.includes("transport") || lowerInput.includes("bus") || lowerInput.includes("parking")) {
      return "🚌 Campus shuttle runs every 15 minutes. Parking is available in designated areas. Bicycle parking is free near all major buildings.";
    } else if (lowerInput.includes("help") || lowerInput.includes("support")) {
      return "🆘 I can help with: Library hours, Dining options, Class schedules, Campus facilities, Fees & admissions, WiFi & tech support, Transportation. What specific information do you need?";
    } else {
      return "🤖 I'm still learning about that topic! For detailed information, you can visit the campus information desk or check the official campus portal. Is there anything else I can help you with?";
    }
  };

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-card rounded-xl shadow-lg border">
      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-chat-bot text-chat-bot-foreground px-4 py-3 rounded-2xl rounded-bl-md animate-pulse">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatBot;