"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocalHref } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_URL, CLINIC_EMAIL } from "@/lib/constants";

export default function CTASection() {
  const t = useTranslations("cta");
  const localHref = useLocalHref();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

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
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">{t("subheading")}</p>

          {/* Multi-channel CTA row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {/* WhatsApp - Primary */}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5E] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.383.214-.39-.013c-1.585 0-2.98.735-3.99 2.064C3.75 10.645 3 12.577 3 14.8c0 1.148.248 2.457.733 3.52L3 21.957l3.518-.737a9.8 9.8 0 003.6.633h.006c5.451 0 9.876-4.422 9.876-9.876 0-2.646-.981-5.127-2.764-7.008-1.784-1.882-4.165-2.917-6.769-2.917" />
              </svg>
              {t("whatsapp")}
            </Link>

            {/* AI Chatbot */}
            <button
              onClick={() => document.getElementById("chat-widget-trigger")?.click()}
              className="inline-flex items-center justify-center gap-2 border border-accent/40 hover:border-accent/70 bg-accent/5 hover:bg-accent/10 text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              {t("ai_chat")}
            </button>

            {/* Book Online */}
            <Link
              href={localHref("/book")}
              className="inline-flex items-center justify-center gap-2 border border-accent/40 hover:border-accent/70 bg-accent/5 hover:bg-accent/10 text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t("book")}
            </Link>

            {/* Email */}
            <Link
              href={`mailto:${CLINIC_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 border border-accent/40 hover:border-accent/70 bg-accent/5 hover:bg-accent/10 text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t("email")}
            </Link>
          </div>
          <p className="mt-5 text-sm text-gray-500">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
