export const CLINIC_NAME = "Smile Dental Clinic";
export const CLINIC_TAGLINE = "World-Class Dental Care at Southeast Asia Prices.";
export const CLINIC_ADDRESS = "123 Beach Road, [Your City]";
export const CLINIC_EMAIL = "hello@smiledental.clinic";
export const CLINIC_PHONE_1 = "+62 800 000 0000";
export const CLINIC_PHONE_2 = "+62 800 000 0001";
export const CLINIC_WHATSAPP = "62800000000";
export const CLINIC_MAPS_URL = "#";

// Social Media
export const CLINIC_INSTAGRAM = "#";
export const CLINIC_TIKTOK = "#";
export const CLINIC_FACEBOOK = "#";
export const CLINIC_YOUTUBE = "#";

// WhatsApp
export const WHATSAPP_PREFILL_TEXT = "Hi,%20I'm%20interested%20in%20dental%20treatment";
export const WHATSAPP_URL = `https://wa.me/${CLINIC_WHATSAPP}?text=${WHATSAPP_PREFILL_TEXT}`;

export const STATS = {
  patientsServed: 2400,
  yearsInPractice: 8,
  googleRating: 4.9,
  reviewCount: 847,
  countriesServed: 18,
  savingsPercent: 70,
};

export const DOCTORS = [
  {
    id: "dr-nguyen",
    name: "Dr. Nguyen Tuan Tu",
    title: "Lead Implantologist",
    experience: "12 years",
    specialties: ["Dental Implants", "Full Mouth Restoration", "Oral Surgery"],
    education: "Hue University of Medicine & Pharmacy, Advanced Implantology (South Korea)",
    languages: ["Vietnamese", "English"],
    image: null,
  },
  {
    id: "dr-le",
    name: "Dr. Le Minh Hoang",
    title: "Cosmetic Dentist",
    experience: "9 years",
    specialties: ["Porcelain Veneers", "Smile Design", "Teeth Whitening"],
    education: "University of Medicine and Pharmacy HCMC, Digital Smile Design Certified",
    languages: ["Vietnamese", "English"],
    image: null,
  },
  {
    id: "dr-pham",
    name: "Dr. Pham Thu Thuy",
    title: "General & Orthodontic Dentist",
    experience: "7 years",
    specialties: ["Clear Aligners", "General Dentistry", "Periodontics"],
    education: "Da Nang University of Medical Technology, Invisalign Certified Provider",
    languages: ["Vietnamese", "English", "Basic Japanese"],
    image: null,
  },
];

export const SERVICES = [
  {
    id: "implants",
    slug: "implants",
    name: "Dental Implants",
    shortDesc: "Permanent tooth replacement using titanium implants — the gold standard.",
    nzPrice: "NZD 5,000–8,000",
    clinicPrice: "NZD 900–1,800 equiv.",
    savings: "Up to 75%",
  },
  {
    id: "cosmetic",
    slug: "cosmetic",
    name: "Cosmetic Dentistry",
    shortDesc: "Porcelain veneers, crowns, and whitening — your smile, redesigned.",
    nzPrice: "NZD 1,500–2,500 per tooth",
    clinicPrice: "NZD 250–450 equiv.",
    savings: "Up to 80%",
  },
  {
    id: "general",
    slug: "general",
    name: "General Dentistry",
    shortDesc: "Comprehensive care — fillings, root canals, cleanings, extractions.",
    nzPrice: "NZD 800–3,000",
    clinicPrice: "NZD 80–500 equiv.",
    savings: "Up to 70%",
  },
  {
    id: "aligners",
    slug: "cosmetic",
    name: "Clear Aligners",
    shortDesc: "Straighter teeth with discreet aligner treatment, monitored remotely.",
    nzPrice: "NZD 8,000–12,000",
    clinicPrice: "NZD 2,000–3,500 equiv.",
    savings: "Up to 70%",
  },
];

export const PRICING_DATA = [
  { id: "single-implant", label: "Single Dental Implant", nzd: 6500, aud: 5800, vnd_usd: 1100, category: "implants" },
  { id: "all-on-4", label: "All-on-4 Implants (full arch)", nzd: 28000, aud: 25000, vnd_usd: 6500, category: "implants" },
  { id: "veneer", label: "Porcelain Veneer (per tooth)", nzd: 2000, aud: 1800, vnd_usd: 380, category: "cosmetic" },
  { id: "crown", label: "Porcelain Crown", nzd: 1800, aud: 1600, vnd_usd: 300, category: "cosmetic" },
  { id: "whitening", label: "Professional Teeth Whitening", nzd: 800, aud: 700, vnd_usd: 120, category: "cosmetic" },
  { id: "aligners", label: "Clear Aligner Treatment", nzd: 9000, aud: 8000, vnd_usd: 2200, category: "aligners" },
  { id: "root-canal", label: "Root Canal Treatment", nzd: 1500, aud: 1300, vnd_usd: 220, category: "general" },
  { id: "extraction", label: "Tooth Extraction (complex)", nzd: 400, aud: 350, vnd_usd: 80, category: "general" },
  { id: "cleaning", label: "Scale & Polish / Clean", nzd: 200, aud: 180, vnd_usd: 35, category: "general" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "I was nervous about traveling for dental work, but Smile Dental completely changed my mind. The clinic is immaculate, the team speaks perfect English, and my implants look and feel incredible. I saved over $9,000 compared to my home country quote.",
    name: "Sarah M.",
    location: "Auckland, NZ",
    flag: "🇳🇿",
    treatment: "2x Dental Implants",
    savings: "NZD 9,200",
    rating: 5,
  },
  {
    id: 2,
    quote: "I got 8 veneers done in 6 days — including time to explore the local area! The digital smile preview they showed me beforehand was exactly what I ended up with. The quality is genuinely world-class and the price was a fraction of what I was quoted in my country.",
    name: "James T.",
    location: "Sydney, AU",
    flag: "🇦🇺",
    treatment: "8 Porcelain Veneers",
    savings: "AUD 12,400",
    rating: 5,
  },
  {
    id: 3,
    quote: "The AI chatbot was actually what convinced me. I asked questions at midnight my time and got proper answers instantly. By the time I got on the plane I knew exactly what to expect. The clinic is stunning, and my smile is completely transformed.",
    name: "Rachel K.",
    location: "Christchurch, NZ",
    flag: "🇳🇿",
    treatment: "Full Smile Makeover",
    savings: "NZD 18,000",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];
