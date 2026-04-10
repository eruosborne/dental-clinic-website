"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = { question: string; options: { label: string; value: string }[] };

const STEPS: Step[] = [
  {
    question: "What's your primary concern?",
    options: [
      { label: "🦷 Tooth pain or ache", value: "pain" },
      { label: "🌡️ Sensitivity to hot/cold", value: "sensitivity" },
      { label: "😬 Cosmetic — I want a better smile", value: "cosmetic" },
      { label: "🩸 Bleeding or swollen gums", value: "gums" },
      { label: "❓ Missing teeth", value: "missing" },
    ],
  },
  {
    question: "How long have you been experiencing this?",
    options: [
      { label: "⚡ Started recently (days)", value: "recent" },
      { label: "📅 A few weeks", value: "weeks" },
      { label: "🗓️ Several months", value: "months" },
      { label: "⏳ Over a year", value: "year" },
    ],
  },
  {
    question: "How much is it affecting your daily life?",
    options: [
      { label: "🔴 Significantly — constant discomfort", value: "high" },
      { label: "🟡 Moderately — bothers me sometimes", value: "medium" },
      { label: "🟢 Mildly — mostly a confidence issue", value: "low" },
    ],
  },
  {
    question: "Have you seen a dentist about this before?",
    options: [
      { label: "✅ Yes, I have a treatment plan", value: "has_plan" },
      { label: "🤔 Yes, but I want a second opinion", value: "second_opinion" },
      { label: "❌ Not yet", value: "no" },
    ],
  },
];

type ResultData = {
  title: string;
  urgency: "urgent" | "soon" | "when_ready";
  treatment: string;
  description: string;
};

function getResult(answers: string[]): ResultData {
  const [concern, , impact] = answers;
  if (concern === "pain" && impact === "high") {
    return {
      title: "Urgent dental assessment recommended",
      urgency: "urgent",
      treatment: "Examination + possible root canal or extraction",
      description: "Persistent tooth pain with high daily impact suggests an active infection or advanced decay. This should be assessed by a dentist within days, not weeks. We can arrange a priority consultation.",
    };
  }
  if (concern === "missing") {
    return {
      title: "Dental implant consultation recommended",
      urgency: "soon",
      treatment: "Dental Implants or Dental Bridge",
      description: "Missing teeth affect both your confidence and jaw health over time. A dental implant is the gold standard — permanent, natural-feeling, and protects surrounding teeth. Book a consultation to discuss your options.",
    };
  }
  if (concern === "cosmetic") {
    return {
      title: "Smile design consultation recommended",
      urgency: "when_ready",
      treatment: "Porcelain Veneers, Whitening, or Clear Aligners",
      description: "Great news — cosmetic concerns are non-urgent, giving you time to plan the perfect trip. Our smile design process includes a digital preview so you can see your result before treatment begins.",
    };
  }
  if (concern === "gums") {
    return {
      title: "Periodontal assessment recommended",
      urgency: "soon",
      treatment: "Deep cleaning / Periodontal treatment",
      description: "Bleeding or swollen gums are often a sign of gum disease. When caught early, it's very treatable. A professional clean and assessment can address this in a single visit.",
    };
  }
  return {
    title: "General dental consultation recommended",
    urgency: "when_ready",
    treatment: "Comprehensive dental examination",
    description: "Based on your responses, a thorough dental examination will help us understand your situation and create a personalised treatment plan. We recommend scheduling this soon.",
  };
}

const urgencyLabels = {
  urgent: { label: "Act within days", color: "text-error bg-error/15" },
  soon: { label: "Schedule within weeks", color: "text-accent bg-accent/15" },
  when_ready: { label: "Plan at your convenience", color: "text-success bg-success/15" },
};

export default function SymptomChecker() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const el = document.getElementById("symptom-checker-trigger");
    if (el) el.onclick = () => setOpen(true);
  }, []);

  function reset() {
    setStep(0);
    setAnswers([]);
  }

  function select(value: string) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    if (step < STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setStep(STEPS.length), 300);
    }
  }

  const result = step === STEPS.length ? getResult(answers) : null;
  const progress = (step / STEPS.length) * 100;

  return (
    <>
      <button id="symptom-checker-trigger" className="hidden" aria-hidden />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={(e) => { if (e.target === e.currentTarget) { setOpen(false); reset(); } }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-lg glass-light rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                <div>
                  <h2 className="font-display font-bold text-xl text-black">Symptom Checker</h2>
                  <p className="text-gray-600 text-sm mt-0.5">5 quick questions → personalised recommendation</p>
                </div>
                <button onClick={() => { setOpen(false); reset(); }} className="text-gray-500 hover:text-gray-700 text-2xl leading-none">×</button>
              </div>

              {/* Progress bar */}
              <div className="px-6 pt-4">
                <div className="flex gap-1 mb-1">
                  {STEPS.map((_, i) => (
                    <div key={i} className={`flex-1 h-1 rounded-full transition-all duration-500 ${i < step ? "bg-accent" : i === step ? "bg-accent/50" : "bg-white/10"}`} />
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-right">{Math.min(step + 1, STEPS.length)} of {STEPS.length}</p>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {step < STEPS.length ? (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="text-lg font-display font-semibold text-black mb-5">
                        {STEPS[step].question}
                      </h3>
                      <div className="space-y-2.5">
                        {STEPS[step].options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => select(opt.value)}
                            className="w-full text-left px-4 py-3 rounded-xl glass border border-gray-200 hover:border-accent/40 hover:bg-accent/8 text-gray-700 hover:text-black text-sm transition-all duration-200"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : result ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="text-center mb-5">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-3 ${urgencyLabels[result.urgency].color}`}>
                          {urgencyLabels[result.urgency].label}
                        </div>
                        <h3 className="text-xl font-display font-bold text-black">{result.title}</h3>
                      </div>
                      <div className="glass rounded-2xl p-4 mb-4">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Likely Treatment</div>
                        <div className="text-accent font-semibold font-display">{result.treatment}</div>
                        <p className="text-gray-600 text-sm mt-3 leading-relaxed">{result.description}</p>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={reset}
                          className="flex-1 border border-gray-300 text-black text-sm py-3 rounded-xl hover:bg-gray-100 transition-colors"
                        >
                          Start Over
                        </button>
                        <a
                          href="/book"
                          className="flex-1 bg-accent text-primary font-semibold text-sm py-3 rounded-xl text-center hover:bg-accent-hover transition-colors"
                        >
                          Book Consultation →
                        </a>
                      </div>
                      <p className="text-center text-xs text-gray-400 mt-3">
                        This is a general guide, not medical advice. A dentist consultation is always recommended.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
