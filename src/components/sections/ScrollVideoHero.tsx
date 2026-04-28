"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocalHref } from "@/lib/hooks";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function ScrollVideoHero() {
  const t = useTranslations("hero");
  const localHref = useLocalHref();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      if (!containerRef.current || !video.duration) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom / (window.innerHeight + containerHeight))));

      video.currentTime = scrollProgress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden bg-white"
    >
      {/* Content - Left side */}
      <div className="relative z-20 w-full md:w-1/2 px-4 sm:px-6 lg:px-8 pt-24 pb-8 md:pt-32 md:pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
        {/* Eyebrow */}
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-gray-700 tracking-wide">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
            {t("eyebrow")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.05] mb-6 text-black"
        >
          {t("headline")}
          <br />
          {t("headline2")}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10"
        >
          {t("subheadline")}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-6">
          <Link
            href={localHref("/book")}
            className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-semibold text-base px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] hover:shadow-[0_0_50px_rgba(10,22,40,0.5)] transition-all duration-300"
          >
            {t("cta_primary")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5E] text-white font-semibold text-base px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(37,211,102,0.35)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.383.214-.39-.013c-1.585 0-2.98.735-3.99 2.064C3.75 10.645 3 12.577 3 14.8c0 1.148.248 2.457.733 3.52L3 21.957l3.518-.737a9.8 9.8 0 003.6.633h.006c5.451 0 9.876-4.422 9.876-9.876 0-2.646-.981-5.127-2.764-7.008-1.784-1.882-4.165-2.917-6.769-2.917" />
            </svg>
            Chat on WhatsApp
          </Link>
        </motion.div>

        {/* Note */}
        <motion.p variants={item} className="text-sm text-gray-600">
          {t("cta_note")}
        </motion.p>

        {/* Mobile Video - shown only on mobile, positioned between CTAs and stats */}
        <div className="md:hidden my-8 w-full rounded-2xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-56 object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/Smooth_cinematic_transition_Te_Kling_30__72424.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 gap-4"
        >
          {[
            { value: "2,400+", label: "Patients treated" },
            { value: "8 years", label: "In practice" },
            { value: "4.9 ★", label: "Google rating" },
            { value: "70%", label: "Avg savings vs NZ" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4">
              <div className="text-2xl font-bold font-display text-black">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        </motion.div>
      </div>

      {/* Video - Right side (desktop only) */}
      <div className="hidden md:flex w-1/2 h-screen items-center justify-center pr-8 pointer-events-none">
        <div className="w-full h-3/4">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            playsInline
            muted
            preload="metadata"
          >
            <source src="/videos/Smooth_cinematic_transition_Te_Kling_30__72424.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-30" aria-hidden="true">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  );
}
