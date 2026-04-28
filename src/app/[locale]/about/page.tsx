import type { Metadata } from "next";
import Link from "next/link";
import { DOCTORS, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Smile Dental Clinic — Our Doctors & Credentials",
  description:
    "Meet the internationally trained team at Smile Dental Clinic. 8+ years treating patients from New Zealand, Australia, and 18 countries. Free consultation.",
};

const credentials = [
  { name: "Ministry of Health Vietnam", desc: "Full medical practice licence issued by the Vietnamese Ministry of Health", icon: "🏛️" },
  { name: "Dental Association Member", desc: "Active members of the Vietnam Dental Association — the national professional body", icon: "🦷" },
  { name: "International Patient Certification", desc: "Certified international patient treatment facility with English-language protocols", icon: "🌏" },
  { name: "ISO-Standard Sterilisation", desc: "Sterilisation processes meet ISO 15883 international standards for infection control", icon: "🔬" },
  { name: "Digital Smile Design Certified", desc: "Official DSD (Digital Smile Design) trained practice — the global gold standard for cosmetic planning", icon: "💻" },
  { name: "Straumann Certified Provider", desc: "Authorised Straumann implant provider — training and quality accreditation from the world's #1 implant brand", icon: "⭐" },
];

const whyTrustPoints = [
  { title: "Transparent pricing", desc: "Full written quote before any treatment begins. No surprises, no pressure." },
  { title: "English-first communication", desc: "Every step explained in plain English — from first enquiry to post-treatment follow-up." },
  { title: "Records sent home", desc: "Your full treatment records are sent to your NZ/Aus dentist automatically." },
  { title: "AI-powered support", desc: "24/7 AI assistant answers questions in any timezone — your concierge before, during, and after." },
  { title: "Warranty on all work", desc: "Written warranty on all restorative and cosmetic procedures." },
  { title: "Remote follow-up", desc: "Video consultations with your doctor available after you return home." },
];

const patientJourneySteps = [
  { icon: "📱", title: "Discover on Social Media", desc: "Find us on TikTok or Instagram" },
  { icon: "🌐", title: "Explore Treatments & Pricing", desc: "Learn about procedures and costs on our website" },
  { icon: "💬", title: "Chat on WhatsApp", desc: "Get instant answers 24/7, any timezone" },
  { icon: "📅", title: "Book Your Appointment", desc: "Secure your treatment date with ease" },
  { icon: "✈️", title: "Arrive & Get Treated", desc: "Experience world-class care in Da Nang" },
];

