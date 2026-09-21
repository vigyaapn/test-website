import React, { useEffect, useState, useRef } from 'react';
import { siteConfig } from '../../data/siteConfig';

export const StatsCounter: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counts
          const targets = siteConfig.stats.map(s => s.value);
          const duration = 1200;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map(target => Math.round(target * easeOutProgress)));

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(targets);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" ref={containerRef} className="py-16 bg-slate-900/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 group text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 group-hover:from-emerald-400 group-hover:to-teal-300 transition-all tracking-tight mb-2">
                {counts[idx]}
                <span className="text-emerald-400 ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
