import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { siteConfig } from '../../data/siteConfig';
import { servicesData } from '../../data/servicesData';
import { technologiesData } from '../../data/technologiesData';
import { portfolioData } from '../../data/portfolioData';
import { blogData } from '../../data/blogData';
import { useApp } from '../../context/AppContext';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { IndustriesSection } from '../common/IndustriesSection';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  Code2,
  Cpu,
  Layers,
  Zap,
  Globe,
  Database,
  Smartphone,
  Server,
  Cloud,
  Bot,
  Calendar,
  Clock,
  ChevronRight
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const router = useRouter();
  const { trackEvent } = useApp();

  const featuredProjects = portfolioData.slice(0, 6);
  const featuredBlogs = blogData.slice(0, 3);

  // Group top tech for the home preview
  const homeTechPreview = [
    technologiesData.find(t => t.slug === 'nextjs')!,
    technologiesData.find(t => t.slug === 'reactjs')!,
    technologiesData.find(t => t.slug === 'nodejs')!,
    technologiesData.find(t => t.slug === 'react-native')!,
    technologiesData.find(t => t.slug === 'aws')!,
    technologiesData.find(t => t.slug === 'gemini')!,
    technologiesData.find(t => t.slug === 'openai')!,
    technologiesData.find(t => t.slug === 'flutter')!,
  ].filter(Boolean);

  return (
    <div id="home-page" className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-slate-800/80">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Subtle ambient lighting orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/15 to-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-emerald-400 mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Cycle Digital Product Agency</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Web, Mobile & AI Solutions</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Build Digital Products That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Drive Business Growth
              </span>
            </h1>

            {/* SUPPORTING TEXT */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
              {siteConfig.subheadline}
            </p>

            {/* HERO CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                type="button"
                id="hero-start-project-cta"
                onClick={() => {
                  trackEvent('hero_cta_start_project');
                  router.push('/contact#form');
                }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 text-slate-950 font-bold text-base rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                href="/portfolio"
                id="hero-explore-work-cta"
                onClick={() => trackEvent('hero_cta_explore_work')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 border border-slate-700/90 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-base rounded-2xl hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>100% Intellectual Property Transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Guaranteed Non-Disclosure (NDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Strict Agile Sprint Milestones</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services-section" className="py-24 bg-slate-950 relative border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Transform Your Ideas Into Digital Products
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                From high-conversion UI/UX design to high-throughput cloud backends and autonomous AI agents, we engineer software engineered to perform.
              </p>
            </div>

            <Link
              href="/services"
              id="home-services-view-all"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 self-start md:self-end group"
            >
              <span>View All 20 Specialized Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ALL 20 CLICKABLE SERVICE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                id={`home-service-card-${service.slug}`}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 pt-4 border-t border-slate-800/50">
                  <span>Explore Service</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FEATURED WORK / PORTFOLIO */}
      <section id="portfolio-section" className="py-24 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
                <span>Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Featured Work & Proven Results
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                Discover how we build scalable digital solutions that increase conversion rates, reduce operational costs, and delight users.
              </p>
            </div>

            <Link
              href="/portfolio"
              id="home-portfolio-view-all"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 self-start md:self-end group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                id={`home-project-${project.slug}`}
                className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group shadow-xl"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
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
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
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
                    <span>Website</span>
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

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-100 font-semibold text-sm rounded-2xl hover:bg-slate-800 transition-all"
            >
              <span>Explore All Case Studies & Filter by Industry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. TECHNOLOGIES SECTION */}
      <section id="technologies-section" className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
              <span>Stack Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Technology That Powers Digital Growth
            </h2>
            <p className="text-sm text-slate-400">
              We leverage the most modern, robust frameworks, cloud runtimes, and frontier AI models available.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {homeTechPreview.map((tech) => (
              <Link
                key={tech.slug}
                href={`/technologies/${tech.slug}`}
                id={`home-tech-${tech.slug}`}
                className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 text-center transition-all duration-200 group flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] text-slate-400 capitalize mt-0.5">
                  {tech.category}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/technologies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-400 hover:text-emerald-300 text-xs font-semibold hover:bg-emerald-950/60 transition-colors"
            >
              <span>Explore All 22 Technologies (Frontend, Backend, Mobile, Cloud, AI)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. AI & GENERATIVE CAPABILITIES SHOWCASE */}
      <section id="ai-showcase-section" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-semibold text-purple-400">
                <Bot className="w-3.5 h-3.5" />
                <span>Next-Generation AI Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Integrate Generative AI, RAG & Autonomous Agents into Your Core Product
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Transform unstructured enterprise documents into verifiable answers, automate multi-step operational logic, and give your users delightful natural language interfaces that boost product engagement.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center shrink-0 mt-0.5 text-purple-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Zero-Hallucination Enterprise RAG</h4>
                    <p className="text-xs text-slate-400">Hybrid vector & keyword search grounded with line-by-line document citations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center shrink-0 mt-0.5 text-purple-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Multimodal Vision & Audio Processing</h4>
                    <p className="text-xs text-slate-400">Real-time document OCR, speech synthesis, and live video analysis with Gemini & OpenAI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-purple-950 border border-purple-800/60 flex items-center justify-center shrink-0 mt-0.5 text-purple-400">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Private & Isolated VPC Deployment</h4>
                    <p className="text-xs text-slate-400">Open-weights Llama 3 models hosted entirely within your private cloud perimeter.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/services/ai-machine-learning"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-950/50 transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore AI Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/technologies/gemini"
                  className="px-6 py-3 bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <span>Google Gemini Integration</span>
                </Link>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-slate-950/80 border border-purple-900/40 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 font-mono text-slate-400">rag_inference_pipeline.ts</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">99.8% Factual Grounding</span>
                </div>

                <div className="py-4 space-y-3 font-mono text-xs text-slate-300">
                  <p className="text-purple-400">// Ingesting & embedding 1,400 commercial contracts</p>
                  <p><span className="text-cyan-400">const</span> results = <span className="text-cyan-400">await</span> hybridRetriever.search({'{'}</p>
                  <p className="pl-4">query: <span className="text-emerald-300">"What are the indemnity caps for supplier breach?"</span>,</p>
                  <p className="pl-4">reranker: <span className="text-yellow-300">'cross-encoder-enterprise'</span>,</p>
                  <p className="pl-4">citationAnchor: <span className="text-emerald-400">true</span></p>
                  <p>{'}'});</p>
                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-800/40 mt-4 text-[11px] text-slate-200">
                    <span className="font-bold text-purple-300">AI Response:</span> "Supplier liability is strictly capped at 2.5x total fees paid over the preceding 12 months, per Article 14.2 (Page 48)."
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <ProcessSection />

      {/* 7. STATS COUNTER */}
      <StatsCounter />

      {/* 8. INDUSTRIES SECTION */}
      <IndustriesSection />

      {/* 9. TESTIMONIALS CAROUSEL */}
      <TestimonialsCarousel />

      {/* 10. BLOG SECTION */}
      <section id="blog-section" className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
                <span>Engineering Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Latest Articles & Architectural Blueprints
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                Insights from our senior architects on Next.js App Router, RAG architectures, cloud FinOps, and startup engineering roadmaps.
              </p>
            </div>

            <Link
              href="/blog"
              id="home-blog-view-all"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 self-start md:self-end group"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((post) => (
              <div
                key={post.slug}
                id={`home-blog-card-${post.slug}`}
                className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-semibold text-emerald-400 border border-slate-700/60">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-slate-800/60">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section id="final-cta-section" className="py-24 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border-b border-slate-800 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-xs font-semibold text-emerald-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to accelerate your product release?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6">
            Let’s Build Software That Transforms Your Market
          </h2>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you need a full turnkey development team, an MVP launch in 6 weeks, or specialized AI and cloud architects, Vigyaapn delivers on time and within budget.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              id="final-cta-start-project"
              onClick={() => {
                trackEvent('final_cta_start_project');
                router.push('/contact#form');
              }}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-base rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              href="/hire-developers"
              id="final-cta-hire-devs"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 border border-slate-700 text-slate-200 font-semibold text-base rounded-2xl hover:bg-slate-800 transition-all"
            >
              <span>Hire Dedicated Developers</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. EMBEDDED CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Let's Talk About Your Project Scope"
            subtitle="Get in touch with our solutions architects for an obligation-free feasibility review, estimated budget range, and timeline breakdown."
            sourceContext="Home Page Contact Section"
          />
        </div>
      </section>

    </div>
  );
};
