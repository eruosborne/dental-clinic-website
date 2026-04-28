import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { CLINIC_ADDRESS, CLINIC_EMAIL, CLINIC_PHONE_1, CLINIC_PHONE_2, CLINIC_WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Smile Dental Clinic — English-Speaking Team",
  description:
    "Contact Smile Dental Clinic. English-speaking team, AI assistant available 24/7. Reach us via form, WhatsApp, phone, or email.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="gradient-mesh dot-grid py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-off-white mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Questions? Our English-speaking team and 24/7 AI assistant are here to help — whatever timezone you're in.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-display font-bold text-off-white mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-display font-semibold text-off-white">Direct Contact</h3>
              <a href={`mailto:${CLINIC_EMAIL}`} className="flex items-start gap-3 text-gray-700 hover:text-accent text-sm transition-colors">
                <span className="mt-0.5">✉️</span>
                <span>{CLINIC_EMAIL}</span>
              </a>
              <a href={`tel:${CLINIC_PHONE_1.replace(/\s/g, "")}`} className="flex items-start gap-3 text-gray-700 hover:text-accent text-sm transition-colors">
                <span className="mt-0.5">📞</span>
                <span>{CLINIC_PHONE_1}</span>
              </a>
              <a href={`tel:${CLINIC_PHONE_2.replace(/\s/g, "")}`} className="flex items-start gap-3 text-gray-700 hover:text-accent text-sm transition-colors">
                <span className="mt-0.5">📞</span>
                <span>{CLINIC_PHONE_2}</span>
              </a>
              <a href={`https://wa.me/${CLINIC_WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-700 hover:text-accent text-sm transition-colors">
                <span className="mt-0.5">💬</span>
                <span>WhatsApp: +{CLINIC_WHATSAPP}</span>
              </a>
            </div>

            {/* Address */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-off-white mb-3">Find Us</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{CLINIC_ADDRESS}</p>
              {/* Map placeholder */}
              <div className="w-full aspect-video rounded-xl bg-primary-light border border-gray-300 flex items-center justify-center text-gray-600 text-sm">
                📍 Da Nang, Vietnam<br />(Map embed here)
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_ADDRESS)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-accent text-sm hover:text-accent-hover transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-off-white mb-3">Opening Hours</h3>
              <p className="text-gray-700 text-sm">Monday – Sunday</p>
              <p className="text-accent font-semibold font-display">8:00 AM – 5:00 PM</p>
              <p className="text-gray-600 text-xs mt-1">Vietnam Time (GMT+7)</p>
              <div className="mt-4 pt-4 border-t border-white/8">
                <p className="text-gray-600 text-xs">AI assistant available 24/7. Human team responds within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
