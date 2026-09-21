export type RouteCategory = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'technologies' 
  | 'portfolio' 
  | 'hire-developers' 
  | 'blog' 
  | 'careers' 
  | 'contact' 
  | 'terms' 
  | 'privacy' 
  | 'admin'
  | 'sitemap'
  | 'robots'
  | '404';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  category: 'core' | 'advanced' | 'enterprise';
  overview: string;
  features: string[];
  capabilities: { title: string; desc: string }[];
  industries: string[];
  benefits: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export type TechCategory = 'frontend' | 'backend' | 'mobile' | 'cloud-devops' | 'ai';

export interface TechnologyItem {
  id: string;
  slug: string;
  name: string;
  category: TechCategory;
  shortDesc: string;
  iconName: string;
  tagline: string;
  overview: string;
  features: string[];
  useCases: string[];
  developmentServices: string[];
  relatedSlugs: string[];
  industries: string[];
  benefits: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'web' | 'mobile' | 'ecommerce' | 'saas' | 'ai' | 'enterprise';
  industry: string;
  technologies: string[];
  websiteUrl: string;
  imageUrl: string;
  clientName: string;
  duration: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  designHighlight: string;
  architecture: string[];
  results: { metric: string; label: string }[];
  clientFeedback: {
    quote: string;
    author: string;
    position: string;
    avatarUrl?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Programming' | 'Development' | 'AI' | 'Design' | 'Cloud' | 'Business' | 'Technology';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  tableOfContents: { id: string; title: string }[];
  content: {
    intro: string;
    sections: {
      id: string;
      heading: string;
      paragraphs: string[];
      keyTakeaway?: string;
    }[];
    conclusion: string;
  };
  tags: string[];
  relatedSlugs: string[];
}

export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  experience: string;
  salaryRange: string;
  skills: string[];
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  attachmentName?: string;
  attachmentSize?: string;
  ndaRequested: boolean;
  source: string;
  page: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Won' | 'Lost';
  createdAt: string;
}

export interface JobApplication {
  id: string;
  jobSlug: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  resumeName: string;
  linkedIn?: string;
  portfolio?: string;
  coverLetter?: string;
  createdAt: string;
}
