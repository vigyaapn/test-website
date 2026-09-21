import React from 'react';
import { Link } from '../../context/RouterContext';
import { careersData } from '../../data/careersData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Laptop,
  GraduationCap,
  HeartPulse,
  Palmtree,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const perks = [
    {
      icon: <Laptop className="w-6 h-6 text-emerald-400" />,
      title: 'Remote-First Flexibility',
      desc: 'Work from anywhere in the world. We focus on asynchronous communication, clear sprint commitments, and high autonomy.'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-teal-400" />,
      title: '$2,500 Learning Stipend',
      desc: 'Annual budget for courses, books, developer conferences, and AWS/GCP technical certifications.'
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-cyan-400" />,
      title: 'Comprehensive Health & Wellness',
      desc: 'Full medical, dental, and vision coverage for you and your dependents, plus mental health support.'
    },
    {
      icon: <Palmtree className="w-6 h-6 text-emerald-300" />,
      title: 'Flexible Paid Time Off',
      desc: 'Unlimited paid vacation policy, observed global holidays, and generous parental leave.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Top-Tier Hardware',
      desc: 'Your choice of an Apple MacBook Pro M3 Max or high-spec Linux workstation, 4K monitors, and ergonomic setup budget.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-300" />,
      title: 'Competitive Compensation & Equity',
      desc: 'Top 10% market salaries with performance bonuses and equity participation options.'
    }
  ];

  return (
    <div id="careers-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Careers' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Global Team</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Build Software That Matters Alongside{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              World-Class Engineers
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            At Vigyaapn, we celebrate deep engineering craftsmanship, architectural rigor, and genuine autonomy. Explore our open positions below.
          </p>

          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <span>View {careersData.length} Open Positions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* PERKS & BENEFITS */}
      <section className="py-20 bg-slate-900/30 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              Why Engineers Love Building at Vigyaapn
            </h2>
            <p className="text-sm text-slate-400">
              We design our workplace to minimize meetings and maximize deep work time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors"
              >
                <div className="mb-5">{p.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-2">
                Current Openings ({careersData.length})
              </h2>
              <p className="text-sm text-slate-400">
                All roles are open for remote candidates globally.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {careersData.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                id={`job-row-${job.slug}`}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{job.location}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{job.experience}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-center text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
                  <span>View Role Details & Apply</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
