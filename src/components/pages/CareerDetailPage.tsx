import React, { useState } from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { careersData } from '../../data/careersData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { useApp } from '../../context/AppContext';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Upload,
  X,
  FileCheck,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface CareerDetailPageProps {
  slug: string;
}

export const CareerDetailPage: React.FC<CareerDetailPageProps> = ({ slug }) => {
  const router = useRouter();
  const { addApplication } = useApp();

  const job = careersData.find((j) => j.slug === slug);

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    portfolio: '',
    coverLetter: '',
  });

  const [resumeFile, setResumeFile] = useState<{ name: string; size: string } | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-28 pb-20 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">
            The requested job posting may have been filled or expired.
          </p>
          <Link
            href="/careers"
            className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm"
          >
            Back to Open Positions
          </Link>
        </div>
      </div>
    );
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!resumeFile) errs.resume = 'Please attach your resume (PDF or DOCX)';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.size > 10 * 1024 * 1024) {
      setFileError('File size exceeds the 10 MB limit.');
      return;
    }

    const ext = selected.name.split('.').pop()?.toLowerCase();
    if (!['pdf', 'doc', 'docx'].includes(ext || '')) {
      setFileError('Supported formats: PDF, DOC, DOCX');
      return;
    }

    setResumeFile({
      name: selected.name,
      size: (selected.size / (1024 * 1024)).toFixed(2) + ' MB'
    });
    setErrors((prev) => ({ ...prev, resume: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await addApplication({
        jobSlug: job.slug,
        jobTitle: job.title,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        resumeName: resumeFile?.name || 'Resume.pdf',
        linkedIn: formData.linkedIn,
        portfolio: formData.portfolio,
        coverLetter: formData.coverLetter,
      });
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'An error occurred while submitting your application.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id={`career-detail-${job.slug}`} className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs
          items={[
            { label: 'Careers', href: '/careers' },
            { label: job.title }
          ]}
        />
      </div>

      {/* HERO SECTION */}
      <section className="py-12 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
              {job.department}
            </span>
            <span className="text-xs text-slate-400">{job.type}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-slate-800/80">
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{job.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>{job.experience}</span>
              </span>
            </div>

            <button
              type="button"
              id="job-apply-header-btn"
              onClick={() => setIsApplyModalOpen(true)}
              className="px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Apply for this Role</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* JOB SPECIFICATION DETAILS */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* DESCRIPTION */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Role Overview</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {job.overview}
            </p>
          </div>

          {/* RESPONSIBILITIES */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">What You Will Do</h2>
            <div className="space-y-3">
              {job.responsibilities.map((r, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Requirements & Technical Competencies</h2>
            <div className="space-y-3">
              {job.requirements.map((r, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NICE TO HAVE */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Nice to Have</h2>
            <div className="space-y-3">
              {job.niceToHave.map((n, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2"></span>
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT WE OFFER */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">Compensation & Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {job.benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM APPLY TRIGGER */}
          <div className="text-center pt-8">
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-2xl shadow-xl shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Apply for {job.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* APPLY MODAL */}
      {isApplyModalOpen && (
        <div
          id="apply-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => !isSubmitting && setIsApplyModalOpen(false)}
        >
          <div
            id="apply-modal"
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you for applying to the <span className="text-emerald-400 font-semibold">{job.title}</span> position at Vigyaapn. Our technical hiring team will review your qualifications and reach out via email.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsApplyModalOpen(false);
                    setIsSuccess(false);
                  }}
                  className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-300"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Apply for Position
                </h3>
                <p className="text-xs text-emerald-400 font-medium mb-6">
                  {job.title} • {job.location}
                </p>

                {errors.form && (
                  <div className="p-3 mb-4 rounded-xl bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                    />
                    {errors.fullName && <p className="text-red-400 text-[11px] mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                      {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 555-0199"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                      {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                        LinkedIn Profile (Optional)
                      </label>
                      <input
                        type="url"
                        value={formData.linkedIn}
                        onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                        placeholder="https://linkedin.com/in/janedoe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                        GitHub / Portfolio (Optional)
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://github.com/janedoe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* RESUME UPLOAD */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                      Resume Attachment (PDF or DOCX) *
                    </label>
                    {!resumeFile ? (
                      <label className="border-2 border-dashed border-slate-800 hover:border-emerald-500/50 rounded-xl p-4 text-center bg-slate-950/60 block cursor-pointer">
                        <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <span className="text-xs text-slate-300">Click to upload resume</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-emerald-800/40">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-emerald-400" />
                          <span className="text-xs text-slate-200">{resumeFile.name} ({resumeFile.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setResumeFile(null)}
                          className="text-slate-400 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    {fileError && <p className="text-red-400 text-[11px] mt-1">{fileError}</p>}
                    {errors.resume && <p className="text-red-400 text-[11px] mt-1">{errors.resume}</p>}
                  </div>

                  {/* COVER NOTE */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase text-slate-300 mb-1">
                      Short Note / Cover Letter (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      placeholder="Briefly highlight your relevant experience and projects..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 hover:from-emerald-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
