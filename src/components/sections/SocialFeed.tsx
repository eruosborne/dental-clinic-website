"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { CLINIC_INSTAGRAM, CLINIC_TIKTOK } from "@/lib/constants";

export default function SocialFeed() {
  const t = useTranslations("social");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const posts = [
    {
      type: "instagram",
      icon: "📸",
      likes: "2.3K",
      comments: "89",
      platform: "Instagram",
    },
    {
      type: "instagram",
      icon: "✨",
      likes: "1.8K",
      comments: "67",
      platform: "Instagram",
    },
    {
      type: "tiktok",
      icon: "🎬",
      likes: "48.5K",
      comments: "3.2K",
      platform: "TikTok",
    },
    {
      type: "instagram",
      icon: "😊",
      likes: "3.1K",
      comments: "142",
      platform: "Instagram",
    },
    {
      type: "tiktok",
      icon: "🌟",
      likes: "92.3K",
      comments: "8.9K",
      platform: "TikTok",
    },
    {
      type: "instagram",
      icon: "🦷",
      likes: "2.9K",
      comments: "156",
      platform: "Instagram",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      ref={ref}
      className="section relative bg-surface-dark/20 overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-gray-700">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
              {t("label")}
            </span>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-black mb-4">
              {t("heading")}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("subheading")}
            </p>
          </motion.div>
        </motion.div>

        {/* Social cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-300"
            >
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50" />

              {/* Icon/emoji center */}
              <div className="absolute inset-0 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {post.icon}
              </div>

              {/* Overlay info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div />
                <div className="text-white">
                  <div className="text-sm font-medium mb-2">{post.platform}</div>
                  <div className="flex gap-4 text-sm">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follower counts and CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Instagram */}
          <motion.div variants={itemVariants}>
            <Link href={CLINIC_INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <div className="glass rounded-2xl p-8 text-center group hover:border-pink-400/50 transition-all duration-300">
                <div className="text-4xl mb-4">📷</div>
                <h3 className="text-xl font-bold font-display text-black mb-2">
                  {t("instagram_label")}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t("instagram_followers")}
                </p>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 text-sm">
                  @{t("instagram_handle")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Link>
          </motion.div>

          {/* TikTok */}
          <motion.div variants={itemVariants}>
            <Link href={CLINIC_TIKTOK} target="_blank" rel="noopener noreferrer">
              <div className="glass rounded-2xl p-8 text-center group hover:border-black/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold font-display text-black mb-2">
                  {t("tiktok_label")}
                </h3>
                <p className="text-gray-700 mb-4">
                  {t("tiktok_followers")}
                </p>
                <button className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 text-sm">
                  @{t("tiktok_handle")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-gray-700 mb-4">
            {t("cta_text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
