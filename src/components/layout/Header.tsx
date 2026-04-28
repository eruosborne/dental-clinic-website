"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, CLINIC_NAME } from "@/lib/constants";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  const otherLocale = locale === "en" ? "vi" : "en";
  const localizedPath = pathname.replace(`/${locale}`, "") || "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-xl border-b border-gray-200 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center glow-accent">
                <span className="text-primary font-bold text-sm font-display">S</span>
              </div>
              <span className="font-display font-bold text-black text-lg tracking-tight group-hover:text-accent transition-colors duration-200">
                {CLINIC_NAME}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const href = locale === "vi" ? `/vi${link.href}` : link.href;
                const isActive = pathname === href || (link.href !== "/" && pathname.startsWith(href));
                return (
                  <Link
                    key={link.href}
                    href={href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                    }`}
                  >
                    {t(link.label.toLowerCase() as keyof typeof t)}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language toggle */}
              <Link
                href={`/${otherLocale}${localizedPath}`}
                className="text-xs font-medium text-gray-600 hover:text-black transition-colors px-2 py-1 border border-gray-300 rounded-md hover:border-gray-400"
              >
                {t("language")}
              </Link>
              {/* CTA */}
              <Link
                href={locale === "vi" ? "/vi/book" : "/book"}
                className="bg-accent text-primary font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-accent-hover shadow-[0_0_20px_rgba(10,22,40,0.25)] hover:shadow-[0_0_30px_rgba(10,22,40,0.4)] transition-all duration-300"
              >
                {t("book")}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                <span className={`h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 bg-current rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute top-16 left-0 right-0 bg-primary-light border-b border-gray-200 shadow-2xl">
              <nav className="px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const href = locale === "vi" ? `/vi${link.href}` : link.href;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={link.href}
                      href={href}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive ? "text-accent bg-accent/10" : "text-gray-700 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {t(link.label.toLowerCase() as keyof typeof t)}
                    </Link>
                  );
                })}
                <div className="mt-2 pt-3 border-t border-gray-200 flex items-center gap-3">
                  <Link
                    href={`/${otherLocale}${localizedPath}`}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {t("language")}
                  </Link>
                  <Link
                    href={locale === "vi" ? "/vi/book" : "/book"}
                    className="flex-1 bg-accent text-primary font-semibold text-sm px-5 py-3 rounded-xl text-center hover:bg-accent-hover transition-colors"
                  >
                    {t("book")}
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
