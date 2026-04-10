import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/lib/routing";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });
  return {
    title: {
      default: "Metal Dental — World-Class Dental Care for NZ & Aus Patients",
      template: "%s | Metal Dental Da Nang",
    },
    description:
      "Save up to 70% on dental implants, veneers, and cosmetic dentistry in Da Nang, Vietnam. English-speaking team, AI-powered consultation, trusted by patients from New Zealand and Australia.",
    metadataBase: new URL("https://nhakhoametal.com"),
    openGraph: {
      siteName: "Metal Dental",
      locale: locale === "vi" ? "vi_VN" : "en_AU",
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "vi")) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Note: JSON-LD is added via the LocalBusinessJsonLd component in pages that need it
