import type { Metadata } from "next";
import Link from "next/link";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry — Veneers, Whitening & Aligners",
  description:
    "Porcelain veneers from ~NZD 350/tooth, professional whitening, clear aligners, and smile design. Save up to 80% vs NZ/Aus. Free consultation.",
};

const procedures = [
  { name: "Porcelain Veneers", desc: "Ultra-thin shells bonded to teeth for a perfect smile. Digital preview before treatment.", nz: "NZD 1,500–2,500 each", clinic: "~NZD 350–450 each" },
  { name: "Porcelain Crowns", desc: "Full coverage restoration for damaged or discoloured teeth.", nz: "NZD 1,500–2,200 each", clinic: "~NZD 280–380 each" },
  { name: "Zirconia Crowns", desc: "Maximum strength crowns with natural aesthetics — ideal for back teeth.", nz: "NZD 1,800–2,500 each", clinic: "~NZD 320–430 each" },
  { name: "Teeth Whitening (in-chair)", desc: "Professional Philips Zoom or equivalent in-chair whitening session.", nz: "NZD 600–900", clinic: "~NZD 100–150" },
  { name: "Clear Aligners (full case)", desc: "Complete aligner treatment — impressions taken, wear from home.", nz: "NZD 8,000–12,000", clinic: "~NZD 2,000–3,200" },
  { name: "Smile Makeover Package", desc: "Veneers + whitening + any additional treatments combined at package price.", nz: "NZD 15,000–30,000+", clinic: "~NZD 3,000–6,000" },
];

const faqs = [
  { q: "How do I know what my veneers will look like?", a: "Before we prepare a single tooth, Dr. Le creates a Digital Smile Design (DSD) — a computer-generated preview of your result. You can review and adjust the design until it's exactly what you want. You can also try our AI Smile Preview tool for a quick simulation." },
  { q: "Will veneers look natural?", a: "Modern porcelain veneers are designed to mimic the light-reflecting properties of natural enamel. They're custom-shaded to match your desired whiteness and shaped to fit your face. The results are indistinguishable from natural teeth — unless you tell people." },
  { q: "How long do veneers last?", a: "High-quality porcelain veneers typically last 10–15 years with proper care. Smile Dental Clinic uses only premium E.max and Lava porcelain brands. We provide a warranty on all veneer work." },
  { q: "Can clear aligners really be started in Vietnam and continued at home?", a: "Yes. After taking precise dental impressions or using digital scanning on your first visit, your custom aligner trays are manufactured. You take all your trays home and progress through them on schedule. We monitor your progress via video check-ins and coordinate with your local dentist if needed." },
];

const timeline = [
  { day: "Before Flying", title: "Smile Preview & Consultation", desc: "Use our AI tool or video consult to discuss your goals. We prepare a digital smile design." },
  { day: "Day 1", title: "Assessment & Planning", desc: "Photographs, X-rays, shade matching. Finalise the design together." },
  { day: "Day 2", title: "Preparation", desc: "Minimal tooth preparation. Temporary veneers placed — you leave looking great." },
  { day: "Days 3–4", title: "Lab Fabrication", desc: "Your permanent veneers are custom-crafted. Relax and enjoy local attractions." },
  { day: "Day 5–6", title: "Bonding & Final Fitting", desc: "Permanent veneers bonded. Final adjustments. Before/after photographs." },
  { day: "Day 7", title: "Fly Home", desc: "Return home with a transformed smile and comprehensive maintenance instructions." },
];

export default async function CosmeticPage() {
  const locale = await getLocale();

  return (
    <div className="pt-24 pb-20">
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={locale === "vi" ? "/vi/services" : "/services"} className="inline-flex items-center gap-2 text-gray-700 hover:text-accent text-sm transition-colors mb-6">
            ← All Services
          </Link>
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center text-2xl shrink-0">✨</div>
            <div>
              <p className="text-gold text-sm font-medium mb-1">Save up to 80% vs NZ</p>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white leading-tight">
                Cosmetic Dentistry<br />Your Dream Smile
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Porcelain veneers, crowns, whitening, and clear aligners — all designed using digital smile planning so you see your result before treatment begins. 6–10 veneers can be completed in one week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href={locale === "vi" ? "/vi/book" : "/book"} className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.3)] transition-all duration-300">
              Book Free Consultation →
            </Link>
            <button
              onClick={() => document.getElementById("smile-preview-trigger")?.click()}
              className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold font-medium px-7 py-3.5 rounded-xl hover:border-gold/60 hover:bg-gold/5 transition-all duration-300"
            >
              Try AI Smile Preview
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Cosmetic Treatments & Pricing</h2>
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
                    <div className="text-xs text-gray-600">Our Clinic</div>
                    <div className="text-accent font-bold font-display">{p.clinic}</div>
                  </div>
                  <Link href={locale === "vi" ? "/vi/book" : "/book"} className="shrink-0 bg-accent/10 border border-accent/30 text-accent text-xs px-3 py-1.5 rounded-lg hover:bg-accent/20 transition-colors">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Your Smile Makeover Timeline</h2>
          <div className="space-y-4">
            {timeline.map((step, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="w-20 shrink-0">
                  <div className="text-xs font-bold text-gold bg-gold/10 px-2 py-1.5 rounded-lg text-center">{step.day}</div>
                </div>
                <div className="glass rounded-xl p-4 flex-1">
                  <div className="font-display font-semibold text-off-white">{step.title}</div>
                  <div className="text-gray-700 text-sm mt-1">{step.desc}</div>
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
            <h2 className="text-2xl md:text-3xl font-display font-bold text-off-white mb-3">Ready to see your new smile?</h2>
            <p className="text-gray-700 mb-7 max-w-xl mx-auto">Try our AI Smile Preview first, then book a free consultation with Dr. Le Minh Hoang to get your personalised Digital Smile Design.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("smile-preview-trigger")?.click()}
                className="border border-gold/40 text-gold font-medium px-7 py-3.5 rounded-xl hover:bg-gold/10 transition-colors"
              >
                Try AI Smile Preview
              </button>
              <Link href={locale === "vi" ? "/vi/book" : "/book"} className="bg-accent text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-accent-hover transition-colors">
                Book Free Consultation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
