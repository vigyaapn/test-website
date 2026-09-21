import { PortfolioItem } from '../types';

export const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    slug: 'pulseflow-telehealth-platform',
    title: 'PulseFlow Telehealth Platform',
    tagline: 'HIPAA-compliant remote patient monitoring & synchronous video consultations.',
    category: 'web',
    industry: 'Healthcare',
    technologies: ['Next.js', 'TypeScript', 'WebRTC', 'PostgreSQL', 'Tailwind CSS', 'AWS'],
    websiteUrl: 'https://example.com/pulseflow-demo',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    clientName: 'PulseFlow Health Systems Inc.',
    duration: '16 Weeks',
    summary: 'A secure, HIPAA-compliant patient management and virtual care platform serving over 80,000 active patients and 600 clinical specialists nationwide.',
    challenge: 'PulseFlow faced fragmented clinical workflows where doctors toggled between three separate systems to review patient histories, launch video consultations, and prescribe medications. Patient drop-off during onboarding was over 42% due to sluggish legacy portals.',
    solution: 'Vigyaapn engineered an integrated, single-pane clinical dashboard in Next.js with end-to-end encrypted WebRTC audio/video consultations, automated SMS appointment reminders, and bi-directional HL7/FHIR EHR synchronization.',
    features: [
      'Sub-second WebRTC peer-to-peer clinical video consultations',
      'Encrypted vitals streaming from wearable IoT devices',
      'Direct pharmacy e-prescription gateway integration',
      'HIPAA-compliant audit logging on AWS Aurora PostgreSQL',
      'Automated insurance eligibility verification'
    ],
    designHighlight: 'Clean, calming color palette designed to reduce patient cognitive strain, paired with high-contrast accessibility compliance for elderly demographics.',
    architecture: [
      'Client: Next.js 14 App Router with React Server Components',
      'Real-time: Custom WebRTC signaling server on Node.js & Socket.io',
      'Database: AWS Aurora Serverless PostgreSQL with Row Level Security',
      'Security: 256-bit AES encryption at rest, TLS 1.3 in transit, AWS KMS'
    ],
    results: [
      { metric: '80k+', label: 'Active Monthly Patients' },
      { metric: '94%', label: 'Consultation Completion Rate' },
      { metric: '<1.2s', label: 'Dashboard Load Time' },
      { metric: '4.9/5', label: 'Patient Satisfaction Rating' }
    ],
    clientFeedback: {
      quote: 'Vigyaapn delivered where two previous agencies failed. Our clinicians love the speed and simplicity of the new platform, and our patient retention jumped within the first month of deployment.',
      author: 'Dr. Elena Rostova',
      position: 'Chief Medical Officer, PulseFlow Health'
    }
  },
  {
    id: 'p2',
    slug: 'novapay-global-fintech-wallet',
    title: 'NovaPay Global Fintech Wallet',
    tagline: 'Multi-currency digital wallet and cross-border settlement application.',
    category: 'mobile',
    industry: 'Finance',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'Redis', 'AWS ECS', 'OpenAPI'],
    websiteUrl: 'https://example.com/novapay-app',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    clientName: 'NovaPay Financial Group',
    duration: '20 Weeks',
    summary: 'A cross-platform mobile wallet enabling instantaneous multi-currency conversion, virtual Visa card issuance, and international remittances across 28 currencies.',
    challenge: 'NovaPay needed to replace two disparate native codebases that had accumulated severe technical debt, resulting in divergent features and slow biometric login latency that frustrated users.',
    solution: 'We rebuilt their consumer app from the ground up in React Native using the Fabric architecture. We integrated native biometric FaceID/TouchID, automated KYC identity verification, and real-time exchange rate webhooks.',
    features: [
      'Instant cross-border payments with zero hidden fees',
      'Virtual and physical debit card provisioning with Apple/Google Wallet',
      'Biometric authentication with secure hardware enclave keys',
      'Automated KYC document scan and liveness verification in <45s',
      'Real-time transaction alerts and smart budget categorization'
    ],
    designHighlight: 'Dark-mode luxury aesthetic with kinetic haptic feedback on balance refreshes and card swipe gestures.',
    architecture: [
      'Mobile: React Native with New Architecture and TurboModules',
      'Backend: High-concurrency NestJS microservices on AWS ECS',
      'Caching: Redis Cluster for microsecond currency rate lookups',
      'Ledger: Double-entry immutable accounting schema in PostgreSQL'
    ],
    results: [
      { metric: '$120M+', label: 'Monthly Payment Volume' },
      { metric: '4.8 ★', label: 'Average App Store Rating' },
      { metric: '<45s', label: 'KYC Verification Speed' },
      { metric: '99.99%', label: 'Transaction Uptime' }
    ],
    clientFeedback: {
      quote: 'The speed and polish of the React Native app exceeded our wildest expectations. Vigyaapn’s attention to security, animations, and micro-interactions was world class.',
      author: 'Marcus Vance',
      position: 'VP of Product, NovaPay'
    }
  },
  {
    id: 'p3',
    slug: 'zenith-headless-luxury-commerce',
    title: 'Zenith Headless Luxury Commerce',
    tagline: 'Bespoke high-conversion storefront for luxury Swiss horology.',
    category: 'ecommerce',
    industry: 'E-Commerce',
    technologies: ['Next.js', 'Tailwind CSS', 'Shopify Plus', 'Algolia', 'Stripe', 'Figma'],
    websiteUrl: 'https://example.com/zenith-watches',
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=80',
    clientName: 'Zenith Horology Collective',
    duration: '12 Weeks',
    summary: 'A headless e-commerce experience for an ultra-luxury watchmaker, combining 3D interactive watch customization with lightning-fast catalog exploration.',
    challenge: 'Their legacy monolithic store suffered from 4.8-second page loads, poor mobile checkout UX, and an inability to showcase intricate horological movements interactively.',
    solution: 'Vigyaapn engineered a headless Shopify storefront using Next.js and Tailwind CSS. We implemented instant Algolia search, custom WebGL 3D model rotations, and a localized one-page checkout.',
    features: [
      'Sub-second instant search with Algolia autocomplete',
      'Interactive 360-degree high-definition timepiece viewer',
      'Global multi-currency checkout with local tax calculation',
      'VIP concierge booking system for private boutique viewings',
      'Dynamic inventory reservation lock during high-demand releases'
    ],
    designHighlight: 'Editorial typography, generous whitespace, and restrained gold accents reminiscent of high-end horological catalogs.',
    architecture: [
      'Frontend: Next.js on Edge CDN with static page pre-rendering',
      'Commerce Core: Shopify Storefront GraphQL API',
      'Search: Algolia Search Engine with instant facet updates',
      'Hosting: Global Edge deployment with sub-40ms response'
    ],
    results: [
      { metric: '+58%', label: 'Mobile Conversion Lift' },
      { metric: '0.6s', label: 'Page Load Time' },
      { metric: '$4.2k', label: 'Average Order Value' },
      { metric: '0% CLS', label: 'Cumulative Layout Shift' }
    ],
    clientFeedback: {
      quote: 'Our bounce rate plummeted by 40% in week one. Vigyaapn captured our luxury brand aura with surgical engineering precision.',
      author: 'Claire Delacroix',
      position: 'Head of Digital, Zenith Horology'
    }
  },
  {
    id: 'p4',
    slug: 'strata-ai-knowledge-engine',
    title: 'Strata AI Legal Knowledge Engine',
    tagline: 'Autonomous contract analysis, clause extraction, and enterprise RAG search.',
    category: 'ai',
    industry: 'LegalTech',
    technologies: ['Python', 'OpenAI', 'Gemini', 'Next.js', 'Vector DB', 'PostgreSQL'],
    websiteUrl: 'https://example.com/strata-ai',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    clientName: 'Strata Legal Intelligence',
    duration: '14 Weeks',
    summary: 'An enterprise generative AI platform enabling corporate legal teams to parse, compare, and query thousands of commercial contracts in seconds with zero hallucinations.',
    challenge: 'Corporate attorneys were spending up to 18 hours per transaction reviewing 200+ page supplier agreements and identifying non-standard liability clauses.',
    solution: 'We engineered an isolated, zero-retention RAG pipeline combining vector embeddings with Gemini’s long-context window to highlight risky clauses, cite precedent case law, and draft redlines.',
    features: [
      'Multi-document semantic search with exact page/line citations',
      'Automated risk scoring on indemnity, liability, and SLA clauses',
      'Side-by-side redline comparison with recommended revisions',
      'Zero-data-training guarantee within client private cloud',
      'Exportable executive summaries in Word, PDF, and Markdown'
    ],
    designHighlight: 'Dual-pane workspace with live source document viewer on the left and conversational AI copilot on the right.',
    architecture: [
      'Frontend: Next.js 14 with streaming response rendering',
      'LLM Gateway: Multi-model router prioritizing Gemini 1.5 Pro and GPT-4o',
      'Vector Engine: Qdrant vector database with hybrid BM25 search',
      'Document Parsing: OCR pipeline extracting tables and structural headers'
    ],
    results: [
      { metric: '75%', label: 'Reduction in Review Time' },
      { metric: '100k+', label: 'Contracts Processed' },
      { metric: '99.8%', label: 'Citation Accuracy' },
      { metric: '0', label: 'Data Leakage Incidents' }
    ],
    clientFeedback: {
      quote: 'Strata has fundamentally transformed how our legal associates operate. Vigyaapn’s deep understanding of vector search and prompt guardrails made this possible.',
      author: 'David Sterling, Esq.',
      position: 'Managing Partner, Sterling & Cole LLP'
    }
  },
  {
    id: 'p5',
    slug: 'hyperflow-b2b-saas-platform',
    title: 'HyperFlow B2B Workflow SaaS',
    tagline: 'Visual automation builder and asynchronous task runner for operations teams.',
    category: 'saas',
    industry: 'B2B SaaS',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
    websiteUrl: 'https://example.com/hyperflow-demo',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    clientName: 'HyperFlow Technologies',
    duration: '18 Weeks',
    summary: 'A drag-and-drop workflow automation SaaS that orchestrates data syncing, email campaigns, and webhook triggers across 120+ third-party business applications.',
    challenge: 'Operations managers had to rely on expensive engineering sprints to connect disparate SaaS APIs. Existing automation platforms were either too simplistic or required complex code.',
    solution: 'Vigyaapn built an interactive canvas node-editor in React with optimistic UI updates, integrated Stripe multi-seat billing, and an asynchronous queue system processing 50M+ webhook events per month.',
    features: [
      'Interactive infinite canvas with node-branching logic',
      'Pre-built integrations with Slack, Salesforce, Google, and HubSpot',
      'Real-time execution telemetry and step-by-step debug playback',
      'Role-based team workspaces with granular permission tiers',
      'Automated retry logic with exponential backoff on failed API calls'
    ],
    designHighlight: 'Clean geometric node canvas with buttery smooth pan-and-zoom controls and intuitive color-coded data ports.',
    architecture: [
      'Canvas: React Flow with custom virtualized node renderers',
      'Execution: Asynchronous Node.js distributed workers on Redis queues',
      'Database: PostgreSQL with Row-Level Security for multi-tenancy',
      'Billing: Stripe Customer Portal with metered usage billing'
    ],
    results: [
      { metric: '50M+', label: 'Monthly Webhook Events' },
      { metric: '3.2x', label: 'User Growth QoQ' },
      { metric: '<5ms', label: 'Worker Dispatch Latency' },
      { metric: '99.99%', label: 'Execution Reliability' }
    ],
    clientFeedback: {
      quote: 'Vigyaapn helped us scale from an early prototype to an enterprise SaaS trusted by Fortune 500 ops teams. Their full-stack talent is truly exceptional.',
      author: 'Sophia Chen',
      position: 'Co-Founder & CEO, HyperFlow'
    }
  },
  {
    id: 'p6',
    slug: 'omni-fleet-logistics-telemetry',
    title: 'OmniFleet Real-Time Telemetry',
    tagline: 'IoT vehicle tracking, route optimization, and predictive maintenance dispatch.',
    category: 'enterprise',
    industry: 'Logistics',
    technologies: ['React', 'TypeScript', 'Node.js', 'Go', 'TimescaleDB', 'Docker'],
    websiteUrl: 'https://example.com/omnifleet',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    clientName: 'OmniFleet Global Logistics',
    duration: '22 Weeks',
    summary: 'A mission-critical fleet management command center monitoring 14,000 active commercial trucks across North America with sub-second GPS telemetry and route re-planning.',
    challenge: 'Severe GPS ingestion delays caused dispatchers to assign delayed routes, resulting in wasted fuel, missed delivery SLA penalties, and premature vehicle breakdowns.',
    solution: 'Vigyaapn built a high-throughput Go ingestion pipeline capable of ingesting 100,000 sensor pings per second, paired with an interactive map dashboard that reroutes drivers around weather and traffic bottlenecks in real time.',
    features: [
      'Live map visualizing 14,000 active vehicles simultaneously',
      'Machine learning model forecasting mechanical failure 72 hours prior',
      'Automated dynamic routing cutting fuel consumption by 14%',
      'Driver safety scoring based on braking and acceleration telemetry',
      'Instant alert triggers for geofence breaches and cargo temperature drops'
    ],
    designHighlight: 'High-density operational dark mode designed for 24/7 command center monitors without causing operator eye fatigue.',
    architecture: [
      'Ingestion: Go microservices receiving MQTT/gRPC telemetry packets',
      'Time-Series DB: TimescaleDB optimized for temporal geospatial queries',
      'Frontend: React with WebGL vector map clustering',
      'Infrastructure: Multi-node Kubernetes cluster on AWS'
    ],
    results: [
      { metric: '14,000', label: 'Commercial Vehicles Monitored' },
      { metric: '14%', label: 'Fuel Savings Achieved' },
      { metric: '100k/s', label: 'Telemetry Pings Ingested' },
      { metric: '$2.8M', label: 'Annual Maintenance Saved' }
    ],
    clientFeedback: {
      quote: 'Vigyaapn’s engineering precision saved our company millions in fuel and vehicle downtime. Their ability to handle high-throughput IoT streams was magnificent.',
      author: 'Arthur Pendelton',
      position: 'Chief Operations Officer, OmniFleet'
    }
  },
  {
    id: 'p7',
    slug: 'culina-restaurant-ordering-ecosystem',
    title: 'Culina Smart Restaurant Ecosystem',
    tagline: 'Table-side QR ordering, kitchen display system, and automated inventory sync.',
    category: 'web',
    industry: 'Restaurant',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://example.com/culina-dining',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80',
    clientName: 'Culina Hospitality Group',
    duration: '14 Weeks',
    summary: 'A unified hospitality operating system running across 45 restaurant locations, featuring instant browser-based QR ordering, a real-time kitchen display system (KDS), and inventory depletion tracking.',
    challenge: 'Staff shortages caused 25-minute wait times for diners to place orders and receive bills, leading to lost table turns and frustrated patrons during peak dinner rushes.',
    solution: 'We engineered a zero-app-install web app allowing diners to scan a table QR code, browse dynamic menus with allergen filters, order food, and split the bill with Apple Pay.',
    features: [
      'Zero-app installation: instant mobile web ordering in <5 seconds',
      'Real-time Kitchen Display System (KDS) with color-coded ticket timers',
      'Dynamic ingredient-level inventory countdown',
      'One-tap bill splitting with Apple Pay, Google Pay, and credit cards',
      'Automated server call button and feedback prompts'
    ],
    designHighlight: 'Mouthwatering food photography layout with swift tactile transitions and intuitive modifier selection.',
    architecture: [
      'Ordering App: Next.js PWA with instant offline menu caching',
      'Kitchen Screen: Real-time WebSocket connection to local kitchen printers',
      'Database: PostgreSQL with transactional order consistency',
      'Payments: Stripe Terminal and Stripe Elements integration'
    ],
    results: [
      { metric: '32%', label: 'Faster Table Turnover' },
      { metric: '+24%', label: 'Average Tip Increase' },
      { metric: '45', label: 'Restaurant Locations Live' },
      { metric: '1.2M+', label: 'Diners Served' }
    ],
    clientFeedback: {
      quote: 'Culina increased our peak table turn rate by over 30% while reducing server stress. Vigyaapn understood the relentless pace of hospitality.',
      author: 'Marco Vitucci',
      position: 'Managing Partner, Culina Hospitality'
    }
  },
  {
    id: 'p8',
    slug: 'lingua-verse-adaptive-learning',
    title: 'LinguaVerse Adaptive Language App',
    tagline: 'AI-guided conversational immersion with real-time speech pronunciation feedback.',
    category: 'mobile',
    industry: 'Education',
    technologies: ['Flutter', 'Python', 'FastAPI', 'OpenAI', 'Google Cloud', 'Firebase'],
    websiteUrl: 'https://example.com/linguaverse',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&auto=format&fit=crop&q=80',
    clientName: 'LinguaVerse EdTech Corp',
    duration: '16 Weeks',
    summary: 'A gamified mobile language learning application utilizing generative AI to simulate real-world conversations and provide phoneme-by-phoneme pronunciation scoring.',
    challenge: 'Traditional language apps rely on boring multiple-choice flashcards, leaving learners incapable of holding real spoken conversations in the real world.',
    solution: 'Vigyaapn built an immersive Flutter application pairing learners with adaptive AI conversational personas that adjust their vocabulary dynamically based on user fluency.',
    features: [
      'Real-time acoustic speech evaluation and accent correction',
      'Dynamic scenario roleplaying (ordering at a café, job interviews)',
      'Gamified streak system, leaderboards, and achievement badges',
      'Offline vocabulary flashcard review with spaced repetition (SRS)',
      'Native iOS and Android performance with 120 FPS animations'
    ],
    designHighlight: 'Vibrant, friendly gamified aesthetic with custom vector illustrations and encouraging audio chimes.',
    architecture: [
      'Client: Flutter with Riverpod state management',
      'Speech Pipeline: Whisper + custom acoustic phoneme matching',
      'Backend: FastAPI microservices on Google Cloud Run',
      'Storage: Cloud Firestore for real-time user progress and streaks'
    ],
    results: [
      { metric: '450k+', label: 'Registered Learners' },
      { metric: '78%', label: '30-Day User Retention' },
      { metric: '4.9 ★', label: 'App Store Rating' },
      { metric: '18', label: 'Languages Supported' }
    ],
    clientFeedback: {
      quote: 'Our user engagement numbers are double the industry average. Vigyaapn’s expertise in Flutter and AI audio processing gave us a massive competitive moat.',
      author: 'Kavita Sundaram',
      position: 'Founder & CEO, LinguaVerse'
    }
  }
];
