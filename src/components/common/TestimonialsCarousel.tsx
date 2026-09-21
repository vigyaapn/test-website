import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const current = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials-section"
      className="py-20 bg-slate-900/40 border-y border-slate-800/80 text-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-3">
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
            Trusted by Ambitious Founders & Enterprise Leaders
          </h2>
          <p className="text-sm text-slate-400">
            Real outcomes delivered for high-growth startups and global engineering departments.
          </p>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative bg-slate-950/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/40">
          <Quote className="w-12 h-12 text-emerald-500/20 absolute top-8 right-8" />
          
          <div className="flex items-center gap-1 text-emerald-400 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
            ))}
          </div>

          <blockquote className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-8">
            "{current.content}"
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="w-13 h-13 rounded-full object-cover border-2 border-emerald-500/40"
              />
              <div>
                <div className="font-bold text-white text-base">{current.name}</div>
                <div className="text-xs text-slate-400">{current.role}, <span className="text-slate-300 font-semibold">{current.company}</span></div>
                <div className="text-[11px] text-emerald-400/90 font-medium mt-0.5">{current.projectType}</div>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={prevSlide}
                id="testimonial-prev-btn"
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                id="testimonial-next-btn"
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-emerald-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
