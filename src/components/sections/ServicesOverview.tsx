"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  implants: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707M18.364 18.364l.707.707M1 12h2m18 0h2M4.22 19.778l.707-.707M18.364 5.636l.707-.707" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  cosmetic: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  general: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  aligners: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
};

const cards = [
  { key: "implants", slug: "/services/implants", color: "from-accent/20 to-accent/5" },
  { key: "cosmetic", slug: "/services/cosmetic", color: "from-accent/15 to-accent/3" },
  { key: "general", slug: "/services/general", color: "from-white/10 to-white/3" },
  { key: "aligners", slug: "/services/cosmetic", color: "from-accent/15 to-transparent" },
];

export default function ServicesOverview() {
  const t = useTranslations("services");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const localHref = (p: string) => locale === "vi" ? `/vi${p}` : p;

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t("label")}
          heading={t("heading")}
          centered
          className="mb-14"
        />
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const tk = card.key as "implants" | "cosmetic" | "general" | "aligners";
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={localHref(card.slug)}
                  className="group glass rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:border-accent/25 transition-all duration-300 h-full block"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-accent`}>
                    {icons[tk]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-black text-lg mb-2">
                      {t(`${tk}.name`)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t(`${tk}.desc`)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-accent font-medium">{t(`${tk}.price`)}</span>
                    <span className="text-gray-500 group-hover:text-accent transition-colors text-sm">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href={localHref("/services")}
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
          >
            {t("overview_cta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
