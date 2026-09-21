import React from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { siteConfig } from '../../data/siteConfig';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import { FaqAccordion } from '../common/FaqAccordion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Sparkles
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const cleanPhone = siteConfig.contact.phone.replace(/[^0-9+]/g, '');

  return (
    <div id="contact-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-14 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guaranteed Response Within 24 Hours</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Let’s Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Great Together
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, need to augment your engineering team, or want an expert architecture review? Our technical leads are ready to assist.
          </p>
        </div>
      </section>

      {/* CONTACT INFO TILES */}
      <section className="py-16 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* CALL */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h2 className="font-bold text-white text-base mb-1">Direct Phone</h2>
                <p className="text-xs text-slate-400 mb-4">Monday – Friday, 9am – 7pm EST</p>
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 truncate"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            {/* EMAIL */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-teal-400 mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-bold text-white text-base mb-1">Email Inquiries</h2>
                <p className="text-xs text-slate-400 mb-4">Typical reply in under 2 hours</p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-xs font-semibold text-teal-400 hover:text-teal-300 truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-300 mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h2 className="font-bold text-white text-base mb-1">Instant WhatsApp</h2>
                <p className="text-xs text-slate-400 mb-4">Connect directly with our solutions desk</p>
              </div>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi%20Vigyaapn%20team,%20I'd%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-300 hover:text-emerald-200"
              >
                Start WhatsApp Chat →
              </a>
            </div>

            {/* ADDRESS */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="font-bold text-white text-base mb-1">Global Studio</h2>
                <p className="text-xs text-slate-400 mb-4">Engineering headquarters</p>
              </div>
              <p className="text-xs text-slate-300">
                {siteConfig.contact.address}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN INQUIRY FORM */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Submit Your Project Requirements"
            subtitle="Please share details regarding your timeline, technology preferences, and budget to receive an actionable technical proposal."
            sourceContext="Contact Page Main Form"
          />
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion
        items={siteConfig.generalFaqs}
        title="Consultation & Engagement FAQ"
        subtitle="Helpful details on how our introductory consultations, NDA protocols, and proposal generation work."
      />

    </div>
  );
};
