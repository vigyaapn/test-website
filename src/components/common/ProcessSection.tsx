import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Search, Compass, Palette, Code, Rocket } from 'lucide-react';

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title = 'Our Engineering & Delivery Process',
  subtitle = 'A structured 5-step methodology that guarantees predictable delivery, transparency, and architectural rigor.'
}) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Compass className="w-5 h-5 text-teal-400" />;
      case 2:
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <Code className="w-5 h-5 text-sky-400" />;
      case 4:
        return <Rocket className="w-5 h-5 text-emerald-300" />;
      default:
        return <Code className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="process-section" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-4">
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={step.step}
              id={`process-card-${step.step}`}
              className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-600 group-hover:text-emerald-400/80 transition-colors tracking-tight">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    {getStepIcon(idx)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-400/80 mb-3">
                  {step.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Phase {idx + 1} of 5</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60"></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
