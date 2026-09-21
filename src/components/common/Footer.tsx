import React from 'react';
import { Link } from '../../context/RouterContext';
import { siteConfig } from '../../data/siteConfig';
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Github,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'github':
        return <Github className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: BRAND & NEWSLETTER / HEADLINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" id="footer-logo" className="flex items-center gap-3 inline-block">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center shadow-md shadow-emerald-500/20">
                <span className="font-extrabold text-slate-950 text-lg tracking-tighter">V</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </Link>
            
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              {siteConfig.subheadline}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Full IP Transfer & Comprehensive NDA Protection</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center lg:items-end space-y-3">
            <div className="text-sm text-slate-300 font-medium">Ready to transform your technical vision into market reality?</div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                id="footer-start-project-cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/hire-developers"
                id="footer-hire-devs-cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl hover:bg-slate-800 hover:text-white transition-colors"
              >
                <span>Hire Dedicated Developers</span>
              </Link>
            </div>
          </div>
        </div>

        {/* NAVIGATION COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800/80">
          
          {/* COLUMN 1: COMPANY */}
          <div id="footer-col-company">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" id="footer-link-about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" id="footer-link-portfolio" className="hover:text-emerald-400 transition-colors">
                  Featured Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" id="footer-link-careers" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span>Careers</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-semibold border border-emerald-800/50">
                    We’re Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/hire-developers" id="footer-link-hire-devs" className="hover:text-emerald-400 transition-colors">
                  Hire Developers
                </Link>
              </li>
              <li>
                <Link href="/blog" id="footer-link-blog" className="hover:text-emerald-400 transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" id="footer-link-contact" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div id="footer-col-services">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" id="footer-link-services-all" className="hover:text-emerald-400 transition-colors font-medium text-slate-300">
                  View All Services
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-web-design" id="footer-link-service-uiux" className="hover:text-emerald-400 transition-colors">
                  UI/UX Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" id="footer-link-service-webapp" className="hover:text-emerald-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" id="footer-link-service-mobile" className="hover:text-emerald-400 transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/ai-machine-learning" id="footer-link-service-ai" className="hover:text-emerald-400 transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/services/saas-product-development" id="footer-link-service-saas" className="hover:text-emerald-400 transition-colors">
                  SaaS Product Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-devops" id="footer-link-service-devops" className="hover:text-emerald-400 transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: TECHNOLOGIES */}
          <div id="footer-col-technologies">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Technologies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/technologies" id="footer-link-tech-all" className="hover:text-emerald-400 transition-colors font-medium text-slate-300">
                  View All Technologies
                </Link>
              </li>
              <li>
                <Link href="/technologies/nextjs" id="footer-link-tech-nextjs" className="hover:text-emerald-400 transition-colors">
                  Next JS
                </Link>
              </li>
              <li>
                <Link href="/technologies/reactjs" id="footer-link-tech-react" className="hover:text-emerald-400 transition-colors">
                  React JS
                </Link>
              </li>
              <li>
                <Link href="/technologies/nodejs" id="footer-link-tech-node" className="hover:text-emerald-400 transition-colors">
                  Node JS
                </Link>
              </li>
              <li>
                <Link href="/technologies/react-native" id="footer-link-tech-rn" className="hover:text-emerald-400 transition-colors">
                  React Native
                </Link>
              </li>
              <li>
                <Link href="/technologies/aws" id="footer-link-tech-aws" className="hover:text-emerald-400 transition-colors">
                  Amazon Web Services (AWS)
                </Link>
              </li>
              <li>
                <Link href="/technologies/gemini" id="footer-link-tech-gemini" className="hover:text-emerald-400 transition-colors">
                  Google Gemini & GenAI
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL & GOVERNANCE */}
          <div id="footer-col-legal">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Transparency
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/terms-and-conditions" id="footer-link-terms" className="hover:text-emerald-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" id="footer-link-privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" id="footer-link-sitemap" className="hover:text-emerald-400 transition-colors">
                  Visual Sitemap
                </Link>
              </li>
              <li>
                <Link href="/robots" id="footer-link-robots" className="hover:text-emerald-400 transition-colors">
                  Robots Index
                </Link>
              </li>
              <li>
                <Link href="/admin" id="footer-link-admin" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-400">
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>Admin CMS</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: GET IN TOUCH */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4" id="footer-col-contact">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2">
              Headquarters
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Connect With Us
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {siteConfig.socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Vigyaapn on ${s.name}`}
                    className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
                  >
                    {getSocialIcon(s.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} {siteConfig.brandName} Inc. All rights reserved. {siteConfig.tagline}</p>
          <p className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-400">Security & Compliance</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-400">Master Service Agreement</Link>
          </p>
        </div>

      </div>
    </footer>
  );
};
