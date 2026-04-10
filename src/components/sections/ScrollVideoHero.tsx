"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function ScrollVideoHero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const localHref = (p: string) => locale === "vi" ? `/vi${p}` : p;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      // Get the video container's position
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;

      // Calculate scroll progress (0 to 1)
      // When the container is at the top of the viewport, progress = 0
      // When the container is at the bottom of the viewport, progress = 1
      const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom / (window.innerHeight + containerHeight))));

      // Set video currentTime based on scroll progress
      if (video.duration) {
        video.currentTime = scrollProgress * video.duration;
      }

      // Turn white instantly when scrolling
      setBackgroundColor("rgb(255, 255, 255)");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden"
      style={{ backgroundColor }}
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
          <button
            onClick={() => document.getElementById("chat-widget-trigger")?.click()}
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-black font-medium text-base px-8 py-4 rounded-xl hover:border-accent/60 hover:bg-accent/5 transition-all duration-300"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {t("cta_secondary")}
          </button>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-30">
        <span className="text-gray-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  );
}
