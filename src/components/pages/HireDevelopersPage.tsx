import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProcessSection } from '../common/ProcessSection';
import { StatsCounter } from '../common/StatsCounter';
import { TestimonialsCarousel } from '../common/TestimonialsCarousel';
import { FaqAccordion } from '../common/FaqAccordion';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  Users,
  Code2,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Globe,
  Award,
  Smartphone,
  Database,
  Cloud,
  Bot,
  Palette,
  Terminal,
  Layers
} from 'lucide-react';

export const HireDevelopersPage: React.FC = () => {
  const router = useRouter();

  const developerRoles = [
    {
      slug: 'full-stack-developer',
      title: 'Full Stack Developers',
      experience: '4 - 8+ Years Experience',
      skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      desc: 'End-to-end software engineers capable of building interactive frontends and resilient backend APIs.'
    },
    {
      slug: 'ai-engineer',
      title: 'AI & GenAI Engineers',
      experience: '3 - 7+ Years Experience',
      skills: ['OpenAI', 'Gemini', 'Python', 'LangChain', 'Vector DBs', 'RAG Pipelines'],
      desc: 'Specialists in retrieval-augmented generation, prompt architectures, agent workflows, and model fine-tuning.'
    },
    {
      slug: 'mobile-app-developer',
      title: 'Mobile App Developers',
      experience: '4 - 9+ Years Experience',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'App Store Deployments'],
      desc: 'Engineers who deliver 60fps native mobile experiences for iOS and Android platforms.'
    },
    {
      slug: 'frontend-developer',
      title: 'Frontend Developers',
      experience: '3 - 8+ Years Experience',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Vue', 'TypeScript', 'Web Performance'],
      desc: 'UI specialists who build pixel-perfect, accessible, and ultra-fast web interfaces.'
    },
    {
      slug: 'backend-developer',
      title: 'Backend Engineers',
      experience: '5 - 10+ Years Experience',
      skills: ['Node.js', 'Python', 'Go', 'Microservices', 'GraphQL', 'Redis', 'Kafka'],
      desc: 'Architects of high-throughput distributed databases, message queues, and secure API gateways.'
    },
    {
      slug: 'ui-ux-designer',
      title: 'Product UI/UX Designers',
      experience: '4 - 8+ Years Experience',
      skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Design Tokens'],
      desc: 'Translating complex business flows into elegant, conversion-focused user interfaces.'
    },
    {
      slug: 'devops-engineer',
      title: 'Cloud & DevOps Engineers',
      experience: '5 - 11+ Years Experience',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'FinOps'],
      desc: 'Infrastructure reliability engineers ensuring 99.99% uptime and streamlined container pipelines.'
    },
    {
      slug: 'qa-engineer',
      title: 'QA Automation Engineers',
      experience: '3 - 7+ Years Experience',
      skills: ['Playwright', 'Cypress', 'Jest', 'API Testing', 'Load Testing'],
      desc: 'Ensuring zero-regression releases through comprehensive end-to-end automated testing suites.'
    }
  ];

  const hiringModels = [
    {
      title: 'Dedicated Developer',
      subtitle: 'Full-time individual contributor',
      features: ['160 billable hours per month', 'Direct daily Slack & standups', 'Dedicated to your codebase only', 'Timezone aligned'],
      ideal: 'Best for expanding your existing engineering department.'
    },
    {
      title: 'Dedicated Squad / Team',
      subtitle: 'Turnkey autonomous team',
      features: ['Lead Architect + Developers + QA + PM', 'Sprint backlog management included', 'Fast ramp-up in 7 days', 'Guaranteed velocity metrics'],
      ideal: 'Best for building an entire product from scratch.'
    },
    {
      title: 'Time & Material',
      subtitle: 'Flexible on-demand hours',
      features: ['Bi-weekly hourly billing', 'Flex hours up or down', 'Specialized domain advice', 'Sprint-by-sprint contract'],
      ideal: 'Best for dynamic scopes, code audits, or migrations.'
    }
  ];

  const hireFaqs = [
    {
      question: 'How fast can a dedicated developer join our team?',
      answer: 'Our talent pool is pre-vetted and on-bench. We can match candidates within 24 hours, conduct technical interviews on day 2, and onboard to your Slack and GitHub within 48 to 72 hours.'
    },
    {
      question: 'Do we have direct communication with the hired developers?',
      answer: 'Yes, 100%. Your hired engineers join your Slack, Microsoft Teams, Jira, and GitHub. You assign tasks directly and run your daily standups just like in-house employees.'
    },
    {
      question: 'What if a developer is not the right fit for our project?',
      answer: 'We offer a 2-week risk-free trial. If you are not satisfied with performance or cultural alignment, we replace the developer immediately with zero exit penalties.'
    },
    {
      question: 'Who owns the intellectual property and code produced?',
      answer: 'You own 100% of the intellectual property, copyright, and code produced from day one. All engineers sign comprehensive Non-Disclosure and IP Assignment agreements.'
    }
  ];

  const handleHireClick = (roleSlug: string) => {
    router.push(`/contact?role=${roleSlug}#form`);
  };

  return (
    <div id="hire-developers-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Hire Developers' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>Top 3% Pre-Vetted Engineering Talent</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Hire Dedicated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Software Developers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Scale your engineering velocity with dedicated full-time developers. Zero recruitment overhead, 48-hour onboarding, and strict timezone overlap.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>48-Hour Onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>100% Timezone Alignment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Risk-Free 2-Week Trial</span>
            </div>
          </div>

        </div>
      </section>

      {/* DEVELOPER ROLES GRID */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Available Engineering Roles
            </h2>
            <p className="text-sm text-slate-400">
              Select a specialized engineering role to view profile availability and request resumes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developerRoles.map((role) => (
              <div
                key={role.slug}
                id={`role-card-${role.slug}`}
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                    <Code2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {role.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-emerald-400/90 mb-3">
                    {role.experience}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {role.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {role.skills.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleHireClick(role.slug)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-emerald-400 text-slate-200 hover:text-slate-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Hire {role.title.replace('Developers', '').replace('Engineers', '')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HIRING ENGAGEMENT MODELS */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Flexible Engagement Models
            </h2>
            <p className="text-sm text-slate-400">
              Structure your staff augmentation according to your business needs and release deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hiringModels.map((m, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{m.title}</h3>
                  <div className="text-xs text-emerald-400 font-medium mb-6">{m.subtitle}</div>
                  
                  <ul className="space-y-3 text-xs text-slate-300 mb-8">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-[11px] text-slate-400 mb-4">{m.ideal}</p>
                  <a
                    href="#form"
                    className="block text-center py-2.5 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 rounded-xl text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    Select Model
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection
        title="Our 5-Step Developer Vetting & Deployment Process"
        subtitle="How we ensure only world-class engineers enter your sprint workflow."
      />

      {/* STATS */}
      <StatsCounter />

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* FAQ */}
      <FaqAccordion
        items={hireFaqs}
        title="Staff Augmentation & Dedicated Hiring FAQ"
        subtitle="Everything you need to know about rates, onboarding, contracts, and replacement policies."
      />

      {/* CONTACT */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Request Resumes & Schedule Technical Interviews"
            subtitle="Let us know what engineering skillsets you need and our talent director will share candidate profiles within 24 hours."
            sourceContext="Hire Developers Page"
          />
        </div>
      </section>

    </div>
  );
};
