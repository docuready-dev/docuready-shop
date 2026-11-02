export interface Package {
  id: string;
  name: string;
  category: 'Web Infrastructure & Engineering' | 'Brand Identity & Industrial Systems' | 'Software & Application Builds';
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4' | string;
  appType?: 'Android' | 'WebApp';
  price: number;
  priceDisplay: string;
  priceNote?: string;
  deliveryTimeline: string;
  deliveryDays: number;
  suitability: string;
  description: string;
  features: string[];
  deliverables: string[];
  distinguishingFactor?: string;
  popular?: boolean;
}

export const CATEGORIES = [
  'Web Infrastructure & Engineering',
  'Brand Identity & Industrial Systems',
  'Software & Application Builds',
] as const;

export type Category = typeof CATEGORIES[number];

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  'Web Infrastructure & Engineering':
    'High-performance corporate digital footprints, RFQ modules, and custom enterprise B2B portals with CDN edge routing.',
  'Brand Identity & Industrial Systems':
    'Precision geometric marks, comprehensive corporate identity matrices, and factory/vehicle livery blueprints.',
  'Software & Application Builds':
    'Native Android runtimes, progressive edge web applications, and full-stack operational back-office suites.',
};

export const ALL_PACKAGES: Package[] = [
  // ==========================================
  // CATEGORY 1: WEB INFRASTRUCTURE & ENGINEERING
  // ==========================================
  {
    id: 'web-digital-nexus-core',
    name: 'Digital Nexus Core',
    category: 'Web Infrastructure & Engineering',
    tier: 'Tier 1',
    price: 25000,
    priceDisplay: '₹25,000 – ₹40,000',
    deliveryTimeline: '7 to 10 Business Days',
    deliveryDays: 10,
    suitability:
      'Small-to-mid manufacturing facilities, local logistics operators, and transport fleets that need a verified corporate digital footprint for vendor onboarding, audits, and tenders.',
    description:
      'Verified corporate digital footprint for audits, tenders, and client vendor onboarding with high-performance responsive views.',
    features: [
      '4 to 6 responsive high-performance views (Home, Infrastructure, Fleet/Services, Quality Standards, Compliance, Contact)',
      'Mobile-first performance grid architecture',
      'WhatsApp Business direct communication trigger',
      'Validated client inquiry & quotation forms',
      'Optimized fleet & facility infrastructure showcase',
      'Baseline SSL, HTTP/3, and semantic SEO setup',
    ],
    deliverables: [
      'Production-ready web build',
      'DNS and domain linking',
      'Raw asset handoff',
      'Cross-browser audit',
    ],
    distinguishingFactor:
      'Best for manufacturing units & transport fleets needing rapid vendor compliance onboarding and tender validation.',
  },
  {
    id: 'web-enterprise-grid',
    name: 'Enterprise Grid',
    category: 'Web Infrastructure & Engineering',
    tier: 'Tier 2',
    price: 45000,
    priceDisplay: '₹45,000 – ₹80,000',
    deliveryTimeline: '14 to 20 Business Days',
    deliveryDays: 20,
    popular: true,
    suitability:
      'Multi-branch supply chain firms, regional freight brokers, and high-capacity manufacturing plants requiring detailed technical breakdowns of capabilities and specs.',
    description:
      'Structured enterprise portal with dynamic RFQ inquiry forms, multi-hub maps, and downloadable technical specifications.',
    features: [
      '8 to 12 structured modules with dedicated service landing paths',
      'Dynamic RFQ inquiry forms with automated notifications',
      'Downloadable technical PDF spec sheets and brochures',
      'Interactive multi-hub location and route maps',
      'Full semantic on-page SEO & performance caching',
    ],
    deliverables: [
      'Structured CMS or web build',
      'Integrated downloadable PDF assets',
      'Interactive branch mapping',
      'Form submission logging',
      '30 days post-launch technical support',
    ],
    distinguishingFactor:
      'Engineered for multi-branch supply chains requiring technical RFQ capture and interactive branch hubs.',
  },
  {
    id: 'web-synapse-b2b-suite',
    name: 'Synapse B2B Suite',
    category: 'Web Infrastructure & Engineering',
    tier: 'Tier 3',
    price: 85000,
    priceDisplay: '₹85,000 – ₹1,60,000+',
    deliveryTimeline: '25 to 35 Business Days',
    deliveryDays: 35,
    suitability:
      'Large-scale enterprise supply chains, export houses, shipping lines, and contract manufacturers requiring custom automation, client portals, and API interoperability.',
    description:
      'Custom B2B architecture featuring rate RFQ calculators, tracking APIs, client document portals, and high-concurrency cloud databases.',
    features: [
      'Custom frontend and backend architecture',
      'Interactive freight rate/volume RFQ calculator',
      'Third-party tracking webhook/API integration',
      'Role-gated client portal interface for invoices and documents',
      'High-concurrency database connectivity with CDN edge routing',
    ],
    deliverables: [
      'Custom codebase',
      'API documentation',
      'Administrative control panel',
      'Database schema',
      'Deployment pipeline setup',
    ],
    distinguishingFactor:
      'Complete enterprise B2B suite with role-gated client portal, tracking webhooks, and volume pricing calculators.',
  },

  // ==========================================
  // CATEGORY 2: BRAND IDENTITY & INDUSTRIAL SYSTEMS
  // ==========================================
  {
    id: 'brand-vector-vectorial-mark',
    name: 'Vector Vectorial Mark',
    category: 'Brand Identity & Industrial Systems',
    tier: 'Tier 1',
    price: 1999,
    priceDisplay: '₹1,999',
    deliveryTimeline: '2 to 3 Business Days',
    deliveryDays: 3,
    suitability:
      'New trade contractors, fabrication workshops, and micro-logistics agencies needing a sharp vector mark to replace generic clip art.',
    description:
      'Sharp geometric vector mark designed for manufacturing precision, signage, CNC cutouts, and uniform embroidery.',
    features: [
      '2 bespoke conceptual logo directions based on geometric/monospaced systems',
      'Single-color and dark-mode lockups',
      'Scalable master assets suitable for signage, CNC cutouts, and embroidery',
    ],
    deliverables: [
      'Master vector files (SVG, EPS, high-res PNG)',
      'Exact hex/CMYK color definitions',
    ],
    distinguishingFactor:
      'Fast, geometric vector marks engineered specifically for physical industrial applications and CNC scaling.',
  },
  {
    id: 'brand-system-identity-matrix',
    name: 'System Identity Matrix',
    category: 'Brand Identity & Industrial Systems',
    tier: 'Tier 2',
    price: 5499,
    priceDisplay: '₹5,499',
    deliveryTimeline: '5 to 7 Business Days',
    deliveryDays: 7,
    popular: true,
    suitability:
      'Expanding logistics fleets and commercial suppliers looking to unify customer paperwork, digital communications, and social platforms.',
    description:
      'Complete brand guideline handbook, commercial stationery system, invoice skins, and digital social launch kit.',
    features: [
      '3 refined conceptual variations with alternate horizontal and badge lockups',
      'Commercial stationery system (letterhead, purchase orders, invoice skins, email signatures)',
      'Social media launch kit with 6 editable templates',
      'Typography specifications & brand guidelines',
    ],
    deliverables: [
      'Brand guideline handbook (PDF)',
      'Editable source files',
      'Print-ready stationery PDFs',
      'Digital social kit',
    ],
    distinguishingFactor:
      'Unifies all client-facing paperwork, invoice skins, purchase orders, and social channels under one systematic identity.',
  },
  {
    id: 'brand-industrial-livery-matrix',
    name: 'Industrial Livery Matrix',
    category: 'Brand Identity & Industrial Systems',
    tier: 'Tier 3',
    price: 12499,
    priceDisplay: '₹12,499',
    deliveryTimeline: '8 to 10 Business Days',
    deliveryDays: 10,
    suitability:
      'Heavy transport operations, ocean/air cargo companies, and plant floors requiring strict real-world asset and vehicle branding.',
    description:
      'Vehicle and container livery blueprints, high-vis safety uniform specs, shipping stamps, pallet stencils, and factory badges.',
    features: [
      'Vehicle and container livery blueprints (box trucks, flatbeds, shipping containers, utility vans)',
      'Floor-ready staff wear specs (high-vis jackets, safety helmets, factory uniforms)',
      'Shipping carton stamps, pallet stencil labels, packing tape graphics, and industrial badges',
    ],
    deliverables: [
      'Factory-ready vector print files',
      'Dimensional decal blueprints with scale markers',
      'Full industrial asset kit',
    ],
    distinguishingFactor:
      'Full physical asset blueprints with millimeter scale markers for truck fleets, shipping containers, and factory floor workwear.',
  },

  // ==========================================
  // CATEGORY 3: SOFTWARE & APPLICATION BUILDS
  // ==========================================
  {
    id: 'app-mobile-utility-android',
    name: 'Mobile Utility (Android)',
    category: 'Software & Application Builds',
    tier: 'Tier 1',
    appType: 'Android',
    price: 3999,
    priceDisplay: '₹3,999',
    deliveryTimeline: '5 to 7 Business Days',
    deliveryDays: 7,
    suitability:
      'Localized fleet drivers, shop-floor operators, or field agents needing a lightweight reference app, directory, or contact tool without browser clutter.',
    description:
      'Lightweight native-style Android utility with offline asset caching, one-tap dispatch triggers, and custom branded splash.',
    features: [
      'Up to 4 custom native-style screen views',
      'Offline caching for core assets and reference data',
      'Direct one-tap call and WhatsApp dispatch integration',
      'Custom launcher icon with branded splash screen',
    ],
    deliverables: [
      'Ready-to-install signed Android APK',
      'Screen assets & master icons',
    ],
    distinguishingFactor:
      'Zero-clutter native Android utility ready to sideload directly onto field driver and operator devices.',
  },
  {
    id: 'app-core-android-runtime',
    name: 'Core Android Runtime',
    category: 'Software & Application Builds',
    tier: 'Tier 2',
    appType: 'Android',
    price: 9999,
    priceDisplay: '₹9,999',
    deliveryTimeline: '12 to 15 Business Days',
    deliveryDays: 15,
    popular: true,
    suitability:
      'Transport booking services, warehouse inventory logging, or client-facing tracking utilities requiring verified access and dynamic data updates.',
    description:
      'Full dynamic Android app featuring user authentication, live database synchronization, Razorpay/UPI payments, and push alerts.',
    features: [
      '8 to 10 dynamic UI screens',
      'User authentication (Email/Phone OTP or password login)',
      'Real-time database sync for orders/dispatches',
      'Payment gateway integration (Razorpay/UPI)',
      'Push notification triggers & device alert channels',
    ],
    deliverables: [
      'Google Play Store-compliant Android App Bundle (AAB)',
      'Signed APK package',
      'Backend configuration',
      'Payment gateway sign-off',
    ],
    distinguishingFactor:
      'Live database synchronization, authenticated operator accounts, in-app payments, and Google Play Store distribution.',
  },
  {
    id: 'app-progressive-edge-pwa',
    name: 'Progressive Edge PWA',
    category: 'Software & Application Builds',
    tier: 'Tier 3',
    appType: 'WebApp',
    price: 3999,
    priceDisplay: '₹3,999',
    deliveryTimeline: '5 to 7 Business Days',
    deliveryDays: 7,
    suitability:
      'Quick-access client portals, route calculators, or rate lookup sheets where app store installation creates friction.',
    description:
      'Zero-install cross-device web application executable in any modern browser with home-screen installability and offline caching.',
    features: [
      'Zero-install web shell executable from any browser across mobile and desktop',
      'Add to Home Screen prompt',
      'Up to 4 interactive views with dynamic filter and search logic',
      'Offline caching via service workers',
    ],
    deliverables: [
      'Web app manifest configuration',
      'Service worker caching setup',
      'Production web bundle',
      'Cross-device testing report',
    ],
    distinguishingFactor:
      'Universal browser reach across iOS, Android, and Desktop with zero app store gatekeeping and instant updates.',
  },
  {
    id: 'app-full-stack-application',
    name: 'Full-Stack Application',
    category: 'Software & Application Builds',
    tier: 'Tier 4',
    appType: 'WebApp',
    price: 9999,
    priceDisplay: '₹9,999',
    deliveryTimeline: '12 to 15 Business Days',
    deliveryDays: 15,
    suitability:
      'Back-office management, custom quotation tracking, internal cargo job logging, and operational dashboards.',
    description:
      'Cloud-backed operational SPA featuring multi-role authentication (Admin vs. Client), full CRUD operations, and CSV analytics.',
    features: [
      'Dynamic cloud-backed single-page application',
      'Multi-role authentication (Admin vs. Client)',
      'Full CRUD operations for orders and shipments',
      'Interactive data tables with search and CSV export',
      'Payment gateway hooks & transaction auditing',
    ],
    deliverables: [
      'Deployed web application',
      'Complete database setup',
      'Master admin credentials',
      'Administrative operational documentation',
    ],
    distinguishingFactor:
      'Comprehensive operational command center with role-based access, full cargo/order ledger management, and CSV reporting.',
  },
];

export const getPackagesByCategory = (category: Category) =>
  ALL_PACKAGES.filter((p) => p.category === category);

export const getFeaturedPackages = () =>
  ALL_PACKAGES.filter((p) => p.popular);
