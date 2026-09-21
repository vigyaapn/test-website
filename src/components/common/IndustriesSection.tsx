import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Link } from '../../context/RouterContext';
import {
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Coins,
  Share2,
  CalendarDays,
  Clock,
  Compass,
  ShoppingBag,
  Building2,
  Truck,
  Layers,
  ArrowRight
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (slug: string) => {
    switch (slug) {
      case 'healthcare':
        return <HeartPulse className="w-5 h-5 text-emerald-400" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-teal-400" />;
      case 'restaurant':
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'finance':
        return <Coins className="w-5 h-5 text-emerald-300" />;
      case 'social-media':
        return <Share2 className="w-5 h-5 text-pink-400" />;
      case 'events':
        return <CalendarDays className="w-5 h-5 text-purple-400" />;
      case 'on-demand':
        return <Clock className="w-5 h-5 text-orange-400" />;
      case 'travel':
        return <Compass className="w-5 h-5 text-sky-400" />;
      case 'ecommerce':
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'real-estate':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'logistics':
        return <Truck className="w-5 h-5 text-cyan-400" />;
      case 'saas':
        return <Layers className="w-5 h-5 text-teal-300" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="industries-section" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
            <span>Specialized Domains</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">
            Domain Expertise Across High-Growth Industries
          </h2>
          <p className="text-sm text-slate-400">
            Tailored architectures that solve compliance regulations, workflow friction, and customer drop-offs.
          </p>
        </div>

        {/* 12 INDUSTRY CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/contact?industry=${ind.slug}`}
              id={`industry-card-${ind.slug}`}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                  {getIndustryIcon(ind.slug)}
                </div>
                <h3 className="font-bold text-base text-slate-100 group-hover:text-emerald-300 transition-colors mb-1.5">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ind.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 pt-3 border-t border-slate-800/50">
                <span>Build for {ind.name}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
