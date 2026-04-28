import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE_1, STATS } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
    name: "Smile Dental Clinic",
    description: "Premium dental clinic specialising in dental tourism for patients from New Zealand and Australia. Dental implants, veneers, cosmetic dentistry.",
    url: "https://smiledental.clinic",
    email: CLINIC_EMAIL,
    telephone: CLINIC_PHONE_1,
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Beach Road",
      addressCountry: "Southeast Asia",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: STATS.googleRating,
      reviewCount: STATS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    currenciesAccepted: "USD, NZD, AUD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    priceRange: "$$",
    sameAs: [
    ],
    medicalSpecialty: [
      "Dentistry",
      "Oral Surgery",
      "Orthodontics",
      "Cosmetic Dentistry",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
