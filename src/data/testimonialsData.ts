export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
  projectType: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Dr. Elena Rostova',
    role: 'Chief Medical Officer',
    company: 'PulseFlow Health Systems',
    rating: 5,
    content: 'Vigyaapn completely re-architected our clinical telehealth platform in under four months. Their attention to HIPAA security compliance, sub-second WebRTC video connections, and mobile usability was second to none. Our patient completion rates surged by over 40%.',
    avatar: 'https://images.unsplash.com/photo-1594824813583-b78fbe29f798?w=200&auto=format&fit=crop&q=80',
    projectType: 'Telehealth & WebRTC Platform'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'VP of Product',
    company: 'NovaPay Financial',
    rating: 5,
    content: 'Finding an agency that truly understands both high-concurrency financial microservices and fluid 60 FPS mobile engineering is rare. Vigyaapn built our cross-border wallet in React Native and NestJS, and it currently handles over $120M in monthly settlements effortlessly.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    projectType: 'Global Fintech Mobile Wallet'
  },
  {
    id: 'test-3',
    name: 'Claire Delacroix',
    role: 'Head of Digital & E-Commerce',
    company: 'Zenith Horology Collective',
    rating: 5,
    content: 'Our high-end horological storefront demanded flawless aesthetic execution and instantaneous page loads. Vigyaapn’s headless Next.js solution dropped our bounce rate by 40% and lifted mobile checkout conversions by 58% in our first month live.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    projectType: 'Headless Luxury E-Commerce'
  },
  {
    id: 'test-4',
    name: 'Sophia Chen',
    role: 'Co-Founder & CEO',
    company: 'HyperFlow Technologies',
    rating: 5,
    content: 'As early-stage startup founders, speed was our existential priority. Vigyaapn took us from wireframe concepts to a fundable, enterprise-ready B2B SaaS in 14 weeks. Their code quality and architectural clarity made our seed round due diligence a breeze.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    projectType: 'B2B SaaS Workflow Platform'
  },
  {
    id: 'test-5',
    name: 'Arthur Pendelton',
    role: 'Chief Operating Officer',
    company: 'OmniFleet Global Logistics',
    rating: 5,
    content: 'Managing 14,000 commercial vehicles in real time without lag is a monumental engineering feat. Vigyaapn built an ingestion pipeline capable of processing 100,000 pings per second. Their team operates with the discipline of aerospace engineers.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    projectType: 'IoT Fleet Telemetry Command Center'
  }
];
