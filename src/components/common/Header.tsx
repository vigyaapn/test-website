import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter, usePathname } from '../../context/RouterContext';
import { servicesData } from '../../data/servicesData';
import { technologiesData } from '../../data/technologiesData';
import { siteConfig } from '../../data/siteConfig';
import { useApp } from '../../context/AppContext';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Phone,
  MessageSquare,
  ShieldCheck,
  Code2,
  Cpu,
  Layers,
  Layout,
  Database,
  Smartphone,
  Cloud,
  FileCode,
  Zap,
  Bot
} from 'lucide-react';

export const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { trackEvent } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'technologies' | null>(null);
  
  // Mobile accordion states
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const [isMobileTechnologiesExpanded, setIsMobileTechnologiesExpanded] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Scroll listener for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleDropdown = (menu: 'services' | 'technologies') => {
    setActiveDropdown(prev => (prev === menu ? null : menu));
  };

  const handleStartProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent('header_cta_click');
    router.push('/contact#form');
  };

  // Group technologies for mega menu
  const frontendTech = technologiesData.filter(t => t.category === 'frontend');
  const backendTech = technologiesData.filter(t => t.category === 'backend');
  const mobileTech = technologiesData.filter(t => t.category === 'mobile');
  const cloudTech = technologiesData.filter(t => t.category === 'cloud-devops');
  const aiTech = technologiesData.filter(t => t.category === 'ai');

  return (
    <header
      ref={headerRef}
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/40 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            id="header-logo"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-slate-950 text-xl tracking-tighter">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {siteConfig.brandName}
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div ref={navContainerRef} className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            <Link
              href="/"
              id="nav-home"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/' ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              id="nav-about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/about' ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              About
            </Link>

            {/* SERVICES DROPDOWN TRIGGER */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                id="nav-services-trigger"
                onClick={() => toggleDropdown('services')}
                aria-expanded={activeDropdown === 'services'}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none ${
                  pathname.startsWith('/services') || activeDropdown === 'services'
                    ? 'text-emerald-400 bg-emerald-950/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {/* SERVICES MEGA MENU */}
              {activeDropdown === 'services' && (
                <div
                  id="services-mega-menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[880px] max-h-[78vh] overflow-y-auto bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/60 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-semibold text-white">Turnkey Development Services</h3>
                      <p className="text-xs text-slate-400">Enterprise engineering, AI development, and digital transformation</p>
                    </div>
                    <Link
                      href="/services"
                      id="mega-view-all-services"
                      onClick={() => setActiveDropdown(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        id={`mega-service-${service.slug}`}
                        onClick={() => setActiveDropdown(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/70 border border-transparent hover:border-slate-700/50 transition-all duration-150"
                      >
                        <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-200">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                            {service.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {service.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 bg-slate-950/40 -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Every project protected under standard NDA with guaranteed code ownership</span>
                    </div>
                    <Link
                      href="/contact#form"
                      id="mega-services-cta"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                    >
                      Discuss Custom Scope →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* TECHNOLOGIES DROPDOWN TRIGGER */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('technologies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                id="nav-technologies-trigger"
                onClick={() => toggleDropdown('technologies')}
                aria-expanded={activeDropdown === 'technologies'}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none ${
                  pathname.startsWith('/technologies') || activeDropdown === 'technologies'
                    ? 'text-emerald-400 bg-emerald-950/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Technologies</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'technologies' ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </button>

              {/* TECHNOLOGIES MEGA MENU */}
              {activeDropdown === 'technologies' && (
                <div
                  id="technologies-mega-menu"
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[920px] max-h-[82vh] overflow-y-auto bg-slate-900/98 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/60 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-semibold text-white">Full-Stack Technology Ecosystem</h3>
                      <p className="text-xs text-slate-400">Battle-tested frameworks, cloud infrastructure, and frontier AI models</p>
                    </div>
                    <Link
                      href="/technologies"
                      id="mega-view-all-tech"
                      onClick={() => setActiveDropdown(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <span>View All Technologies</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    
                    {/* FRONTEND */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5">
                        <FileCode className="w-3.5 h-3.5" />
                        <span>Frontend</span>
                      </div>
                      <div className="space-y-1">
                        {frontendTech.map((tech) => (
                          <Link
                            key={tech.slug}
                            href={`/technologies/${tech.slug}`}
                            id={`mega-tech-${tech.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
                          >
                            {tech.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* BACKEND */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400 mb-2.5">
                        <Database className="w-3.5 h-3.5" />
                        <span>Backend</span>
                      </div>
                      <div className="space-y-1">
                        {backendTech.map((tech) => (
                          <Link
                            key={tech.slug}
                            href={`/technologies/${tech.slug}`}
                            id={`mega-tech-${tech.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
                          >
                            {tech.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* MOBILE */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2.5">
                        <Smartphone className="w-3.5 h-3.5" />
                        <span>Mobile</span>
                      </div>
                      <div className="space-y-1">
                        {mobileTech.map((tech) => (
                          <Link
                            key={tech.slug}
                            href={`/technologies/${tech.slug}`}
                            id={`mega-tech-${tech.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
                          >
                            {tech.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* CLOUD / DEVOPS */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2.5">
                        <Cloud className="w-3.5 h-3.5" />
                        <span>Cloud / DevOps</span>
                      </div>
                      <div className="space-y-1">
                        {cloudTech.map((tech) => (
                          <Link
                            key={tech.slug}
                            href={`/technologies/${tech.slug}`}
                            id={`mega-tech-${tech.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
                          >
                            {tech.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* AI */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-400 mb-2.5">
                        <Bot className="w-3.5 h-3.5" />
                        <span>AI & LLMs</span>
                      </div>
                      <div className="space-y-1">
                        {aiTech.map((tech) => (
                          <Link
                            key={tech.slug}
                            href={`/technologies/${tech.slug}`}
                            id={`mega-tech-${tech.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
                          >
                            {tech.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              id="nav-portfolio"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith('/portfolio') ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/hire-developers"
              id="nav-hire-developers"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/hire-developers' ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Hire Developers
            </Link>

            <Link
              href="/blog"
              id="nav-blog"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname.startsWith('/blog') ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              id="nav-contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === '/contact' ? 'text-emerald-400 bg-emerald-950/30' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Contact
            </Link>

          </div>

          {/* RIGHT ACTIONS & PRIMARY CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              id="header-phone-cta"
              onClick={() => trackEvent('header_phone_click')}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <button
              onClick={handleStartProjectClick}
              id="header-start-project-btn"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={handleStartProjectClick}
              id="mobile-header-quick-start"
              className="text-xs font-semibold px-3 py-1.5 bg-emerald-400 text-slate-950 rounded-lg hover:bg-emerald-300 transition-colors"
            >
              Start
            </button>

            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Drawer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER ACCORDION NAVIGATION */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden fixed inset-0 top-[65px] bg-slate-950/98 backdrop-blur-2xl z-40 overflow-y-auto px-5 py-6 border-t border-slate-800 animate-in fade-in slide-in-from-right duration-200"
        >
          <nav className="flex flex-col space-y-2 pb-24">
            
            <Link
              href="/"
              id="mobile-nav-home"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname === '/' ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              id="mobile-nav-about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname === '/about' ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              About
            </Link>

            {/* SERVICES ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/40">
              <button
                type="button"
                id="mobile-accordion-services"
                onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                className="w-full flex items-center justify-between p-3 text-base font-medium text-slate-200 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <span>Services</span>
                  <span className="text-[11px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-800/50">
                    20
                  </span>
                </span>
                <span className="text-xl font-light text-slate-400">
                  {isMobileServicesExpanded ? '−' : '+'}
                </span>
              </button>

              {isMobileServicesExpanded && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-800/60 bg-slate-950/60 max-h-72 overflow-y-auto">
                  <Link
                    href="/services"
                    id="mobile-link-all-services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block p-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    → View All Services Overview
                  </Link>
                  {servicesData.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      id={`mobile-service-${s.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2 text-xs text-slate-300 hover:text-white rounded-lg hover:bg-slate-900"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* TECHNOLOGIES ACCORDION */}
            <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/40">
              <button
                type="button"
                id="mobile-accordion-technologies"
                onClick={() => setIsMobileTechnologiesExpanded(!isMobileTechnologiesExpanded)}
                className="w-full flex items-center justify-between p-3 text-base font-medium text-slate-200 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <span>Technologies</span>
                  <span className="text-[11px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-800/50">
                    22
                  </span>
                </span>
                <span className="text-xl font-light text-slate-400">
                  {isMobileTechnologiesExpanded ? '−' : '+'}
                </span>
              </button>

              {isMobileTechnologiesExpanded && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-800/60 bg-slate-950/60 max-h-72 overflow-y-auto">
                  <Link
                    href="/technologies"
                    id="mobile-link-all-technologies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block p-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    → View All Technologies Overview
                  </Link>
                  {technologiesData.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/technologies/${t.slug}`}
                      id={`mobile-tech-${t.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2 text-xs text-slate-300 hover:text-white rounded-lg hover:bg-slate-900"
                    >
                      {t.name} ({t.category})
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              id="mobile-nav-portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname.startsWith('/portfolio') ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/hire-developers"
              id="mobile-nav-hire-developers"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname === '/hire-developers' ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Hire Developers
            </Link>

            <Link
              href="/careers"
              id="mobile-nav-careers"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname.startsWith('/careers') ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Careers
            </Link>

            <Link
              href="/blog"
              id="mobile-nav-blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname.startsWith('/blog') ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              id="mobile-nav-contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-3 text-base font-medium rounded-xl ${
                pathname === '/contact' ? 'text-emerald-400 bg-emerald-950/40' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                type="button"
                id="mobile-drawer-start-btn"
                onClick={handleStartProjectClick}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Us</span>
                </a>
                <span>•</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-teal-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};
