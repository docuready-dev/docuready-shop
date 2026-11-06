import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  Cpu,
  Eye,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AmbientBackground from '@/components/home/AmbientBackground';

interface Project {
  number: string;
  title: string;
  discipline: string;
  period: string;
  description: string;
  impact: string;
  stack: string[];
  link?: string;
}

export default function AboutPage() {
  const [activePrinciple, setActivePrinciple] = useState<'typography' | 'motion' | 'sovereignty'>('typography');

  // Curated flagship engineering works from Ashley's portfolio
  const flagshipProjects: Project[] = [
    {
      number: '01',
      title: 'Strovr (LeadPulse)',
      discipline: 'SaaS Outreach Engine & CRM Intelligence',
      period: '2024 • 2026',
      description:
        'A comprehensive sales intelligence and outreach automation platform. Engineered with a unified command dashboard, visual drag-and-drop email template studio, event-driven sequencing, live business data extraction via SerpApi, and an intuitive pipeline management workflow.',
      impact: 'High-throughput lead discovery with live CSV compilation and MongoDB Atlas clustering.',
      stack: ['React 18', 'TypeScript', 'Node.js', 'Express', 'MongoDB Atlas', 'Tailwind CSS'],
      link: 'https://github.com/docuready-dev/leadpulse',
    },
    {
      number: '02',
      title: 'LearnReady Psychometrics',
      discipline: 'EdTech Cognitive Testing & Aptitude Engine',
      period: '2025 • 2026',
      description:
        'A cognitive assessment and aptitude profiling suite engineered for schools, universities, and career counselors. Features timed adaptive evaluations across verbal, numerical, spatial, and psychometric occupational domains with real-time analytics and predictive career stream recommendations.',
      impact: 'Sub-second real-time scoring engine with multi-axis radar visualizations.',
      stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    },
    {
      number: '03',
      title: 'Aether Spatial Mobile OS',
      discipline: 'Kinetic Depth Parallax & Gesture Engine',
      period: '2024 • 2025',
      description:
        'An experimental mobile operating system interface designed around depth perception, frosted glass materials, and spatial kinetic physics. Interactive widgets dynamically separate in 3D coordinate space during multi-tasking, responding to device gyroscopes and fluid touch dynamics.',
      impact: '60/120 FPS spatial depth physics with zero layout shifts and custom WebGL/CSS shaders.',
      stack: ['React', 'Three.js / WebGL', 'Framer Motion', 'TypeScript', 'Touch Physics'],
    },
    {
      number: '04',
      title: 'Industrial Telematics & Booking Platforms',
      discipline: 'High-Density Geospatial Web & Android Builds',
      period: '2024 • 2026',
      description:
        'Production web applications and signed Android runtimes built for manufacturing floors and logistics networks. Includes geospatial map plotting, dynamic RFQ calculation matrices, offline service-worker caching, and Razorpay/UPI transactional gateways.',
      impact: 'Zero-install universal PWA and Play Store-compliant signed Android APK releases.',
      stack: ['React', 'Android SDK', 'PWA Offline Cache', 'Razorpay', 'Tailwind CSS'],
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Moving Ambient Architectural Grid */}
      <AmbientBackground />

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 max-w-6xl relative z-10">
        {/* ========================================================= */}
        {/* HERO SECTION: High-End Editorial Presentation            */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-16 border-b border-neutral-300"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-delight-black tracking-tight text-neutral-950 mb-3 leading-[0.98]">
              Ashley Ajoy Ghose
            </h1>
            <p className="text-base sm:text-xl font-delight-medium text-neutral-500 mb-6 flex items-center gap-2 flex-wrap">
              <span>ॲशले घोष</span>
              <span className="text-neutral-300">·</span>
              <span>Lead Developer, UI Architect & Spatial Designer</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-900 font-delight-semibold">DocuReady Dev</span>
            </p>

            <p className="text-xl sm:text-3xl font-delight-light text-neutral-800 leading-snug tracking-tight mb-8">
              Authoring high-impact web infrastructure, bespoke graphic systems, and native mobile runtimes from Mumbai, India.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-delight-medium text-neutral-600">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-neutral-300 text-neutral-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Mumbai, India · Available Globally
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-neutral-300 text-neutral-800 shadow-xs">
                Direct WhatsApp: +91 90048 04043
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-neutral-300 text-neutral-800 shadow-xs">
                Single-Hop Architect Collaboration
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* THE ARCHITECT'S MANIFESTO: Engaging & Worth Reading      */}
        {/* ========================================================= */}
        <section className="py-20 border-b border-neutral-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
                The Philosophy of Direct Craftsmanship
              </h2>
              <p className="text-sm font-delight-medium text-neutral-500 mb-6 uppercase tracking-wider">
                Why DocuReady Shop was founded
              </p>
              <div className="p-6 bg-white rounded-2xl border border-neutral-300 shadow-xs">
                <p className="text-xs sm:text-sm font-delight-regular text-neutral-700 italic leading-relaxed">
                  "I do not believe in fragmented handoffs between design and engineering. Every platform I construct follows a tightly coupled roadmap where system architecture, UX micro-interactions, database performance, and brand typography evolve concurrently from day one."
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="font-delight-bold text-neutral-950">Ashley Ghose</span>
                  <span className="font-mono text-neutral-500 text-[11px]">Studio Architect</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base font-delight-light text-neutral-700 leading-relaxed">
              <p>
                Traditional agency setups are fundamentally broken. Clients are forced to navigate bloated tiers of account managers, creative directors, and offshore outsourced coders where the original product vision gets diluted at every handoff—all while incurring exorbitant overhead markups.
              </p>
              <p>
                At the other extreme, modern AI website builders produce generic, fragile templates that crumble under real business workloads. They lack typographic intention, exhibit erratic layout shifts, and trap founders in proprietary recurring subscription jail.
              </p>
              <p>
                <strong className="font-delight-semibold text-neutral-950">DocuReady Shop is built as the antidote.</strong> A boutique digital engineering practice where ambitious founders, manufacturers, and logistics operators interface directly with the engineer who authors every line of TypeScript, designs every vector bezier, and configures every production deployment.
              </p>
              <p>
                No guesswork. No agency telephone games. Just uncompromising craftsmanship, sub-second execution speeds, and fixed milestone pricing in Indian Rupees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950">100%</div>
                  <div className="text-xs font-delight-medium text-neutral-500 mt-1">IP & Source Ownership</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950">60 FPS</div>
                  <div className="text-xs font-delight-medium text-neutral-500 mt-1">Fluid Motion Dynamics</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950">Zero</div>
                  <div className="text-xs font-delight-medium text-neutral-500 mt-1">AI Slop or Lock-in</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FLAGSHIP PLATFORMS: Real Works & Architectural Feats      */}
        {/* ========================================================= */}
        <section className="py-20 border-b border-neutral-300">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950 tracking-tight">
                Architectural Benchmarks & Proven Feats
              </h2>
              <p className="text-xs sm:text-sm font-delight-light text-neutral-500 mt-2 max-w-xl">
                Real-world platforms engineered by Ashley, demonstrating high-concurrency data models, fluid UI dynamics, and resilient codebases.
              </p>
            </div>
            <a
              href="https://docuready-dev.github.io/PortFolio/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-delight-semibold text-neutral-900 hover:text-black flex items-center gap-1.5 underline underline-offset-4 shrink-0"
            >
              <span>View Full PortFolio Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-6">
            {flagshipProjects.map((p) => (
              <div
                key={p.number}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-300 shadow-sm hover:border-neutral-900 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-neutral-400 group-hover:text-neutral-950 transition-colors">
                      {p.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-delight-bold text-neutral-950 tracking-tight flex items-center gap-2">
                        <span>{p.title}</span>
                        {p.link && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-neutral-400 hover:text-neutral-950 transition-colors"
                            title="View repository"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </h3>
                      <p className="text-xs font-delight-medium text-neutral-500 mt-0.5">
                        {p.discipline} · <span className="font-mono text-[11px]">{p.period}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded shrink-0 self-start">
                    Verified Production Scope
                  </span>
                </div>

                <p className="text-sm font-delight-regular text-neutral-700 leading-relaxed mb-4 max-w-4xl">
                  {p.description}
                </p>

                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 mb-5">
                  <div className="text-xs font-delight-semibold text-neutral-900 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
                    <span>Technical Milestone & Architectural Delivery:</span>
                  </div>
                  <p className="text-xs font-delight-light text-neutral-600">
                    {p.impact}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-neutral-100">
                  <span className="text-[11px] font-mono text-neutral-400 mr-2 uppercase tracking-wider">Engineered With:</span>
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-neutral-800 bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* INTERACTIVE INSPECTOR: Worth Watching & Interacting       */}
        {/* ========================================================= */}
        <section className="py-20 border-b border-neutral-300">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950 tracking-tight">
              Interactive Studio Inspector
            </h2>
            <p className="text-xs sm:text-sm font-delight-light text-neutral-500 mt-2">
              Explore the core engineering tenets applied across every DocuReady deliverable.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-neutral-300 p-6 sm:p-10 shadow-sm">
            {/* Interactive Tab Selectors */}
            <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-5 mb-8">
              {[
                { key: 'typography', label: 'Typographic Rigor', icon: Eye },
                { key: 'motion', label: 'Motion Physics & Speed', icon: Zap },
                { key: 'sovereignty', label: '100% IP Sovereignty', icon: Cpu },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activePrinciple === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActivePrinciple(tab.key as any)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-delight-semibold transition-all ${
                      isActive
                        ? 'bg-neutral-950 text-white shadow-xs'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Display Panel */}
            <AnimatePresence mode="wait">
              {activePrinciple === 'typography' && (
                <motion.div
                  key="typography"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="max-w-3xl">
                    <h3 className="text-xl sm:text-2xl font-delight-bold text-neutral-950 mb-2">
                      The Delight Typographic Family
                    </h3>
                    <p className="text-sm font-delight-regular text-neutral-600 leading-relaxed">
                      Typography is not an afterthought; it is 90% of user interface design. At DocuReady, we establish mathematical typographic scales using nine optical weights of the Delight type family—from quiet, hairline editorial subtitles to monumental, confident bold titles.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                    <div className="flex items-baseline justify-between border-b border-neutral-200/80 pb-2">
                      <span className="font-mono text-[11px] text-neutral-400">Delight Black 900</span>
                      <span className="text-2xl sm:text-3xl font-delight-black text-neutral-950 tracking-tight">Monolithic Authority</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-neutral-200/80 pb-2">
                      <span className="font-mono text-[11px] text-neutral-400">Delight Semibold 600</span>
                      <span className="text-xl sm:text-2xl font-delight-semibold text-neutral-950">Refined Action Triggers</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-neutral-200/80 pb-2">
                      <span className="font-mono text-[11px] text-neutral-400">Delight Regular 400</span>
                      <span className="text-sm sm:text-base font-delight-regular text-neutral-700">Effortless editorial reading cadence</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] text-neutral-400">Delight Light 300</span>
                      <span className="text-xs sm:text-sm font-delight-light text-neutral-500">Subtle annotations and spatial descriptions</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activePrinciple === 'motion' && (
                <motion.div
                  key="motion"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="max-w-3xl">
                    <h3 className="text-xl sm:text-2xl font-delight-bold text-neutral-950 mb-2">
                      Spatial Kinetics & 60/120 FPS Responsiveness
                    </h3>
                    <p className="text-sm font-delight-regular text-neutral-600 leading-relaxed">
                      Micro-interactions must feel organic rather than jarring. We tune spring physics, cubic-bezier damping curves, and GPU layer compositing so that screens glide effortlessly under user touch dynamics without dropped frames.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
                      <div className="text-2xl font-mono font-bold text-neutral-950 mb-1">&lt; 100ms</div>
                      <div className="font-delight-semibold text-xs text-neutral-900 mb-1">Instant Interaction TTFB</div>
                      <p className="text-[11px] font-delight-light text-neutral-500">Optimized bundle chunking with zero rendering blocks.</p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
                      <div className="text-2xl font-mono font-bold text-neutral-950 mb-1">0.00 CLS</div>
                      <div className="font-delight-semibold text-xs text-neutral-900 mb-1">Zero Layout Shift</div>
                      <p className="text-[11px] font-delight-light text-neutral-500">Deterministic container sizing for stable reading viewport.</p>
                    </div>
                    <div className="p-5 bg-neutral-50 rounded-2xl border border-neutral-200">
                      <div className="text-2xl font-mono font-bold text-neutral-950 mb-1">GPU Composited</div>
                      <div className="font-delight-semibold text-xs text-neutral-900 mb-1">Hardware Accelerated</div>
                      <p className="text-[11px] font-delight-light text-neutral-500">CSS transform & opacity pipelines executing on the GPU.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activePrinciple === 'sovereignty' && (
                <motion.div
                  key="sovereignty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="max-w-3xl">
                    <h3 className="text-xl sm:text-2xl font-delight-bold text-neutral-950 mb-2">
                      Complete Client IP Sovereignty (Indian Copyright Act, 1957)
                    </h3>
                    <p className="text-sm font-delight-regular text-neutral-600 leading-relaxed">
                      You are paying for bespoke engineering—you should own the result completely. When your milestone is delivered, 100% of the intellectual property, raw SVG vector assets, Figma tokens, Git repositories, and signed APK binaries transfer exclusively to you.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 bg-neutral-50 rounded-2xl border border-neutral-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-delight-semibold text-neutral-950">Raw Source Code & Master Vector Handoff</div>
                        <p className="text-xs font-delight-light text-neutral-600">Clean Git commit history, production web bundle, and editable Figma source artboards.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-delight-semibold text-neutral-950">Zero Hostage Code or Hidden Retainers</div>
                        <p className="text-xs font-delight-light text-neutral-600">Deploy anywhere: Vercel, Netlify, AWS, Cloudflare, or self-hosted servers with no recurring vendor lock-in.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-xs font-delight-semibold text-neutral-950">Statutory Compliance & INR Tax Invoicing</div>
                        <p className="text-xs font-delight-light text-neutral-600">Compliant with Indian IT Act, 2000 and Consumer Protection Rules, with formal invoice documentation.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM INVITATION: Direct Architect Collaboration        */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-delight-black tracking-tight mb-4 text-white">
              Let's build something enduring.
            </h2>
            <p className="font-delight-light text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need a verified corporate digital presence, heavy fleet industrial livery, or a full-stack Android & web platform, speak directly with Ashley.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-neutral-950 hover:bg-neutral-200 rounded-xl px-7 font-delight-semibold gap-2 shadow-lg h-12 text-xs sm:text-sm">
                  <span>Explore 3-Category Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20reviewed%20your%20studio%20profile%20and%20architectural%20manifesto.%20I%20would%20like%20to%20discuss%20a%20commission."
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="outline" className="border-neutral-700 text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl px-7 font-delight-semibold gap-2 h-12 text-xs sm:text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Ashley Direct</span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
