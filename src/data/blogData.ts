import { BlogPost } from '../types';

export const blogData: BlogPost[] = [
  {
    id: 'b1',
    slug: 'nextjs-app-router-production-architecture',
    title: 'Architecting High-Scale Applications with Next.js App Router: Hard Lessons Learned',
    category: 'Development',
    author: {
      name: 'Aditya Sharma',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    date: 'Sep 12, 2024',
    readTime: '8 min read',
    excerpt: 'A deep architectural dive into server components, caching strategies, and data streaming patterns that keep enterprise Next.js applications under 300ms TTFB.',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80',
    tags: ['Next.js', 'React', 'Architecture', 'Performance', 'TypeScript'],
    relatedSlugs: ['rag-ai-enterprise-architecture', 'mastering-tailwind-v4-design-systems'],
    tableOfContents: [
      { id: 'the-server-component-mental-model', title: '1. The Server Component Mental Model' },
      { id: 'caching-pitfalls-and-solutions', title: '2. Caching Pitfalls and Pragmatic Solutions' },
      { id: 'streaming-and-suspense-boundaries', title: '3. Streaming and Suspense Boundaries' },
      { id: 'zero-client-bundle-discipline', title: '4. Zero-Client Bundle Discipline' },
      { id: 'conclusion', title: '5. Conclusion & Architecture Checklist' }
    ],
    content: {
      intro: 'When migrating enterprise applications from the legacy Pages Router to the modern Next.js App Router, teams often treat React Server Components (RSC) simply as faster SSR. This fundamental misunderstanding leads to subtle cache poisoning, hydration waterfalls, and bloated client bundles. Here is how we architect high-throughput Next.js systems at Vigyaapn.',
      sections: [
        {
          id: 'the-server-component-mental-model',
          heading: '1. The Server Component Mental Model',
          paragraphs: [
            'Server Components do not exist merely to pre-render HTML—they allow us to keep heavy dependencies, database credentials, and computational business logic completely on the server. By default, every component in the App Router is a Server Component unless explicitly declared with the "use client" directive.',
            'The key architectural rule we enforce: Push "use client" as far down the component tree as possible. If a header contains an interactive search modal, only the search trigger and modal should be client components; the navigation links and brand typography should remain pure Server Components.'
          ],
          keyTakeaway: 'Keep leaf components interactive and trunk components static to minimize client-side JavaScript execution.'
        },
        {
          id: 'caching-pitfalls-and-solutions',
          heading: '2. Caching Pitfalls and Pragmatic Solutions',
          paragraphs: [
            'Next.js introduces an intricate multi-tier caching system: the Request Memoization, the Data Cache, the Full Route Cache, and the Router Cache. Without deliberate discipline, this can cause stale data to appear to authenticated users.',
            'For dynamic user dashboards, always configure routes with "export const dynamic = force-dynamic" or pass explicit revalidation tags via fetch options. When updating records with Server Actions, invoke revalidateTag() targeting the exact collection key rather than purging the entire route cache.'
          ],
          keyTakeaway: 'Tag your cache keys granularly and rely on tag-based invalidation during mutations.'
        },
        {
          id: 'streaming-and-suspense-boundaries',
          heading: '3. Streaming and Suspense Boundaries',
          paragraphs: [
            'Slow database queries or third-party CRM calls should never block the initial page render. By wrapping slow asynchronous components in React Suspense boundaries, Next.js streams the initial layout and skeleton immediately while continuing to stream delayed data over the same HTTP connection.',
            'Users perceive applications as 3x faster when the layout, navigation, and visual skeleton load within 200ms, even if heavy chart visualizations take an additional 600ms to arrive.'
          ],
          keyTakeaway: 'Segment your pages into instant skeletons and streamed async modules to optimize perceived performance.'
        },
        {
          id: 'zero-client-bundle-discipline',
          heading: '4. Zero-Client Bundle Discipline',
          paragraphs: [
            'Heavy libraries like markdown parsers, syntax highlighters, date formatters, and sanitizers should never be imported into client components. By executing them inside Server Components, their substantial npm dependencies never touch the user’s mobile browser.'
          ],
          keyTakeaway: 'Analyze your client bundle with @next/bundle-analyzer on every pull request.'
        },
        {
          id: 'conclusion',
          heading: '5. Conclusion & Architecture Checklist',
          paragraphs: [
            'Building enterprise applications with Next.js requires unlearning old SPA habits. Embrace server-first data fetching, precise suspense streaming, and aggressive bundle auditing to deliver unforgettable web speeds.'
          ]
        }
      ],
      conclusion: 'By treating the server as an active collaborator rather than a passive HTML stringifier, your engineering team can build resilient digital products that scale to millions of users.'
    }
  },
  {
    id: 'b2',
    slug: 'rag-ai-enterprise-architecture',
    title: 'Enterprise RAG Without Hallucinations: A Production Blueprint for 2024',
    category: 'AI',
    author: {
      name: 'Rohan Mehra',
      role: 'Head of AI Engineering',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
    },
    date: 'Aug 28, 2024',
    readTime: '10 min read',
    excerpt: 'How to build Retrieval-Augmented Generation systems with vector search, reranking models, and context compression that guarantee 99%+ factual precision.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    tags: ['AI', 'RAG', 'Vector DB', 'Gemini', 'OpenAI'],
    relatedSlugs: ['nextjs-app-router-production-architecture', 'microservices-vs-modular-monolith-2024'],
    tableOfContents: [
      { id: 'why-naive-rag-fails', title: '1. Why Naive RAG Fails in Production' },
      { id: 'advanced-chunking-strategies', title: '2. Advanced Semantic Chunking' },
      { id: 'hybrid-search-and-reranking', title: '3. Hybrid Search & Cross-Encoder Reranking' },
      { id: 'citation-anchoring-guardrails', title: '4. Citation Anchoring & Guardrails' },
      { id: 'conclusion', title: '5. Summary Blueprint' }
    ],
    content: {
      intro: 'Deploying generative AI in enterprise settings demands zero tolerance for fabricated facts. When a corporate lawyer or medical clinician asks an AI copilot a question, an incorrect citation can lead to disastrous regulatory liability. In this guide, we break down Vigyaapn’s multi-stage RAG architecture.',
      sections: [
        {
          id: 'why-naive-rag-fails',
          heading: '1. Why Naive RAG Fails in Production',
          paragraphs: [
            'Basic RAG tutorials instruct developers to split text every 500 characters, compute vector embeddings, and retrieve the top 3 nearest chunks. In real-world enterprise documents, this produces disastrous results because critical context is split across chunk boundaries, and vector similarity does not equal keyword precision.'
          ],
          keyTakeaway: 'Naive chunking truncates semantic paragraphs, resulting in incomplete context windows and hallucinations.'
        },
        {
          id: 'advanced-chunking-strategies',
          heading: '2. Advanced Semantic Chunking',
          paragraphs: [
            'Instead of arbitrary token counts, we implement structural hierarchy chunking. Contracts are split by articles and clauses; technical manuals by markdown headings; financial spreadsheets by tabular rows with associated header schemas. We also store parent-child chunk associations so small chunks are matched during search, but the surrounding parent document is fed to the model.'
          ],
          keyTakeaway: 'Structure chunking around document semantics rather than arbitrary token counts.'
        },
        {
          id: 'hybrid-search-and-reranking',
          heading: '3. Hybrid Search & Cross-Encoder Reranking',
          paragraphs: [
            'Dense vector search is great for conceptual similarity, but terrible for exact acronyms, part numbers, or legal citations. We combine dense vector search with sparse BM25 keyword search using Reciprocal Rank Fusion (RRF). Once the top 30 candidates are retrieved, a cross-encoder reranker scores them for exact factual relevance before sending the top 5 to the LLM.'
          ],
          keyTakeaway: 'Combine BM25 and vector search, then refine using a cross-encoder reranker.'
        },
        {
          id: 'citation-anchoring-guardrails',
          heading: '4. Citation Anchoring & Guardrails',
          paragraphs: [
            'We force the LLM to provide verbatim markdown quotes with page numbers for every assertion made. If the model cannot ground an assertion in the retrieved context chunks, our post-processing parser detects the lack of citations and prompts the user that verified data is unavailable.'
          ],
          keyTakeaway: 'Strict citation validation prevents the model from injecting training biases as facts.'
        },
        {
          id: 'conclusion',
          heading: '5. Summary Blueprint',
          paragraphs: [
            'By incorporating semantic chunking, hybrid search, cross-encoder reranking, and citation verification, enterprise organizations can safely deploy AI assistants that staff genuinely trust.'
          ]
        }
      ],
      conclusion: 'Enterprise AI is not magic—it is disciplined data engineering and verifiable information retrieval.'
    }
  },
  {
    id: 'b3',
    slug: 'mastering-tailwind-v4-design-systems',
    title: 'Mastering Tailwind CSS v4: Building Scalable Token-Driven Design Systems',
    category: 'Design',
    author: {
      name: 'Maya Lin',
      role: 'Lead UI/UX Architect',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80'
    },
    date: 'Jul 19, 2024',
    readTime: '6 min read',
    excerpt: 'Explore the modern CSS-first architecture of Tailwind CSS v4, container queries, and how to structure reusable tokens for enterprise multi-brand teams.',
    coverImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    tags: ['Tailwind CSS', 'Design Systems', 'CSS3', 'UI/UX'],
    relatedSlugs: ['nextjs-app-router-production-architecture'],
    tableOfContents: [
      { id: 'the-css-first-evolution', title: '1. The CSS-First Evolution' },
      { id: 'design-tokens-with-css-variables', title: '2. Design Tokens with CSS Variables' },
      { id: 'container-queries-in-practice', title: '3. Container Queries in Practice' },
      { id: 'mathematical-padding-and-radii', title: '4. Mathematical Padding and Radii' },
      { id: 'conclusion', title: '5. Summary' }
    ],
    content: {
      intro: 'Tailwind CSS v4 re-imagines utility styling with a native CSS-first configuration model, lightning-fast Rust-powered compilation, and deep native CSS variables support. Here is how we build scalable design systems with zero bloat.',
      sections: [
        {
          id: 'the-css-first-evolution',
          heading: '1. The CSS-First Evolution',
          paragraphs: [
            'The classic tailwind.config.js is replaced by native @theme blocks directly inside your stylesheet. This brings styles back to native CSS standards while retaining the unmatched productivity of utility classes.'
          ]
        },
        {
          id: 'design-tokens-with-css-variables',
          heading: '2. Design Tokens with CSS Variables',
          paragraphs: [
            'By establishing semantic design tokens (such as --color-brand-primary, --color-surface, --color-border-subtle), we can switch themes instantly across dark and light modes without duplicating classes.'
          ]
        },
        {
          id: 'container-queries-in-practice',
          heading: '3. Container Queries in Practice',
          paragraphs: [
            'Viewport media queries are inherently limited when designing reusable cards. A card inside a narrow sidebar should look different from the same card in a wide hero section. Tailwind v4 native @container queries solve this elegantly.'
          ]
        },
        {
          id: 'mathematical-padding-and-radii',
          heading: '4. Mathematical Padding and Radii',
          paragraphs: [
            'Avoid arbitrary border-radii and haphazard margins. When nesting cards, always calculate the inner radius mathematically: Inner Radius = Outer Radius - Padding.'
          ]
        },
        {
          id: 'conclusion',
          heading: '5. Summary',
          paragraphs: [
            'Clean utility styling elevates product aesthetics while maintaining surgical code hygiene.'
          ]
        }
      ],
      conclusion: 'A disciplined design system is the greatest accelerator for fast-moving engineering teams.'
    }
  },
  {
    id: 'b4',
    slug: 'microservices-vs-modular-monolith-2024',
    title: 'Microservices vs Modular Monolith in 2024: A Pragmatic Decision Framework',
    category: 'Programming',
    author: {
      name: 'Aditya Sharma',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    date: 'Jun 14, 2024',
    readTime: '9 min read',
    excerpt: 'Why dozens of top startups are consolidating distributed microservices back into modular monoliths, and when distributed architecture actually makes sense.',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    tags: ['Backend', 'Microservices', 'Architecture', 'DevOps'],
    relatedSlugs: ['nextjs-app-router-production-architecture', 'rag-ai-enterprise-architecture'],
    tableOfContents: [
      { id: 'the-microservices-hangover', title: '1. The Microservices Hangover' },
      { id: 'what-is-a-modular-monolith', title: '2. What is a True Modular Monolith?' },
      { id: 'the-four-signals-for-splitting', title: '3. The Four Signals for Splitting' },
      { id: 'conclusion', title: '4. Architectural Verdict' }
    ],
    content: {
      intro: 'For years, software engineering dogma mandated decomposing every backend into microservices on day one. Teams with five engineers found themselves managing 20 Docker containers, service meshes, distributed traces, and transactional sagas. Today, pragmatism has returned.',
      sections: [
        {
          id: 'the-microservices-hangover',
          heading: '1. The Microservices Hangover',
          paragraphs: [
            'Network boundaries introduce latency, serialization overhead, and partial failure modes. When a single user click triggers 14 internal HTTP hops, tracing bugs and maintaining local development environments becomes a full-time chore.'
          ]
        },
        {
          id: 'what-is-a-modular-monolith',
          heading: '2. What is a True Modular Monolith?',
          paragraphs: [
            'A modular monolith maintains strict domain boundaries inside a single deployment unit. Modules communicate via clear interfaces and in-memory function calls rather than JSON over HTTP. If a module ever truly requires independent scaling, it can be extracted in an afternoon.'
          ]
        },
        {
          id: 'the-four-signals-for-splitting',
          heading: '3. The Four Signals for Splitting',
          paragraphs: [
            'Only split when: 1) Radical compute divergence (e.g. GPU AI workloads), 2) Divergent security compliance perimeters, 3) Independent team deployment autonomy exceeding 50 engineers, or 4) Distinct data retention laws.'
          ]
        },
        {
          id: 'conclusion',
          heading: '4. Architectural Verdict',
          paragraphs: [
            'Start with a well-governed modular monolith. Premature distribution is the root of endless operational suffering.'
          ]
        }
      ],
      conclusion: 'Great architecture is about delaying irreversible decisions until empirical data demands them.'
    }
  },
  {
    id: 'b5',
    slug: 'cloud-finops-reducing-aws-bills',
    title: 'Cloud FinOps: How We Cut AWS Infrastructure Spend by 38% Without Dropping Performance',
    category: 'Cloud',
    author: {
      name: 'Rohan Mehra',
      role: 'Head of AI Engineering',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80'
    },
    date: 'May 03, 2024',
    readTime: '7 min read',
    excerpt: 'Concrete, actionable cloud cost reduction tactics: Graviton migrations, automated NAT gateway bypasses, and intelligent storage tiering.',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    tags: ['AWS', 'Cloud', 'FinOps', 'DevOps'],
    relatedSlugs: ['microservices-vs-modular-monolith-2024'],
    tableOfContents: [
      { id: 'the-silent-cost-killers', title: '1. The Silent Cost Killers in AWS' },
      { id: 'migrating-to-arm-graviton', title: '2. Migrating to ARM Graviton' },
      { id: 'taming-data-transfer-and-nat-gateways', title: '3. Taming Data Transfer & NAT Gateways' },
      { id: 'conclusion', title: '4. FinOps Checklist' }
    ],
    content: {
      intro: 'Cloud costs have a insidious habit of creeping upward month after month. Unused EBS snapshots, over-provisioned RDS clusters, and idle container allocations quietly bleed startup runways. Here is our systematic approach to right-sizing cloud infrastructure.',
      sections: [
        {
          id: 'the-silent-cost-killers',
          heading: '1. The Silent Cost Killers in AWS',
          paragraphs: [
            'Most organizations waste 30% of their cloud budget on three things: unattached elastic IPs and orphaned EBS volumes, over-provisioned non-production environments that run all weekend, and inter-AZ data transfer fees.'
          ]
        },
        {
          id: 'migrating-to-arm-graviton',
          heading: '2. Migrating to ARM Graviton',
          paragraphs: [
            'Switching EC2, RDS, and ECS tasks from x86 to AWS Graviton 3/4 processors instantly provides up to 25% better price-performance with zero application code changes for Node.js, Python, or Go workloads.'
          ]
        },
        {
          id: 'taming-data-transfer-and-nat-gateways',
          heading: '3. Taming Data Transfer & NAT Gateways',
          paragraphs: [
            'AWS charges hefty fees for traffic routed through NAT Gateways to AWS services like S3 and DynamoDB. Enabling free VPC Endpoints for these services bypasses the NAT Gateway completely, saving thousands of dollars per month.'
          ]
        },
        {
          id: 'conclusion',
          heading: '4. FinOps Checklist',
          paragraphs: [
            'Implement automated shutdown schedules for staging environments, audit orphaned disks with AWS Compute Optimizer, and commit to 1-year Savings Plans for predictable baseline workloads.'
          ]
        }
      ],
      conclusion: 'FinOps is not about cutting corners—it is about maximizing the business value extracted from every cloud dollar spent.'
    }
  },
  {
    id: 'b6',
    slug: 'scaling-mvp-to-series-a-engineering-guide',
    title: 'From MVP to Series A: The Founder’s Technical Roadmap for Sustainable Scale',
    category: 'Business',
    author: {
      name: 'Aditya Sharma',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
    },
    date: 'Apr 22, 2024',
    readTime: '8 min read',
    excerpt: 'Navigating technical debt, hiring your first lead engineers, and establishing continuous deployment pipelines while surviving the chaos of hypergrowth.',
    coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&auto=format&fit=crop&q=80',
    tags: ['Startups', 'MVP', 'Business', 'Leadership'],
    relatedSlugs: ['nextjs-app-router-production-architecture', 'mastering-tailwind-v4-design-systems'],
    tableOfContents: [
      { id: 'the-speed-vs-quality-tradeoff', title: '1. The Speed vs Quality Tradeoff' },
      { id: 'the-three-things-you-cannot-compromise', title: '2. Non-Negotiable Foundations' },
      { id: 'preparing-for-due-diligence', title: '3. Preparing for Technical Due Diligence' },
      { id: 'conclusion', title: '4. Strategic Takeaways' }
    ],
    content: {
      intro: 'Early-stage startup engineering is an intense exercise in risk management. Move too slowly, and you run out of cash before achieving product-market fit. Move too quickly with sloppy code, and your product collapses the moment viral adoption arrives.',
      sections: [
        {
          id: 'the-speed-vs-quality-tradeoff',
          heading: '1. The Speed vs Quality Tradeoff',
          paragraphs: [
            'Intentional technical debt is an acceptable financial tool, provided you track the interest. Hardcoding a billing tier for a pilot customer is fine; building on an unencrypted database with hardcoded master secrets is fatal.'
          ]
        },
        {
          id: 'the-three-things-you-cannot-compromise',
          heading: '2. Non-Negotiable Foundations',
          paragraphs: [
            'Never compromise on: 1) Strict automated database backups with verified point-in-time restores, 2) Comprehensive centralized audit logging, and 3) Clean separation of customer identity and transactional data.'
          ]
        },
        {
          id: 'preparing-for-due-diligence',
          heading: '3. Preparing for Technical Due Diligence',
          paragraphs: [
            'Venture capitalists conduct thorough technical audits before wiring Series A funds. They look for software licensing compliance, clear intellectual property assignment, automated test coverage, and documentation of system architecture.'
          ]
        },
        {
          id: 'conclusion',
          heading: '4. Strategic Takeaways',
          paragraphs: [
            'Partner with experienced senior engineers early who have built high-scale systems before. It is infinitely cheaper to build cleanly once than to rebuild in panic during peak growth.'
          ]
        }
      ],
      conclusion: 'Engineering excellence is not an expense—it is your most durable competitive advantage.'
    }
  }
];
