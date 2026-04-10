"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const localHref = (p: string) => locale === "vi" ? `/vi${p}` : p;

  return (
    <section className="section gradient-mesh relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-black mb-5 leading-tight">
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">{t("subheading")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localHref("/book")}
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold text-base px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] hover:shadow-[0_0_50px_rgba(10,22,40,0.5)] transition-all duration-300 animate-pulse-glow"
            >
              {t("primary")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button
              onClick={() => document.getElementById("chat-widget-trigger")?.click()}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-black font-medium text-base px-8 py-4 rounded-xl hover:border-accent/60 hover:bg-accent/5 transition-all duration-300"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {t("secondary")}
            </button>
          </div>
          <p className="mt-5 text-sm text-gray-500">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
