import { TechnologyItem } from '../types';

export const technologiesData: TechnologyItem[] = [
  // FRONTEND
  {
    id: 't-html5',
    slug: 'html5',
    name: 'HTML5',
    category: 'frontend',
    shortDesc: 'Semantic, accessible, and SEO-optimized markup forming the bedrock of modern web experiences.',
    iconName: 'FileCode',
    tagline: 'The structural foundation of the modern, open web.',
    overview: 'HTML5 delivers semantic elements, native media playback, canvas graphics, and accessibility attributes essential for modern search engine indexation and screen reader compatibility.',
    features: ['Semantic Elements (article, section, nav)', 'Native Audio & Video Playback', 'Canvas 2D & WebGL Graphics', 'Local Web Storage APIs', 'Geolocation & Device Orientation', 'WCAG Accessible Microdata'],
    useCases: ['High-Ranking SEO Content Portals', 'Cross-Platform Responsive Web Apps', 'Interactive Browser Visualizations', 'Lightweight Embeddable Widgets'],
    developmentServices: ['Semantic HTML5 Re-architecting', 'Accessibility (a11y) Remediation', 'SEO Structural Optimization', 'Core Web Vitals Engineering'],
    relatedSlugs: ['css3', 'javascript', 'reactjs', 'nextjs'],
    industries: ['Publishing', 'E-Commerce', 'Education', 'Corporate Web'],
    benefits: [
      { title: 'Top-Tier Search Visibility', desc: 'Proper semantic hierarchy helps Google crawlers parse and index your key content effortlessly.' },
      { title: 'Universal Accessibility', desc: 'Native semantic tags enable assistive technologies to orient vision-impaired users seamlessly.' },
      { title: 'Native Performance', desc: 'Zero external JavaScript bundle weight required for basic layout, forms, and audio playback.' }
    ],
    stats: [{ value: '100%', label: 'W3C Compliant' }, { value: '0ms', label: 'Framework Overhead' }, { value: '99.9%', label: 'Device Support' }],
    faqs: [
      { question: 'Why is semantic HTML important for modern frameworks?', answer: 'Even with React or Next.js, search engine bots evaluate the rendered HTML output. Clean semantic markup directly influences page rank.' },
      { question: 'How do you test HTML accessibility?', answer: 'We run automated axe-core accessibility audits combined with manual screen reader navigations on VoiceOver and NVDA.' }
    ]
  },
  {
    id: 't-css3',
    slug: 'css3',
    name: 'CSS3',
    category: 'frontend',
    shortDesc: 'Modern CSS, Flexbox, Grid, container queries, and hardware-accelerated animations for fluid styling.',
    iconName: 'Palette',
    tagline: 'Styling that breathes life, rhythm, and elegance into web applications.',
    overview: 'CSS3 provides powerful layout primitives like CSS Grid and Subgrid, container queries, custom properties, and fluid typography that eliminate layout shifts and bring magazine-quality aesthetics to any screen.',
    features: ['CSS Grid & Flexbox Layouts', 'Container Queries & Responsive Design', 'Hardware-Accelerated CSS Transitions', 'CSS Variables (Custom Properties)', 'Dark Mode & Theme Switching', 'Sub-pixel Typography Control'],
    useCases: ['Design System Theming', 'Fluid Responsive Landing Pages', 'Micro-Interactions & Hover Dynamics', 'Complex Magazine Grid Layouts'],
    developmentServices: ['Tailwind CSS Architecture', 'Design Token Implementation', 'CSS Performance Optimization', 'Cross-Browser Visual Testing'],
    relatedSlugs: ['html5', 'javascript', 'reactjs', 'vuejs'],
    industries: ['Fashion', 'Creative Agencies', 'SaaS', 'Media'],
    benefits: [
      { title: 'Zero Layout Shift', desc: 'Proper aspect-ratio styling guarantees pristine Cumulative Layout Shift (CLS) scores.' },
      { title: 'Dynamic Theming', desc: 'CSS variables enable instant, flash-free dark and light mode switching.' },
      { title: 'Hardware Acceleration', desc: 'Transforms and opacity animations run on the GPU, avoiding main-thread bottlenecks.' }
    ],
    stats: [{ value: '60 FPS', label: 'Smooth Animation' }, { value: '0 CLS', label: 'Layout Shift Score' }, { value: '100%', label: 'Viewport Adaptability' }],
    faqs: [
      { question: 'Do you use CSS-in-JS or utility CSS?', answer: 'We specialize in Tailwind CSS and modern CSS modules for maximum runtime performance and zero runtime JavaScript bloat.' },
      { question: 'How do you handle responsive breakpoints?', answer: 'We design mobile-first with standardized container breakpoints ensuring fluid scaling across phone, tablet, laptop, and ultra-wide displays.' }
    ]
  },
  {
    id: 't-reactjs',
    slug: 'reactjs',
    name: 'React JS',
    category: 'frontend',
    shortDesc: 'Component-based UI architecture, concurrent rendering, and rich ecosystem powering modern interactive applications.',
    iconName: 'Atom',
    tagline: 'The world’s most popular declarative UI library for modern web applications.',
    overview: 'React powers our dynamic web interfaces with reusable components, hooks-based state management, and virtual DOM optimization. From simple landing pages to data-dense dashboards, React provides supreme maintainability.',
    features: ['Component-Driven Architecture', 'Concurrent Mode & Suspense', 'Custom Hooks & State Utilities', 'Virtual DOM Diffing', 'Massive Community Ecosystem', 'Seamless TypeScript Integration'],
    useCases: ['Interactive Web Portals', 'Enterprise Analytics Dashboards', 'Collaborative SaaS Workspaces', 'Dynamic Customer-Facing Applications'],
    developmentServices: ['React App Development', 'Legacy Class to Modern Hooks Migration', 'State Management Architecture', 'Performance Profiling & Optimization'],
    relatedSlugs: ['nextjs', 'javascript', 'nodejs', 'vuejs', 'angular'],
    industries: ['Fintech', 'HealthTech', 'E-Commerce', 'B2B SaaS'],
    benefits: [
      { title: 'Unmatched Reusability', desc: 'Build once and reuse components across your entire application ecosystem.' },
      { title: 'Vast Open-Source Ecosystem', desc: 'Immediate access to battle-tested libraries for charts, tables, forms, and animations.' },
      { title: 'Developer Talent Availability', desc: 'React is the global industry standard, ensuring future-proof maintainability.' }
    ],
    stats: [{ value: '10M+', label: 'Global Developers' }, { value: '99.9%', label: 'Component Stability' }, { value: '2x', label: 'Faster UI Iterations' }],
    faqs: [
      { question: 'What version of React do you use?', answer: 'We build with React 18 and React 19, taking full advantage of Server Components, Suspense, and optimistic actions.' },
      { question: 'Can you migrate our legacy Angular or jQuery app to React?', answer: 'Yes! We conduct phased strangler-pattern migrations that ensure zero business interruption.' }
    ]
  },
  {
    id: 't-angular',
    slug: 'angular',
    name: 'Angular JS',
    category: 'frontend',
    shortDesc: 'Enterprise-grade TypeScript framework featuring two-way data binding, dependency injection, and integrated CLI.',
    iconName: 'Shield',
    tagline: 'Opinionated, robust frontend engineering for massive corporate enterprises.',
    overview: 'Angular provides a comprehensive, batteries-included framework suited for large enterprise environments with strict governance, dependency injection, RxJS reactive programming, and modular organization.',
    features: ['Strict TypeScript By Default', 'Powerful Dependency Injection', 'Reactive Programming with RxJS', 'Built-in Form Validation & Routing', 'Ahead-of-Time (AOT) Compilation', 'Standalone Components & Signals'],
    useCases: ['Banking & Financial Systems', 'Government & Healthcare Portals', 'Large Multi-Team Enterprise Systems', 'Complex ERP Frontends'],
    developmentServices: ['Angular Enterprise Development', 'AngularJS (1.x) to Modern Angular Migration', 'RxJS Stream Architecture', 'Enterprise UI Governance'],
    relatedSlugs: ['reactjs', 'vuejs', 'typescript', 'java'],
    industries: ['Banking', 'Insurance', 'Government', 'Manufacturing'],
    benefits: [
      { title: 'Consistent Architecture', desc: 'Strict conventions ensure any enterprise engineer can step into any module immediately.' },
      { title: 'Built-in Security', desc: 'Angular includes built-in defenses against Cross-Site Scripting (XSS) and injection attacks.' },
      { title: 'First-Class Tooling', desc: 'Comprehensive CLI for automated scaffolding, linting, testing, and bundling.' }
    ],
    stats: [{ value: '100%', label: 'Strict Type Checking' }, { value: 'Zero', label: 'XSS Injection Vulnerabilities' }, { value: '10+ Yrs', label: 'Enterprise Proven' }],
    faqs: [
      { question: 'Do you work with the latest Angular versions?', answer: 'Yes, we work with Angular v17+ featuring Signals, standalone components, and optimized hydration.' },
      { question: 'Is Angular good for high-scale enterprise applications?', answer: 'Yes, its dependency injection and strict directory structure make it ideal for distributed multi-team enterprise codebases.' }
    ]
  },
  {
    id: 't-vuejs',
    slug: 'vuejs',
    name: 'Vue JS',
    category: 'frontend',
    shortDesc: 'Progressive, approachable, and versatile JavaScript framework featuring reactivity and clean single-file components.',
    iconName: 'Compass',
    tagline: 'The progressive framework for creating intuitive, reactive interfaces.',
    overview: 'Vue.js pairs the declarative simplicity of HTML with the power of modern reactivity. Using the Composition API and Vite, Vue enables lightning-fast development iterations and tiny bundle sizes.',
    features: ['Single File Components (.vue)', 'Composition API & Script Setup', 'Fine-Grained Reactivity Engine', 'Lightweight Runtime Footprint', 'Official Pinia State Management', 'Vite-Powered Instant HMR'],
    useCases: ['Interactive Product Configurator UIs', 'SaaS Client Panels', 'Modern Editorial Platforms', 'E-Commerce Storefronts'],
    developmentServices: ['Vue 3 App Development', 'Vue 2 to Vue 3 Upgrades', 'Pinia State Orchestration', 'Custom Vue Component Libraries'],
    relatedSlugs: ['nuxtjs', 'reactjs', 'javascript', 'nextjs'],
    industries: ['Media', 'Retail', 'Consumer Tech', 'EdTech'],
    benefits: [
      { title: 'Gentle Learning Curve', desc: 'Faster developer onboarding translates into shorter sprint cycles and lower costs.' },
      { title: 'Tiny Bundle Size', desc: 'Vue’s minified runtime is only ~16KB, ensuring instantaneous download over mobile networks.' },
      { title: 'High Performance Reactivity', desc: 'Proxy-based tracking updates only the exact DOM nodes that changed.' }
    ],
    stats: [{ value: '16KB', label: 'Runtime Weight' }, { value: '3x', label: 'Faster Initial Load' }, { value: '100%', label: 'Vue 3 Ecosystem' }],
    faqs: [
      { question: 'Why choose Vue over React?', answer: 'Vue offers a cleaner template syntax, official state/routing libraries, and simpler reactivity that requires fewer mental re-rendering checks.' },
      { question: 'Can you migrate Vue 2 projects to Vue 3?', answer: 'Yes! We guide complete upgrades to the Composition API, Vite, and Pinia.' }
    ]
  },
  {
    id: 't-nextjs',
    slug: 'nextjs',
    name: 'Next JS',
    category: 'frontend',
    shortDesc: 'The premier React framework for production with App Router, Server Components, SSR, ISR, and automatic optimization.',
    iconName: 'Zap',
    tagline: 'The enterprise React framework powering the modern, high-speed web.',
    overview: 'Next.js is Vigyaapn’s default framework for ambitious web applications. By blending React Server Components (RSC), automatic image optimization, route handlers, and edge rendering, Next.js delivers unparalleled search engine rankings and sub-second page delivery.',
    features: ['React Server Components (RSC)', 'App Router & Nested Layouts', 'Server-Side Rendering (SSR) & Static Generation (SSG)', 'Incremental Static Regeneration (ISR)', 'Built-in Image & Font Optimization', 'API Route Handlers & Server Actions'],
    useCases: ['High-Traffic E-Commerce Platforms', 'Global SaaS Web Applications', 'SEO-Driven Content Portals', 'Enterprise Customer Dashboards'],
    developmentServices: ['Next.js Architecture & Engineering', 'Pages Router to App Router Migration', 'Edge Caching & Core Web Vitals Tuning', 'Vercel & AWS Amplify Deployment'],
    relatedSlugs: ['reactjs', 'typescript', 'nodejs', 'tailwind'],
    industries: ['E-Commerce', 'B2B SaaS', 'Publishing', 'Fintech'],
    benefits: [
      { title: 'Guaranteed SEO Dominance', desc: 'Pre-rendered HTML arrives immediately to search engine crawlers with full metadata.' },
      { title: 'Zero-Client JavaScript for Static Sections', desc: 'Server components keep your client bundle lightweight and lightning fast.' },
      { title: 'Turnkey Full-Stack Capabilities', desc: 'Secure server actions eliminate the need for boilerplate API routes.' }
    ],
    stats: [{ value: '99+', label: 'Lighthouse Score' }, { value: '<300ms', label: 'Time to First Byte' }, { value: '100%', label: 'App Router Modernity' }],
    faqs: [
      { question: 'Is Next.js suitable for large-scale enterprise apps?', answer: 'Yes, companies like Netflix, Twitch, and TikTok rely on Next.js to handle hundreds of millions of daily visitors.' },
      { question: 'Can Next.js be hosted on AWS or GCP instead of Vercel?', answer: 'Absolutely! We deploy Next.js in containerized Docker environments on AWS ECS, Cloud Run, and Kubernetes with full feature parity.' }
    ]
  },
  {
    id: 't-javascript',
    slug: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    shortDesc: 'The ubiquitous language of the web, powering dynamic interactions, asynchronous streams, and universal runtimes.',
    iconName: 'Code2',
    tagline: 'The dynamic universal language bridging browsers, servers, and devices.',
    overview: 'JavaScript is the fundamental heartbeat of modern interactive computing. We write clean, performant, modern ES2024+ JavaScript with strict asynchronous flow control, event loop mastery, and memory leak prevention.',
    features: ['Modern ECMAScript (ES2024+)', 'Asynchronous Promises & Async/Await', 'Web Workers & Multithreading', 'DOM Event Delegation', 'Browser Storage & IndexedDB', 'Universal Isomorphic Execution'],
    useCases: ['Complex Web Application Logic', 'Interactive Data Visualizations', 'Custom Browser Extensions', 'Real-Time Canvas Games'],
    developmentServices: ['Core JavaScript Refactoring', 'Performance Profiling & Memory Leak Audits', 'Vanilla JS Micro-Library Development', 'Legacy Code Modernization'],
    relatedSlugs: ['html5', 'css3', 'reactjs', 'nodejs'],
    industries: ['All Industries', 'SaaS', 'Media', 'Fintech'],
    benefits: [
      { title: 'Universal Portability', desc: 'Runs identically across every modern browser, operating system, and smart device.' },
      { title: 'Rich Native APIs', desc: 'Native access to web audio, camera, Bluetooth, and geolocation without third-party plugins.' },
      { title: 'Massive Innovation Velocity', desc: 'Continuous annual ECMAScript evolutions continually expanding capabilities.' }
    ],
    stats: [{ value: '98%', label: 'Web Domination' }, { value: 'ES2024', label: 'Language Standard' }, { value: 'Universal', label: 'Browser Support' }],
    faqs: [
      { question: 'Do you recommend TypeScript or plain JavaScript?', answer: 'We strongly advocate for TypeScript on production codebases to catch errors at compile-time, while respecting vanilla JS where zero-transpilation is needed.' },
      { question: 'How do you prevent JavaScript performance bottlenecks?', answer: 'We offload heavy computations to Web Workers, debounce event listeners, and analyze memory profiles using Chrome DevTools.' }
    ]
  },
  {
    id: 't-nuxtjs',
    slug: 'nuxtjs',
    name: 'Nuxt JS',
    category: 'frontend',
    shortDesc: 'Intuitive Vue.js meta-framework featuring auto-imports, file-based routing, and universal rendering.',
    iconName: 'Layers',
    tagline: 'The intuitive Vue framework for creating modern, search-optimized web apps.',
    overview: 'Nuxt brings the elegance of Vue 3 together with server-side rendering, static site generation, and file-based routing. It provides an exceptionally joyful developer experience with automatic component imports and Nitro server engine.',
    features: ['Vue 3 + Vite Engine', 'File-Based Automatic Routing', 'Zero-Config Auto-Imports', 'Nitro Universal Server Engine', 'Hybrid Rendering (SSR, SSG, SWR)', 'Built-in SEO & Meta Helpers'],
    useCases: ['High-Velocity Content Platforms', 'Vue-Based E-Commerce Frontends', 'SEO-Critical Marketing Sites', 'Multilingual Global Websites'],
    developmentServices: ['Nuxt 3 Architecture & Development', 'Nuxt 2 to Nuxt 3 Migration', 'Nitro Edge API Integration', 'Modular Module Configuration'],
    relatedSlugs: ['vuejs', 'nextjs', 'javascript', 'nodejs'],
    industries: ['Retail', 'Travel & Tourism', 'Media', 'Education'],
    benefits: [
      { title: 'Rapid Developer Velocity', desc: 'Auto-imports and conventions eliminate hundreds of lines of repetitive import boilerplate.' },
      { title: 'Superior SEO Capabilities', desc: 'Universal server rendering produces fully indexed markup with instant social cards.' },
      { title: 'Edge-Ready Deployments', desc: 'The Nitro engine compiles down to run smoothly on Cloudflare Workers and Node environments.' }
    ],
    stats: [{ value: '50%', label: 'Less Boilerplate Code' }, { value: '<1s', label: 'Server Response Time' }, { value: '100%', label: 'Vue 3 Compatibility' }],
    faqs: [
      { question: 'Is Nuxt 3 stable for enterprise use?', answer: 'Yes! Nuxt 3 is exceptionally stable, thoroughly tested, and adopted by global enterprises for high-scale applications.' },
      { question: 'Can Nuxt connect to any backend API?', answer: 'Yes, using `useFetch` and `$fetch`, Nuxt seamlessly connects to REST, GraphQL, or RPC backends with full type safety.' }
    ]
  },

  // BACKEND
  {
    id: 't-php',
    slug: 'php',
    name: 'PHP',
    category: 'backend',
    shortDesc: 'Modern PHP 8+ with Laravel, high-throughput JIT compilation, and rock-solid relational database integration.',
    iconName: 'Server',
    tagline: 'Powering web backends with mature frameworks and modern PHP 8 performance.',
    overview: 'Modern PHP 8 is a sophisticated, typed language with Just-In-Time (JIT) compilation, match expressions, and attributes. Coupled with Laravel, PHP powers clean MVC backends, queue workers, and rapid enterprise web services.',
    features: ['Modern PHP 8.3 Type System & JIT', 'Laravel Framework Ecosystem', 'Eloquent ORM & Schema Migrations', 'Redis Queue Workers & Horizon', 'Composer Dependency Management', 'REST & GraphQL API Controllers'],
    useCases: ['Enterprise Business Systems', 'Custom E-Commerce Backends', 'High-Volume Content Portals', 'B2B Workflow Platforms'],
    developmentServices: ['Modern Laravel Development', 'Legacy PHP Modernization & Refactoring', 'RESTful API Engineering', 'Database Performance Tuning'],
    relatedSlugs: ['nodejs', 'sql-server', 'javascript', 'aws'],
    industries: ['E-Commerce', 'Fintech', 'Real Estate', 'Logistics'],
    benefits: [
      { title: 'Extremely Rapid Development', desc: 'Laravel provides out-of-the-box authentication, queues, mailers, and migrations.' },
      { title: 'Massive Hosting Ecosystem', desc: 'Supported universally across all major cloud providers and dedicated server clusters.' },
      { title: 'Strict Typing & Stability', desc: 'PHP 8 introduces robust typing to prevent runtime mismatches and ensure code clarity.' }
    ],
    stats: [{ value: '75%', label: 'Web Server Market Share' }, { value: '3x', label: 'Speed Increase in PHP 8' }, { value: '100%', label: 'Laravel Best Practices' }],
    faqs: [
      { question: 'Is PHP still relevant in 2024 and beyond?', answer: 'Yes! Modern PHP with Laravel is one of the most productive, stable, and well-architected backend stacks in software engineering.' },
      { question: 'Can you migrate our legacy PHP 5/7 app to PHP 8?', answer: 'Yes, we perform automated and manual refactoring to bring legacy PHP codebases up to PHP 8.3 standards safely.' }
    ]
  },
  {
    id: 't-nodejs',
    slug: 'nodejs',
    name: 'Node JS',
    category: 'backend',
    shortDesc: 'Asynchronous event-driven JavaScript/TypeScript runtime built for scalable network applications.',
    iconName: 'Cpu',
    tagline: 'High-throughput, asynchronous backend runtime for modern microservices.',
    overview: 'Node.js is the backbone of modern full-stack development. Its non-blocking, event-driven I/O model handles tens of thousands of concurrent connections efficiently, making it ideal for real-time applications and microservice architectures.',
    features: ['V8 JavaScript Engine', 'Non-Blocking Event-Driven I/O', 'NestJS & Express Frameworks', 'Socket.io Real-Time WebSockets', 'Rich npm Ecosystem (Over 2M Packages)', 'Native TypeScript Support (via tsx/tsx)'],
    useCases: ['Real-Time Chat & Collaboration Apps', 'High-Concurrency REST & GraphQL APIs', 'IoT Telemetry Ingestion Services', 'Microservices & Serverless Functions'],
    developmentServices: ['Node.js API Development', 'NestJS Enterprise Architecture', 'Microservice Orchestration', 'Performance Profiling & Clustering'],
    relatedSlugs: ['nextjs', 'reactjs', 'javascript', 'aws'],
    industries: ['Fintech', 'SaaS', 'Gaming & Streaming', 'On-Demand Apps'],
    benefits: [
      { title: 'Single Language Across the Stack', desc: 'Share code, models, and types seamlessly between frontend and backend.' },
      { title: 'Superior I/O Concurrency', desc: 'Handles thousands of simultaneous requests without the overhead of heavy thread context switching.' },
      { title: 'Fast Boot Times', desc: 'Lightweight runtime enables rapid container cold starts on AWS Lambda and Google Cloud Run.' }
    ],
    stats: [{ value: '100k+', label: 'Concurrent Connections' }, { value: '<10ms', label: 'API Response Overhead' }, { value: '100%', label: 'TypeScript Native' }],
    faqs: [
      { question: 'Do you prefer Express or NestJS?', answer: 'For large enterprise systems, we favor NestJS for its modular TypeScript architecture and dependency injection. For lightweight APIs, Express or Fastify is ideal.' },
      { question: 'How do you handle CPU-intensive tasks in Node.js?', answer: 'We offload heavy cryptographic or data-crunching tasks to Node Worker Threads or dedicated microservices in Python or Go.' }
    ]
  },
  {
    id: 't-java',
    slug: 'java',
    name: 'Java',
    category: 'backend',
    shortDesc: 'Robust, strongly-typed enterprise powerhouse with Spring Boot, virtual threads, and battle-tested JVM reliability.',
    iconName: 'Database',
    tagline: 'Battle-tested enterprise stability, security, and massive throughput.',
    overview: 'Java and the Java Virtual Machine (JVM) remain the gold standard for mission-critical enterprise banking, telecommunications, and government systems. With modern Java 21 LTS virtual threads, Java delivers extraordinary concurrent throughput.',
    features: ['Java 21 LTS & Virtual Threads (Project Loom)', 'Spring Boot 3 Enterprise Framework', 'Hibernate & JPA Persistence', 'Microservices with Spring Cloud', 'Strict Compile-Time Safety', 'Battle-Tested JVM Garbage Collection'],
    useCases: ['Core Banking & Transaction Engines', 'High-Frequency Trading Platforms', 'Large Enterprise ERP & CRM Backends', 'Mission-Critical Healthcare Systems'],
    developmentServices: ['Spring Boot Microservices', 'Legacy Java Upgrades (Java 8 to 21)', 'High-Throughput Concurrency Tuning', 'Enterprise Architectural Audits'],
    relatedSlugs: ['angular', 'sql-server', 'aws', 'google-cloud'],
    industries: ['Banking & Finance', 'Insurance', 'Government', 'Telecommunications'],
    benefits: [
      { title: 'Uncompromising Reliability', desc: 'The JVM has been hardened by decades of trillion-dollar enterprise production workloads.' },
      { title: 'Massive Concurrency with Virtual Threads', desc: 'Handle millions of simultaneous virtual threads with minimal memory footprint.' },
      { title: 'Enterprise Security Governance', desc: 'Comprehensive compliance with strict international banking and security standards.' }
    ],
    stats: [{ value: '99.999%', label: 'Enterprise Uptime' }, { value: 'Java 21', label: 'Modern LTS Standard' }, { value: 'Millions', label: 'Virtual Threads Handled' }],
    faqs: [
      { question: 'Why choose Java over Node.js or Python?', answer: 'Java is chosen when applications require multi-threaded raw computing power, strict architectural governance, and decades of enterprise stability.' },
      { question: 'Can you migrate our legacy monolithic Java application to Spring Boot microservices?', answer: 'Yes! We decompose legacy Java monoliths into modular, containerized Spring Boot microservices with zero downtime.' }
    ]
  },

  // MOBILE
  {
    id: 't-ios',
    slug: 'ios',
    name: 'iOS',
    category: 'mobile',
    shortDesc: 'Native Apple platform development using Swift and SwiftUI, delivering fluid 120Hz ProMotion experiences.',
    iconName: 'Smartphone',
    tagline: 'Crafting native iOS experiences that embody Apple design perfection.',
    overview: 'Our native iOS team crafts apps using Swift and SwiftUI, taking full advantage of Apple Silicon, CoreML, ARKit, Widgets, Dynamic Island, and Apple Pay to provide smooth, delightful experiences on iPhone and iPad.',
    features: ['Swift 5.9 & SwiftUI Modern Declarative UI', 'Combine & Swift Concurrency (Async/Await)', 'CoreData & SwiftData Persistence', 'Biometric Authentication (Face ID)', 'Dynamic Island & Live Activities', 'Apple Pay & In-App Subscriptions'],
    useCases: ['High-End Consumer Mobile Apps', 'Fintech & Mobile Banking', 'Health & Fitness Trackers', 'Augmented Reality & Camera Apps'],
    developmentServices: ['Native iOS App Development', 'SwiftUI Architecture & Refactoring', 'App Store Optimization (ASO)', 'Apple Watch & Widget Extensions'],
    relatedSlugs: ['android', 'react-native', 'flutter'],
    industries: ['Consumer Tech', 'Health & Wellness', 'Fintech', 'Luxury Brands'],
    benefits: [
      { title: 'Maximum Hardware Performance', desc: 'Direct compilation to ARM64 ensures 120Hz ProMotion fluidity and optimal battery life.' },
      { title: 'First-Day OS Feature Adoption', desc: 'Immediate access to the newest iOS capabilities like Live Activities and Metal graphics.' },
      { title: 'Premium User Demographics', desc: 'iOS users consistently generate higher in-app spend and conversion rates.' }
    ],
    stats: [{ value: '120 Hz', label: 'ProMotion Fluidity' }, { value: '100%', label: 'App Store Approval' }, { value: '4.8+', label: 'Client App Ratings' }],
    faqs: [
      { question: 'Do you develop in SwiftUI or UIKit?', answer: 'We build primarily in SwiftUI for speed and modern ergonomics, leveraging UIKit bridges where deep legacy hardware control is required.' },
      { question: 'Do you help manage test users with TestFlight?', answer: 'Yes! We configure automated CI/CD builds with TestFlight distribution for internal and external beta testing.' }
    ]
  },
  {
    id: 't-android',
    slug: 'android',
    name: 'Android',
    category: 'mobile',
    shortDesc: 'Native Android apps using Kotlin and Jetpack Compose, engineered for the global diversity of mobile hardware.',
    iconName: 'Smartphone',
    tagline: 'Native Android engineering built to scale across global devices.',
    overview: 'Reach billions of global users with native Android applications crafted in Kotlin and Jetpack Compose. We ensure seamless performance across diverse screen sizes, chipsets, and operating system variations.',
    features: ['Kotlin 1.9 & Jetpack Compose UI', 'Coroutines & Flow Reactive Architecture', 'Room Database & Offline Cache', 'Material 3 (You) Dynamic Theming', 'Google Play Billing & In-App Messaging', 'Background WorkManager Optimization'],
    useCases: ['Global Consumer Applications', 'Logistics & Driver Telemetry Apps', 'Field Service & Point of Sale Tablets', 'Enterprise Mobility Solutions'],
    developmentServices: ['Native Kotlin Development', 'Jetpack Compose Migration', 'Battery & Memory Profiling', 'Google Play Store Deployment'],
    relatedSlugs: ['ios', 'flutter', 'react-native'],
    industries: ['Logistics', 'Retail & POS', 'Fintech', 'On-Demand Services'],
    benefits: [
      { title: 'Optimized for Varied Hardware', desc: 'Tested across budget and flagship devices to prevent memory crashes and frame drops.' },
      { title: 'Modern Declarative UI', desc: 'Jetpack Compose cuts boilerplate code and accelerates UI iteration by 40%.' },
      { title: 'Deep OS Customization', desc: 'Leverage foreground services, hardware peripherals, and background telemetry reliably.' }
    ],
    stats: [{ value: '3B+', label: 'Active Android Devices' }, { value: '40%', label: 'Less Boilerplate Code' }, { value: '100%', label: 'Kotlin First' }],
    faqs: [
      { question: 'How do you test on multiple Android devices?', answer: 'We use automated cloud device farms (Firebase Test Lab) testing across dozens of screen resolutions and OS versions.' },
      { question: 'Do you support Android tablets and foldable devices?', answer: 'Yes, Jetpack Compose layouts adapt responsively to foldables, split-screens, and large tablets.' }
    ]
  },
  {
    id: 't-react-native',
    slug: 'react-native',
    name: 'React Native',
    category: 'mobile',
    shortDesc: 'Cross-platform mobile apps for iOS and Android with single codebase efficiency and native performance.',
    iconName: 'Tablet',
    tagline: 'Native performance on iOS and Android from a single unified codebase.',
    overview: 'React Native by Meta enables businesses to ship high-performance mobile apps to both iOS and Android simultaneously. By sharing up to 90% of business logic and UI code, you achieve faster time-to-market and lower maintenance costs.',
    features: ['New Architecture (Fabric & TurboModules)', 'Up to 90% Shared Code Across iOS & Android', 'Expo Application Services (EAS) CI/CD', 'Native Device API Bridges', 'Over-The-Air (OTA) Code Updates', 'Rich React Native Community Ecosystem'],
    useCases: ['Startup MVPs & Multi-Platform Launches', 'On-Demand Delivery & Rideshare Apps', 'E-Commerce Mobile Storefronts', 'Social Networking & Community Apps'],
    developmentServices: ['React Native App Development', 'Expo Managed Workflow Solutions', 'Native Module Bridge Engineering', 'Codebase Performance Optimization'],
    relatedSlugs: ['reactjs', 'flutter', 'ios', 'android', 'typescript'],
    industries: ['Startups', 'Retail', 'Fintech', 'Health & Fitness'],
    benefits: [
      { title: '50% Lower Development Cost', desc: 'One engineering team builds and maintains both platforms simultaneously.' },
      { title: 'Over-the-Air Bug Fixes', desc: 'Push critical UI and JS updates directly to users without waiting days for App Store review.' },
      { title: 'Native Look and Feel', desc: 'Renders genuine native platform controls for authentic iOS and Android behavior.' }
    ],
    stats: [{ value: '90%', label: 'Code Shared Across Platforms' }, { value: '50%', label: 'Cost & Time Savings' }, { value: '60 FPS', label: 'Fabric Renderer Speed' }],
    faqs: [
      { question: 'Does React Native feel like a genuine native app?', answer: 'Yes! With the New Architecture (Fabric), React Native renders actual native view components with synchronous layout diffing.' },
      { question: 'Can we use native Swift or Kotlin libraries when needed?', answer: 'Absolutely. We write custom TurboModules whenever native hardware acceleration is required.' }
    ]
  },
  {
    id: 't-flutter',
    slug: 'flutter',
    name: 'Flutter',
    category: 'mobile',
    shortDesc: 'Google’s open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
    iconName: 'Smartphone',
    tagline: 'Pixel-perfect, multi-platform applications powered by Google’s Skia/Impeller engine.',
    overview: 'Flutter renders every single pixel directly using its own high-speed graphics engine (Impeller). This guarantees completely identical visual fidelity across iOS, Android, web, and desktop with 120 FPS rendering capability.',
    features: ['Google Dart Language & Hot Reload', 'Impeller Graphics Engine', 'Comprehensive Widget Library (Cupertino & Material)', 'Single Codebase for Mobile, Web & Desktop', 'Hardware Acceleration & Skia Shaders', 'Bloc & Riverpod State Management'],
    useCases: ['Visually Expressive Consumer Apps', 'Interactive Financial Dashboards', 'Cross-Platform Enterprise Tools', 'Embedded Systems & Desktop Utilities'],
    developmentServices: ['Flutter Application Development', 'Custom Widget & Animation Engineering', 'Cross-Platform Architecture Design', 'Flutter Web & Desktop Porting'],
    relatedSlugs: ['react-native', 'ios', 'android', 'google-cloud'],
    industries: ['Fintech', 'Automotive & IoT', 'Entertainment', 'EdTech'],
    benefits: [
      { title: 'Total Pixel Precision', desc: 'No platform-specific rendering discrepancies; your design looks identical everywhere.' },
      { title: 'Sub-Second Hot Reload', desc: 'Engineers see code modifications reflected instantly without losing application state.' },
      { title: 'True Multi-Platform Reach', desc: 'Deploy the exact same code to iOS, Android, Web, macOS, and Windows.' }
    ],
    stats: [{ value: '120 FPS', label: 'Impeller Engine Speed' }, { value: '1', label: 'Codebase for 5 Platforms' }, { value: '<1s', label: 'Hot Reload Speed' }],
    faqs: [
      { question: 'How does Flutter compare to React Native?', answer: 'Flutter draws its own canvas pixels via Impeller, ensuring 100% visual consistency. React Native uses native OS UI controls.' },
      { question: 'Is Dart easy to maintain?', answer: 'Yes, Dart is a clean, modern, strongly typed object-oriented language that engineers familiar with TypeScript or Java learn within days.' }
    ]
  },

  // CLOUD / DEVOPS
  {
    id: 't-google-cloud',
    slug: 'google-cloud',
    name: 'Google Cloud',
    category: 'cloud-devops',
    shortDesc: 'Google Cloud Platform (GCP) infrastructure, Google Kubernetes Engine (GKE), Cloud Run, and BigQuery analytics.',
    iconName: 'Cloud',
    tagline: 'Enterprise cloud infrastructure powered by Google’s global network and AI innovation.',
    overview: 'Google Cloud Platform offers premier data analytics, machine learning integration, and serverless container execution. We leverage GCP Cloud Run, BigQuery, and GKE to deliver low-latency global deployments with automated scaling.',
    features: ['Google Kubernetes Engine (GKE)', 'Serverless Cloud Run Containers', 'BigQuery Enterprise Data Warehousing', 'Cloud Spanner & Cloud SQL', 'Vertex AI Model Pipelines', 'VPC Networks & Cloud Armor DDoS Defense'],
    useCases: ['Big Data & Real-Time Analytics', 'AI & Machine Learning Workloads', 'Scalable Microservice Deployments', 'High-Speed Global Content Delivery'],
    developmentServices: ['GCP Cloud Architecture Design', 'Cloud Run & Serverless Deployment', 'BigQuery Data Pipeline Engineering', 'GCP Cost Optimization & FinOps'],
    relatedSlugs: ['aws', 'sql-server', 'nodejs', 'gemini'],
    industries: ['Big Data', 'Fintech', 'Media & Gaming', 'Healthcare'],
    benefits: [
      { title: 'Unmatched AI Integration', desc: 'Direct native integration with Google Vertex AI, Gemini models, and TPU clusters.' },
      { title: 'Superior Serverless Containers', desc: 'Cloud Run allows running any Docker container with instant scale-to-zero pricing.' },
      { title: 'World-Class Global Network', desc: 'Traffic routes over Google’s private fiber backbone rather than the public internet.' }
    ],
    stats: [{ value: '100%', label: 'Green Energy Powered' }, { value: 'Sub-Sec', label: 'Cloud Run Cold Starts' }, { value: 'Petabyte', label: 'BigQuery Scale' }],
    faqs: [
      { question: 'Why choose Google Cloud over AWS?', answer: 'GCP is widely regarded as the leader in data analytics (BigQuery), Kubernetes orchestration (GKE), and generative AI model pipelines.' },
      { question: 'Can you migrate our workloads to GCP?', answer: 'Yes, we handle seamless zero-downtime migrations to GCP with minimal operational disruption.' }
    ]
  },
  {
    id: 't-aws',
    slug: 'aws',
    name: 'AWS',
    category: 'cloud-devops',
    shortDesc: 'Amazon Web Services cloud architecture, ECS/EKS, Lambda serverless, S3 storage, and RDS managed databases.',
    iconName: 'Server',
    tagline: 'The most comprehensive, broadly adopted cloud platform in the world.',
    overview: 'AWS provides over 200 fully featured services from data centers globally. Vigyaapn architects fault-tolerant, multi-region AWS cloud solutions using Terraform, ECS/Fargate, RDS Aurora, and CloudFront.',
    features: ['AWS Lambda & EventBridge Serverless', 'Elastic Container Service (ECS) & EKS', 'Aurora PostgreSQL & DynamoDB', 'CloudFront Global CDN & Route 53', 'IAM Zero-Trust Role Policies', 'S3 Object Storage & Glacier Archiving'],
    useCases: ['Global Enterprise Cloud Infrastructure', 'Elastic SaaS Platforms', 'High-Volume Transactional Systems', 'Disaster Recovery & Redundancy'],
    developmentServices: ['AWS Cloud Migration & Architecture', 'Terraform Infrastructure as Code', 'AWS Well-Architected Framework Audits', 'FinOps Cloud Cost Reduction'],
    relatedSlugs: ['google-cloud', 'sql-server', 'nodejs', 'reactjs'],
    industries: ['Enterprise IT', 'Fintech', 'Government', 'SaaS'],
    benefits: [
      { title: 'Unrivaled Service Depth', desc: 'A managed service exists for virtually every technical challenge in software.' },
      { title: 'Global Multi-Region Footprint', desc: 'Deploy across dozens of geographic availability zones with automated failover.' },
      { title: 'Strict Enterprise Compliance', desc: 'Certified for HIPAA, SOC 1/2/3, FedRAMP, and ISO 27001 standards.' }
    ],
    stats: [{ value: '200+', label: 'Cloud Services' }, { value: '99.99%', label: 'High Availability SLA' }, { value: '35%', label: 'Typical FinOps Savings' }],
    faqs: [
      { question: 'How do you secure AWS environments?', answer: 'We implement the principle of least privilege in IAM, enforce multi-factor authentication, encrypt all data at rest and in transit, and activate AWS GuardDuty.' },
      { question: 'Can you lower our existing AWS monthly bill?', answer: 'Yes! Our AWS FinOps audit typically reduces unnecessary cloud expenditures by 25% to 40% in the first 30 days.' }
    ]
  },
  {
    id: 't-sql-server',
    slug: 'sql-server',
    name: 'SQL Server',
    category: 'cloud-devops',
    shortDesc: 'Relational database management, SQL optimization, transactional integrity, and high-availability clustering.',
    iconName: 'Database',
    tagline: 'Rock-solid relational data integrity, ACID compliance, and enterprise throughput.',
    overview: 'Relational databases are the foundational bedrock of reliable business transactions. We design, optimize, and manage high-performance SQL environments (PostgreSQL, Microsoft SQL Server, MySQL) with automated clustering and indexing.',
    features: ['ACID Transactional Guarantees', 'Complex Indexing & Query Optimization', 'Always-On High Availability Clustering', 'Row-Level Security & TDE Encryption', 'Automated Point-in-Time Backups', 'Stored Procedures & Triggers'],
    useCases: ['Financial Accounting & Ledgers', 'Multi-Tenant SaaS Data Stores', 'Enterprise Inventory & ERP Databases', 'Compliance-Heavy Record Keeping'],
    developmentServices: ['Database Schema & Migration Design', 'Slow Query Profiling & Indexing', 'High Availability Replication Setup', 'Legacy Database Modernization'],
    relatedSlugs: ['nodejs', 'php', 'java', 'aws'],
    industries: ['Banking & Finance', 'Healthcare', 'Supply Chain', 'Government'],
    benefits: [
      { title: 'Guaranteed Data Integrity', desc: 'ACID compliance ensures transactions either succeed completely or roll back cleanly.' },
      { title: 'Complex Relational Joins', desc: 'Query deeply interconnected relational records in milliseconds with optimized indexes.' },
      { title: 'Auditability & Compliance', desc: 'Immutable change logs and transaction histories for rigorous financial reporting.' }
    ],
    stats: [{ value: '100%', label: 'ACID Compliant' }, { value: '<10ms', label: 'Average Query Execution' }, { value: 'Zero', label: 'Uncommitted Data Loss' }],
    faqs: [
      { question: 'Do you recommend PostgreSQL or Microsoft SQL Server?', answer: 'For cloud-native greenfield projects, we love PostgreSQL. For established enterprise Microsoft ecosystems, Microsoft SQL Server is a powerhouse.' },
      { question: 'How do you handle zero-downtime database migrations?', answer: 'We use non-blocking schema migration patterns (expand and contract) with phased background data backfilling.' }
    ]
  },

  // AI
  {
    id: 't-openai',
    slug: 'openai',
    name: 'OpenAI',
    category: 'ai',
    shortDesc: 'Integration with GPT-4o, Assistants API, Whisper speech-to-text, and automated function-calling workflows.',
    iconName: 'Bot',
    tagline: 'State-of-the-art language models and conversational intelligence.',
    overview: 'OpenAI pioneered the modern generative AI revolution. Vigyaapn integrates OpenAI’s GPT-4o, Whisper, and Assistants API into custom business workflows, turning unstructured data into structured outputs and conversational interfaces.',
    features: ['GPT-4o Multimodal Reasoning', 'Tool & Function Calling Orchestration', 'Whisper Accurate Speech Transcription', 'Text Embedding Models for Semantic Search', 'JSON Mode Structured Extraction', 'Assistants API with Code Interpreter'],
    useCases: ['Intelligent Customer Service Copilots', 'Complex Contract & Document Extraction', 'Autonomous Operational Agents', 'Multilingual Content Generation'],
    developmentServices: ['OpenAI API Integration & Prompt Engineering', 'RAG Knowledge Base Implementation', 'Function Calling Middleware Development', 'Token Cost & Latency Optimization'],
    relatedSlugs: ['gemini', 'claude', 'meta-ai', 'nodejs', 'nextjs'],
    industries: ['LegalTech', 'Customer Support', 'Fintech', 'Education'],
    benefits: [
      { title: 'Industry-Leading Reasoning', desc: 'Solves complex multi-step reasoning challenges with unmatched precision.' },
      { title: 'Structured Data Extraction', desc: 'Converts chaotic PDFs and emails into clean, validated JSON schemas automatically.' },
      { title: 'Native Function Calling', desc: 'Allows the LLM to trigger real-world APIs, send emails, or query databases safely.' }
    ],
    stats: [{ value: '128k', label: 'Context Window Tokens' }, { value: '99%', label: 'JSON Schema Accuracy' }, { value: '70%', label: 'Customer Inquiry Automation' }],
    faqs: [
      { question: 'Are our prompts private when using the OpenAI API?', answer: 'Yes! OpenAI does not use data submitted through their commercial API to train models.' },
      { question: 'How do you control token costs?', answer: 'We implement prompt caching, semantic vector retrieval (RAG) to minimize token consumption, and rate-limiting middleware.' }
    ]
  },
  {
    id: 't-gemini',
    slug: 'gemini',
    name: 'Gemini',
    category: 'ai',
    shortDesc: 'Google’s multimodal flagship AI model with 2M+ context window, native audio/video understanding, and high speed.',
    iconName: 'Sparkles',
    tagline: 'Massive multi-million token context and real-time multimodal reasoning from Google.',
    overview: 'Google’s Gemini models represent a leap forward in native multimodality and context length. With context windows reaching up to 2 million tokens, Gemini processes entire codebases, hour-long video feeds, and lengthy manuals in a single query.',
    features: ['Native Multimodal (Text, Audio, Video, Code)', 'Up to 2 Million Token Context Window', 'Gemini 1.5 Pro & Flash Speed Tiers', 'Grounding with Google Search', 'Low Latency Real-Time Voice Processing', 'High Speed Batch API Support'],
    useCases: ['Massive Codebase Audits & Analysis', 'Video & Audio Content Indexing', 'Enterprise Knowledge Retrieval', 'Real-Time Conversational Assistants'],
    developmentServices: ['Google GenAI SDK Integration', 'Long-Context RAG Architectures', 'Multimodal Vision & Audio Pipelines', 'Search Grounding Configuration'],
    relatedSlugs: ['openai', 'claude', 'google-cloud', 'nextjs'],
    industries: ['Media & Video', 'Healthcare', 'Software Engineering', 'Enterprise Knowledge'],
    benefits: [
      { title: 'Unmatched 2M Token Context', desc: 'Upload an entire book, technical manual, or codebase without chunking artifacts.' },
      { title: 'Blazing Fast Flash Models', desc: 'Gemini Flash delivers near-instantaneous responses with ultra-low cost per token.' },
      { title: 'Native Multimodal Input', desc: 'Understand video frames, audio intonation, and imagery simultaneously.' }
    ],
    stats: [{ value: '2M+', label: 'Token Context Window' }, { value: '<1s', label: 'Flash Model Latency' }, { value: 'Native', label: 'Audio & Video Multimodal' }],
    faqs: [
      { question: 'Why use Gemini over other LLMs?', answer: 'Gemini’s multi-million token context and native audio/video processing allow analyzing full documents and media files that break other models.' },
      { question: 'Can Gemini ground its answers in live Google Search results?', answer: 'Yes! Google Search grounding provides factual real-time verification with live citation links.' }
    ]
  },
  {
    id: 't-meta-ai',
    slug: 'meta-ai',
    name: 'Meta AI',
    category: 'ai',
    shortDesc: 'Open-weights Llama 3 models providing complete privacy, self-hosted deployment, and zero vendor lock-in.',
    iconName: 'Cpu',
    tagline: 'Open-source artificial intelligence empowering true data sovereignty.',
    overview: 'Meta’s open-weights Llama models grant organizations complete control over their AI infrastructure. By hosting Llama 3 within your own private VPC or on-premise hardware, you retain 100% intellectual property sovereignty and zero vendor lock-in.',
    features: ['Llama 3 8B, 70B, and 405B Model Architectures', '100% Self-Hosted in Private Cloud (AWS/GCP)', 'Fine-Tuning on Proprietary Domain Data', 'Zero API Rate Limits or External Third-Party Calls', 'Quantization (4-bit/8-bit) for Cost-Effective Hosting', 'vLLM & Ollama High-Throughput Serving'],
    useCases: ['Strictly Regulated Banking & Healthcare AI', 'Proprietary IP Code Generation', 'Offline / Air-Gapped Intelligence Systems', 'Custom Domain-Specific Fine-Tuned Models'],
    developmentServices: ['Private Llama Model Deployment', 'LoRA & QLoRA Fine-Tuning Pipelines', 'High-Throughput vLLM Server Setup', 'Edge Device AI Quantization'],
    relatedSlugs: ['openai', 'claude', 'gemini', 'aws'],
    industries: ['Defense & Government', 'Healthcare & Pharma', 'Banking', 'Proprietary Tech'],
    benefits: [
      { title: 'Absolute Data Sovereignty', desc: 'No customer data ever leaves your encrypted private network perimeter.' },
      { title: 'Zero Per-Token API Billing', desc: 'Fixed compute hosting costs regardless of whether you process 10,000 or 10,000,000 tokens.' },
      { title: 'Custom Fine-Tuning', desc: 'Adapt weights directly to speak your company’s internal terminology and protocols.' }
    ],
    stats: [{ value: '100%', label: 'Data Sovereignty' }, { value: '0', label: 'External API Dependencies' }, { value: '405B', label: 'Frontier Open Weights' }],
    faqs: [
      { question: 'How much does it cost to host Llama 3 privately?', answer: 'With modern quantization (vLLM), Llama 3 8B runs on a single inexpensive GPU instance (~$150/mo), while Llama 70B runs on dual A10G instances.' },
      { question: 'Is Llama 3 comparable in intelligence to proprietary models?', answer: 'Yes! Llama 3 70B and 405B match or exceed commercial closed-source models across standard coding, math, and reasoning benchmarks.' }
    ]
  },
  {
    id: 't-claude',
    slug: 'claude',
    name: 'Claude',
    category: 'ai',
    shortDesc: 'Anthropic’s Claude 3.5 Sonnet and Opus, renowned for nuanced reasoning, clean code generation, and safety.',
    iconName: 'Compass',
    tagline: 'Exceptional nuanced reasoning, coding excellence, and humane AI design.',
    overview: 'Anthropic’s Claude models are celebrated across the software engineering community for exceptional code generation, articulate prose, and deep analytical reasoning. Claude 3.5 Sonnet stands as an industry benchmark for coding and complex logic.',
    features: ['Claude 3.5 Sonnet & Haiku Speed', '200,000 Token Context Window', 'Artifacts Interactive Code & Document Previews', 'Industry-Leading Coding Benchmark Scores', 'Constitutional AI Safety Alignment', 'Vision & Technical Diagram Comprehension'],
    useCases: ['Automated Code Refactoring & Generation', 'Deep Technical Research & Synthesis', 'Nuanced Brand Copywriting & Editorial Review', 'Complex Architectural Design Reviews'],
    developmentServices: ['Claude API Integration', 'Agentic Coding Pipeline Development', 'Technical Analysis Workflow Automation', 'Vision Document Extraction'],
    relatedSlugs: ['openai', 'gemini', 'meta-ai', 'nextjs'],
    industries: ['Software Engineering', 'Publishing & Media', 'Legal Research', 'Consulting'],
    benefits: [
      { title: 'Benchmark-Leading Coding Prowess', desc: 'Writes remarkably clean, idiomatic, and bug-free code across TypeScript, Python, and Rust.' },
      { title: 'Human-Like Nuance', desc: 'Lacks the canned, robotic tone of generic LLMs, producing natural, eloquent responses.' },
      { title: 'Superior System Safety', desc: 'Constitutional AI guardrails minimize toxic or harmful outputs in customer interactions.' }
    ],
    stats: [{ value: '200k', label: 'Token Context' }, { value: '#1', label: 'Coding Benchmark Rank' }, { value: '99.5%', label: 'Prompt Adherence' }],
    faqs: [
      { question: 'Why do developers prefer Claude for coding?', answer: 'Claude 3.5 Sonnet produces fewer subtle hallucinations, generates full working implementations rather than placeholders, and reasons through complex edge cases.' },
      { question: 'Can Claude process images and diagrams?', answer: 'Yes, Claude excels at reading architectural diagrams, UI mockups, and financial charts.' }
    ]
  }
];
