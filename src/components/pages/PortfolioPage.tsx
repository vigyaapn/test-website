import React, { useState, useMemo } from 'react';
import { Link } from '../../context/RouterContext';
import { portfolioData } from '../../data/portfolioData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  ExternalLink,
  ArrowRight,
  Search,
  Sparkles,
  Filter,
  CheckCircle
} from 'lucide-react';

export const PortfolioPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects (8)' },
    { id: 'saas', label: 'SaaS Platforms' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'healthcare', label: 'Healthcare' },
  ];

  const filteredProjects = useMemo(() => {
    return portfolioData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'saas') return item.industry === 'Fintech SaaS' || item.industry === 'PropTech SaaS' || item.industry === 'Logistics';
      if (selectedCategory === 'mobile') return item.industry === 'Healthcare' || item.industry === 'Hospitality & Events';
      if (selectedCategory === 'ai') return item.industry === 'AI & LegalTech' || item.technologies.includes('OpenAI API') || item.technologies.includes('Google Gemini API');
      if (selectedCategory === 'ecommerce') return item.industry === 'E-Commerce & Retail';
      if (selectedCategory === 'healthcare') return item.industry === 'Healthcare';
      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div id="portfolio-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Commercial Track Record</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Measurable Impact
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Explore our curated case studies. From venture-backed MVPs to high-availability multi-tenant cloud platforms, explore how we deliver value.
          </p>

          {/* SEARCH BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by client, industry, or tech stack..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 placeholder-slate-500"
              />
            </div>
          </div>

          {/* CATEGORY PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
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

      {/* PORTFOLIO GRID */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-base mb-4">No case studies found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.slug}
                  id={`portfolio-item-${project.slug}`}
                  className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group shadow-xl"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-slate-700/60">
                        {project.industry}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-xs text-slate-400 font-medium mb-1">{project.clientName} • {project.duration}</div>
                      <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3">
                        {project.title}
                      </h2>
                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-medium text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM CTAS: WEBSITE & CASE STUDY */}
                  <div className="px-6 pb-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* PROCESS */}
      <ProcessSection />

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* CONTACT */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Ready to Build Your Next Success Story?"
            subtitle="Let’s review your technical specifications and discuss how we can execute on your timeline."
            sourceContext="Portfolio Index Page"
          />
        </div>
      </section>

    </div>
  );
};
