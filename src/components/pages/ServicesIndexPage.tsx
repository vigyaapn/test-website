import React, { useState, useMemo } from 'react';
import { Link } from '../../context/RouterContext';
import { servicesData } from '../../data/servicesData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { FaqAccordion } from '../common/FaqAccordion';
import { siteConfig } from '../../data/siteConfig';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  Code2,
  Search,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Filter
} from 'lucide-react';

export const ServicesIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'ai' | 'cloud'>('all');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.capabilities.some(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'web') {
        return ['ui-ux-web-design', 'web-application-development', 'ecommerce-development', 'pwa-development', 'cms-development', 'saas-product-development'].includes(service.slug);
      }
      if (selectedCategory === 'mobile') {
        return ['mobile-app-development', 'pwa-development', 'iot-embedded-solutions'].includes(service.slug);
      }
      if (selectedCategory === 'ai') {
        return ['ai-machine-learning', 'custom-software-development', 'enterprise-software'].includes(service.slug);
      }
      if (selectedCategory === 'cloud') {
        return ['cloud-devops', 'api-development-integration', 'database-design-management', 'cybersecurity-services', 'maintenance-support'].includes(service.slug);
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div id="services-index-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>20 Specialized Engineering Disciplines</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Enterprise-Grade{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Digital Services
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            From early-stage MVP validation to multi-tenant SaaS architectures, autonomous AI pipelines, and continuous cloud reliability.
          </p>

          {/* SEARCH & FILTER CONTROLS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services by keyword, tech, or capability..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 placeholder-slate-500"
              />
            </div>
          </div>

          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: 'all', label: 'All Services (20)' },
              { id: 'web', label: 'Web & SaaS' },
              { id: 'mobile', label: 'Mobile & Apps' },
              { id: 'ai', label: 'AI & Data' },
              { id: 'cloud', label: 'Cloud & Infrastructure' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-base mb-4">No services found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  id={`service-list-${service.slug}`}
                  className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">Service</span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3">
                      {service.title}
                    </h2>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-800/60 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* STATS */}
      <StatsCounter />

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <FaqAccordion
        items={siteConfig.generalFaqs}
        title="Services & Engagement FAQ"
        subtitle="Common questions regarding team allocation, sprint cycles, billing models, and code handover."
      />

      {/* CONTACT */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Book a Discovery Call with Our Engineers"
            subtitle="Let’s review your architectural requirements, estimate delivery timeline, and map out sprint deliverables."
            sourceContext="Services Index Page"
          />
        </div>
      </section>

    </div>
  );
};
