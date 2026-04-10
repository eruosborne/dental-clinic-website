"use client";
import Link from "next/link";

interface ServicesCTAProps {
  locale: string;
}

export function ServicesCTA({ locale }: ServicesCTAProps) {
  return (
    <div className="mt-16 text-center glass rounded-3xl p-10">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-off-white mb-3">
        Not sure which treatment you need?
      </h2>
      <p className="text-gray-700 mb-7 max-w-xl mx-auto">
        Try our AI Symptom Checker — 5 quick questions and we'll point you in the right direction. Or book a free consultation and let our team guide you.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => document.getElementById("symptom-checker-trigger")?.click()}
          className="bg-gray-100 border border-gray-300 text-off-white font-medium px-7 py-3 rounded-xl hover:bg-gray-200 transition-colors"
        >
          Check My Symptoms
        </button>
        <Link
          href={locale === "vi" ? "/vi/book" : "/book"}
          className="bg-accent text-primary font-semibold px-7 py-3 rounded-xl hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.25)] transition-all duration-300"
        >
          Book Free Consultation
        </Link>
      </div>
    </div>
  );
}
