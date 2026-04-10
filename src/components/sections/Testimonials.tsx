"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-surface-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t("label")}
          heading={t("heading")}
          subheading={t("subheading")}
          centered
          labelColor="accent"
          className="mb-14"
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="glass rounded-2xl p-6 flex flex-col gap-5 hover:-translate-y-1 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <StarRating count={testimonial.rating} />
                <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full shrink-0">
                  {t("verified")}
                </span>
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold text-black text-sm">
                      {testimonial.flag} {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{t("treatment")}</div>
                    <div className="text-accent text-xs font-medium">{testimonial.treatment}</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="text-xs text-gray-500">{t("saved")}:</span>
                  <span className="text-sm font-bold font-display text-gradient-accent">{testimonial.savings}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black text-sm transition-colors"
          >
            {t("all_stories")} →
          </a>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-accent text-sm transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" />
            </svg>
            {t("google_reviews")}
          </a>
        </div>
      </div>
    </section>
  );
}
