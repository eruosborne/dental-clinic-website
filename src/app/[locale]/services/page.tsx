import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServicesCTA } from "@/components/sections/ServicesCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Dental Services — Implants, Veneers, Aligners & More",
    description:
      "Comprehensive dental services for NZ and Australian patients in Da Nang, Vietnam. Dental implants, porcelain veneers, clear aligners, general dentistry — all at 60–80% less than home.",
  };
}

const services = [
  {
    slug: "implants",
    icon: "🦷",
    name: "Dental Implants",
    tagline: "The permanent solution for missing teeth",
    desc: "Replace one tooth or a full arch with titanium implants that look, feel, and function like your natural teeth. Same brands as Auckland clinics — 75% less.",
    nzCost: "NZD 5,000–8,000 per implant",
    metalCost: "~NZD 1,100–1,800 equiv.",
    timeframe: "5–7 days (single implant)",
    color: "from-accent/20 to-accent/5",
    border: "border-accent/20",
  },
  {
    slug: "cosmetic",
    icon: "✨",
    name: "Cosmetic Dentistry",
    tagline: "Your smile, completely redesigned",
    desc: "Porcelain veneers, crowns, teeth whitening, and digital smile design. See your result before treatment begins with our AI Smile Preview tool.",
    nzCost: "NZD 1,500–2,500 per veneer",
    metalCost: "~NZD 350–450 equiv.",
    timeframe: "4–6 days (6–10 veneers)",
    color: "from-accent/15 to-accent/3",
    border: "border-accent/20",
  },
  {
    slug: "general",
    icon: "🛡️",
    name: "General Dentistry",
    tagline: "Comprehensive care for your whole mouth",
    desc: "Fillings, root canals, extractions, deep cleanings, and check-ups. Thorough, comfortable, and priced to make quality care accessible.",
    nzCost: "NZD 800–3,500+",
    metalCost: "~NZD 80–500 equiv.",
    timeframe: "1–3 days",
    color: "from-white/10 to-white/3",
    border: "border-white/15",
  },
  {
    slug: "cosmetic",
    icon: "😁",
    name: "Clear Aligners",
    tagline: "Straighter teeth without the metal",
    desc: "Start your aligner treatment in Da Nang and continue monitoring from home. Most patients need just one visit to get impressions taken and aligners made.",
    nzCost: "NZD 8,000–12,000",
    metalCost: "~NZD 2,000–3,200 equiv.",
    timeframe: "5–7 days initial visit",
    color: "from-accent/15 to-transparent",
    border: "border-accent/15",
  },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-gray-700 tracking-wide mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            Designed for NZ & Australian patients
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white mb-5">
            Every treatment you need.<br />
            <span className="text-gradient-accent">One destination.</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive dental care for international patients. Every treatment designed around your schedule, your goals, and your budget — with English-language care throughout.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.name}
              href={locale === "vi" ? `/vi/services/${svc.slug}` : `/services/${svc.slug}`}
              className={`group glass rounded-3xl p-8 border ${svc.border} hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col gap-5`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-2xl shrink-0`}>
                  {svc.icon}
                </div>
                <div>
                  <h2 className="font-display font-bold text-xl text-off-white">{svc.name}</h2>
                  <p className="text-accent text-sm font-medium mt-0.5">{svc.tagline}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{svc.desc}</p>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { label: "NZ Cost", value: svc.nzCost, dim: true },
                  { label: "Metal Dental", value: svc.metalCost, dim: false },
                  { label: "Timeline", value: svc.timeframe, dim: false },
                ].map((item) => (
                  <div key={item.label} className="bg-gray-100 rounded-xl p-3">
                    <div className="text-xs text-gray-600 mb-1">{item.label}</div>
                    <div className={`text-xs font-semibold ${item.dim ? "text-gray-600 line-through" : "text-accent"}`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all duration-200">
                Learn more <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <ServicesCTA locale={locale} />
      </div>
    </div>
  );
}
