"use client";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass rounded-2xl p-10 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-display font-bold text-xl text-off-white mb-2">Message received!</h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our international patient coordinator will reply within 24 hours. You can also chat with our AI assistant right now for instant answers.
        </p>
        <button
          onClick={() => document.getElementById("chat-widget-trigger")?.click()}
          className="mt-5 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-sm px-5 py-2.5 rounded-xl hover:bg-accent/20 transition-colors"
        >
          Chat with AI → instant answers
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Full Name *</label>
          <input required type="text" placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Email Address *</label>
          <input required type="email" placeholder="jane@example.com" className={inputClass} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Phone (optional)</label>
          <input type="tel" placeholder="+64 21 xxx xxxx" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Preferred Language</label>
          <select className={inputClass + " cursor-pointer"}>
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs text-gray-600 mb-1.5 font-medium">Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your dental concerns, the treatments you're interested in, or any questions you have..."
          className={inputClass + " resize-none"}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-accent text-primary font-semibold py-4 rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(10,22,40,0.25)] hover:shadow-[0_0_30px_rgba(10,22,40,0.4)] transition-all duration-300"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
      <p className="text-center text-xs text-gray-600">
        Or get instant answers: <button type="button" onClick={() => document.getElementById("chat-widget-trigger")?.click()} className="text-accent hover:text-accent-hover transition-colors">chat with our AI →</button>
      </p>
    </form>
  );
}
