import React from 'react';
import { Link } from '../../context/RouterContext';
import { ArrowLeft, Home, Code2, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div id="not-found-page" className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center pt-28 pb-20 px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-3xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mx-auto mb-6">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase mb-2">
          HTTP 404 Error
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Route Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The requested page or endpoint could not be found. Please check the address or navigate back to our main disciplines.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-emerald-400 text-slate-950 font-bold text-xs hover:bg-emerald-300 transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
