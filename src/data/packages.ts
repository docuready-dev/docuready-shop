export interface Package {
  id: string;
  name: string;
  category: 'Graphic Design' | 'Web Design' | 'App Development';
  tier: 'Starter' | 'Premium' | 'Standard';
  appType?: 'Android' | 'WebApp';
  price: number;
  priceDisplay: string;
  priceNote?: string;
  description: string;
  features: string[];
  distinguishingFactor?: string;
  deliveryDays: number;
  popular?: boolean;
}

export const CATEGORIES = ['Graphic Design', 'Web Design', 'App Development'] as const;
export type Category = typeof CATEGORIES[number];

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  'Graphic Design': 'Brand identity, logos, vector design, social media assets & marketing collaterals.',
  'Web Design': 'Modern responsive websites, conversion landing pages, and online business platforms.',
  'App Development': 'High-performance Android APK/Play Store apps and Universal Progressive Web Apps.',
};

export const ALL_PACKAGES: Package[] = [
  // ==========================================
  // GRAPHIC DESIGN & BRAND IDENTITY
  // ==========================================
  {
    id: 'logo-starter',
    name: 'Logo Design & Identity',
    category: 'Graphic Design',
    tier: 'Starter',
    price: 1499,
    priceDisplay: '₹1,499',
    priceNote: '3-4 working days',
    description: 'Crisp, modern custom logo tailored to your business with essential brand palette.',
    features: [
      '2 Unique Logo Concepts',
      'Curated Color Palette & Typography',
      'High-Resolution PNG, JPG & Transparent formats',
      '3 Revision Rounds Included',
      'Standard 4-Day Turnaround',
    ],
    distinguishingFactor: 'Best for new ventures needing a clean, professional logo mark immediately.',
    deliveryDays: 4,
  },
  {
    id: 'logo-premium',
    name: 'Complete Brand Identity Suite',
    category: 'Graphic Design',
    tier: 'Premium',
    price: 4999,
    priceDisplay: '₹4,999',
    priceNote: '6-8 working days',
    description: 'Comprehensive brand identity system with full guidelines, social kit & vector source files.',
    features: [
      '5 Creative Logo Explorations',
      'Complete Brand Book & Usage Guidelines',
      'Social Media DP & Banner Kits',
      'Business Card & Letterhead Mockups',
      'Full Vector Master Files (AI, SVG, EPS, PDF)',
      'Unlimited Revisions & Priority Support',
    ],
    distinguishingFactor: 'Full brand guidelines and vector assets ready for trademarking & scale.',
    deliveryDays: 7,
    popular: true,
  },
  {
    id: 'graphic-pack-starter',
    name: 'Social Media & Marketing Graphics',
    category: 'Graphic Design',
    tier: 'Starter',
    price: 2499,
    priceDisplay: '₹2,499',
    priceNote: '1 week',
    description: 'Pack of 5 high-converting promotional banners and social media creatives.',
    features: [
      '5 Custom Designed Social Graphics',
      'Instagram, Facebook & WhatsApp Banner Ratios',
      'Engaging Visual Hooks & Call-to-Actions',
      'Web-Optimized & High-Res Formats',
      '2 Iteration Rounds',
    ],
    distinguishingFactor: 'Fast, on-brand promotional creatives for your ongoing campaigns.',
    deliveryDays: 5,
  },
  {
    id: 'graphic-pack-premium',
    name: 'Monthly Creative Growth Pack',
    category: 'Graphic Design',
    tier: 'Premium',
    price: 6999,
    priceDisplay: '₹6,999',
    priceNote: 'Monthly support',
    description: '15 bespoke graphics, carousel slides, and promotional assets for active brands.',
    features: [
      '15 Custom Designed Creatives / Carousels',
      'Story, Feed, Reel Covers & Ad Banners',
      'Editable Canva / PSD Source Files Included',
      'Brand Consistent Typography & Visual Hierarchy',
      'Unlimited Revisions During Month',
    ],
    distinguishingFactor: 'Dedicated design team on call with editable source file ownership.',
    deliveryDays: 30,
    popular: true,
  },

  // ==========================================
  // WEB DESIGN & DEVELOPMENT
  // ==========================================
  {
    id: 'web-design-starter',
    name: 'Business Website / Landing Page',
    category: 'Web Design',
    tier: 'Starter',
    price: 3499,
    priceDisplay: '₹3,499',
    priceNote: '4-6 working days',
    description: '1–3 page responsive modern website optimized for conversions and quick loading.',
    features: [
      '1–3 Clean Responsive Pages',
      'Mobile & Tablet Fluid Adaptability',
      'Integrated Contact Form & Direct WhatsApp CTA',
      'Fast Performance & Core Web Vitals Optimization',
      'Basic On-Page SEO & Social Previews',
    ],
    distinguishingFactor: 'Cost-effective, lightning-fast digital storefront with zero monthly overhead.',
    deliveryDays: 5,
  },
  {
    id: 'web-design-premium',
    name: 'Custom Multi-Page Portal',
    category: 'Web Design',
    tier: 'Premium',
    price: 7999,
    priceDisplay: '₹7,999',
    priceNote: '10-14 working days',
    description: 'Full 5–8 page interactive business website with CMS, dynamic portfolio & analytics.',
    features: [
      '5–8 Custom Designed Responsive Pages',
      'Interactive Micro-Animations & Modern UI',
      'Content Management (CMS) Ready',
      'Google Analytics & Search Console Integration',
      'Advanced Speed & On-Page SEO Architecture',
      'Free 30-Day Post-Launch Maintenance',
    ],
    distinguishingFactor: 'Multi-page architecture with CMS capabilities for growing service companies.',
    deliveryDays: 12,
    popular: true,
  },
  {
    id: 'ecommerce-starter',
    name: 'Online Catalog / Storefront',
    category: 'Web Design',
    tier: 'Starter',
    price: 4999,
    priceDisplay: '₹4,999',
    priceNote: '7-10 working days',
    description: 'Product catalog showcase with WhatsApp automated ordering system.',
    features: [
      'Product Grid with Category Filters',
      'Item Detail Pages with Images & Specs',
      'Instant WhatsApp Cart Ordering (No Gateway Setup)',
      'Mobile-First Layout for Fast Shoppers',
      'Simple Admin Panel to Manage Items',
    ],
    distinguishingFactor: 'Start selling directly over WhatsApp without complicated merchant accounts.',
    deliveryDays: 8,
  },
  {
    id: 'ecommerce-premium',
    name: 'Full E-Commerce Web Store',
    category: 'Web Design',
    tier: 'Premium',
    price: 11999,
    priceDisplay: '₹11,999',
    priceNote: '14-18 working days',
    description: 'Complete online e-commerce shop with automated checkout, payment gateways & orders.',
    features: [
      'Full Online Shopping Cart & Checkout Flow',
      'Razorpay, UPI & Card Payment Gateway Setup',
      'Automated Order Invoices & Customer Confirmation Emails',
      'Discount Coupons & Promotional Banner Management',
      'Inventory Tracking & Comprehensive Admin Dashboard',
    ],
    distinguishingFactor: 'End-to-end automated payments and fulfillment pipeline for scaling stores.',
    deliveryDays: 16,
    popular: true,
  },

  // ==========================================
  // APP DEVELOPMENT (ANDROID & WEB APPS)
  // ==========================================
  {
    id: 'android-app-standard',
    name: 'Android Mobile App',
    category: 'App Development',
    tier: 'Standard',
    appType: 'Android',
    price: 3599,
    priceDisplay: '₹3,599',
    priceNote: '5-7 working days',
    description: 'Native-feel Android application delivered as a signed, installable APK file.',
    features: [
      'Up to 4 Core Application Screens',
      'Clean Material Design Mobile Interface',
      'Branded App Icon & Launch Splash Screen',
      'Direct WhatsApp Chat & In-App Call Integration',
      'Offline Caching for Key App Pages',
      'Ready-to-Install Signed APK Package',
      '2 Revision Rounds Included',
    ],
    distinguishingFactor: 'Best for local businesses & catalogs wanting a dedicated app icon on customer phones without Play Store maintenance.',
    deliveryDays: 6,
  },
  {
    id: 'android-app-premium',
    name: 'Android Mobile App',
    category: 'App Development',
    tier: 'Premium',
    appType: 'Android',
    price: 8999,
    priceDisplay: '₹8,999',
    priceNote: '12-15 working days',
    description: 'Full-featured dynamic Android app with database, authentication & Play Store readiness.',
    features: [
      'Up to 8–10 Custom Interactive Screens',
      'User Authentication & Profile System (Mobile OTP / Email)',
      'Live Backend Database & REST API Sync',
      'Payment Gateway Integration (Razorpay / UPI In-App)',
      'Push Notification Infrastructure Setup',
      'Google Play Store-Ready AAB & APK Bundles',
      'Admin Web Panel to Manage App Data & Users',
      'Unlimited Revisions & Store Submission Guidance',
    ],
    distinguishingFactor: 'Full transactional backend, user logins, in-app payments, and Google Play Store distribution support.',
    deliveryDays: 14,
    popular: true,
  },
  {
    id: 'webapp-standard',
    name: 'Universal Web App (PWA)',
    category: 'App Development',
    tier: 'Standard',
    appType: 'WebApp',
    price: 3599,
    priceDisplay: '₹3,599',
    priceNote: '5-7 working days',
    description: 'Instant-access Progressive Web App accessible on any browser with home-screen installability.',
    features: [
      'Accessible across All Devices (iOS, Android, Mac, Windows)',
      'Zero Install Friction: Runs Instantly via Web Link',
      'PWA Ready: Users Can "Add to Home Screen"',
      'Up to 4 Interactive Functional Views',
      'Dynamic Client-Side Forms, Logic & Calculations',
      'Instant Updates (No App Store Approval Delay)',
      '2 Revision Rounds Included',
    ],
    distinguishingFactor: 'Zero app store friction: works across iPhone, Android, and Desktop simultaneously from a single web link.',
    deliveryDays: 6,
  },
  {
    id: 'webapp-premium',
    name: 'Universal Web App (PWA)',
    category: 'App Development',
    tier: 'Premium',
    appType: 'WebApp',
    price: 8999,
    priceDisplay: '₹8,999',
    priceNote: '12-15 working days',
    description: 'Cloud-backed SaaS-grade web application with database, auth, payments & admin suite.',
    features: [
      'Multi-Tier Architecture (Client + Database + Auth)',
      'Secure User Sign-up, Sign-in & Session Security',
      'Real-Time Cloud Database Storage (CRUD Operations)',
      'Razorpay / UPI Payment Checkout & Subscription Ready',
      'Dedicated Admin Analytics & Content Management Portal',
      'Automated Email & WhatsApp Transaction Alerts',
      'Custom Domain Setup with Free SSL & Global CDN',
      'Unlimited Revisions & Architecture Handover',
    ],
    distinguishingFactor: 'Complete cloud platform for SaaS MVPs, booking portals, and customer management with live database & payments.',
    deliveryDays: 14,
    popular: true,
  },
];

export const getPackagesByCategory = (category: Category) =>
  ALL_PACKAGES.filter((p) => p.category === category);

export const getFeaturedPackages = () =>
  ALL_PACKAGES.filter((p) => p.popular);
