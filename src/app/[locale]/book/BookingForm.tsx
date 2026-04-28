"use client";
import { useState } from "react";

const treatments = [
  "Dental Implants (single)",
  "All-on-4 / Full Arch Implants",
  "Porcelain Veneers",
  "Porcelain Crowns",
  "Clear Aligners",
  "Teeth Whitening",
  "Root Canal Treatment",
  "General Check-up & Clean",
  "Full Mouth Restoration",
  "Not sure yet — need advice",
];

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass rounded-2xl p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/15 flex items-center justify-center">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-off-white mb-3">
          Consultation request received!
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our international patient coordinator will be in touch within 24 hours with a personalised treatment plan and pricing. While you wait, our AI assistant can answer any questions.
        </p>
        <button
          onClick={() => document.getElementById("chat-widget-trigger")?.click()}
          className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-6 py-3 rounded-xl hover:bg-accent-hover transition-colors"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Chat with AI — instant answers
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
          <input required type="text" placeholder="Jane Smith" autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Email Address *</label>
          <input required type="email" placeholder="jane@example.com" autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Phone Number *</label>
          <input required type="tel" placeholder="+64 21 xxx xxxx" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1.5 font-medium">Country</label>
          <select className={inputClass + " cursor-pointer"}>
            <option value="">Select your country</option>
            <option value="nz">New Zealand 🇳🇿</option>
            <option value="au">Australia 🇦🇺</option>
            <option value="uk">United Kingdom 🇬🇧</option>
            <option value="us">United States 🇺🇸</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1.5 font-medium">Treatment Interest *</label>
        <select required className={inputClass + " cursor-pointer"}>
          <option value="">Select a treatment</option>
          {treatments.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1.5 font-medium">Preferred Travel Dates (approximate)</label>
        <input type="text" placeholder="e.g. March 2026, flexible, ASAP..." className={inputClass} />
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1.5 font-medium">Tell us more (optional)</label>
        <textarea
          rows={4}
          placeholder="Describe your dental situation, any previous treatment history, concerns about travelling, budget range — anything that helps us prepare a better recommendation for you."
          className={inputClass + " resize-none"}
        />
      </div>

      <div className="glass rounded-xl p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-[#0A1628] w-4 h-4" defaultChecked />
          <span className="text-xs text-gray-600 leading-relaxed">
            I agree to receive a follow-up email from Smile Dental Clinic's international patient team regarding my enquiry. No spam, no pressure — just helpful information.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-accent text-primary font-semibold py-4 rounded-xl hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(10,22,40,0.25)] hover:shadow-[0_0_40px_rgba(10,22,40,0.4)] transition-all duration-300 text-base"
      >
        {sending ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Sending your request...
          </span>
        ) : "Send My Consultation Request \u2192"}
      </button>

      <p className="text-center text-xs text-gray-600">
        Free consultation · No flights required · Response within 24 hours
      </p>
    </form>
  );
}
