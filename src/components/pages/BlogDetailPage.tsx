import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { blogData } from '../../data/blogData';
import { Breadcrumbs } from '../common/Breadcrumbs';
import { ProjectInquiryForm } from '../common/ProjectInquiryForm';
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Share2,
  CheckCircle,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface BlogDetailPageProps {
  slug: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slug }) => {
  const router = useRouter();
  const { showToast } = useApp();

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center pt-28 pb-20 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">
            The requested engineering publication could not be located.
          </p>
          <Link
            href="/blog"
            className="px-6 py-2.5 bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm"
          >
            Back to Engineering Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData.filter((p) => p.slug !== post.slug).slice(0, 2);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article URL copied to clipboard!', 'success');
    }
  };

  return (
    <div id={`blog-detail-${post.slug}`} className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20">
      
      {/* 1. BREADCRUMBS */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title }
          ]}
        />
      </div>

      {/* 2. ARTICLE HEADER */}
      <section className="py-12 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/50 text-xs font-semibold text-emerald-400 mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-800/80">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40"
              />
              <div>
                <div className="font-bold text-white text-sm">{post.author.name}</div>
                <div className="text-xs text-slate-400">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>{post.readTime}</span>
              </span>
              <span>•</span>
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                title="Copy share link"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. COVER IMAGE */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-800 h-[320px] sm:h-[440px] shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. MAIN ARTICLE BODY & TABLE OF CONTENTS */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TABLE OF CONTENTS */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 mb-12">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
              Table of Contents
            </h2>
            <ul className="space-y-2 text-xs">
              {post.content.sections.map((sec, idx) => (
                <li key={sec.id || idx}>
                  <a
                    href={`#${sec.id || `section-${idx}`}`}
                    className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-emerald-500 font-mono">0{idx + 1}.</span>
                    <span>{sec.heading}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INTRO CALLOUT */}
          <div className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic border-l-2 border-emerald-400 pl-6 mb-12">
            {post.content.intro}
          </div>

          {/* SECTIONS */}
          <div className="space-y-12">
            {post.content.sections.map((sec, idx) => (
              <div key={sec.id || idx} id={sec.id || `section-${idx}`} className="scroll-mt-32">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-baseline gap-2">
                  <span className="text-emerald-400 font-mono text-lg">0{idx + 1}.</span>
                  <span>{sec.heading}</span>
                </h3>

                <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.keyTakeaway && (
                  <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-200">
                    <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-400">Architect's Takeaway: </span>
                      <span>{sec.keyTakeaway}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {post.content.conclusion && (
              <div className="pt-8 border-t border-slate-800">
                <h4 className="text-xl font-bold text-white mb-3">Conclusion</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {post.content.conclusion}
                </p>
              </div>
            )}
          </div>

          {/* TAGS */}
          <div className="mt-14 pt-8 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold mr-2">Tags:</span>
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300"
              >
                #{t}
              </span>
            ))}
          </div>

          {/* AUTHOR BIO CARD */}
          <div className="mt-12 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500/40 shrink-0"
            />
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-1">
                About the Author
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{post.author.name}</h4>
              <p className="text-xs text-slate-400 mb-3">{post.author.role}</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contributing editor at Vigyaapn Engineering. Advises enterprise clients and founders on scalable cloud architectures, developer velocity, and zero-downtime migrations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. RELATED ARTICLES */}
      <section className="py-16 bg-slate-900/30 border-y border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-white">Recommended Reading</h3>
            <Link href="/blog" className="text-xs font-semibold text-emerald-400 hover:text-emerald-300">
              View All Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[11px] text-emerald-400 font-semibold mb-2">{rel.category}</div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EMBEDDED PROJECT INQUIRY FORM */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectInquiryForm
            title="Have Questions About Modern Engineering Standards?"
            subtitle="Connect with our technical architects to benchmark your project's technology stack and architecture."
            sourceContext={`Blog Post: ${post.title}`}
          />
        </div>
      </section>

    </div>
  );
};
