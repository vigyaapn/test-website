import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { siteConfig } from '../../data/siteConfig';
import {
  X,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Mail,
  Loader2,
  ArrowRight
} from 'lucide-react';

export const ExitIntentModal: React.FC = () => {
  const { isExitModalOpen, closeExitModal, addLead, trackEvent } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full Stack Development',
    ndaRequested: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExitModalOpen) {
        closeExitModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isExitModalOpen, closeExitModal]);

  if (!isExitModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and email address');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || 'Guest';
      const lastName = nameParts.slice(1).join(' ') || 'Prospect';

      await addLead({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service,
        budget: 'Flexible',
        message: 'Submitted via Quick Exit Intent Consultation Popup.',
        ndaRequested: formData.ndaRequested,
        source: 'Exit Intent Popup',
        page: typeof window !== 'undefined' ? window.location.pathname : '/',
      });
      setIsSuccess(true);
      trackEvent('exit_modal_lead_captured');
    } catch {
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="exit-intent-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeExitModal}
    >
      <div
        id="exit-intent-modal"
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-2xl shadow-black/80 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeExitModal}
          id="exit-modal-close-btn"
          aria-label="Close Modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">We’ve Received Your Details!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6">
              A solutions lead from Vigyaapn will contact you shortly to schedule an engineering discovery call.
            </p>
            <button
              type="button"
              onClick={closeExitModal}
              className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-300 transition-colors"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-[11px] font-semibold text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complimentary Technical Consultation</span>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-white mb-1">
              Wait! Don’t leave just yet.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Let’s talk about your project scope. Speak with a senior architect to estimate development timeline, budget, and tech stack—no obligations.
            </p>

            {error && (
              <div className="p-3 mb-4 rounded-xl bg-red-950/50 border border-red-800 text-red-300 text-xs">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555-0100"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Full Stack Development">Full Stack Dev</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Mobile App Development">Mobile App Dev</option>
                    <option value="UI/UX Web Design">UI/UX Design</option>
                    <option value="Hire Dedicated Developers">Hire Developers</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  id="modal-nda-checkbox"
                  type="checkbox"
                  checked={formData.ndaRequested}
                  onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                  className="w-3.5 h-3.5 rounded text-emerald-500 bg-slate-950 border-slate-700"
                />
                <label htmlFor="modal-nda-checkbox" className="text-[11px] text-slate-400 cursor-pointer">
                  Protect this enquiry under mutual Non-Disclosure Agreement (NDA).
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                id="exit-modal-submit-btn"
                className="w-full mt-2 py-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-300 hover:to-teal-200 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Session...</span>
                  </>
                ) : (
                  <>
                    <span>Schedule Free Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* QUICK ALTERNATIVES */}
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-4 text-xs">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Direct Email</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
