import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { portfolioData } from '../../data/portfolioData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { StatsCounter } from '../common/StatsCounter';
import { ProcessSection } from '../common/ProcessSection';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Cpu,
  Layers,
  Quote,
  Star,
  Sparkles
} from 'lucide-react';

interface PortfolioDetailPageProps {
  slug: string;
}

export const PortfolioDetailPage: React.FC<PortfolioDetailPageProps> = ({ slug }) => {
  const router = useRouter();

  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-28 pb-20 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">
            The requested portfolio case study could not be located.
          </p>
          <Link
            href="/portfolio"
            className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm"
          >
            Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id={`case-study-${project.slug}`} className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs
          items={[
            { label: 'Portfolio', href: '/portfolio' },
            { label: project.title }
          ]}
        />
      </div>

      {/* 2. HERO SECTION */}
      <section className="py-14 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-xs font-semibold text-emerald-400">
                {project.industry}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-400 font-medium">Client: {project.clientName}</span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-400 font-medium">{project.duration}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-8">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all inline-flex items-center gap-2"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#form"
                className="px-6 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Start Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HERO IMAGE SHOWCASE */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-[340px] sm:h-[480px] lg:h-[580px] relative">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. CHALLENGE & SOLUTION */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* CHALLENGE */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                The Bottleneck
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Core Challenge
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* SOLUTION */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-emerald-900/40">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Our Engineering Strategy
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                The Architectural Solution
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CORE FEATURES DELIVERED */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Key Features & Capabilities
            </h2>
            <p className="text-sm text-slate-400">
              User-facing and operational modules built into the system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-sm font-semibold text-slate-200 leading-snug">
                  {feat}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TECHNOLOGY STACK USED */}
      <section className="py-20 bg-slate-900/20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Technology Stack Deployed
            </h2>
            <p className="text-sm text-slate-400">
              Frameworks, APIs, and cloud services chosen for this architecture.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-emerald-300"
              >
                {t}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BUSINESS RESULTS & IMPACT */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Measurable ROI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Commercial & Operational Outcomes
            </h2>
            <p className="text-sm text-slate-400">
              Verified performance gains achieved post-deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((res, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/50 border border-emerald-800/40 text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">{res.metric}</div>
                <div className="text-xs text-slate-300 font-medium">{res.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CLIENT TESTIMONIAL QUOTE */}
      {project.clientFeedback && (
        <section className="py-20 bg-slate-900/40 border-b border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 relative">
              <Quote className="w-12 h-12 text-emerald-500/20 absolute top-8 right-8" />
              <div className="flex items-center gap-1 text-emerald-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed mb-6">
                "{project.clientFeedback.quote}"
              </blockquote>
              <div className="font-bold text-white text-sm">
                {project.clientFeedback.author}
              </div>
              <div className="text-xs text-slate-400">
                {project.clientFeedback.position}, {project.clientName}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. EMBEDDED PROJECT INQUIRY FORM */}
      <section id="form" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title={`Start a Project Similar to ${project.title}`}
            subtitle={`Discuss your goals with our engineering leads to achieve comparable results.`}
            sourceContext={`Case Study Page: ${project.title}`}
          />
        </div>
      </section>

    </div>
  );
};
