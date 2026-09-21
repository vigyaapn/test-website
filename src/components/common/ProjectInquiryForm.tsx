import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { useSearchParams, usePathname } from '../../context/RouterContext';
import { servicesData } from '../../data/servicesData';
import {
  Upload,
  X,
  FileCheck,
  ShieldCheck,
  CheckCircle,
  Loader2,
  AlertCircle,
  Send
} from 'lucide-react';

interface ProjectInquiryFormProps {
  defaultService?: string;
  sourceContext?: string;
  title?: string;
  subtitle?: string;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({
  defaultService,
  sourceContext = 'Direct Inquiry',
  title = 'Let’s Build Something Great Together',
  subtitle = 'Fill out the form below to receive a detailed technical proposal, architecture outline, and fixed-price quotation within 24 hours.'
}) => {
  const { addLead } = useApp();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Prefill from query params if present (e.g. ?service=..., ?role=..., ?industry=...)
  const queryService = searchParams.get('service');
  const queryRole = searchParams.get('role');
  const queryIndustry = searchParams.get('industry');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || queryService || 'Full Stack Development',
    budget: '$25,000 - $50,000',
    message: '',
    ndaRequested: true,
  });

  const [file, setFile] = useState<{ name: string; size: string } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (queryRole) {
      const formattedRole = queryRole.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      setFormData(prev => ({
        ...prev,
        service: `Dedicated Hiring: ${formattedRole}`,
        message: prev.message || `I am looking to hire a dedicated ${formattedRole} for our team.`
      }));
    } else if (queryIndustry) {
      setFormData(prev => ({
        ...prev,
        message: prev.message || `We are building a software platform for the ${queryIndustry} industry.`
      }));
    } else if (queryService) {
      setFormData(prev => ({
        ...prev,
        service: queryService
      }));
    }
  }, [queryRole, queryIndustry, queryService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project or goals';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selected = e.target.files?.[0];
    if (!selected) return;

    // Check size: 10MB limit
    const maxSize = 10 * 1024 * 1024;
    if (selected.size > maxSize) {
      setFileError('File size exceeds the 10 MB limit.');
      return;
    }

    // Check file extension
    const allowed = ['pdf', 'doc', 'docx', 'png', 'jpg', 'jpeg'];
    const ext = selected.name.split('.').pop()?.toLowerCase();
    if (!ext || !allowed.includes(ext)) {
      setFileError('Supported formats: PDF, DOC, DOCX, PNG, JPG, JPEG');
      return;
    }

    const sizeFormatted = (selected.size / (1024 * 1024)).toFixed(2) + ' MB';
    setFile({
      name: selected.name,
      size: sizeFormatted
    });
  };

  const removeFile = () => {
    setFile(null);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await addLead({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        attachmentName: file?.name,
        attachmentSize: file?.size,
        ndaRequested: formData.ndaRequested,
        source: sourceContext,
        page: pathname,
      });
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'Something went wrong while submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: 'Full Stack Development',
      budget: '$25,000 - $50,000',
      message: '',
      ndaRequested: true,
    });
    setFile(null);
    setErrors({});
  };

  return (
    <div id="form" className="w-full max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl shadow-black/40">
      
      {/* HEADER */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Guaranteed Confidentiality & 24hr Turnaround</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          {title}
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* SUCCESS BANNER */}
      {isSuccess ? (
        <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-9 h-9" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Thank you! Your enquiry has been submitted.
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
            Our technical solutions team has received your project parameters. A senior architect will review your requirements and reach out via email or phone within 24 hours.
          </p>
          <button
            type="button"
            onClick={resetForm}
            id="submit-another-inquiry-btn"
            className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-semibold text-sm rounded-xl hover:bg-emerald-300 transition-colors cursor-pointer"
          >
            Submit Another Project Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {errors.form && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.form}</span>
            </div>
          )}

          {/* NAME ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-first-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                First Name *
              </label>
              <input
                id="inquiry-first-name"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Jane"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                  errors.firstName ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                }`}
              />
              {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="inquiry-last-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Last Name *
              </label>
              <input
                id="inquiry-last-name"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Doe"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                  errors.lastName ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                }`}
              />
              {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* EMAIL & PHONE ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Work Email *
              </label>
              <input
                id="inquiry-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="jane@company.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="inquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number *
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
                }`}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* COMPANY & SERVICE ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inquiry-company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Company / Organization
              </label>
              <input
                id="inquiry-company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Acme Technologies"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="inquiry-service" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Primary Service Needed *
              </label>
              <select
                id="inquiry-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              >
                <optgroup label="Core Engineering">
                  {servicesData.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Dedicated Hiring">
                  <option value="Dedicated Hiring: Full Stack Developer">Dedicated Full Stack Team</option>
                  <option value="Dedicated Hiring: AI Engineer">Dedicated AI Engineer</option>
                  <option value="Dedicated Hiring: Mobile Developer">Dedicated Mobile Developer</option>
                  <option value="Dedicated Hiring: UI/UX Designer">Dedicated UI/UX Designer</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* BUDGET SELECTOR */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Estimated Project Budget (USD)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {['<$10k', '$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((tier) => (
                <button
                  type="button"
                  key={tier}
                  onClick={() => setFormData({ ...formData, budget: tier })}
                  className={`py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                    formData.budget === tier
                      ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/20'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT DESCRIPTION */}
          <div>
            <label htmlFor="inquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Project Overview & Goals *
            </label>
            <textarea
              id="inquiry-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your product goals, timeline, existing tech stack, and key deliverables..."
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-emerald-500'
              }`}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* FILE ATTACHMENT */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
              Project Specification / RFP Document (Optional)
            </label>

            {!file ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 text-center bg-slate-950/50 cursor-pointer transition-colors group"
              >
                <Upload className="w-6 h-6 text-slate-500 group-hover:text-emerald-400 mx-auto mb-2 transition-colors" />
                <p className="text-xs text-slate-300 font-medium">
                  Click or drag and drop your document here
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Supported formats: PDF, DOC, DOCX, PNG, JPG (Max 10 MB)
                </p>
                <input
                  ref={fileInputRef}
                  id="inquiry-file-upload"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  className="hidden"
                />
              </div>
            ) : (
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-emerald-800/40">
                <div className="flex items-center gap-3 min-w-0">
                  <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-slate-200 truncate">{file.name}</p>
                    <p className="text-[11px] text-slate-400">{file.size}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  id="remove-uploaded-file-btn"
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                  aria-label="Remove attachment"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {fileError && <p className="text-red-400 text-xs mt-1.5">{fileError}</p>}
          </div>

          {/* NDA CHECKBOX */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/50 border border-slate-800/60">
            <input
              id="inquiry-nda-checkbox"
              type="checkbox"
              checked={formData.ndaRequested}
              onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
              className="mt-0.5 w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-900 border-slate-700 cursor-pointer"
            />
            <label htmlFor="inquiry-nda-checkbox" className="text-xs text-slate-300 leading-relaxed cursor-pointer select-none">
              <span className="font-semibold text-white">Protect this enquiry under Non-Disclosure Agreement (NDA).</span> We respect your proprietary intellectual property and guarantee strict confidentiality before discussions begin.
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            id="inquiry-submit-btn"
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 hover:from-emerald-300 hover:to-teal-200 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Your Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Project Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

        </form>
      )}

    </div>
  );
};
