"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ChatIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const SmileIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
);
const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

function ChatPreview() {
  const messages = [
    { from: "user", text: "How much do dental implants cost?" },
    { from: "bot", text: "At Metal Dental, a single implant (including crown) is typically USD 900–1,200 — that's around NZD 1,500–2,000 vs NZD 5,000–8,000 in Auckland. Want a detailed breakdown?" },
    { from: "user", text: "Yes please! And can I do it in one week?" },
    { from: "bot", text: "Absolutely. Most single implant cases can be completed in 5–7 days. I can check Dr. Nguyen's availability for you — what dates work?" },
  ];
  return (
    <div className="space-y-3 text-xs">
      {messages.map((m, i) => (
        <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
          <div className={`px-3 py-2 rounded-xl max-w-[85%] leading-relaxed ${m.from === "user" ? "bg-accent text-primary font-medium" : "glass-light text-gray-700"}`}>
            {m.text}
          </div>
        </div>
      ))}
      <div className="flex gap-1 pl-1">
        <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

function SmilePreviewMock() {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex-1 aspect-square rounded-xl bg-white/5 border border-gray-200 flex items-center justify-center relative overflow-hidden">
        <span className="text-gray-400 text-xs">Before</span>
        <div className="absolute bottom-2 left-2 text-[10px] text-gray-500 bg-black/30 px-1.5 py-0.5 rounded">Current</div>
      </div>
      <div className="text-accent text-lg">→</div>
      <div className="flex-1 aspect-square rounded-xl bg-gradient-to-br from-accent/10 to-gold/10 border border-accent/20 flex items-center justify-center relative overflow-hidden">
        <span className="text-accent/60 text-xs font-medium">After</span>
        <div className="absolute bottom-2 left-2 text-[10px] text-accent/60 bg-accent/10 px-1.5 py-0.5 rounded">AI Preview</div>
        {/* Scan line animation */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-full h-0.5 bg-accent" style={{ animation: "scan 2s linear infinite" }} />
        </div>
      </div>
    </div>
  );
}

function SymptomMock() {
  const steps = ["Pain?", "Duration?", "Location?", "Sensitivity?", "Result"];
  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 flex flex-col items-center gap-1">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < 4 ? "bg-accent text-primary" : "glass border-accent/30"}`}>
              {i < 4 ? "✓" : "?"}
            </div>
            <span className="text-[10px] text-gray-500 text-center hidden sm:block">{s}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-1 bg-white/8 rounded-full">
        <div className="h-full w-4/5 bg-accent rounded-full" />
      </div>
      <div className="glass-light rounded-xl p-3">
        <div className="text-xs text-accent font-semibold mb-1">Recommendation</div>
        <div className="text-xs text-gray-600">Based on your symptoms, a dental examination + possible root canal treatment is recommended. This is non-urgent but should be scheduled soon.</div>
      </div>
    </div>
  );
}

const features = [
  {
    key: "chat",
    icon: <ChatIcon />,
    color: "from-accent/25 to-accent/8",
    borderColor: "border-accent/20",
    preview: <ChatPreview />,
    action: () => document.getElementById("chat-widget-trigger")?.click(),
    buttonVariant: "accent",
  },
  {
    key: "preview",
    icon: <SmileIcon />,
    color: "from-gold/20 to-gold/5",
    borderColor: "border-gold/20",
    preview: <SmilePreviewMock />,
    action: () => document.getElementById("smile-preview-trigger")?.click(),
    buttonVariant: "gold",
  },
  {
    key: "symptom",
    icon: <CheckIcon />,
    color: "from-white/12 to-white/3",
    borderColor: "border-white/12",
    preview: <SymptomMock />,
    action: () => document.getElementById("symptom-checker-trigger")?.click(),
    buttonVariant: "ghost",
  },
];

export default function AIShowcase() {
  const t = useTranslations("ai");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section gradient-mesh dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t("label")}
          heading={t("heading")}
          centered
          className="mb-14"
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const k = f.key as "chat" | "preview" | "symptom";
            const ctaMap = { chat: "chat_cta", preview: "preview_cta", symptom: "symptom_cta" } as const;
            const titleMap = { chat: "chat_title", preview: "preview_title", symptom: "symptom_title" } as const;
            const descMap = { chat: "chat_desc", preview: "preview_desc", symptom: "symptom_desc" } as const;

            return (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`glass rounded-2xl p-6 border ${f.borderColor} flex flex-col gap-5`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-accent shrink-0`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-black leading-snug">
                      {t(titleMap[k])}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1 leading-relaxed">{t(descMap[k])}</p>
                  </div>
                </div>

                {/* Preview */}
                <div className="flex-1 glass rounded-xl p-4 min-h-[140px]">
                  {f.preview}
                </div>

                <button
                  onClick={f.action}
                  className={`w-full text-sm font-medium py-2.5 rounded-xl transition-all duration-300 ${
                    k === "chat"
                      ? "bg-accent text-primary hover:bg-accent-hover"
                      : k === "preview"
                      ? "bg-gold/80 text-primary hover:brightness-110"
                      : "border border-gray-300 text-black hover:border-white/40 hover:bg-gray-100"
                  }`}
                >
                  {t(ctaMap[k])} →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
