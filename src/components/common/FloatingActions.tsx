import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { useApp } from '../../context/AppContext';
import { MessageSquare, Phone, Mail, MessageCircle, X } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const { trackEvent } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const cleanPhone = siteConfig.contact.phone.replace(/[^0-9+]/g, '');

  return (
    <div id="floating-actions-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      
      {/* EXPANDABLE CONTACT SPEED-DIAL */}
      {isOpen && (
        <div className="flex flex-col gap-2.5 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          
          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hi%20Vigyaapn%20team,%20I%20would%20like%20to%20discuss%20a%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-btn"
            onClick={() => trackEvent('floating_whatsapp_click')}
            aria-label="Chat on WhatsApp"
            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-950/50 text-xs font-semibold transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* EMAIL */}
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Project%20Enquiry%20-%20Vigyaapn`}
            id="floating-email-btn"
            onClick={() => trackEvent('floating_email_click')}
            aria-label="Send an Email"
            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 rounded-full shadow-lg shadow-black/40 text-xs font-semibold transition-all duration-200 hover:scale-105"
          >
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>{siteConfig.contact.email}</span>
          </a>

          {/* PHONE CALL */}
          <a
            href={`tel:${cleanPhone}`}
            id="floating-call-btn"
            onClick={() => trackEvent('floating_phone_click')}
            aria-label="Call Vigyaapn"
            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 rounded-full shadow-lg shadow-black/40 text-xs font-semibold transition-all duration-200 hover:scale-105"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{siteConfig.contact.phone}</span>
          </a>

        </div>
      )}

      {/* MAIN TOGGLE BUTTON */}
      <button
        type="button"
        id="floating-main-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Quick Contact Actions"
        className={`w-13 h-13 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
          isOpen
            ? 'bg-slate-800 text-slate-200 shadow-black/50 rotate-90'
            : 'bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 shadow-emerald-500/30'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-slate-950" />}
      </button>

    </div>
  );
};
