"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function PatientJourney() {
  const t = useTranslations("patientJourney");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    {
      icon: "📱",
      title: t("step1_title"),
      desc: t("step1_desc"),
    },
    {
      icon: "🌐",
      title: t("step2_title"),
      desc: t("step2_desc"),
    },
    {
      icon: "💬",
      title: t("step3_title"),
      desc: t("step3_desc"),
    },
    {
      icon: "📅",
      title: t("step4_title"),
      desc: t("step4_desc"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={ref}
      className="section relative bg-gradient-to-br from-white via-blue-50/50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-black mb-4">
              {t("heading")}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t("subheading")}
            </p>
          </motion.div>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              {/* Step card */}
              <div className="glass rounded-2xl p-6 h-full flex flex-col items-center text-center relative z-10">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="font-bold font-display text-lg text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>

                {/* Step number */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
              </div>

              {/* Arrow connector (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-accent to-transparent transform -translate-y-1/2 z-0">
                  <svg
                    className="absolute right-0 -top-2 w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12l14 0m-7-7l7 7l-7 7" strokeWidth="2" stroke="currentColor" fill="none" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile step indicator */}
        <div className="lg:hidden mt-8 flex justify-center gap-2">
          {steps.map((_, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: idx === steps.length - 1 ? "2rem" : "0.5rem",
                backgroundColor: idx === 0 ? "var(--color-accent)" : "#e5e7eb",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
