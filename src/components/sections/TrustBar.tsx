"use client";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";

export default function TrustBar() {
  const t = useTranslations("trust");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { value: STATS.patientsServed, suffix: "+", label: t("patients"), sub: t("patients_sub") },
    { value: STATS.yearsInPractice, suffix: "", label: t("years"), sub: t("years_sub") },
    { value: STATS.googleRating, suffix: "/5", label: t("rating"), sub: `${STATS.reviewCount}+ ${t("rating_sub")}`, decimals: 1 },
    { value: STATS.savingsPercent, suffix: "%", label: t("savings"), sub: t("savings_sub") },
  ];

  return (
    <section ref={ref} className="bg-primary-light border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
          {items.map((item) => (
            <div key={item.label} className="text-center px-6 py-2">
              <div className="text-3xl md:text-4xl font-bold font-display text-accent mb-1">
                {isInView ? (
                  <AnimatedCounter end={item.value} suffix={item.suffix} decimals={item.decimals ?? 0} />
                ) : (
                  <span>0{item.suffix}</span>
                )}
              </div>
              <div className="text-sm font-semibold text-black mb-0.5">{item.label}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>
        {/* Brand logos placeholder */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-center gap-8">
          <span className="text-xs text-gray-500 uppercase tracking-widest mr-4">Implant Brands Used:</span>
          {["Straumann", "Nobel Biocare", "MegaGen", "Osstem"].map((brand) => (
            <span key={brand} className="text-gray-600 text-sm font-semibold font-display tracking-wide">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
