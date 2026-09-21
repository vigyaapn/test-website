import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { siteConfig } from '../../data/siteConfig';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { IndustriesSection } from '../common/IndustriesSection';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  Users,
  Code2,
  CheckCircle,
  Clock,
  Zap,
  ArrowRight
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const router = useRouter();

  const teamMembers = [
    {
      name: 'Devansh Sharma',
      role: 'Founder & Chief Technology Officer',
      bio: 'Former senior cloud architect with 12+ years experience building fault-tolerant microservices, high-load payment gateways, and scalable SaaS infrastructure.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Ananya Verma',
      role: 'Head of Product Design (UI/UX)',
      bio: 'Design systems lead passionate about cognitive ease, accessible typography, conversion heuristics, and delightful digital user interfaces.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'Principal AI & Machine Learning Architect',
      bio: 'Specialist in retrieval-augmented generation (RAG), vector databases, autonomous tool-use agents, and fine-tuned open source LLMs.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Priya Mukherjee',
      role: 'Director of Agile Engineering Delivery',
      bio: 'Ensures predictability, clear sprint communication, transparent burn-down charts, and defect-free production deployments across every client project.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div id="about-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-24 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <span>Our Heritage & Purpose</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Empowering Businesses Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Digital Innovation
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {siteConfig.about.story}
          </p>
        </div>
      </section>

      {/* STATS */}
      <StatsCounter />

      {/* MISSION, VISION, VALUES */}
      <section className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* MISSION */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {siteConfig.about.mission}
              </p>
            </div>

            {/* VISION */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/40 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-teal-950/80 border border-teal-800/50 flex items-center justify-center text-teal-400 mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {siteConfig.about.vision}
              </p>
            </div>

            {/* CORE VALUES */}
            <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {siteConfig.about.values.map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WHY VIGYAAPN SECTION */}
      <section className="py-24 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Engineering Reliability Built Into Every Phase
            </h2>
            <p className="text-sm text-slate-400">
              Unlike generic outsource shops, Vigyaapn acts as an embedded technical co-founder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">100% IP & Code Ownership</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All source code, design assets, and deployment keys are transferred to your company repository on each milestone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <Clock className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Bi-Weekly Production Sprints</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Working software delivered every 14 days with live clickable staging links and transparent velocity logs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <Zap className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Zero-Bloat Modern Architecture</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Built with Next.js, Node.js, and serverless cloud systems that minimize hosting bills and scale easily.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* LEADERSHIP / TEAM */}
      <section className="py-24 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Meet the Architects Behind Vigyaapn
            </h2>
            <p className="text-sm text-slate-400">
              Veteran engineers, designers, and delivery leads committed to your technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl bg-slate-900/50 border border-slate-800 overflow-hidden group hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400 mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* INDUSTRIES */}
      <IndustriesSection />

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* CONTACT */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Work With the Vigyaapn Team"
            subtitle="Let’s discuss your roadmap, timeline, and tech stack options during an introductory discovery call."
            sourceContext="About Page"
          />
        </div>
      </section>

    </div>
  );
};
