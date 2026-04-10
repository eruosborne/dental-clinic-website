"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pricingRows = [
  { treatment: "Single Dental Implant", nz: "NZD 5,000–8,000", metal: "NZD ~1,100–1,800", save: "~75%" },
  { treatment: "Porcelain Veneer (each)", nz: "NZD 1,500–2,500", metal: "NZD ~350–450", save: "~80%" },
  { treatment: "Porcelain Crown", nz: "NZD 1,500–2,200", metal: "NZD ~280–380", save: "~78%" },
  { treatment: "Clear Aligners (full)", nz: "NZD 8,000–12,000", metal: "NZD ~2,000–3,000", save: "~70%" },
];

const qualityPoints = [
  "Same implant brands as your Auckland dentist (Straumann, Nobel Biocare, Osstem)",
  "3D digital treatment planning — your outcome mapped before a single procedure",
  "English-speaking clinical team + dedicated international patient coordinator",
  "Written treatment records sent directly to your home dentist",
  "Warranty on all restorative and cosmetic work",
  "5-star, climate-controlled clinic in central Da Nang — 10 min from the airport",
];

export default function WhyVietnam() {
  const t = useTranslations("why");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const localHref = (p: string) => locale === "vi" ? `/vi${p}` : p;

  return (
    <section className="section bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t("label")}
          heading={t("heading")}
          labelColor="accent"
          className="mb-14"
        />
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Cost comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-display font-semibold text-black mb-2">
              {t("col1_heading")}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t("col1_body")}</p>

            <div className="glass rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0 text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 border-b border-gray-200">
                <span>Treatment</span>
                <span className="text-center">NZ Cost</span>
                <span className="text-center text-accent">You Save</span>
              </div>
              {pricingRows.map((row, i) => (
                <div
                  key={row.treatment}
                  className={`grid grid-cols-3 gap-0 px-5 py-4 text-sm items-center ${i < pricingRows.length - 1 ? "border-b border-white/6" : ""}`}
                >
                  <div>
                    <div className="text-black font-medium text-xs leading-tight">{row.treatment}</div>
                    <div className="text-accent/80 text-xs mt-0.5">Metal: {row.metal}</div>
                  </div>
                  <div className="text-center text-gray-500 text-xs">{row.nz}</div>
                  <div className="text-center">
                    <span className="bg-accent/15 text-accent text-xs font-bold px-2 py-0.5 rounded-full">{row.save}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              *Indicative pricing based on publicly available NZ dental cost data. Prices vary by case complexity.
            </p>

            <div className="mt-5 glass rounded-xl p-4 border-l-2 border-accent">
              <p className="text-sm text-gray-700">
                <strong className="text-black">Even with flights + 7 nights in Da Nang</strong>, most patients save NZD 3,000–15,000 on major treatments.
              </p>
            </div>

            <Link
              href={localHref("/pricing")}
              className="mt-6 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent font-medium text-sm px-5 py-3 rounded-xl hover:bg-accent/20 transition-all duration-300"
            >
              {t("col1_cta")} →
            </Link>
          </motion.div>

          {/* Quality points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-xl font-display font-semibold text-black mb-2">
              {t("col2_heading")}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{t("col2_note")}</p>

            <ul className="space-y-4">
              {qualityPoints.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* Da Nang info */}
            <div className="mt-8 glass rounded-2xl p-5">
              <h4 className="font-display font-semibold text-black mb-3 text-sm">
                ✈️ Da Nang is an easy trip from home
              </h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>🇦🇺 Sydney → Da Nang</span>
                  <span className="text-accent font-medium">~9 hours direct</span>
                </div>
                <div className="flex justify-between">
                  <span>🇳🇿 Auckland → Da Nang</span>
                  <span className="text-accent font-medium">~10–11 hours (1 stop)</span>
                </div>
                <div className="flex justify-between">
                  <span>🏖️ Da Nang Int'l Airport → Clinic</span>
                  <span className="text-accent font-medium">~10 minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
