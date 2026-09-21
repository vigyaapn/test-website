import React from 'react';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { siteConfig } from '../../data/siteConfig';
import { ShieldCheck, Lock, FileText, CheckCircle } from 'lucide-react';

interface TermsPrivacyPageProps {
  type: 'terms' | 'privacy' | 'security';
}

export const TermsPrivacyPage: React.FC<TermsPrivacyPageProps> = ({ type }) => {
  const titles = {
    terms: 'Terms of Service & Master Services Agreement',
    privacy: 'Privacy Policy & Data Protection',
    security: 'Security Architecture & Compliance Protocols'
  };

  return (
    <div id="legal-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: titles[type] }]} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Last Updated: January 2025</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
          {titles[type]}
        </h1>

        <p className="text-sm text-slate-400 mb-10 pb-6 border-b border-slate-800">
          This document establishes the binding terms governing client engineering engagements, intellectual property ownership, and privacy compliance with {siteConfig.name}.
        </p>

        {type === 'terms' && (
          <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Engagement Structure & Deliverables</h2>
              <p>
                All digital product engineering services provided by {siteConfig.name} ("Agency") are executed under individual Statements of Work (SOW) or sprint-based team augmentation agreements. Deliverables adhere to defined acceptance criteria verified through automated CI/CD staging environments.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Intellectual Property & Code Ownership</h2>
              <p>
                Upon receipt of full payment for agreed milestones, 100% of all intellectual property rights, copyright, source code, designs, and architectural artifacts transfer irrevocably to the Client. The Agency retains no proprietary claims over custom software built specifically for Client.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Non-Disclosure & Confidentiality</h2>
              <p>
                Both parties agree to hold all proprietary trade secrets, business models, technical specifications, and user data in strict confidence. All engineers and contractors deployed by {siteConfig.name} sign individual Non-Disclosure Agreements prior to onboarding.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Warranty & Defect Remediation</h2>
              <p>
                {siteConfig.name} provides a 30-day post-launch warranty period during which any functional defects or deviations from agreed sprint specifications are resolved at zero additional charge.
              </p>
            </section>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Information Collection</h2>
              <p>
                We collect personal information voluntarily submitted through our project inquiry forms and career portal, including names, corporate email addresses, phone numbers, and technical requirement documents. We never sell or lease user data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Data Security & Storage</h2>
              <p>
                All client data is encrypted in transit using TLS 1.3 and at rest using AES-256 standard encryption. Access is restricted to authorized account managers and solutions engineers assigned to your discovery scope.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. GDPR & CCPA Compliance</h2>
              <p>
                You retain the right to request access to, rectification of, or deletion of your personal contact records at any time by contacting our data protection officer at {siteConfig.contact.email}.
              </p>
            </section>
          </div>
        )}

        {type === 'security' && (
          <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Infrastructure & SOC 2 Readiness</h2>
              <p>
                Our engineering practices follow the OWASP Top 10 guidelines and SOC 2 Type II controls. We utilize automated static analysis (SAST), software composition analysis (SCA), and secret scanning on all developer repositories.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Access Control & Zero-Trust</h2>
              <p>
                All internal agency operations enforce multi-factor authentication (MFA), hardware security keys, role-based access control (RBAC), and ephemeral staging credentials with automatic rotation.
              </p>
            </section>
          </div>
        )}

      </div>
    </div>
  );
};