const internationalPatientStats = [
  { value: "1.2M+", label: "Searches/year for 'dental tourism Vietnam'" },
  { value: "68%", label: "Patients discover clinics via social media first" },
  { value: "42%", label: "Growth in international dental tourism (2023-2025)" },
  { value: "18+", label: "Countries we serve" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-off-white mb-5">
            Built for international patients.<br />
            <span className="text-gradient-accent">Trusted for 8+ years.</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
            Smile Dental Clinic was founded with one mission: to make world-class dental care accessible to patients from New Zealand, Australia, and beyond — without compromising on quality, communication, or care.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: `${STATS.patientsServed.toLocaleString()}+`, label: "Patients treated" },
            { value: `${STATS.yearsInPractice}+`, label: "Years in practice" },
            { value: `${STATS.googleRating}/5 ★`, label: "Google rating" },
            { value: `${STATS.countriesServed}+`, label: "Countries served" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold font-display text-gradient-accent mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Patient Journey Visual */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 border border-blue-100/50">
          <h2 className="text-2xl font-display font-bold text-off-white text-center mb-3">Your Patient Journey</h2>
          <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
            Here's how international patients discover us, evaluate our clinic, and transform their smiles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {patientJourneySteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl font-bold shadow-md mb-4">
                  {step.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-off-white text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-xs">{step.desc}</p>
                </div>
                {idx < patientJourneySteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-2 w-4 text-center text-gray-400 text-xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-display font-bold text-off-white mb-5">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Smile Dental Clinic was founded in Da Nang with a simple observation: patients from New Zealand, Australia, and the UK were already flying to Vietnam for dental work — but they had no reliable, English-first clinic to trust.
              </p>
              <p>
                We built Smile Dental Clinic to change that. A clinic designed from the ground up for international patients: English-speaking team, international-grade equipment, transparent pricing, and a commitment to keeping you informed at every step.
              </p>
              <p>
                Eight years later, we've treated patients from 18 countries, achieved a 4.9-star Google rating from {STATS.reviewCount}+ verified reviews, and built AI-powered tools that make dental tourism feel like the easy, obvious choice it always should have been.
              </p>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <h3 className="font-display font-semibold text-off-white mb-5">Our Mission</h3>
            <blockquote className="text-gray-700 text-lg leading-relaxed italic">
              "Every patient deserves dental care that meets international standards. Cost should never be the reason someone lives with dental pain or a smile they're not proud of."
            </blockquote>
            <div className="mt-6 text-gray-600 text-sm">— Smile Dental Clinic Founding Principle</div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Meet Our Specialists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DOCTORS.map((doc) => (
              <div key={doc.id} className="glass rounded-2xl p-6 flex flex-col gap-4">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary-light flex items-center justify-center text-3xl mx-auto">
                  👨‍⚕️
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-off-white">{doc.name}</h3>
                  <p className="text-accent text-sm font-medium mt-0.5">{doc.title}</p>
                  <p className="text-gray-600 text-xs mt-1">{doc.experience} experience</p>
                </div>
                <div className="border-t border-white/8 pt-4 space-y-3">
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-1.5">Specialties</div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((s) => (
                        <span key={s} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider mb-1.5">Languages</div>
                    <div className="flex gap-1.5">
                      {doc.languages.map((l) => (
                        <span key={l} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full">{l}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 leading-relaxed">{doc.education}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Certifications & Standards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((cred) => (
              <div key={cred.name} className="glass rounded-2xl p-5 flex gap-4">
                <div className="text-2xl shrink-0">{cred.icon}</div>
                <div>
                  <div className="font-display font-semibold text-off-white text-sm mb-1">{cred.name}</div>
                  <div className="text-gray-700 text-xs leading-relaxed">{cred.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why trust us */}
        <div>
          <h2 className="text-2xl font-display font-bold text-off-white mb-8">Why international patients trust us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyTrustPoints.map((point) => (
              <div key={point.title} className="glass rounded-2xl p-5">
                <h3 className="font-display font-semibold text-off-white mb-2">{point.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How International Patients Find Us */}
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-3xl p-10 border border-indigo-100/50">
          <h2 className="text-2xl font-display font-bold text-off-white text-center mb-2">How International Patients Find Us</h2>
          <p className="text-gray-700 text-center mb-10 text-sm max-w-2xl mx-auto">
            The data is clear: dental tourism demand is growing, and international patients are actively searching for clinics like ours.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {internationalPatientStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold font-display text-accent mb-2">{stat.value}</div>
                <div className="text-gray-700 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="font-display font-semibold text-off-white mb-6 text-center">The International Patient Funnel</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-pink-400 to-rose-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">1</div>
                <div className="font-semibold text-off-white text-center">See us on TikTok / Instagram</div>
                <div className="text-gray-600 text-xs text-center mt-1">Viral before/afters, patient stories</div>
              </div>
              <div className="flex items-center justify-center text-gray-400 hidden md:flex">→</div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">2</div>
                <div className="font-semibold text-off-white text-center">Google "Dental Implants Vietnam"</div>
                <div className="text-gray-600 text-xs text-center mt-1">Search volume: 1.2M+/year</div>
              </div>
              <div className="flex items-center justify-center text-gray-400 hidden md:flex">→</div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">3</div>
                <div className="font-semibold text-off-white text-center">Land on our website</div>
                <div className="text-gray-600 text-xs text-center mt-1">Evaluate pricing, credentials, AI tools</div>
              </div>
              <div className="flex items-center justify-center text-gray-400 hidden md:flex">→</div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-400 to-emerald-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-2">4</div>
                <div className="font-semibold text-off-white text-center">Chat on WhatsApp</div>
                <div className="text-gray-600 text-xs text-center mt-1">Get instant answers, build confidence</div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-700 text-sm mt-8">
            <span className="font-semibold">This is why your website needs to speak directly to international patients.</span><br/>
            We exist in that critical conversion moment between social discovery and WhatsApp booking.
          </p>
        </div>

        {/* CTA */}
        <div className="gradient-mesh rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-40" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-off-white mb-3">
              Ready to meet the team?
            </h2>
            <p className="text-gray-700 mb-7 max-w-xl mx-auto">
              Book a free video consultation with one of our specialists. No commitment, no flights booked — just a conversation about your dental goals.
            </p>
            <Link href="/book" className="inline-flex items-center gap-2 bg-accent text-primary font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover shadow-[0_0_30px_rgba(10,22,40,0.35)] transition-all duration-300">
              Book Free Consultation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
