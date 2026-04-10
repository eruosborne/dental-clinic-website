import type { Metadata } from "next";
import Link from "next/link";
import SavingsCalculator from "@/components/pricing/SavingsCalculator";

export const metadata: Metadata = {
  title: "Dental Prices Vietnam — NZD & AUD Savings Calculator",
  description:
    "Compare dental costs in New Zealand/Australia vs Metal Dental Da Nang. Interactive savings calculator — select your treatments and see exactly how much you'd save, including flights.",
};

const included = [
  "Free initial consultation (video or in-person)",
  "Full treatment plan in English before you commit",
  "Detailed quote with no hidden costs",
  "English-speaking coordinator throughout",
  "Written treatment records for your home dentist",
  "Warranty on all restorative and cosmetic work",
  "Remote follow-up video consultations post-treatment",
  "AI assistant available 24/7 for questions",
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-gray-700 tracking-wide mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Based on publicly available NZ/Aus dental cost data
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white mb-5">
            See exactly how much<br />
            <span className="text-gradient-accent">you'd save</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Select the treatments you need and see the real cost comparison — NZD or AUD vs. Metal Dental pricing. We even factor in flights and accommodation.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SavingsCalculator />
      </div>

      {/* What's included */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="glass rounded-3xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-display font-bold text-off-white mb-2">What's included in every treatment</h2>
              <p className="text-gray-700 text-sm">No hidden costs. No surprises. Here's what every Metal Dental patient gets as standard.</p>
            </div>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-display font-bold text-off-white mb-3">Ready for your personalised quote?</h2>
        <p className="text-gray-700 mb-7">The calculator gives you an estimate — a free consultation gives you the exact price for your specific case.</p>
        <Link href="/book" className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] transition-all duration-300">
          Get Your Personalised Quote →
        </Link>
        <p className="text-gray-600 text-sm mt-4">Free · No commitment · English-speaking coordinator</p>
      </div>
    </div>
  );
}
