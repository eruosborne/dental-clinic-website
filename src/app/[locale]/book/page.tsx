import type { Metadata } from "next";
import { BookingForm } from "./BookingForm";

export const metadata: Metadata = {
  title: "Book Free Dental Consultation — Smile Dental Clinic",
  description:
    "Book your free dental consultation at Smile Dental Clinic. No commitment, no flights booked. Our English-speaking coordinator will be in touch within 24 hours.",
};

const steps = [
  { num: "1", title: "We review your request", desc: "Our coordinator reviews your goals and prepares a personalised treatment plan with accurate pricing." },
  { num: "2", title: "You receive a detailed email", desc: "Full treatment plan, costs, timeline, and answers to your questions — within 24 hours." },
  { num: "3", title: "Optional video consultation", desc: "A free 20-minute video call with your specialist before you book any flights." },
  { num: "4", title: "Arrive at our clinic", desc: "We take care of everything from pickup arrangements to aftercare instructions." },
];

export default function BookPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-gray-700 tracking-wide mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            Free · No commitment · English-speaking team
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white mb-5">
            Book Your Free<br />
            <span className="text-gradient-accent">Consultation</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            No commitment. No flights booked yet. Just a conversation about your dental goals and how we can help — followed by a detailed, personalised treatment plan.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-display font-bold text-off-white mb-6">Tell us about your goals</h2>
            <BookingForm />
          </div>

          {/* What happens next */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 space-y-5">
              <h2 className="text-xl font-display font-bold text-off-white">What happens next</h2>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-accent text-primary font-bold font-display flex items-center justify-center text-sm shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-off-white text-sm">{step.title}</div>
                      <div className="text-gray-700 text-xs mt-1 leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass rounded-2xl p-5 mt-6">
                <h3 className="font-display font-semibold text-off-white mb-3 text-sm">Prefer to talk first?</h3>
                <div className="space-y-2.5 text-sm text-gray-700">
                  <p>💬 <button onClick={() => document.getElementById("chat-widget-trigger")?.click()} className="text-accent hover:text-accent-hover transition-colors">Chat with our AI</button> — instant answers, any timezone</p>
                  <p>📞 Call us: <a href="tel:+62800000000" className="text-accent hover:text-accent-hover transition-colors">+62 800 000 0000</a></p>
                  <p>✉️ Email: <a href="mailto:hello@smiledental.clinic" className="text-accent hover:text-accent-hover transition-colors">hello@smiledental.clinic</a></p>
                </div>
              </div>

              <div className="glass rounded-2xl p-5 border border-accent/20">
                <div className="text-sm text-gray-700 leading-relaxed">
                  <span className="text-accent font-semibold">⏱ Response time:</span> Our coordinator responds within 24 hours, typically much sooner. The AI assistant is available right now for instant answers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
