import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
  time: string;
}

interface WhatsAppButtonProps {
  companyName?: string;
  phoneNumber?: string;
  greeting?: string;
  quickReplies?: string[];
}

export default function WhatsAppButton({
  companyName = "Contact Us",
  phoneNumber = "",
  greeting = "Hello! How can we help you today?",
  quickReplies = ["Information", "Pricing", "Contact"],
}: WhatsAppButtonProps) {
  const WHATSAPP_URL = phoneNumber ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}` : "#";
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { text: greeting, isBot: true, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (text?: string) => {
    const msg = text || input;
    if (!msg.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { text: msg, isBot: false, time: now }]);
    setInput("");
    setTimeout(() => {
      const botTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      setMessages((prev) => [...prev, { text: "Thank you for your message! We'll get back to you shortly.", isBot: true, time: botTime }]);
    }, 1200);
  };

  return (
    <>
      <div className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] transition-all duration-400 origin-bottom-right ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border/50">
          <div className="bg-[#075E54] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </div>
            <div className="flex-1">
              <h4 className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{companyName}</h4>
              <p className="text-white/70 text-xs" style={{ fontFamily: "var(--font-body)" }}>Online</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors"><X size={20} /></button>
          </div>
          <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-[#ECE5DD]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm shadow-sm ${msg.isBot ? "bg-white text-gray-800 rounded-tl-none" : "bg-[#DCF8C6] text-gray-800 rounded-tr-none"}`} style={{ fontFamily: "var(--font-body)" }}>
                  <p className="leading-relaxed">{msg.text}</p>
                  <span className="text-[10px] text-gray-500 mt-1 block text-right">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="px-3 py-2 bg-white border-t border-border/30 flex gap-2 overflow-x-auto">
            {quickReplies.slice(0, 3).map((reply, i) => (
              <button key={i} onClick={() => handleSend(reply)} className="flex-shrink-0 text-xs bg-teal/10 text-teal-dark px-3 py-1.5 rounded-full hover:bg-teal/20 transition-colors whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{reply}</button>
            ))}
          </div>
          <div className="p-3 bg-white border-t border-border/30 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} placeholder="Type a message..." className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 text-gray-800" style={{ fontFamily: "var(--font-body)" }} />
            <button onClick={() => handleSend()} className="w-10 h-10 rounded-full bg-[#075E54] hover:bg-[#064E46] text-white flex items-center justify-center transition-colors flex-shrink-0"><Send size={16} /></button>
          </div>
          {phoneNumber && (
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block text-center py-2.5 bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Continue on WhatsApp →</a>
          )}
        </div>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? "bg-gray-600 hover:bg-gray-700" : "bg-[#25D366] hover:bg-[#20BD5A]"}`} aria-label="Chat WhatsApp">
        {isOpen ? <X size={24} className="text-white" /> : (
          <>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {showPulse && <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center animate-bounce">1</span>}
          </>
        )}
      </button>
    </>
  );
}
