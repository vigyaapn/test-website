import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Lead, JobApplication } from '../types';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface AppContextType {
  leads: Lead[];
  applications: JobApplication[];
  addLead: (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  deleteLead: (id: string) => void;
  addApplication: (appData: Omit<JobApplication, 'id' | 'createdAt'>) => Promise<boolean>;
  deleteApplication: (id: string) => void;
  isExitModalOpen: boolean;
  openExitModal: () => void;
  closeExitModal: () => void;
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
  trackEvent: (eventName: string, metadata?: Record<string, unknown>) => void;
  clearAllData: () => void;
  analyticsStats: {
    ctaClicks: number;
    contactSubmissions: number;
    whatsappClicks: number;
    phoneClicks: number;
    emailClicks: number;
  };
}

const defaultLeads: Lead[] = [
  {
    id: 'lead-1',
    firstName: 'Sarah',
    lastName: 'Jenkins',
    email: 'sarah.j@vertexlabs.io',
    phone: '+1 415-555-0199',
    company: 'Vertex Labs',
    service: 'SaaS Product Development',
    budget: '$50,000 - $100,000',
    message: 'Looking to build an AI-powered B2B SaaS workflow automation engine. Need an experienced team for an MVP launch in 8 weeks.',
    attachmentName: 'Vertex_Spec_v2.pdf',
    attachmentSize: '2.4 MB',
    ndaRequested: true,
    source: 'Website Contact Page',
    page: '/contact',
    status: 'Qualified',
    createdAt: '2024-09-18T10:30:00.000Z'
  },
  {
    id: 'lead-2',
    firstName: 'Michael',
    lastName: 'Chang',
    email: 'mchang@novarefresh.com',
    phone: '+1 212-555-8821',
    company: 'Nova Refresh',
    service: 'UI/UX Web Design',
    budget: '$25,000 - $50,000',
    message: 'Need a complete design system overhaul and high-conversion e-commerce redesign.',
    ndaRequested: false,
    source: 'Exit Intent Popup',
    page: '/',
    status: 'Proposal',
    createdAt: '2024-09-17T16:15:00.000Z'
  },
  {
    id: 'lead-3',
    firstName: 'Rajesh',
    lastName: 'Patel',
    email: 'rpatel@medistream.health',
    phone: '+1 650-555-3344',
    company: 'MediStream Health',
    service: 'Mobile App Development',
    budget: '$100,000+',
    message: 'HIPAA-compliant React Native patient monitoring application with Bluetooth peripheral syncing.',
    attachmentName: 'MediStream_Architecture.pdf',
    attachmentSize: '4.1 MB',
    ndaRequested: true,
    source: 'Services Mega Menu',
    page: '/services/mobile-app-development',
    status: 'New',
    createdAt: '2024-09-19T02:45:00.000Z'
  }
];

const defaultApplications: JobApplication[] = [
  {
    id: 'app-1',
    jobSlug: 'senior-full-stack-engineer-nextjs-nodejs',
    jobTitle: 'Senior Full Stack Engineer (Next.js & Node.js)',
    fullName: 'Alexander Wright',
    email: 'alex.wright@devmail.com',
    phone: '+1 312-555-0143',
    resumeName: 'Alex_Wright_Resume_2024.pdf',
    linkedIn: 'https://linkedin.com/in/alexwrightdev',
    portfolio: 'https://github.com/alexwright',
    coverLetter: 'I have 6 years of experience building Next.js apps with Server Components and high-throughput Node backends.',
    createdAt: '2024-09-17T14:20:00.000Z'
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [leads, setLeads] = useState<Lead[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vigyaapn_leads');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return defaultLeads;
  });

  const [applications, setApplications] = useState<JobApplication[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('vigyaapn_applications');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          // fallback
        }
      }
    }
    return defaultApplications;
  });

  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  const [analyticsStats, setAnalyticsStats] = useState({
    ctaClicks: 142,
    contactSubmissions: 38,
    whatsappClicks: 64,
    phoneClicks: 29,
    emailClicks: 51,
  });

  // Sync to local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vigyaapn_leads', JSON.stringify(leads));
    }
  }, [leads]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vigyaapn_applications', JSON.stringify(applications));
    }
  }, [applications]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const trackEvent = (eventName: string, metadata?: Record<string, unknown>) => {
    console.log(`[Vigyaapn Analytics] ${eventName}`, metadata || {});
    setAnalyticsStats((prev) => {
      if (eventName.includes('cta_click')) return { ...prev, ctaClicks: prev.ctaClicks + 1 };
      if (eventName.includes('contact_submit')) return { ...prev, contactSubmissions: prev.contactSubmissions + 1 };
      if (eventName.includes('whatsapp_click')) return { ...prev, whatsappClicks: prev.whatsappClicks + 1 };
      if (eventName.includes('phone_click')) return { ...prev, phoneClicks: prev.phoneClicks + 1 };
      if (eventName.includes('email_click')) return { ...prev, emailClicks: prev.emailClicks + 1 };
      return prev;
    });
  };

  const addLead = async (leadData: Omit<Lead, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    // Simulate real backend processing latency and validation
    await new Promise((resolve) => setTimeout(resolve, 800));

    const newLead: Lead = {
      ...leadData,
      id: 'lead-' + Date.now(),
      status: 'New',
      createdAt: new Date().toISOString(),
    };

    setLeads((prev) => [newLead, ...prev]);
    trackEvent('contact_submit', { email: leadData.email, service: leadData.service });
    showToast('Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.', 'success');
    return true;
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
    showToast(`Lead status updated to ${status}`, 'info');
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    showToast('Lead removed from database', 'info');
  };

  const addApplication = async (appData: Omit<JobApplication, 'id' | 'createdAt'>): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 750));

    const newApp: JobApplication = {
      ...appData,
      id: 'app-' + Date.now(),
      createdAt: new Date().toISOString(),
    };

    setApplications((prev) => [newApp, ...prev]);
    trackEvent('job_application_submit', { jobTitle: appData.jobTitle, email: appData.email });
    showToast('Application submitted successfully! Our recruiting team will review your profile.', 'success');
    return true;
  };

  const deleteApplication = (id: string) => {
    setApplications((prev) => prev.filter((a) => a.id !== id));
    showToast('Application removed', 'info');
  };

  const clearAllData = () => {
    setLeads(defaultLeads);
    setApplications(defaultApplications);
    localStorage.removeItem('vigyaapn_leads');
    localStorage.removeItem('vigyaapn_applications');
    showToast('Demo data restored to defaults', 'info');
  };

  // Exit intent listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if shown in this session
    const hasShown = sessionStorage.getItem('vigyaapn_exit_intent_shown');
    if (hasShown) return;

    // Desktop mouseleave
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsExitModalOpen(true);
        sessionStorage.setItem('vigyaapn_exit_intent_shown', 'true');
      }
    };

    // Mobile delayed timer (25 seconds)
    const mobileTimer = setTimeout(() => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && !sessionStorage.getItem('vigyaapn_exit_intent_shown')) {
        setIsExitModalOpen(true);
        sessionStorage.setItem('vigyaapn_exit_intent_shown', 'true');
      }
    }, 28000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  const openExitModal = () => setIsExitModalOpen(true);
  const closeExitModal = () => setIsExitModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        leads,
        applications,
        addLead,
        updateLeadStatus,
        deleteLead,
        addApplication,
        deleteApplication,
        isExitModalOpen,
        openExitModal,
        closeExitModal,
        toasts,
        showToast,
        removeToast,
        trackEvent,
        clearAllData,
        analyticsStats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
