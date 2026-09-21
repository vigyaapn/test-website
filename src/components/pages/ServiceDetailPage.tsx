import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { servicesData } from '../../data/servicesData';
import { blogData } from '../../data/blogData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { FaqAccordion } from '../common/FaqAccordion';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Code2,
  Sparkles,
  Layers,
  ChevronRight,
  Zap,
  Calendar,
  Clock
} from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const router = useRouter();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-28 pb-20 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">
            The requested service discipline could not be located in our catalog.
          </p>
          <Link
            href="/services"
            className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm"
          >
            Back to All Services
          </Link>
        </div>
      </div>
    );
  }

  // Related blog articles
  const relatedBlogs = blogData.slice(0, 2);

  return (
    <div id={`service-detail-${service.slug}`} className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title }
          ]}
        />
      </div>

      {/* 2. HERO SECTION WITH SPLIT INQUIRY FORM */}
      <section className="py-14 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialized Practice</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {service.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#form"
                  className="px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/portfolio"
                  className="px-6 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Code Ownership</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Strict NDA Protection</span>
                </div>
              </div>

            </div>

            {/* QUICK FORM ON HERO RIGHT */}
            <div className="lg:col-span-5">
              <ProjectInquiryForm
                defaultService={service.title}
                title="Request Technical Scope"
                subtitle={`Connect with our ${service.title} team for feasibility and budget analysis.`}
                sourceContext={`Service Detail Page: ${service.title}`}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Key Architectural Features
            </h2>
            <p className="text-sm text-slate-400">
              Technical characteristics that distinguish our {service.title} deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-emerald-400 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OVERVIEW & CORE CAPABILITIES */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Detailed Service Overview
              </h2>
              <div className="text-sm text-slate-300 leading-relaxed space-y-4">
                <p>{service.overview}</p>
                <p>
                  At Vigyaapn, we assign a dedicated team consisting of a Solutions Architect, Lead Developer, UI/UX Designer, and QA Automation Engineer for every project. We integrate directly into your Jira, Slack, or GitHub workflow to maintain complete transparency.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">
                Core Capabilities & Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2 font-bold text-white mb-1">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{cap.title}</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed pl-6">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES SERVED */}
      <section className="py-20 bg-slate-900/20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Industries Utilizing Our {service.title}
            </h2>
            <p className="text-sm text-slate-400">
              Domain-specific optimizations tailored for compliance and conversion.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.industries.map((ind) => (
              <Link
                key={ind}
                href={`/contact?industry=${encodeURIComponent(ind.toLowerCase().replace(/\s+/g, '-'))}&service=${encodeURIComponent(service.title)}`}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-center transition-all group"
              >
                <div className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300">
                  {ind}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Inquire for {ind} →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. KEY BENEFITS */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Strategic & Technical Benefits
            </h2>
            <p className="text-sm text-slate-400">
              How partnering with Vigyaapn accelerates speed to market and protects budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-emerald-400 font-mono text-sm font-bold mb-2">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-white mb-1">{b.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROCESS */}
      <ProcessSection
        title={`Our ${service.title} Delivery Methodology`}
        subtitle="Predictable 5-step engineering framework from discovery to launch."
      />

      {/* 8. STATS */}
      <StatsCounter />

      {/* 9. SERVICE-SPECIFIC FAQ ACCORDION */}
      <FaqAccordion
        items={service.faqs}
        title={`${service.title} FAQ`}
        subtitle="Common questions regarding timelines, deliverables, tech stacks, and team composition."
      />

      {/* 10. TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* 11. RELATED BLOG POSTS */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Related Engineering Insights</h2>
              <p className="text-xs text-slate-400">Deep-dive technical guides relevant to {service.title}.</p>
            </div>
            <Link href="/blog" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedBlogs.map((b) => (
              <div
                key={b.slug}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs text-emerald-400 font-semibold mb-2">{b.category}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">{b.excerpt}</p>
                </div>
                <Link href={`/blog/${b.slug}`} className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Build Your {service.title} Project?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Get in touch for a detailed architectural roadmap, sprint plan, and transparent fixed-price or dedicated team proposal.
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 13. EMBEDDED INQUIRY FORM ANCHOR */}
      <section id="form" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            defaultService={service.title}
            title={`Start Your ${service.title} Engagement`}
            subtitle="Fill out the technical requirements below and our lead engineer will get back to you within 24 hours."
            sourceContext={`Service Page Form: ${service.title}`}
          />
        </div>
      </section>

    </div>
  );
};
