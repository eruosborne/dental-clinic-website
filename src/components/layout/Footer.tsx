"use client";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE_1, CLINIC_PHONE_2, CLINIC_WHATSAPP, NAV_LINKS } from "@/lib/constants";

function DualClock() {
  const [times, setTimes] = useState({ nz: "", au: "", vn: "" });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const fmt = (tz: string) =>
        now.toLocaleTimeString("en-US", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: true });
      setTimes({
        nz: fmt("Pacific/Auckland"),
        au: fmt("Australia/Sydney"),
        vn: fmt("Asia/Ho_Chi_Minh"),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-gray-500">🇳🇿 NZ</span>
        <span className="text-accent font-medium font-display">{times.nz}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-500">🇦🇺 AU</span>
        <span className="text-accent font-medium font-display">{times.au}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-gray-500">🇻🇳 VN</span>
        <span className="text-gray-700 font-display">{times.vn}</span>
      </div>
    </div>
  );
}

export default function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const localHref = (path: string) =>
    locale === "vi" ? `/vi${path}` : path;

  return (
    <footer className="bg-surface-dark border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <span className="text-primary font-bold text-sm font-display">M</span>
              </div>
              <span className="font-display font-bold text-black text-lg">{CLINIC_NAME}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              {t("tagline")}
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-3">
              {["FB", "IG", "TT", "YT"].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center text-gray-500 text-xs font-medium cursor-pointer hover:text-accent hover:border-accent/20 transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-black mb-4">{t("quick_links")}</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={localHref(link.href)}
                    className="text-gray-600 hover:text-accent text-sm transition-colors"
                  >
                    {tn(link.label.toLowerCase() as keyof typeof tn)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={localHref("/book")} className="text-accent text-sm font-medium hover:text-accent-hover transition-colors">
                  → {tn("book")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-black mb-4">{t("contact_us")}</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex gap-2">
                  <span className="mt-0.5 shrink-0">📍</span>
                  <span>{CLINIC_ADDRESS}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-accent transition-colors flex gap-2">
                  <span>✉️</span> {CLINIC_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CLINIC_PHONE_1.replace(/\s/g, "")}`} className="hover:text-accent transition-colors flex gap-2">
                  <span>📞</span> {CLINIC_PHONE_1}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${CLINIC_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex gap-2">
                  <span>💬</span> WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-gray-500 leading-relaxed">
              {t("hours")}
            </div>
          </div>

          {/* Live clock */}
          <div>
            <h3 className="font-display font-semibold text-black mb-4">Current Time</h3>
            <DualClock />
            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              Our AI assistant responds instantly, 24/7. Human team available during Vietnam business hours.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {year} {CLINIC_NAME}. {t("copyright")}
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-black transition-colors">{t("privacy")}</Link>
            <Link href="#" className="hover:text-black transition-colors">{t("terms")}</Link>
            <Link
              href={locale === "vi" ? "/" : "/vi"}
              className="text-gray-600 hover:text-accent transition-colors"
            >
              {tn("language")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
