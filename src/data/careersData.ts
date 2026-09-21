import { JobOpening } from '../types';

export const careersData: JobOpening[] = [
  {
    id: 'job-1',
    slug: 'senior-full-stack-engineer-nextjs-nodejs',
    title: 'Senior Full Stack Engineer (Next.js & Node.js)',
    department: 'Engineering',
    location: 'Remote (US/Europe/India Timezones)',
    type: 'Full-time',
    experience: '5+ Years',
    salaryRange: '$120,000 - $160,000 USD / Competitive Local Tier',
    skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    overview: 'We are seeking a senior full stack engineer who loves building high-performance web products, takes pride in clean code craft, and thrives in high-velocity agile sprints.',
    responsibilities: [
      'Architect and build resilient web applications using Next.js App Router and NestJS/Express.',
      'Collaborate closely with UI/UX designers to translate Figma design systems into pixel-perfect components.',
      'Design relational schemas in PostgreSQL and manage complex migrations using Drizzle or Prisma.',
      'Optimize application latency, Core Web Vitals, and server response times.',
      'Mentor junior and mid-level engineers through thoughtful, constructive pull request reviews.'
    ],
    requirements: [
      '5+ years of professional software engineering experience with JavaScript/TypeScript.',
      'Deep mastery of React, Next.js Server Components, state management, and modern CSS.',
      'Proven track record designing RESTful and GraphQL APIs on Node.js runtimes.',
      'Strong relational database design principles and query profiling skills.',
      'Excellent written and spoken English communication skills.'
    ],
    niceToHave: [
      'Experience with AWS or Google Cloud infrastructure and Docker containerization.',
      'Familiarity with generative AI model integration (OpenAI, Gemini APIs).',
      'Active contributions to open-source software libraries.'
    ],
    benefits: [
      '100% remote flexible work culture with autonomy over your schedule.',
      'Top-of-the-line MacBook Pro workstation and home office stipend.',
      'Comprehensive health, dental, and vision insurance coverage.',
      'Annual learning & conference stipend ($2,500/year).',
      'Generous paid time off (PTO) and paid parental leave.'
    ]
  },
  {
    id: 'job-2',
    slug: 'lead-ai-ml-solutions-architect',
    title: 'Lead AI & Machine Learning Solutions Architect',
    department: 'AI & Data Labs',
    location: 'Remote / Hybrid New York',
    type: 'Full-time',
    experience: '6+ Years',
    salaryRange: '$140,000 - $185,000 USD',
    skills: ['Python', 'RAG', 'Vector Databases', 'OpenAI', 'Gemini', 'LangChain', 'FastAPI'],
    overview: 'Lead the design and implementation of enterprise Retrieval-Augmented Generation (RAG) systems, multi-agent frameworks, and multimodal AI pipelines for our global clientele.',
    responsibilities: [
      'Architect production RAG pipelines combining dense embeddings, sparse BM25, and cross-encoders.',
      'Implement prompt evaluation frameworks and guardrails to prevent hallucinations and bias.',
      'Build scalable asynchronous microservices in Python (FastAPI) deployed on Kubernetes.',
      'Advise startup founders and enterprise CTOs on generative AI adoption strategies and cost modeling.'
    ],
    requirements: [
      '6+ years of software experience, with 2+ years dedicated to LLM and NLP architectures.',
      'Hands-on mastery of OpenAI, Gemini, and open-weights models (Llama 3, Mistral).',
      'Production experience with vector databases (Qdrant, Pinecone, pgvector, Weaviate).',
      'Deep understanding of embedding dimensions, semantic similarity, and chunking heuristics.'
    ],
    niceToHave: [
      'Experience fine-tuning models using LoRA/QLoRA on GPU clusters.',
      'Background in data engineering pipelines (Airflow, Spark, dbt).'
    ],
    benefits: [
      'Substantial GPU compute budget for personal research and experimentation.',
      'Comprehensive healthcare, 401(k) match, and flexible remote policies.',
      'Direct exposure to frontier generative AI projects across diverse industries.'
    ]
  },
  {
    id: 'job-3',
    slug: 'senior-mobile-engineer-react-native-flutter',
    title: 'Senior Mobile Engineer (React Native & Flutter)',
    department: 'Mobile Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ Years',
    salaryRange: '$110,000 - $145,000 USD',
    skills: ['React Native', 'Flutter', 'TypeScript', 'Dart', 'iOS/Android Native Bridges', 'Expo EAS'],
    overview: 'Craft fluid, 60+ FPS mobile applications for iOS and Android that users love. You will own mobile architecture from initial scaffolding to App Store and Google Play submissions.',
    responsibilities: [
      'Build and maintain mission-critical cross-platform mobile apps using React Native and Flutter.',
      'Write custom native TurboModules in Swift and Kotlin for device hardware access.',
      'Optimize animation frame rates, memory footprints, and offline caching systems.',
      'Manage CI/CD build distribution pipelines via Expo Application Services and Fastlane.'
    ],
    requirements: [
      '4+ years of dedicated mobile development experience.',
      'Deep knowledge of React Native New Architecture (Fabric) or Flutter Impeller engine.',
      'Experience releasing and managing multiple apps on the App Store and Google Play.',
      'Solid grasp of mobile security, biometric authentication, and offline data sync.'
    ],
    niceToHave: [
      'Native Swift/SwiftUI or Kotlin/Jetpack Compose background.',
      'Experience with WebRTC or live audio/video streaming on mobile.'
    ],
    benefits: [
      'Remote-first flexibility with asynchronous workflow culture.',
      'Annual hardware refresh program every 24 months.',
      'Generous performance bonuses tied to project delivery excellence.'
    ]
  },
  {
    id: 'job-4',
    slug: 'lead-ui-ux-product-designer',
    title: 'Lead UI/UX Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ Years',
    salaryRange: '$105,000 - $140,000 USD',
    skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Tokens Studio', 'Micro-Interactions'],
    overview: 'Design elegant, human-centered digital experiences for ambitious tech startups and established global brands. You will transform complex workflows into intuitive, beautiful software.',
    responsibilities: [
      'Lead design sprints, user journey mapping, and wireframing for web and mobile products.',
      'Maintain and expand Vigyaapn’s design token libraries and component systems in Figma.',
      'Conduct user interviews, usability testing, and accessibility (WCAG) reviews.',
      'Partner closely with frontend engineers to guarantee pixel-perfect design parity in production.'
    ],
    requirements: [
      '5+ years of experience designing complex web and mobile SaaS or consumer applications.',
      'Stunning portfolio demonstrating mastery of typography, spatial rhythm, and responsive layouts.',
      'Expert-level mastery of Figma auto-layout, component variants, and interactive prototyping.',
      'Clear articulation of design rationale grounded in user psychology and business objectives.'
    ],
    niceToHave: [
      'Basic proficiency with HTML/CSS/Tailwind to understand developer feasibility.',
      'Experience creating motion design and interactive micro-interactions (Lottie, Rive).'
    ],
    benefits: [
      'Collaborative, high-craft design team that respects design rigor.',
      'Flexible working hours and comprehensive health benefits.',
      'Dedicated conference and workshop education budget.'
    ]
  },
  {
    id: 'job-5',
    slug: 'senior-devops-cloud-platform-engineer',
    title: 'Senior DevOps & Cloud Platform Engineer',
    department: 'Cloud Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ Years',
    salaryRange: '$125,000 - $165,000 USD',
    skills: ['Terraform', 'Kubernetes', 'AWS', 'Google Cloud', 'Docker', 'GitHub Actions', 'Datadog'],
    overview: 'Ensure the resilience, security, and scalability of our client infrastructures. You will automate CI/CD pipelines, optimize cloud spend, and design self-healing cloud native environments.',
    responsibilities: [
      'Author and maintain reusable Terraform modules for AWS and Google Cloud workloads.',
      'Deploy, configure, and monitor production Kubernetes (EKS/GKE) clusters.',
      'Implement zero-downtime blue-green and canary deployment pipelines in GitHub Actions.',
      'Audit cloud spending, identify orphaned assets, and enforce FinOps best practices.'
    ],
    requirements: [
      '5+ years in DevOps, SRE, or Cloud Engineering roles.',
      'Deep expertise with Terraform, Docker containerization, and Kubernetes.',
      'Strong background in Linux administration, networking (VPC, DNS, TLS), and IAM security.',
      'Experience configuring centralized telemetry with Prometheus, Grafana, or Datadog.'
    ],
    niceToHave: [
      'AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator).',
      'Experience with GitOps tools like ArgoCD or Flux.'
    ],
    benefits: [
      'Work with modern cloud-native architectures without legacy mainframe debt.',
      'Comprehensive wellness, dental, and medical insurance packages.',
      'Paid certifications and continuous professional development support.'
    ]
  }
];
