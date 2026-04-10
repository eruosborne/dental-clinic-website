import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE_1, STATS } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
    name: "Metal Dental",
    description: "Premium dental clinic in Da Nang, Vietnam specialising in dental tourism for patients from New Zealand and Australia. Dental implants, veneers, cosmetic dentistry.",
    url: "https://nhakhoametal.com",
    email: CLINIC_EMAIL,
    telephone: CLINIC_PHONE_1,
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Nguyễn Hữu Thọ",
      addressLocality: "Hải Châu",
      addressRegion: "Đà Nẵng",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.0678,
      longitude: 108.2208,
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
    currenciesAccepted: "USD, VND, NZD, AUD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    priceRange: "$$",
    hasMap: "https://maps.app.goo.gl/SQKkfEeaUyjmZfs8A",
    sameAs: [
      "https://www.facebook.com/nhakhoametal",
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
