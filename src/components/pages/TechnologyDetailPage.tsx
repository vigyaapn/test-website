import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { technologiesData } from '../../data/technologiesData';
import { blogData } from '../../data/blogData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { FaqAccordion } from '../common/FaqAccordion';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  Code2,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Layers,
  Cpu,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface TechnologyDetailPageProps {
  slug: string;
}

export const TechnologyDetailPage: React.FC<TechnologyDetailPageProps> = ({ slug }) => {
  const router = useRouter();

  const tech = technologiesData.find((t) => t.slug === slug);

  if (!tech) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-28 pb-20 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Technology Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">
            The requested technology stack could not be located in our catalog.
          </p>
          <Link
            href="/technologies"
            className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm"
          >
            Back to All Technologies
          </Link>
        </div>
      </div>
    );
  }

  // Find related technologies data objects
  const relatedTechObjects = (tech.relatedSlugs || [])
    .map((slug) => {
      return technologiesData.find(
        (t) => t.slug === slug || t.name.toLowerCase() === slug.toLowerCase()
      );
    })
    .filter((t): t is typeof technologiesData[number] => Boolean(t));

  const relatedBlogs = blogData.slice(0, 2);

  return (
    <div id={`tech-detail-${tech.slug}`} className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs
          items={[
            { label: 'Technologies', href: '/technologies' },
            { label: tech.name }
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
                <span className="capitalize">{tech.category} Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                {tech.name} Development Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {tech.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#form"
                  className="px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Talk to a {tech.name} Specialist</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href={`/hire-developers?tech=${tech.slug}`}
                  className="px-6 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <span>Hire Dedicated {tech.name} Developers</span>
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Senior Certified Engineers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Immediate Team Ramp-up</span>
                </div>
              </div>

            </div>

            {/* QUICK FORM ON HERO RIGHT */}
            <div className="lg:col-span-5">
              <ProjectInquiryForm
                defaultService={`${tech.name} Engineering`}
                title={`Hire ${tech.name} Engineers`}
                subtitle={`Deploy dedicated ${tech.name} talent or commission turnkey development.`}
                sourceContext={`Technology Detail Page: ${tech.name}`}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY ARCHITECTURAL FEATURES */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Why We Build With {tech.name}
            </h2>
            <p className="text-sm text-slate-400">
              Core characteristics that make {tech.name} optimal for enterprise digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tech.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center text-emerald-400 mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-white">{feature}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. OVERVIEW & USE CASES */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Technical Architecture & Overview
              </h2>
              <div className="text-sm text-slate-300 leading-relaxed space-y-4">
                <p>{tech.overview}</p>
                <p>
                  Our engineering team adheres to strict code review guidelines, automated linting, type-safety guarantees, and continuous integration pipelines for all {tech.name} codebases.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">
                Primary Use Cases for {tech.name}
              </h3>
              <div className="space-y-3">
                {tech.useCases.map((uc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SERVICES OFFERED WITH THIS TECH */}
      <section className="py-20 bg-slate-900/20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Our {tech.name} Development Services
            </h2>
            <p className="text-sm text-slate-400">
              End-to-end consulting, greenfield engineering, migration, and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tech.developmentServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs font-semibold text-slate-200"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <span>{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED TECHNOLOGIES WITH ACTIVE LINKS */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Complementary & Related Technologies
            </h2>
            <p className="text-sm text-slate-400">
              We frequently combine {tech.name} with these ecosystem components to create cohesive architectures.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {relatedTechObjects.map((rel) => (
              <Link
                key={rel!.slug}
                href={`/technologies/${rel!.slug}`}
                id={`rel-tech-${rel!.slug}`}
                className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 flex items-center gap-3 text-sm font-semibold text-slate-200 transition-all group"
              >
                <Code2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>{rel!.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-20 bg-slate-900/20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Industries Deploying {tech.name}
            </h2>
            <p className="text-sm text-slate-400">
              Battle-tested applications across critical business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tech.industries.map((ind) => (
              <Link
                key={ind}
                href={`/contact?industry=${encodeURIComponent(ind.toLowerCase().replace(/\s+/g, '-'))}&tech=${encodeURIComponent(tech.name)}`}
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

      {/* 8. KEY BENEFITS */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Business & Engineering Benefits
            </h2>
            <p className="text-sm text-slate-400">
              Why leading software engineering teams standardize on {tech.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tech.benefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className="text-emerald-400 font-mono text-sm font-bold mb-2">0{idx + 1}</div>
                <h4 className="text-sm font-bold text-white mb-1">{b.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROCESS */}
      <ProcessSection
        title={`Our ${tech.name} Implementation Lifecycle`}
        subtitle="End-to-end agile execution from technical discovery to production release."
      />

      {/* 10. STATS */}
      <StatsCounter />

      {/* 11. FAQ ACCORDION */}
      <FaqAccordion
        items={tech.faqs}
        title={`${tech.name} Development FAQ`}
        subtitle="Answers to common technical, architectural, and hiring questions."
      />

      {/* 12. TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* 13. RELATED BLOG POSTS */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Architecture Guides & Articles</h2>
              <p className="text-xs text-slate-400">Deep-dive technical guides relevant to {tech.name}.</p>
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

      {/* 14. FINAL CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Build With Elite {tech.name} Engineers
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Hire individual senior specialists or ramp up a full squad within 48 hours. Guaranteed code quality and agile delivery.
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <span>Request {tech.name} Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 15. EMBEDDED INQUIRY FORM */}
      <section id="form" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            defaultService={`${tech.name} Development`}
            title={`Start Your ${tech.name} Project`}
            subtitle={`Share your roadmap or architecture needs to receive an estimation within 24 hours.`}
            sourceContext={`Technology Detail Form: ${tech.name}`}
          />
        </div>
      </section>

    </div>
  );
};
