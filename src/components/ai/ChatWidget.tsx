"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { id: string; from: "user" | "bot"; text: string };

const BOT_RESPONSES: Record<string, string> = {
  default: "Thanks for your question! Our team specialises in helping NZ and Australian patients plan their dental trip. For personalised pricing and availability, I'd suggest booking a free consultation with our coordinator. Can I help with anything else?",
  price: "Our pricing is significantly lower than NZ/Aus rates. As a guide: single implants start from ~USD 1,000 (≈NZD 1,600), porcelain veneers from ~USD 350/tooth, and full aligner treatment from ~USD 2,200. Want a personalised estimate?",
  implant: "Dental implants at Smile Dental Clinic use Straumann, Nobel Biocare, and Osstem — the same brands used in top Auckland clinics. Treatment typically takes 5–7 days (for a single implant with same-day loading) or may require two visits for complex cases. Would you like to discuss your specific situation?",
  veneer: "Our porcelain veneers are designed using digital smile planning — you'll see a preview before we begin. Most patients complete 6–10 veneers in 4–5 days. Our cosmetic dentist Dr. Le specialises in smile design. Want to book a consultation?",
  safety: "Smile Dental Clinic follows international infection control protocols, uses hospital-grade sterilisation, and all our instruments are single-use where appropriate. Our doctors are trained internationally, and we hold accreditations that meet the same standards as Australian dental practices.",
  english: "Yes! Our entire team speaks English. You'll always have an English-speaking coordinator available, and our doctors communicate directly with you in English throughout your treatment.",
  book: "Booking is simple — you can start with a free online consultation to discuss your needs and get a personalised treatment plan. No flights booked, no commitment. Ready to get started?",
};

function getResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.match(/price|cost|cheap|expensive|how much|afford|pay/)) return BOT_RESPONSES.price;
  if (lower.match(/implant/)) return BOT_RESPONSES.implant;
  if (lower.match(/veneer|veneers|porcelain|cosmetic|smile/)) return BOT_RESPONSES.veneer;
  if (lower.match(/safe|safety|sterile|infection|quality|standard/)) return BOT_RESPONSES.safety;
  if (lower.match(/english|language|communicate|speak/)) return BOT_RESPONSES.english;
  if (lower.match(/book|consult|appointment|schedule|visit/)) return BOT_RESPONSES.book;
  return BOT_RESPONSES.default;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      from: "bot",
      text: "Hi! I'm Smile Dental Clinic's AI assistant. Ask me anything about treatments, pricing, or what it's like to get dental work with us — I'm available 24/7, no matter what timezone you're in. 😊",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send() {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), from: "user", text: input.trim() };
    const response = getResponse(input.trim());
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: `bot-${Date.now()}`, from: "bot", text: response }]);
    }, 1200 + Math.random() * 600);
  }

  return (
    <>
      {/* Trigger button — can be activated from other components */}
      <button
        id="chat-widget-trigger"
        onClick={() => setOpen(true)}
        className="hidden"
        aria-hidden
      />

      {/* Floating chat button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(10,22,40,0.4)] hover:shadow-[0_0_50px_rgba(10,22,40,0.6)] hover:scale-110 transition-all duration-300 animate-pulse-glow"
        aria-label="Open AI chat assistant"
      >
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[520px] flex flex-col glass-light rounded-2xl shadow-2xl border border-white/12 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-primary-light/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-sm">🤖</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold font-display text-black">Smile Dental Clinic AI</div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-success rounded-full" />
                      <span className="text-xs text-gray-500">Available 24/7</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors text-xl leading-none"
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scroll">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "bg-accent text-primary font-medium rounded-br-sm"
                          : "glass text-gray-700 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="glass px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                      {[0, 150, 300].map((delay) => (
                        <div
                          key={delay}
                          className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Suggestions */}
              <div className="px-4 py-2 flex gap-2 overflow-x-auto pb-0">
                {["Implant prices", "Is it safe?", "Book consult"].map((s) => (
                  <button
                    key={s}
                    onClick={() => { setInput(s); }}
                    className="shrink-0 text-xs text-accent border border-accent/30 px-3 py-1 rounded-full hover:bg-accent/10 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                    placeholder="Ask about treatments, pricing..."
                    className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                  />
                  <button
                    onClick={send}
                    disabled={!input.trim() || typing}
                    className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <p className="text-center text-[10px] text-gray-400 mt-2">
                  AI demo · Responses are illustrative. Real AI backend to be connected.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
