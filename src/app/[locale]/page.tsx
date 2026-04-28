import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ScrollVideoHero from "@/components/sections/ScrollVideoHero";
import TrustBar from "@/components/sections/TrustBar";
import PatientJourney from "@/components/sections/PatientJourney";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyVietnam from "@/components/sections/WhyVietnam";
import AIShowcase from "@/components/sections/AIShowcase";
import Testimonials from "@/components/sections/Testimonials";
import SocialFeed from "@/components/sections/SocialFeed";
import CTASection from "@/components/sections/CTASection";
import AIWidgets from "@/components/ai/AIWidgets";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  await getTranslations({ locale, namespace: "hero" });
  return {
    title: "Smile Dental Clinic — World-Class Dental Care for NZ & Aus Patients",
    description:
      "Save up to 70% on dental implants, veneers, and cosmetic dentistry. English-speaking team, AI-powered consultation, trusted by patients from New Zealand and Australia.",
    openGraph: {
      title: "Smile Dental Clinic — World-Class Dental Care for NZ & Aus Patients",
      description:
        "Internationally trained specialists. Hospital-grade technology. The same implant brands as your Auckland dentist — at a fraction of the price.",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <ScrollVideoHero />
      <TrustBar />
      <PatientJourney />
      <ServicesOverview />
      <WhyVietnam />
      <AIShowcase />
      <Testimonials />
      <SocialFeed />
      <CTASection />
      <AIWidgets />
    </>
  );
}
