"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Stage = "idle" | "uploading" | "scanning" | "result";

export default function SmilePreview() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // Hidden trigger button
  useEffect(() => {
    const el = document.getElementById("smile-preview-trigger");
    if (el) el.onclick = () => setOpen(true);
  }, []);

  function reset() {
    setStage("idle");
    setPreview(null);
    setIsDragging(false);
  }

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setStage("scanning");
    setTimeout(() => setStage("result"), 1500);
  }

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  return (
    <>
      <button id="smile-preview-trigger" className="hidden" aria-hidden />

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
              className="w-full max-w-2xl glass-light rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                <div>
                  <h2 className="font-display font-bold text-xl text-black">AI Smile Preview</h2>
                  <p className="text-gray-600 text-sm mt-0.5">See your potential result before committing</p>
                </div>
                <button
                  onClick={() => { setOpen(false); reset(); }}
                  className="text-gray-500 hover:text-gray-700 text-2xl leading-none transition-colors"
                >
                  ×
                </button>
              </div>

              <div className="p-6">
                {stage === "idle" && (
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={onDrop}
                    onClick={() => fileRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                      isDragging ? "border-accent bg-accent/10" : "border-gray-300 hover:border-accent/50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                    </div>
                    <p className="text-black font-medium mb-2">Drop your photo here</p>
                    <p className="text-gray-500 text-sm">or click to browse · JPG, PNG, WEBP</p>
                    <p className="text-gray-500 text-xs mt-3">Your photo is processed locally and never stored</p>
                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
                  </div>
                )}

                {stage === "scanning" && preview && (
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={preview} alt="Your smile" className="w-full h-full object-cover" />
                      {/* Scan overlay */}
                      <div className="absolute inset-0 bg-accent/10">
                        <div
                          className="absolute left-0 right-0 h-0.5 bg-accent shadow-[0_0_12px_rgba(10,22,40,0.8)]"
                          style={{ animation: "scan 1.5s linear infinite" }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="glass-light rounded-2xl px-6 py-4 text-center">
                          <div className="text-accent font-display font-semibold">Analysing your smile...</div>
                          <div className="flex gap-1 justify-center mt-2">
                            {[0, 1, 2].map((i) => (
                              <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {stage === "result" && preview && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="aspect-square rounded-2xl overflow-hidden relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={preview} alt="Before" className="w-full h-full object-cover" />
                          <div className="absolute bottom-2 left-2 glass px-2.5 py-1 rounded-full text-xs font-medium text-gray-700">Before</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-accent/20 to-primary-light">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={preview} alt="After (simulated)" className="w-full h-full object-cover brightness-125 saturate-175" style={{ filter: "brightness(1.25) saturate(1.7) contrast(1.15)" }} />
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                          <div className="absolute bottom-2 left-2 bg-accent/80 px-2.5 py-1 rounded-full text-xs font-bold text-primary">AI Preview</div>
                        </div>
                      </div>
                    </div>
                    <div className="glass rounded-2xl p-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong className="text-accent">This is an AI simulation</strong> — your actual results may vary based on treatment type and individual factors. Book a free consultation to see a precise digital smile design created by Dr. Le Minh Hoang.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={reset}
                        className="flex-1 border border-gray-300 text-black text-sm py-3 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        Try Another Photo
                      </button>
                      <a
                        href="/book"
                        className="flex-1 bg-accent text-primary font-semibold text-sm py-3 rounded-xl text-center hover:bg-accent-hover transition-colors"
                      >
                        Book Consultation →
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
