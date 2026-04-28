import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Dental Implants — Save Up to 75% vs NZ",
  description:
    "Get dental implants from ~NZD 1,100. Same Straumann & Nobel Biocare brands as Auckland clinics. Single implants completed in 5–7 days. Free consultation.",
};

const procedures = [
  { name: "Single Tooth Implant", desc: "Titanium post + abutment + porcelain crown. One visit, permanent result.", nz: "NZD 5,000–8,000", clinic: "~NZD 1,100–1,800" },
  { name: "All-on-4 (full arch)", desc: "4 implants supporting a full arch of fixed teeth. Transform your smile in one trip.", nz: "NZD 25,000–40,000", clinic: "~NZD 6,000–9,000" },
  { name: "All-on-6", desc: "6 implants for maximum stability — ideal for complex cases.", nz: "NZD 32,000–50,000", clinic: "~NZD 8,000–12,000" },
  { name: "Bone Graft", desc: "Required when jaw bone density is insufficient for implant placement.", nz: "NZD 1,500–3,500", clinic: "~NZD 350–700" },
  { name: "Sinus Lift", desc: "Upper jaw augmentation procedure for implants in the back of the mouth.", nz: "NZD 2,000–4,500", clinic: "~NZD 450–900" },
];

const faqs = [
  { q: "Are the implant brands the same quality as in NZ?", a: "Yes. We use Straumann, Nobel Biocare, Osstem, and MegaGen — the same brands used in top Auckland and Sydney clinics. The implant itself is identical; the cost difference comes from Vietnam's significantly lower operating costs." },
  { q: "Can I get an implant done in one trip?", a: "For single implants using same-day loading (immediate placement), many patients complete treatment in 5–7 days. More complex cases (multiple implants, bone grafts, All-on-4) may require two visits 3–6 months apart. We'll assess your case beforehand and design a travel plan that works." },
  { q: "What happens if something goes wrong after I fly home?", a: "All implant work comes with a written warranty. If there are any complications, we provide remote follow-up via video consultation, coordinate with your NZ/Aus dentist, and have a clear protocol for resolving issues — including provision for return visits if necessary." },
  { q: "Is it safe to have surgery overseas?", a: "Smile Dental Clinic follows international infection control protocols, using hospital-grade sterilisation and sterile surgical kits. Our implantologist Dr. Nguyen Tuan Tu has 12+ years of implant experience and has placed 3,000+ implants for local and international patients." },
  { q: "Do I need a consultation before flying?", a: "We recommend it. A free video consultation with Dr. Nguyen before you book flights lets us assess your case, confirm suitability, and give you accurate pricing. You'll have all the information you need before any commitment." },
];

const timeline = [
  { day: "Before Flying", title: "Free Video Consultation", desc: "Share your X-rays or get a CT scan organised. We confirm suitability and price everything." },
  { day: "Day 1", title: "Arrival & Initial Assessment", desc: "Welcome appointment, CBCT scan, treatment planning. We confirm the final plan." },
  { day: "Day 2", title: "Implant Surgery", desc: "Titanium post placed under local anaesthetic. For same-day loading, a temporary crown is placed." },
  { day: "Days 3–4", title: "Rest & Monitoring", desc: "Relax and recover. Brief check-up to confirm healing." },
  { day: "Day 5–6", title: "Final Crown Placement", desc: "Permanent porcelain crown fitted. Final check. Records prepared for your home dentist." },
  { day: "Day 7", title: "Fly Home", desc: "Return home with a beautiful new smile and comprehensive care instructions." },
];

export default async function ImplantsPage() {
  const locale = await getLocale();

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={locale === "vi" ? "/vi/services" : "/services"} className="inline-flex items-center gap-2 text-gray-700 hover:text-accent text-sm transition-colors mb-6">
            ← All Services
          </Link>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center text-2xl shrink-0">🦷</div>
            <div>
              <p className="text-accent text-sm font-medium mb-1">Save up to 75% vs NZ</p>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white leading-tight">
                Dental Implants<br />Made Affordable
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Permanent, natural-looking tooth replacement using the same Straumann and Nobel Biocare implants as top Auckland clinics — at a fraction of the price. Most single implant cases completed in one week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href={locale === "vi" ? "/vi/book" : "/book"} className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.3)] transition-all duration-300">
              Book Free Consultation →
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-off-white font-medium px-7 py-3.5 rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all duration-300">
              See Full Pricing Calculator
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Procedures */}
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Implant Treatments & Pricing</h2>
          <div className="space-y-3">
            {procedures.map((p) => (
              <div key={p.name} className="glass rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="md:col-span-1">
                  <div className="font-display font-semibold text-off-white">{p.name}</div>
                  <div className="text-gray-700 text-sm mt-1">{p.desc}</div>
                </div>
                <div className="flex md:flex-col gap-4 md:gap-1">
                  <div>
                    <div className="text-xs text-gray-600">NZ Average</div>
                    <div className="text-gray-600 text-sm line-through">{p.nz}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="text-xs text-gray-600">Our Clinic</div>
                    <div className="text-accent font-bold font-display">{p.clinic}</div>
                  </div>
                  <Link href={locale === "vi" ? "/vi/book" : "/book"} className="shrink-0 bg-accent/10 border border-accent/30 text-accent text-xs px-3 py-1.5 rounded-lg hover:bg-accent/20 transition-colors">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-3">*Pricing indicative. Exact costs confirmed after consultation and CT scan assessment.</p>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">What to Expect — Your Week in Da Nang</h2>
          <div className="space-y-4">
            {timeline.map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-20 shrink-0">
                  <div className="text-xs font-bold text-accent bg-accent/10 px-2 py-1.5 rounded-lg text-center">{step.day}</div>
                </div>
                <div className="glass rounded-xl p-4 flex-1">
                  <div className="font-display font-semibold text-off-white">{step.title}</div>
                  <div className="text-gray-700 text-sm mt-1">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass rounded-2xl group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-off-white pr-4">{faq.q}</span>
                  <span className="text-accent text-lg shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-300 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="gradient-mesh rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-off-white mb-3">
              Ready to explore dental implants?
            </h2>
            <p className="text-gray-700 mb-7 max-w-xl mx-auto">
              Start with a free video consultation. Share your X-rays, get a personalised quote, and design your trip — all before you book a single flight.
            </p>
            <Link href={locale === "vi" ? "/vi/book" : "/book"} className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] transition-all duration-300">
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
