import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    slug: 'ui-ux-web-design',
    title: 'UI/UX Web Design',
    shortDesc: 'User-centric interfaces, design systems, and clickable prototypes tailored for maximum retention and conversion.',
    tagline: 'Designing interfaces that captivate users and elevate brand equity.',
    iconName: 'Layout',
    category: 'core',
    overview: 'At Vigyaapn, our UI/UX design practice blends behavioral psychology with modern design aesthetics. We craft human-centered digital experiences that guide users seamlessly toward conversion while reinforcing your brand identity across web and mobile surfaces.',
    features: ['Custom Design Systems', 'Interactive Prototypes', 'Information Architecture', 'Usability Audits', 'Design Sprint Workshops', 'Multi-Platform Consistency'],
    capabilities: [
      { title: 'User Research & Journey Mapping', desc: 'Conducting deep audience interviews and heatmapping to uncover user friction points.' },
      { title: 'Design System Engineering', desc: 'Creating scalable component libraries in Figma tokens to accelerate frontend engineering.' },
      { title: 'Micro-Interactions & Animation', desc: 'Delightful kinetic touches that inform and orient users without hurting performance.' }
    ],
    industries: ['Fintech', 'SaaS', 'E-Commerce', 'Healthcare', 'EdTech'],
    benefits: [
      { title: '3.4x Higher Conversion', desc: 'Optimized user flows and checkout experiences reduce drop-off significantly.' },
      { title: 'Faster Dev Velocity', desc: 'A unified token design system cuts frontend implementation time by up to 40%.' },
      { title: 'Accessibility Compliance', desc: 'WCAG 2.1 AA certified color contrast, keyboard navigation, and screen reader friendliness.' }
    ],
    stats: [
      { value: '98%', label: 'User Satisfaction' },
      { value: '40%', label: 'Development Time Saved' },
      { value: '3.2x', label: 'Average ROI' }
    ],
    faqs: [
      { question: 'What tools do your designers use?', answer: 'We primarily use Figma for wireframing, high-fidelity UI design, and prototyping, complemented by Principle/Lottie for advanced animations.' },
      { question: 'Can you work with our existing brand guidelines?', answer: 'Absolutely. We can adhere strictly to your established brand guidelines or evolve them into an expansive digital design system.' }
    ]
  },
  {
    id: 's2',
    slug: 'frontend-development',
    title: 'Frontend Development',
    shortDesc: 'Blazing fast, responsive web interfaces built with React, Next.js, TypeScript, and modern CSS architecture.',
    tagline: 'Pixel-perfect, high-performance web engineering.',
    iconName: 'Code',
    category: 'core',
    overview: 'We build reactive, accessible, and ultra-fast client experiences. By leveraging Next.js, modern TypeScript, and Tailwind CSS, we ensure your users experience seamless transitions and instant interactivity on any screen size.',
    features: ['Single Page Applications', 'Server-Side Rendering (SSR)', 'Progressive Web Apps (PWA)', 'Core Web Vitals Optimization', 'TypeScript Strict Mode', 'Component-Driven Development'],
    capabilities: [
      { title: 'Modular Architecture', desc: 'Composable component trees built for longevity, ease of maintenance, and testability.' },
      { title: 'Performance Engineering', desc: 'Sub-second First Contentful Paint (FCP) and zero layout shift via asset optimization.' },
      { title: 'State Management', desc: 'Predictable data flow utilizing clean hooks, Context, or Redux Toolkit.' }
    ],
    industries: ['SaaS', 'Media & Publishing', 'Retail', 'Enterprise Portals'],
    benefits: [
      { title: '90+ Lighthouse Score', desc: 'Guaranteed top-tier scores across SEO, performance, and best practices.' },
      { title: 'Seamless Cross-Browser Support', desc: 'Tested rigorously across Chrome, Safari, Edge, Firefox, and mobile engines.' },
      { title: 'Maintainable Codebase', desc: 'Self-documenting TypeScript types and structured linting rules.' }
    ],
    stats: [
      { value: '<1s', label: 'Target Load Time' },
      { value: '100%', label: 'Responsive Coverage' },
      { value: '0', label: 'Compromise on Quality' }
    ],
    faqs: [
      { question: 'Do you support React and Next.js exclusively?', answer: 'While React and Next.js are our flagship frameworks, we also build robust applications using Vue.js, Nuxt, and Angular based on client requirements.' },
      { question: 'How do you ensure responsiveness?', answer: 'We use mobile-first Tailwind CSS utilities with rigorous automated testing across real device viewports.' }
    ]
  },
  {
    id: 's3',
    slug: 'backend-development',
    title: 'Backend Development',
    shortDesc: 'Resilient, high-throughput microservices, REST & GraphQL APIs, and transactional databases designed for scale.',
    tagline: 'The rock-solid engine powering your digital ecosystem.',
    iconName: 'Database',
    category: 'core',
    overview: 'Our backend engineering teams architect secure, scalable, and low-latency server infrastructures. Whether orchestrating distributed microservices with Node.js and NestJS or managing relational and document databases, we guarantee maximum uptime and bulletproof data integrity.',
    features: ['RESTful & GraphQL APIs', 'Microservices Architecture', 'PostgreSQL & MongoDB Tuning', 'Distributed Caching (Redis)', 'Message Queues (Kafka, RabbitMQ)', 'Authentication & RBAC'],
    capabilities: [
      { title: 'High-Concurrency Systems', desc: 'Engineered to handle tens of thousands of concurrent requests without latency degradation.' },
      { title: 'Database Optimization', desc: 'Indexing, connection pooling, and schema migration strategies that prevent bottlenecks.' },
      { title: 'Enterprise Security', desc: 'End-to-end encryption, rate limiting, sanitization, and compliance with SOC2 standards.' }
    ],
    industries: ['Fintech', 'Logistics', 'Enterprise IT', 'Healthcare'],
    benefits: [
      { title: '99.99% Guaranteed Uptime', desc: 'Built-in failover, health check probes, and redundant cloud architectures.' },
      { title: 'Horizontal Scalability', desc: 'Stateless server configurations ready for auto-scaling on Kubernetes or AWS ECS.' },
      { title: 'Strict Data Security', desc: 'Zero unauthenticated data access, salted password hashing, and encrypted tokens.' }
    ],
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '15ms', label: 'Average Query Time' },
      { value: '10M+', label: 'Daily API Calls Handled' }
    ],
    faqs: [
      { question: 'Which backend languages do you specialize in?', answer: 'We excel in TypeScript (Node.js/NestJS/Express), Python (FastAPI/Django), Java (Spring Boot), and Go.' },
      { question: 'How do you handle database backups?', answer: 'We implement automated point-in-time recovery (PITR) with encrypted multi-region snapshots.' }
    ]
  },
  {
    id: 's4',
    slug: 'full-stack-development',
    title: 'Full Stack Development',
    shortDesc: 'End-to-end application lifecycle from UI to cloud infrastructure, delivering unified velocity and architectural harmony.',
    tagline: 'Complete digital solutions built by cohesive cross-functional teams.',
    iconName: 'Layers',
    category: 'core',
    overview: 'Eliminate communication silos and engineering friction with Vigyaapn’s end-to-end full stack development. We bridge client-side beauty with server-side robustness to deliver turnkey web applications on time and within budget.',
    features: ['End-to-End Type Safety', 'Modern Monorepos & Turborepo', 'Integrated CI/CD Pipelines', 'Cloud Native Deployments', 'Custom Admin Dashboards', 'Comprehensive QA Testing'],
    capabilities: [
      { title: 'Unified Data Contracts', desc: 'Sharing TypeScript types seamlessly between frontend and backend to eliminate runtime sync bugs.' },
      { title: 'Rapid Prototyping to Production', desc: 'Accelerated development loops taking you from concept to cloud in weeks.' },
      { title: 'Full Ownership', desc: 'Single point of accountability across architecture, DevOps, QA, and frontend design.' }
    ],
    industries: ['Startups', 'SaaS', 'Retail', 'Education'],
    benefits: [
      { title: '50% Faster Time-to-Market', desc: 'Streamlined development workflow without handoff delays between teams.' },
      { title: 'Lower Total Cost of Ownership', desc: 'Unified tech stacks reduce onboarding and maintenance overhead.' },
      { title: 'Consistent Architecture', desc: 'Standardized design patterns across both client and server layers.' }
    ],
    stats: [
      { value: '50%', label: 'Faster Time to Market' },
      { value: '100%', label: 'Type Safe Stack' },
      { value: '24/7', label: 'DevOps Monitoring' }
    ],
    faqs: [
      { question: 'What is your preferred full stack combination?', answer: 'Next.js + TypeScript + Tailwind CSS on the frontend paired with Node.js/NestJS + PostgreSQL + Redis on the backend.' },
      { question: 'Can you inherit an existing codebase?', answer: 'Yes. We conduct a thorough architectural audit, refactor technical debt, and implement structured roadmaps.' }
    ]
  },
  {
    id: 's5',
    slug: 'e-commerce-development',
    title: 'E-Commerce Development',
    shortDesc: 'High-converting online storefronts, headless commerce platforms, and multi-vendor marketplaces with frictionless checkout.',
    tagline: 'Turn visitors into repeat customers with lightning-fast shopping experiences.',
    iconName: 'ShoppingBag',
    category: 'core',
    overview: 'In modern e-commerce, every millisecond counts. Vigyaapn builds custom headless commerce platforms and scalable marketplaces featuring instantaneous search, one-click checkouts, localized payment gateways, and automated inventory management.',
    features: ['Headless Shopify & Medusa', 'Custom Multi-Vendor Marketplaces', 'Stripe & Regional Payment Gateways', 'Real-Time Inventory Sync', 'AI Product Recommendations', 'Omnichannel Order Management'],
    capabilities: [
      { title: 'Headless Storefronts', desc: 'Decoupled frontends powered by Next.js delivering sub-second page loads and custom buying flows.' },
      { title: 'Payment Orchestration', desc: 'Global multi-currency billing, Apple Pay, Google Pay, Klarna, and localized tax engines.' },
      { title: 'Catalog Search & Filters', desc: 'Algolia or Elasticsearch powered faceted navigation that guides shoppers directly to products.' }
    ],
    industries: ['D2C Retail', 'Fashion & Apparel', 'Electronics', 'Wholesale B2B'],
    benefits: [
      { title: '45% Boost in Mobile Conversion', desc: 'Frictionless checkout and instant catalog search maximize mobile sales.' },
      { title: 'Zero Downtime on Black Friday', desc: 'Elastic cloud architecture tested for massive sudden traffic spikes.' },
      { title: 'Automated Operations', desc: 'Instant synchronization with ERP, 3PL logistics, and accounting software.' }
    ],
    stats: [
      { value: '45%', label: 'Mobile Conversion Lift' },
      { value: '99.99%', label: 'Peak Sales Uptime' },
      { value: '0.4s', label: 'Average Catalog Search' }
    ],
    faqs: [
      { question: 'Do you build on Shopify or custom frameworks?', answer: 'We do both! We build custom headless Shopify/Shopify Plus stores as well as bespoke marketplaces with Medusa.js or custom Node backends.' },
      { question: 'How do you handle security for payments?', answer: 'We ensure 100% PCI-DSS compliance by leveraging tokenized payment processors like Stripe and Adyen.' }
    ]
  },
  {
    id: 's6',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Native iOS and Android applications, as well as cross-platform Flutter and React Native solutions with 60 FPS fluidity.',
    tagline: 'High-performance mobile apps that dominate the App Store and Google Play.',
    iconName: 'Smartphone',
    category: 'core',
    overview: 'Deliver unforgettable mobile experiences directly into the pockets of your customers. Vigyaapn crafts native and cross-platform mobile apps featuring offline-first storage, hardware sensor integration, biometrics, and push notification campaigns.',
    features: ['React Native & Flutter', 'Native iOS (Swift) & Android (Kotlin)', 'Offline-First Synchronization', 'Biometric Authentication (FaceID/TouchID)', 'In-App Purchases & Subscriptions', 'Push Notifications & Deep Linking'],
    capabilities: [
      { title: 'Cross-Platform Code Sharing', desc: 'Share up to 90% of business logic across iOS and Android without sacrificing native feel.' },
      { title: 'Smooth 60 FPS Animations', desc: 'Hardware-accelerated transitions that ensure fluid navigation on budget and flagship devices.' },
      { title: 'App Store Submission & Approval', desc: 'Guaranteed compliance with Apple Human Interface Guidelines and Google Play review policies.' }
    ],
    industries: ['Healthcare', 'Fintech', 'Fitness', 'Social Networking', 'Delivery'],
    benefits: [
      { title: 'Unified Codebase Efficiency', desc: 'Cut initial development and ongoing maintenance costs in half with React Native/Flutter.' },
      { title: 'Offline Reliability', desc: 'Users can continue browsing and queueing actions even with intermittent cellular reception.' },
      { title: 'High User Engagement', desc: 'Rich push notifications and dynamic badges bring active users back into the app.' }
    ],
    stats: [
      { value: '4.8+', label: 'Avg Store Rating' },
      { value: '60 FPS', label: 'Smooth Animation' },
      { value: '100%', label: 'Store Approval Rate' }
    ],
    faqs: [
      { question: 'Should I choose React Native, Flutter, or Native?', answer: 'For 90% of apps, React Native or Flutter delivers identical performance at half the cost. Native Swift/Kotlin is reserved for intensive 3D/AR or Bluetooth accessories.' },
      { question: 'Do you handle the App Store publishing process?', answer: 'Yes, we handle the entire submission, provisioning profiles, screenshots, and review process.' }
    ]
  },
  {
    id: 's7',
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    shortDesc: 'Infrastructure as Code, Kubernetes orchestration, zero-downtime CI/CD pipelines, and cloud cost optimization.',
    tagline: 'Automating reliability, security, and cloud scalability.',
    iconName: 'Cloud',
    category: 'core',
    overview: 'Accelerate release frequency and bulletproof your infrastructure. We design automated, secure DevOps pipelines on AWS, Google Cloud, and Azure using Terraform, Docker, and Kubernetes for self-healing deployments.',
    features: ['Infrastructure as Code (Terraform)', 'CI/CD Pipelines (GitHub Actions/GitLab)', 'Kubernetes & Docker Orchestration', 'Cloud Cost FinOps Optimization', 'Centralized Logging & Telemetry', 'Disaster Recovery & Redundancy'],
    capabilities: [
      { title: 'Automated Zero-Downtime Releases', desc: 'Blue-green and canary deployments that roll out new features without a second of downtime.' },
      { title: 'Proactive Telemetry & Monitoring', desc: 'Datadog, Prometheus, and Grafana dashboards tracking memory, CPU, and error spikes.' },
      { title: 'Cloud Spend Reduction', desc: 'Auditing underutilized instances, reserved instance purchasing, and auto-scaling triggers.' }
    ],
    industries: ['Enterprise IT', 'Fintech', 'SaaS', 'Media Streaming'],
    benefits: [
      { title: '30-40% Cloud Cost Savings', desc: 'Eliminate orphaned resources and right-size compute workloads.' },
      { title: '10x Faster Deployment Speed', desc: 'Code commits trigger automated testing, docker build, and staging rollout in minutes.' },
      { title: 'Self-Healing Resilience', desc: 'Containers restart automatically upon anomaly detection without human intervention.' }
    ],
    stats: [
      { value: '35%', label: 'Average Cloud Cost Reduction' },
      { value: '<5min', label: 'Automated Build & Deploy' },
      { value: '99.99%', label: 'Reliability Guarantee' }
    ],
    faqs: [
      { question: 'Which cloud providers do you support?', answer: 'We are certified across AWS, Google Cloud Platform (GCP), Microsoft Azure, and hybrid cloud environments.' },
      { question: 'Can you migrate our legacy servers to the cloud?', answer: 'Yes, we specialize in lift-and-shift as well as cloud-native containerized modernization.' }
    ]
  },
  {
    id: 's8',
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    shortDesc: 'LLM integrations, Retrieval-Augmented Generation (RAG), autonomous agents, predictive analytics, and computer vision.',
    tagline: 'Harness the power of artificial intelligence to automate complexity.',
    iconName: 'Cpu',
    category: 'advanced',
    overview: 'Transform your business data into actionable competitive advantages. We build custom generative AI solutions, semantic vector search systems, and fine-tuned models that automate repetitive labor and deliver intelligent customer experiences.',
    features: ['RAG Architectures & Vector DBs', 'Custom Agentic Workflows', 'Gemini & OpenAI API Orchestration', 'Fine-Tuned Open Source Models', 'Predictive Modeling & Forecasting', 'Computer Vision & OCR'],
    capabilities: [
      { title: 'Enterprise RAG Systems', desc: 'Empowering your workforce to query complex company wikis, contracts, and databases with verifiable citations.' },
      { title: 'Autonomous Multi-Agent Systems', desc: 'AI agents that plan, coordinate, and execute multi-step business logic autonomously.' },
      { title: 'Real-Time Audio & Vision Pipelines', desc: 'Multimodal processing for instant document extraction, inspection, and speech interaction.' }
    ],
    industries: ['Legal & Compliance', 'Fintech', 'Healthcare', 'Customer Service', 'Real Estate'],
    benefits: [
      { title: '70% Reduction in Manual Data Entry', desc: 'Automate document intake, categorization, and invoice validation.' },
      { title: 'Private & Secure AI', desc: 'Data never leaves your virtual private cloud; zero customer data used for training.' },
      { title: '24/7 Intelligent Automation', desc: 'Instantaneous natural language query resolution for customers and employees.' }
    ],
    stats: [
      { value: '70%', label: 'Manual Tasks Automated' },
      { value: '100%', label: 'Data Privacy Isolated' },
      { value: '4.9x', label: 'Speed in Document Processing' }
    ],
    faqs: [
      { question: 'Will our proprietary data be used to train public models?', answer: 'Never. We deploy models within your isolated cloud perimeter with strict non-logging policies or host open-source models privately.' },
      { question: 'What is RAG and why does my business need it?', answer: 'Retrieval-Augmented Generation connects an LLM to your internal live knowledge base, eliminating hallucinations and delivering exact facts.' }
    ]
  },
  {
    id: 's9',
    slug: 'api-development',
    title: 'API Development',
    shortDesc: 'Robust RESTful, GraphQL, and gRPC endpoints, third-party payment and CRM integrations, and OpenAPI documentation.',
    tagline: 'Connecting services with high-speed, secure, and documented interfaces.',
    iconName: 'Network',
    category: 'core',
    overview: 'Modern software is an interconnected mesh. Vigyaapn designs and develops enterprise-grade APIs with rigorous versioning, rate limiting, token authentication, and interactive developer documentation.',
    features: ['RESTful & GraphQL Architectures', 'Third-Party Webhooks & Integrations', 'OpenAPI / Swagger Documentation', 'JWT & OAuth2 Authorization', 'High-Speed gRPC Protocols', 'API Gateway Management'],
    capabilities: [
      { title: 'Developer Portal Creation', desc: 'Interactive sandbox environments allowing third-party partners to test endpoints instantly.' },
      { title: 'Legacy System Modernization', desc: 'Wrapping legacy mainframe and ERP systems in modern REST/GraphQL wrappers.' },
      { title: 'Rate Limiting & Threat Protection', desc: 'Defending against DDoS and credential stuffing with Redis token bucket algorithms.' }
    ],
    industries: ['Fintech', 'Telecom', 'Logistics', 'Travel'],
    benefits: [
      { title: 'Effortless Partner Onboarding', desc: 'Comprehensive API docs and SDKs reduce partner integration time from weeks to hours.' },
      { title: 'Strict Backward Compatibility', desc: 'Careful semantic versioning ensures updates never break existing mobile clients.' },
      { title: 'Sub-20ms Latency', desc: 'High-speed serialized payloads and optimized database queries.' }
    ],
    stats: [
      { value: '<20ms', label: 'Response Latency' },
      { value: '100%', label: 'Swagger Documented' },
      { value: '99.99%', label: 'Uptime Reliability' }
    ],
    faqs: [
      { question: 'Do you create developer SDKs for our APIs?', answer: 'Yes! We can generate client SDKs in TypeScript, Python, Swift, Kotlin, and Go automatically from your OpenAPI specs.' },
      { question: 'How do you handle API security?', answer: 'We implement OAuth2, API keys, mTLS, CORS policies, and rate-limiting at the reverse proxy gateway.' }
    ]
  },
  {
    id: 's10',
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortDesc: 'Enterprise web apps, collaborative real-time workspaces, and complex data-intensive client dashboards.',
    tagline: 'Engineering web applications capable of handling enterprise complexity.',
    iconName: 'Globe',
    category: 'core',
    overview: 'When an off-the-shelf tool falls short, we build custom web applications crafted precisely to your operational workflows. From collaborative multi-user whiteboards to financial modeling tools, we bring desktop-grade power to modern browsers.',
    features: ['Complex Data Grids & Tables', 'Real-Time WebSockets & Collaboration', 'Role-Based Access Control (RBAC)', 'Interactive Analytics Dashboards', 'Offline Sync & Local Caching', 'Enterprise SSO Integration'],
    capabilities: [
      { title: 'High-Throughput State Handling', desc: 'Handling thousands of live updates per second on active user dashboards.' },
      { title: 'Custom Workflow Builders', desc: 'Drag-and-drop workflow canvases, node editors, and customizable automation triggers.' },
      { title: 'Single Sign-On (SSO)', desc: 'Seamless integration with Okta, Azure AD, Google Workspace, and SAML providers.' }
    ],
    industries: ['Logistics', 'Healthcare', 'Corporate Finance', 'Operations'],
    benefits: [
      { title: 'Eliminate Workflow Bottlenecks', desc: 'Custom software built to mirror your exact business processes.' },
      { title: 'Centralized Security', desc: 'Granular permissions ensure employees only access data relevant to their clearance.' },
      { title: 'Real-Time Visibility', desc: 'Live telemetric reporting keeps stakeholders informed of key performance metrics.' }
    ],
    stats: [
      { value: '100%', label: 'Custom Tailored' },
      { value: '60 FPS', label: 'Canvas Rendering' },
      { value: 'SOC2', label: 'Ready Architecture' }
    ],
    faqs: [
      { question: 'Can our web application work offline?', answer: 'Yes, with service workers and IndexedDB storage, users can continue editing offline and synchronize automatically once reconnected.' },
      { question: 'How long does a custom web app take to build?', answer: 'Typical MVPs launch in 6 to 10 weeks, with continuous agile sprint expansions thereafter.' }
    ]
  },
  {
    id: 's11',
    slug: 'web-portals',
    title: 'Web Portals',
    shortDesc: 'Secure customer, vendor, patient, and employee self-service portals with tailored permissions and document vaults.',
    tagline: 'Empowering stakeholders with secure, intuitive self-service portals.',
    iconName: 'Server',
    category: 'core',
    overview: 'Reduce inbound support tickets and friction with branded, secure digital portals. Vigyaapn engineers intuitive client and partner portals that streamline invoicing, document sharing, service requests, and account management.',
    features: ['Encrypted Document Vaults', 'Custom Customer Dashboards', 'Vendor Onboarding & Compliance', 'Integrated Ticketing & Live Chat', 'Automated Notifications & SMS', 'Granular Multi-Tier Permissions'],
    capabilities: [
      { title: 'Self-Service Enablement', desc: 'Allow customers to manage subscriptions, update billing, and submit claims independently.' },
      { title: 'Document Signing & Verification', desc: 'Integration with DocuSign, HelloSign, and automated OCR validation.' },
      { title: 'Audit Trail Logs', desc: 'Immutable logging of every document download, modification, and login event.' }
    ],
    industries: ['Insurance', 'Banking & Finance', 'Healthcare', 'Legal'],
    benefits: [
      { title: '60% Fewer Support Inquiries', desc: 'Clients easily retrieve invoices, policies, and files without human intervention.' },
      { title: 'Strict Data Privacy', desc: 'End-to-end encrypted storage keeps confidential client records protected.' },
      { title: 'Accelerated Onboarding', desc: 'Automated step-by-step onboarding reduces vendor setup times from days to hours.' }
    ],
    stats: [
      { value: '60%', label: 'Support Volume Cut' },
      { value: '100%', label: 'Audit Trail Compliance' },
      { value: '256-bit', label: 'AES Encryption' }
    ],
    faqs: [
      { question: 'Can the portal integrate with our CRM?', answer: 'Yes, we build bidirectional synchronization with Salesforce, HubSpot, Zoho, and internal databases.' },
      { question: 'Is the portal mobile-friendly?', answer: 'Every portal is completely responsive, functioning seamlessly on smartphones, tablets, and desktop workstations.' }
    ]
  },
  {
    id: 's12',
    slug: 'erp-solutions',
    title: 'ERP Solutions',
    shortDesc: 'Custom enterprise resource planning platforms integrating inventory, HR, accounting, and supply chain tracking.',
    tagline: 'Unify your business operations under one intelligent command center.',
    iconName: 'Briefcase',
    category: 'enterprise',
    overview: 'Ditch fragmented spreadsheets and disconnected SaaS tools. Vigyaapn engineers custom ERP solutions that unify procurement, inventory control, human resources, accounting, and production scheduling into a single reliable source of truth.',
    features: ['Supply Chain & Logistics Tracking', 'Multi-Warehouse Inventory Control', 'Financial Ledger & Automated Invoicing', 'HR & Payroll Management', 'Predictive Demand Planning', 'Custom Executive Reporting'],
    capabilities: [
      { title: 'Real-Time Inventory Tracking', desc: 'Barcode and RFID integration tracking stock across multiple distributed warehouses.' },
      { title: 'Automated Reconciliation', desc: 'Bank feed integration and automated three-way matching for purchase orders and invoices.' },
      { title: 'Custom Role Hierarchy', desc: 'Configurable approval thresholds for purchase orders, expense reports, and payroll.' }
    ],
    industries: ['Manufacturing', 'Wholesale Distribution', 'Construction', 'Retail Chains'],
    benefits: [
      { title: 'Zero Data Duplication', desc: 'All departments operate on the same real-time operational numbers.' },
      { title: 'Lower Licensing Fees', desc: 'Custom ownership eliminates escalating per-seat monthly subscription taxes.' },
      { title: 'Tailored to Your Workflow', desc: 'Never force your operational team into rigid commercial software restrictions.' }
    ],
    stats: [
      { value: '40%', label: 'Inventory Cost Reduction' },
      { value: '0', label: 'Per-User Monthly Fees' },
      { value: '100%', label: 'Data Sovereignty' }
    ],
    faqs: [
      { question: 'Why choose custom ERP over SAP or NetSuite?', answer: 'Custom ERP is built precisely around your proprietary business edge with zero per-user licensing fees and total flexibility.' },
      { question: 'Can you migrate data from our old systems?', answer: 'Yes, we map, clean, and validate all historical records during our structured migration phase.' }
    ]
  },
  {
    id: 's13',
    slug: 'cloud-development',
    title: 'Cloud Development',
    shortDesc: 'Cloud-native serverless applications, distributed object storage, and microservices built for elastic scale.',
    tagline: 'Architecting for the cloud from day one.',
    iconName: 'CloudRain',
    category: 'core',
    overview: 'Unlock unlimited computing potential with modern cloud architectures. We build serverless and containerized systems on AWS, GCP, and Azure that expand dynamically during traffic surges and shrink to zero during quiet hours.',
    features: ['Serverless Architectures (Lambda/Cloud Functions)', 'Elastic Compute & Auto-Scaling', 'Distributed S3 & GCS Storage', 'Cloud Security & IAM Hardening', 'Event-Driven Architectures (EventBridge)', 'Multi-Region Disaster Recovery'],
    capabilities: [
      { title: 'Serverless Execution', desc: 'Pay only for the milliseconds of compute your code actually consumes.' },
      { title: 'Event-Driven Messaging', desc: 'Decoupled services communicating via asynchronous publish-subscribe buses.' },
      { title: 'Edge Function Execution', desc: 'Executing logic globally close to your users via Cloudflare Workers or AWS CloudFront.' }
    ],
    industries: ['SaaS', 'Media Streaming', 'Gaming', 'Big Data'],
    benefits: [
      { title: 'Infinite Elastic Scale', desc: 'Seamlessly absorb viral traffic spikes without manual server provisioning.' },
      { title: 'Zero Idle Cost', desc: 'Serverless components scale to zero during off-peak hours.' },
      { title: 'Global Low Latency', desc: 'Content and compute distributed globally to ensure under 50ms latency.' }
    ],
    stats: [
      { value: '0', label: 'Server Maintenance Headaches' },
      { value: '<50ms', label: 'Global Edge Latency' },
      { value: '99.999%', label: 'Storage Durability' }
    ],
    faqs: [
      { question: 'What is cloud-native architecture?', answer: 'Cloud-native means designing applications specifically to exploit cloud strengths: microservices, containers, declarative APIs, and managed cloud services.' },
      { question: 'Do you help manage our cloud bills?', answer: 'Yes, we build FinOps observability into every project to ensure you never face surprise cloud charges.' }
    ]
  },
  {
    id: 's14',
    slug: 'chatbot-development',
    title: 'Chatbot Development',
    shortDesc: 'Conversational AI agents, multi-channel customer support bots, and voice interfaces with sentiment awareness.',
    tagline: 'Engage customers 24/7 with human-like conversational intelligence.',
    iconName: 'MessageSquare',
    category: 'advanced',
    overview: 'Deliver instant support and increase conversions with custom conversational AI. We train chatbots on your product catalogs, documentation, and support tickets, deploying them across Web, WhatsApp, Slack, and Telegram.',
    features: ['Omnichannel Deployment (Web, WhatsApp, Slack)', 'Contextual Memory & Multi-Turn Dialogue', 'Human Escalation & Live Agent Handoff', 'CRM & Ticket Creation Integration', 'Sentiment Analysis & Tone Matching', 'Multilingual Support (50+ Languages)'],
    capabilities: [
      { title: 'CRM Synchronization', desc: 'Automatically creating leads in HubSpot or tickets in Zendesk when complex issues arise.' },
      { title: 'Dynamic Transactional Actions', desc: 'Bots capable of checking order status, processing refunds, and booking appointments.' },
      { title: 'Smooth Human Handoff', desc: 'Seamlessly transitioning frustrated users to a human support agent with full chat context.' }
    ],
    industries: ['E-Commerce', 'Banking', 'Hospitality', 'Real Estate'],
    benefits: [
      { title: '85% Inquiries Resolved Instantly', desc: 'Immediate answers to FAQs without waiting in support queues.' },
      { title: 'Round-the-Clock Sales Concierge', desc: 'Guide undecided shoppers to the right product at 2 AM.' },
      { title: 'Significant Support Savings', desc: 'Cut call center operational expenses by over 50%.' }
    ],
    stats: [
      { value: '85%', label: 'Resolution Rate' },
      { value: '50+', label: 'Languages Supported' },
      { value: '24/7', label: 'Availability' }
    ],
    faqs: [
      { question: 'Can the bot hallucinate incorrect answers?', answer: 'We constrain the bot strictly using guardrails and verified knowledge-base embeddings (RAG) so it never invents false policies.' },
      { question: 'Can we monitor chat logs and bot performance?', answer: 'Yes! You receive an analytics dashboard displaying satisfaction scores, drop-off questions, and conversation recordings.' }
    ]
  },
  {
    id: 's15',
    slug: 'cms-development',
    title: 'CMS Development',
    shortDesc: 'Headless Content Management Systems (Sanity, Strapi, Contentful) empowering marketing teams without developer bottlenecks.',
    tagline: 'Empower your marketing team to publish content at the speed of thought.',
    iconName: 'FileText',
    category: 'core',
    overview: 'Say goodbye to fragile monolithic CMS plugins and painful security vulnerabilities. Vigyaapn develops bespoke headless CMS solutions that empower non-technical editors to create rich landing pages, manage media, and localize content with visual live previews.',
    features: ['Headless CMS (Sanity, Strapi, Contentful)', 'Visual Page Builders & Dynamic Blocks', 'Multi-Language Localization', 'Role-Based Publishing Workflows', 'Instant Preview & Live Drafts', 'Asset Optimization & CDN Distribution'],
    capabilities: [
      { title: 'Custom Content Models', desc: 'Structured schema models that match your editorial workflow rather than rigid generic templates.' },
      { title: 'Live Visual Editing', desc: 'Preview changes on production-identical staging environments before publishing.' },
      { title: 'Global CDN Delivery', desc: 'Content served via distributed edge caches with instant cache invalidation on publish.' }
    ],
    industries: ['Publishing', 'B2B SaaS', 'Education', 'Corporate Brands'],
    benefits: [
      { title: 'Zero Developer Dependence for Marketing', desc: 'Marketing teams launch new campaign pages independently in hours.' },
      { title: 'Bulletproof Security', desc: 'Headless separation means no public database or server exploits like WordPress vulnerabilities.' },
      { title: 'Omnichannel Publishing', desc: 'One content hub publishing simultaneously to web, mobile apps, and digital signage.' }
    ],
    stats: [
      { value: '10x', label: 'Faster Publishing Cycles' },
      { value: '0', label: 'Plugin Vulnerability Fears' },
      { value: '100%', label: 'Structured Content' }
    ],
    faqs: [
      { question: 'Which headless CMS do you recommend?', answer: 'We love Sanity.io for custom real-time collaboration and Strapi for self-hosted open-source requirements.' },
      { question: 'Can our team write blogs without coding?', answer: 'Yes! The interface is as simple and intuitive as Google Docs or Notion, with custom interactive components.' }
    ]
  },
  {
    id: 's16',
    slug: 'devops-solutions',
    title: 'DevOps Solutions',
    shortDesc: 'Complete automated software delivery lifecycle, container governance, security scanning, and reliability engineering.',
    tagline: 'Bridging the gap between software development and continuous operations.',
    iconName: 'Settings',
    category: 'advanced',
    overview: 'Elevate your engineering team’s delivery cadence with state-of-the-art DevOps solutions. We streamline release trains, implement automated static code analysis, and configure zero-trust network boundaries so your team ships features with confidence.',
    features: ['GitOps Workflows (ArgoCD)', 'Static Analysis & Security Scanning (SAST/DAST)', 'Secrets Management (HashiCorp Vault)', 'Automated Rollbacks & Health Probes', 'Cloud FinOps & Capacity Planning', 'SRE Incident Response Automation'],
    capabilities: [
      { title: 'Shift-Left Security', desc: 'Automated vulnerability and dependency scanning integrated directly into every pull request.' },
      { title: 'GitOps Infrastructure', desc: 'Declarative infrastructure state stored in Git; commits drive automated cluster state reconciliations.' },
      { title: 'On-Call Incident Escalation', desc: 'PagerDuty and Slack integrations routing urgent alerts with deep diagnostic logs.' }
    ],
    industries: ['Fintech', 'Cybersecurity', 'Enterprise SaaS', 'HealthTech'],
    benefits: [
      { title: 'Eliminate Human Error in Releases', desc: 'Every release is automated, repeatable, and verified by health checks.' },
      { title: 'Fast Mean Time to Recovery (MTTR)', desc: 'Automated rollbacks restore working versions in seconds if an issue arises.' },
      { title: 'Audit-Ready Compliance', desc: 'Every commit, change, and deployment is immutably logged for SOC2 and ISO compliance.' }
    ],
    stats: [
      { value: '<60s', label: 'Automated Rollback' },
      { value: '99.99%', label: 'System Uptime' },
      { value: 'Zero', label: 'Manual Deployment Errors' }
    ],
    faqs: [
      { question: 'How does DevOps impact developer velocity?', answer: 'By automating testing, provisioning, and deployments, engineers spend time writing core product code instead of fighting infrastructure.' },
      { question: 'Can you work with on-premise servers?', answer: 'Yes, we support hybrid clouds, bare-metal Kubernetes clusters, and private data centers.' }
    ]
  },
  {
    id: 's17',
    slug: 'mvp-development',
    title: 'MVP Development',
    shortDesc: 'Rapid Minimum Viable Product engineering in 4 to 8 weeks to validate market fit and secure early funding.',
    tagline: 'Turn your startup vision into a working, fundable product in weeks.',
    iconName: 'Rocket',
    category: 'advanced',
    overview: 'Speed is the ultimate unfair advantage for early-stage founders. Vigyaapn specializes in high-velocity MVP development, ruthlessly prioritizing core value propositions to get your software in front of actual users and venture investors fast.',
    features: ['Lean Scope Definition & Wireframing', 'Production-Ready Architecture', 'User Authentication & Stripe Onboarding', 'Analytics & User Funnel Tracking', 'Investor Pitch Demo Preparation', 'Scalable Codebase (No Throwaway Code)'],
    capabilities: [
      { title: 'Scope Laser-Focus', desc: 'Helping you cut peripheral features to launch the core value driver on schedule.' },
      { title: 'Future-Proof Foundation', desc: 'Writing clean, modular code that you can scale rather than having to rebuild from scratch.' },
      { title: 'Investor Readiness', desc: 'Polished design, rock-solid stability, and clear metrics tracking that impress angel and venture capital firms.' }
    ],
    industries: ['Startups', 'Venture Studios', 'Corporate Innovations', 'Tech Incubators'],
    benefits: [
      { title: 'Launch in 4 to 8 Weeks', desc: 'Go from wireframe concept to live production URL in record time.' },
      { title: 'Preserve Startup Runway', desc: 'Fixed-price sprints prevent budget creep and costly engineering dead-ends.' },
      { title: 'Real User Feedback', desc: 'Test real market willingness to pay before investing heavily in secondary features.' }
    ],
    stats: [
      { value: '4-8 Wks', label: 'Average MVP Launch' },
      { value: '$15M+', label: 'Raised by Our MVP Clients' },
      { value: '100%', label: 'Production Ready Code' }
    ],
    faqs: [
      { question: 'Will I need to rewrite the code when scaling?', answer: 'No! We build on Next.js, Node.js, and PostgreSQL using clean architectures that scale seamlessly to hundreds of thousands of users.' },
      { question: 'Do you help with product strategy?', answer: 'Yes, our product strategists help prioritize features based on user value, technical feasibility, and monetization potential.' }
    ]
  },
  {
    id: 's18',
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    shortDesc: 'Multi-tenant B2B and B2C software platforms with subscription billing, team management, and metric dashboards.',
    tagline: 'Building durable, scalable, recurring-revenue SaaS products.',
    iconName: 'Grid',
    category: 'enterprise',
    overview: 'Building a SaaS platform requires far more than just UI: it demands multi-tenant data isolation, self-service tier upgrades, usage metering, webhook notifications, and ironclad account security. Vigyaapn is your turnkey SaaS development partner.',
    features: ['Multi-Tenant Database Architectures', 'Stripe Billing, Subscriptions & Metering', 'Team Workspaces & Role Permissions', 'Audit Trails & Activity Feeds', 'In-App Onboarding & Tooltips', 'Usage Telemetry & Churn Analytics'],
    capabilities: [
      { title: 'Tenant Isolation', desc: 'Row-level security (RLS) or schema-per-tenant architectures guaranteeing customer data seclusion.' },
      { title: 'Complex Subscription Logic', desc: 'Handling trials, seat-based billing, grandfathered plans, grace periods, and prorations effortlessly.' },
      { title: 'Customer Success Telemetry', desc: 'Tracking feature adoption, user session frequencies, and churn warning indicators.' }
    ],
    industries: ['Fintech', 'HR Tech', 'Marketing Platforms', 'LegalTech'],
    benefits: [
      { title: 'Maximized Customer Lifetime Value', desc: 'Frictionless self-service upgrades and intuitive user workflows reduce churn.' },
      { title: 'Seamless Enterprise Expansion', desc: 'Ready for enterprise buyers with SSO, audit logs, and custom billing terms.' },
      { title: 'Automated Billing Operations', desc: 'Automated dunning emails and failed payment retries protect your recurring revenue.' }
    ],
    stats: [
      { value: '99.99%', label: 'Platform Availability' },
      { value: 'Zero', label: 'Tenant Data Bleed' },
      { value: '100%', label: 'Stripe Billing Automation' }
    ],
    faqs: [
      { question: 'How do you structure multi-tenancy?', answer: 'Depending on compliance requirements, we implement PostgreSQL Row-Level Security (RLS) or partitioned schemas with encrypted tenant keys.' },
      { question: 'Can we offer free trials and coupons?', answer: 'Yes, we configure Stripe Billing with flexible trial periods, promotional codes, and automated conversion emails.' }
    ]
  },
  {
    id: 's19',
    slug: 'poc-development',
    title: 'POC Development',
    shortDesc: 'Proof of Concept prototypes demonstrating the technical feasibility of complex algorithms, integrations, or hardware.',
    tagline: 'De-risking technical innovation before major capital commitments.',
    iconName: 'Compass',
    category: 'advanced',
    overview: 'Before committing hundreds of thousands of dollars to an unproven technical concept, build a Proof of Concept (POC) with Vigyaapn. We validate complex algorithms, evaluate nascent third-party APIs, and test hardware-software bridges in rapid 2-week spikes.',
    features: ['Technical Feasibility Spikes', 'Algorithm Accuracy Benchmarking', 'API & Third-Party Stress Testing', 'Performance Bottleneck Identification', 'Executive Summary & Feasibility Report', 'Clean Code Transition Path'],
    capabilities: [
      { title: 'Hypothesis Testing', desc: 'Formulating clear technical criteria to prove or disprove feasibility quantitatively.' },
      { title: 'Stress & Latency Testing', desc: 'Pushing experimental architectures to their limits under simulated real-world loads.' },
      { title: 'Architecture Recommendation', desc: 'Providing clear trade-off analyses on cost, speed, and maintainability for executive leadership.' }
    ],
    industries: ['Deep Tech', 'Biotech', 'IoT', 'Fintech', 'AI Research'],
    benefits: [
      { title: 'Avoid Costly Dead Ends', desc: 'Verify feasibility in a 2-week sprint before hiring an entire engineering team.' },
      { title: 'Objective Data for Leadership', desc: 'Empirical latency, accuracy, and cost data to justify further investment.' },
      { title: 'Accelerated Final Execution', desc: 'Code and benchmarks from successful POCs directly inform production development.' }
    ],
    stats: [
      { value: '2 Wks', label: 'Average POC Sprint' },
      { value: '100%', label: 'Objective Empirical Data' },
      { value: '80%', label: 'Technical Risk De-risked' }
    ],
    faqs: [
      { question: 'How is a POC different from an MVP?', answer: 'A POC tests whether a specific technical challenge is solvable (feasibility), whereas an MVP tests whether customers will buy the product (market fit).' },
      { question: 'What deliverables do we receive?', answer: 'You receive working prototype source code, a comprehensive feasibility report, benchmark charts, and a technical recommendation.' }
    ]
  },
  {
    id: 's20',
    slug: 'automation-testing',
    title: 'Automation Testing',
    shortDesc: 'End-to-End (E2E), integration, regression, and load testing pipelines guaranteeing zero regressions on release.',
    tagline: 'Ship with supreme confidence through automated quality assurance.',
    iconName: 'CheckCircle',
    category: 'advanced',
    overview: 'Manual regression testing is slow, expensive, and error-prone. Vigyaapn designs robust automated testing suites using Playwright, Cypress, and Jest that execute thousands of user journeys in parallel, catching bugs before your customers ever encounter them.',
    features: ['End-to-End (E2E) Browser Testing (Playwright)', 'API Integration & Contract Testing', 'Performance & Load Testing (k6)', 'Cross-Device & Browser Matrix', 'Visual Regression Testing', 'Continuous Integration Pipeline Hooks'],
    capabilities: [
      { title: 'Parallel Test Execution', desc: 'Running hundreds of simulated browser tests simultaneously in cloud containers to keep PR checks under 3 minutes.' },
      { title: 'Visual Regression Detection', desc: 'Pixel-level snapshot comparison catching unexpected CSS, padding, and layout breaks automatically.' },
      { title: 'Chaos & Stress Testing', desc: 'Simulating slow networks, dropped packets, and peak database loads with k6.' }
    ],
    industries: ['Fintech', 'E-Commerce', 'Healthcare', 'Mission-Critical SaaS'],
    benefits: [
      { title: 'Zero Release-Day Anxiety', desc: 'Every commit is rigorously tested against all core user conversion paths.' },
      { title: 'Instant Bug Discovery', desc: 'Engineers discover regressions in minutes while the code is fresh in their minds.' },
      { title: 'Reduced QA Labor Costs', desc: 'Free human QA testers to focus on exploratory testing rather than repetitive manual clicks.' }
    ],
    stats: [
      { value: '99.8%', label: 'Test Pass Reliability' },
      { value: '<3min', label: 'Parallel Test Run Time' },
      { value: '80%', label: 'Fewer Production Bugs' }
    ],
    faqs: [
      { question: 'Which automation frameworks do you prefer?', answer: 'We prioritize Playwright for modern, lightning-fast E2E web testing and Jest/Vitest for unit and integration testing.' },
      { question: 'Can you write tests for an existing codebase?', answer: 'Yes! We audit your critical conversion flows (e.g. signup, checkout, billing) and build regression test suites around them.' }
    ]
  }
];
