"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { PRICING_DATA } from "@/lib/constants";

type Currency = "NZD" | "AUD";

const NZD_RATE = 1;
const AUD_RATE = 0.91;
const FLIGHT_COST_NZD = 1200;
const ACCOMMODATION_NZD = 700;

export default function SavingsCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const [currency, setCurrency] = useState<Currency>("NZD");

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const { homeTotal, metalTotal, savings, withTravel } = useMemo(() => {
    const rate = currency === "AUD" ? AUD_RATE : NZD_RATE;
    const flightCost = FLIGHT_COST_NZD * rate;
    const accomCost = ACCOMMODATION_NZD * rate;

    let homeTotal = 0;
    let metalTotal = 0;

    selected.forEach((id) => {
      const item = PRICING_DATA.find((p) => p.id === id);
      if (!item) return;
      homeTotal += currency === "AUD" ? item.aud : item.nzd;
      metalTotal += Math.round(item.vnd_usd * (currency === "AUD" ? 1.58 : 1.75));
    });

    const savings = homeTotal - metalTotal;
    const withTravel = savings - flightCost - accomCost;

    return { homeTotal, metalTotal, savings, withTravel };
  }, [selected, currency]);

  const categories = ["implants", "cosmetic", "aligners", "general"];
  const categoryLabels: Record<string, string> = {
    implants: "🦷 Implants",
    cosmetic: "✨ Cosmetic",
    aligners: "😁 Aligners",
    general: "🛡️ General",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Treatment selector */}
      <div className="lg:col-span-3 space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex rounded-xl overflow-hidden border border-white/15">
            {(["NZD", "AUD"] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${currency === c ? "bg-accent text-primary" : "text-gray-600 hover:text-gray-700"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <span className="text-gray-500 text-sm">Select your currency</span>
        </div>

        {categories.map((cat) => {
          const items = PRICING_DATA.filter((p) => p.category === cat);
          return (
            <div key={cat}>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">{categoryLabels[cat]}</h3>
              <div className="space-y-2">
                {items.map((item) => {
                  const isSelected = selected.includes(item.id);
                  const homePrice = currency === "AUD" ? item.aud : item.nzd;
                  const metalPrice = Math.round(item.vnd_usd * (currency === "AUD" ? 1.58 : 1.75));
                  const save = Math.round(((homePrice - metalPrice) / homePrice) * 100);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className={`w-full text-left glass rounded-xl px-5 py-4 flex items-center justify-between gap-4 transition-all duration-200 ${
                        isSelected ? "border border-accent/40 bg-accent/8" : "border border-transparent hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? "bg-accent border-accent" : "border-gray-400"}`}>
                          {isSelected && (
                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-black">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-gray-500 text-xs line-through">{currency} {homePrice.toLocaleString()}</span>
                        <span className="text-accent text-sm font-semibold">{currency} {metalPrice.toLocaleString()}</span>
                        <span className="text-xs bg-accent/15 text-accent px-2 py-0.5 rounded-full font-bold">-{save}%</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Results panel */}
      <div className="lg:col-span-2">
        <div className="sticky top-28">
          <div className="glass rounded-3xl p-7 space-y-5">
            <h3 className="font-display font-bold text-xl text-black">Your Savings Summary</h3>

            {selected.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">
                Select treatments above to see your potential savings
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Cost in {currency === "NZD" ? "New Zealand" : "Australia"}</span>
                    <span className="text-gray-500 text-sm line-through">{currency} {homeTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm">Cost at Metal Dental</span>
                    <span className="text-accent font-semibold">{currency} {metalTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/25 rounded-2xl p-5 text-center">
                  <div className="text-sm text-gray-600 mb-1">You save</div>
                  <div className="text-4xl md:text-5xl font-bold font-display text-gradient-accent">
                    {currency} {savings.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {savings > 0 ? `${Math.round((savings / homeTotal) * 100)}% less than home` : "Select treatments above"}
                  </div>
                </div>

                {savings > 0 && (
                  <div className={`rounded-2xl p-4 text-sm ${withTravel > 0 ? "bg-success/10 border border-success/25" : "glass"}`}>
                    <div className="font-semibold text-black mb-1">
                      {withTravel > 0 ? "✅ Even with flights & accommodation" : "⚠️ Flights + accommodation note"}
                    </div>
                    <div className="text-gray-600 text-xs leading-relaxed">
                      Estimated return flight (~{currency} {Math.round(FLIGHT_COST_NZD * (currency === "AUD" ? AUD_RATE : 1)).toLocaleString()}) + 7 nights (~{currency} {Math.round(ACCOMMODATION_NZD * (currency === "AUD" ? AUD_RATE : 1)).toLocaleString()}) still leaves you{" "}
                      <span className={withTravel > 0 ? "text-success font-bold" : "text-error font-bold"}>
                        {currency} {Math.abs(Math.round(withTravel)).toLocaleString()} {withTravel > 0 ? "ahead" : "behind"}
                      </span>.
                    </div>
                  </div>
                )}

                <Link
                  href="/book"
                  className="block w-full bg-accent text-primary font-semibold text-sm py-4 rounded-xl text-center hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.25)] transition-all duration-300"
                >
                  Get Your Personalised Quote →
                </Link>
                <p className="text-center text-xs text-gray-400">Free consultation · No commitment</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
