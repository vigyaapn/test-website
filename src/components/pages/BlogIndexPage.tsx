import React, { useState, useMemo } from 'react';
import { Link } from '../../context/RouterContext';
import { blogData } from '../../data/blogData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Articles (6)' },
    { id: 'Architecture', label: 'Architecture' },
    { id: 'AI & Machine Learning', label: 'AI & ML' },
    { id: 'Frontend Engineering', label: 'Frontend' },
    { id: 'Mobile Development', label: 'Mobile' },
    { id: 'Cloud & DevOps', label: 'Cloud & DevOps' },
  ];

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (selectedCategory === 'all') return true;
      return post.category === selectedCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div id="blog-index-page" className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
      </div>

      {/* HERO SECTION */}
      <section className="py-16 md:py-20 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Vigyaapn Engineering & Tech Insights</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
            Architectural Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Modern Best Practices
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Deep-dive technical articles written by our engineering directors on Next.js, LLM fine-tuning, cloud FinOps, and startup product scaling.
          </p>

          {/* SEARCH BAR */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, topic, or tag..."
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

      {/* BLOG POSTS GRID */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-base mb-4">No articles found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 bg-slate-800 text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-700"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  id={`blog-card-${post.slug}`}
                  className="rounded-3xl bg-slate-900/40 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group shadow-xl"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
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

                      <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-3 pt-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-full object-cover border border-emerald-500/40"
                        />
                        <div className="text-xs">
                          <div className="font-semibold text-slate-200">{post.author.name}</div>
                          <div className="text-slate-500 text-[10px]">{post.author.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-slate-800/80">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Read Full Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
