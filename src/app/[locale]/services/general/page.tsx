import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "General Dentistry in Vietnam — Fillings, Root Canals & More",
  description:
    "Comprehensive general dentistry in Da Nang, Vietnam. Fillings, root canals, extractions, deep cleanings. English-speaking team. Save 60–70% vs NZ/Aus. Free consultation.",
};

const procedures = [
  { name: "Dental Check-up & Clean", desc: "Comprehensive examination, X-rays, scale & polish.", nz: "NZD 180–300", metal: "~NZD 35–60" },
  { name: "Composite Filling (white)", desc: "Tooth-coloured resin restoration for cavities.", nz: "NZD 200–400", metal: "~NZD 40–80" },
  { name: "Root Canal Treatment", desc: "Saves a badly infected tooth — including crown if needed.", nz: "NZD 1,200–2,500", metal: "~NZD 220–450" },
  { name: "Simple Tooth Extraction", desc: "Removal of a straightforward tooth.", nz: "NZD 200–350", metal: "~NZD 50–90" },
  { name: "Surgical Extraction (wisdom)", desc: "Removal of impacted or complex wisdom teeth.", nz: "NZD 400–900", metal: "~NZD 80–180" },
  { name: "Deep Cleaning (per quadrant)", desc: "Periodontal scaling and root planing for gum disease.", nz: "NZD 350–700", metal: "~NZD 70–130" },
  { name: "Night Guard (occlusal splint)", desc: "Custom-fitted guard to protect teeth from grinding.", nz: "NZD 600–900", metal: "~NZD 120–180" },
];

const faqs = [
  { q: "Is it worth flying to Vietnam for general dentistry?", a: "For single small treatments, the travel cost may outweigh savings. But if you're combining general dental work with a larger procedure (implants, veneers), adding a check-up, fill, or root canal to your trip can save you hundreds. Many patients address years of deferred dental work in a single trip." },
  { q: "Will my records be sent to my NZ/Aus dentist?", a: "Yes, always. We provide a full written treatment summary, X-rays, and any relevant records in English — formatted for easy use by your home dentist. This ensures continuity of care." },
  { q: "What if I need emergency treatment while in Da Nang?", a: "We have priority appointment slots for patients experiencing unexpected dental issues during their visit. Our clinic is open Monday–Sunday, 8am–5pm. We also provide a direct emergency contact number for patients staying locally." },
  { q: "Are the materials used the same quality as NZ?", a: "We use equivalent or better materials to what you'd receive in New Zealand — including GC and 3M composite resins, and international-grade endodontic equipment. We don't cut corners on materials." },
];

export default async function GeneralPage() {
  const locale = await getLocale();

  return (
    <div className="pt-24 pb-20">
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={locale === "vi" ? "/vi/services" : "/services"} className="inline-flex items-center gap-2 text-gray-700 hover:text-accent text-sm transition-colors mb-6">← All Services</Link>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl shrink-0">🛡️</div>
            <div>
              <p className="text-accent text-sm font-medium mb-1">Save up to 70% vs NZ</p>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white leading-tight">
                General Dentistry<br />in Da Nang
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Thorough, comfortable general dental care at a fraction of NZ/Aus costs. English-speaking team, written records sent to your home dentist, and open 7 days a week.
          </p>
          <Link href={locale === "vi" ? "/vi/book" : "/book"} className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.3)] transition-all duration-300 mt-8">
            Book Free Consultation →
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">General Treatments & Pricing</h2>
          <div className="space-y-3">
            {procedures.map((p) => (
              <div key={p.name} className="glass rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-1">
                  <div className="font-display font-semibold text-off-white">{p.name}</div>
                  <div className="text-gray-700 text-sm mt-1">{p.desc}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">NZ Average</div>
                  <div className="text-gray-600 text-sm line-through">{p.nz}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs text-gray-600">Metal Dental</div>
                    <div className="text-accent font-bold font-display">{p.metal}</div>
                  </div>
                  <Link href={locale === "vi" ? "/vi/book" : "/book"} className="shrink-0 bg-accent/10 border border-accent/30 text-accent text-xs px-3 py-1.5 rounded-lg hover:bg-accent/20 transition-colors">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass rounded-2xl group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-off-white pr-4">{faq.q}</span>
                  <span className="text-accent text-lg shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-300 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="gradient-mesh rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative z-10">
            <h2 className="text-2xl font-display font-bold text-off-white mb-3">Combine treatments. Maximise your savings.</h2>
            <p className="text-gray-700 mb-7 max-w-lg mx-auto">Most patients combine general and cosmetic treatments in one trip. Book a free consultation and we'll build a comprehensive plan.</p>
            <Link href={locale === "vi" ? "/vi/book" : "/book"} className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] transition-all duration-300">
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
