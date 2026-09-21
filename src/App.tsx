import React, { useEffect } from 'react';
import { RouterProvider, usePathname } from './context/RouterContext';
import { AppProvider } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/common/FloatingActions';
import { ExitIntentModal } from './components/common/ExitIntentModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesIndexPage } from './components/pages/ServicesIndexPage';
import { ServiceDetailPage } from './components/pages/ServiceDetailPage';
import { TechnologiesIndexPage } from './components/pages/TechnologiesIndexPage';
import { TechnologyDetailPage } from './components/pages/TechnologyDetailPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { PortfolioDetailPage } from './components/pages/PortfolioDetailPage';
import { HireDevelopersPage } from './components/pages/HireDevelopersPage';
import { BlogIndexPage } from './components/pages/BlogIndexPage';
import { BlogDetailPage } from './components/pages/BlogDetailPage';
import { CareersPage } from './components/pages/CareersPage';
import { CareerDetailPage } from './components/pages/CareerDetailPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPage } from './components/pages/AdminPage';
import { TermsPrivacyPage } from './components/pages/TermsPrivacyPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

const AppContent: React.FC = () => {
  const pathname = usePathname();

  // Route matching logic
  const renderRoute = () => {
    // Normalization
    const path = pathname.replace(/\/$/, '') || '/';

    // 1. Root / Home
    if (path === '/') return <HomePage />;

    // 2. About
    if (path === '/about') return <AboutPage />;

    // 3. Services Index & Details
    if (path === '/services') return <ServicesIndexPage />;
    if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      return <ServiceDetailPage slug={slug} />;
    }

    // 4. Technologies Index & Details
    if (path === '/technologies') return <TechnologiesIndexPage />;
    if (path.startsWith('/technologies/')) {
      const slug = path.replace('/technologies/', '');
      return <TechnologyDetailPage slug={slug} />;
    }

    // 5. Portfolio Index & Details
    if (path === '/portfolio') return <PortfolioPage />;
    if (path.startsWith('/portfolio/')) {
      const slug = path.replace('/portfolio/', '');
      return <PortfolioDetailPage slug={slug} />;
    }

    // 6. Hire Developers
    if (path === '/hire-developers') return <HireDevelopersPage />;

    // 7. Blog Index & Details
    if (path === '/blog') return <BlogIndexPage />;
    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      return <BlogDetailPage slug={slug} />;
    }

    // 8. Careers Index & Details
    if (path === '/careers') return <CareersPage />;
    if (path.startsWith('/careers/')) {
      const slug = path.replace('/careers/', '');
      return <CareerDetailPage slug={slug} />;
    }

    // 9. Contact
    if (path === '/contact') return <ContactPage />;

    // 10. Admin Leads Dashboard
    if (path === '/admin') return <AdminPage />;

    // 11. Legal
    if (path === '/terms') return <TermsPrivacyPage type="terms" />;
    if (path === '/privacy') return <TermsPrivacyPage type="privacy" />;
    if (path === '/security') return <TermsPrivacyPage type="security" />;

    // Fallback 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-400 selection:text-slate-950">
      <Header />
      <main className="flex-grow">
        {renderRoute()}
      </main>
      <Footer />
      <FloatingActions />
      <ExitIntentModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </RouterProvider>
  );
}
