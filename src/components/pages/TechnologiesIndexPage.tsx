import React, { useState, useMemo } from 'react';
import { Link } from '../../context/RouterContext';
import { technologiesData } from '../../data/technologiesData';
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
  Layers,
  FileCode,
  Database,
  Smartphone,
  Cloud,
  Bot
} from 'lucide-react';

export const TechnologiesIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies (22)' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & GenAI' },
  ];

  const filteredTech = useMemo(() => {
    return technologiesData.filter((t) => {
      const matchesSearch =
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (selectedCategory === 'all') return true;
      return t.category === selectedCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'frontend':
        return <FileCode className="w-4 h-4 text-emerald-400" />;
      case 'backend':
        return <Database className="w-4 h-4 text-teal-400" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-cyan-400" />;
      case 'cloud-devops':
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'ai':
        return <Bot className="w-4 h-4 text-purple-400" />;
      default:
        return <Code2 className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div id="technologies-index-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Technologies' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Engineering Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Battle-Tested{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Technology Stack
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            We build with world-class frameworks and cloud primitives. Zero legacy bloat, optimal performance, and developer ergonomics.
          </p>

          {/* SEARCH BOX */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search technologies (e.g. Next.js, Node.js, AWS, Gemini)..."
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

      {/* TECHNOLOGIES GRID */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredTech.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-base mb-4">No technologies found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTech.map((tech) => (
                <Link
                  key={tech.slug}
                  href={`/technologies/${tech.slug}`}
                  id={`tech-list-${tech.slug}`}
                  className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                        <Code2 className="w-6 h-6" />
                      </div>
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                        {getCategoryIcon(tech.category)}
                        <span>{tech.category}</span>
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {tech.name}
                    </h2>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                      {tech.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tech.useCases.slice(0, 2).map((uc) => (
                        <span key={uc} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                    <span>Tech Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
        title="Engineering & Architecture FAQ"
        subtitle="Insights into our selection criteria, framework migration strategies, and cloud infrastructure choices."
      />

      {/* CONTACT */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Discuss Your Tech Stack with a Senior Architect"
            subtitle="Let's evaluate your existing architecture or plan a greenfield development using the right tools."
            sourceContext="Technologies Index Page"
          />
        </div>
      </section>

    </div>
  );
};
