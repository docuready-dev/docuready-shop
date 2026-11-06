import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import AmbientBackground from '@/components/home/AmbientBackground';

export default function AboutPage() {
  const works = [
    {
      num: '01',
      name: 'Strovr (LeadPulse)',
      role: 'Autonomous Sales Intelligence & B2B Pipeline CRM',
      year: '2024 — 2026',
      desc: 'Full-stack sales intelligence platform engineered with a unified command dashboard, visual email template studio, event-driven sequencing, live business data extraction via SerpApi, and MongoDB Atlas clustering.',
      stack: 'React 18 · TypeScript · Node.js · Express · MongoDB Atlas · Tailwind CSS',
      link: 'https://github.com/docuready-dev/leadpulse',
    },
    {
      num: '02',
      name: 'LearnReady Psychometrics',
      role: 'Cognitive Testing & Aptitude Evaluation Suite',
      year: '2025 — 2026',
      desc: 'Adaptive cognitive profiling engine developed for universities and talent counselors. Features timed evaluations across numerical, verbal, and spatial domains with real-time analytics and multi-axis radar visualizations.',
      stack: 'React · TypeScript · Framer Motion · Vite · Tailwind CSS',
    },
    {
      num: '03',
      name: 'Aether Spatial Mobile OS',
      role: 'Kinetic Depth Parallax & Gesture Engine',
      year: '2024 — 2025',
      desc: 'Experimental mobile operating system interface designed around depth perception, frosted glass materials, and spatial kinetic physics. Interactive widgets dynamically separate in 3D coordinate space responding to gyroscopes.',
      stack: 'React · Three.js / WebGL · Framer Motion · Touch Physics',
    },
    {
      num: '04',
      name: 'Industrial Telematics & Logistics Apps',
      role: 'High-Density Geospatial Web & Signed Android Builds',
      year: '2024 — 2026',
      desc: 'Production web platforms and signed Android runtimes built for logistics fleets and plant floors. Features geospatial map plotting, dynamic RFQ calculation matrices, offline service-worker caching, and Razorpay/UPI transactional gateways.',
      stack: 'React · Android SDK · PWA Offline Cache · Razorpay · Tailwind CSS',
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-28 bg-[#FAFAFA] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Moving Ambient Line-art Architectural Grid */}
      <AmbientBackground />

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-6xl relative z-10">
        {/* ========================================================= */}
        {/* HERO: Pure Typographic Statement (No Boxes, No Bubbles)   */}
        {/* ========================================================= */}
        <section className="pt-8 pb-20 border-b border-neutral-200">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
              DocuReady Dev · Studio Architecture & Profile
            </p>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-delight-black tracking-tight text-neutral-950 mb-6 leading-[0.95]">
              Ashley Ajoy Ghose
            </h1>

            <p className="text-xl sm:text-3xl md:text-4xl font-delight-light text-neutral-800 max-w-4xl leading-snug tracking-tight mb-12">
              Boutique digital engineering and identity studio based in Mumbai. Authoring high-impact web infrastructure, bespoke graphic systems, and native Android runtimes with ruthless attention to typography, sub-second performance, and visual elegance.
            </p>

            {/* Editorial Metadata Bar (Clean Columns, No Pills) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-neutral-200 font-mono text-xs">
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Architect</span>
                <span className="text-neutral-900 font-semibold">Ashley Ghose (ॲशले घोष)</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Base</span>
                <span className="text-neutral-900 font-semibold">Mumbai, India · Global</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Disciplines</span>
                <span className="text-neutral-900 font-semibold">Web · Android · Identity</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Collaboration</span>
                <span className="text-neutral-900 font-semibold">Direct WhatsApp & Email</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* MANIFESTO: Large Editorial Quote & Flowing Prose          */}
        {/* ========================================================= */}
        <section className="py-24 border-b border-neutral-200">
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-delight-light text-neutral-950 leading-tight tracking-tight mb-16 max-w-5xl">
            "I do not believe in fragmented handoffs between design and engineering. Every platform I construct follows a tightly coupled roadmap where system architecture, UX micro-interactions, database performance, and brand typography evolve concurrently from day one."
          </blockquote>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-base sm:text-lg font-delight-light text-neutral-700 leading-relaxed">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                The Anti-Agency Model
              </h2>
              <p className="text-xl sm:text-2xl font-delight-bold text-neutral-950 tracking-tight leading-snug">
                Eliminating layers of account managers, bloated markups, and disposable AI templates.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p>
                Traditional agency setups are fundamentally broken. Clients navigate tiers of account representatives, creative directors, and offshore outsourced coders where the original product vision dilutes with every handoff—all while incurring massive overhead fees.
              </p>
              <p>
                At the other extreme, automated AI website generators produce fragile, generic shells that crumble under genuine commercial workloads. They lack typographic intentionality, exhibit jarring layout shifts, and trap founders in closed proprietary subscriptions.
              </p>
              <p>
                <strong className="font-delight-semibold text-neutral-950">DocuReady Dev operates as an independent atelier.</strong> When you commission a build, you interface directly with the engineer who authors every TypeScript module, draws every vector mark, and signs every production release.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SELECTED WORKS: Editorial Index / List (No Cards/Boxes)   */}
        {/* ========================================================= */}
        <section className="py-24 border-b border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Selected Engineering Feats
              </p>
              <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
                Architectural Benchmarks
              </h2>
            </div>
            <a
              href="https://docuready-dev.github.io/PortFolio/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-neutral-600 hover:text-neutral-950 flex items-center gap-1.5 transition-colors underline underline-offset-4"
            >
              <span>View Full PortFolio Archive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Clean Editorial Table / Row List */}
          <div className="divide-y divide-neutral-200">
            {works.map((w) => (
              <div key={w.num} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group">
                {/* Number & Name */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-neutral-400 block mb-2">{w.num}</span>
                  <h3 className="text-2xl sm:text-3xl font-delight-bold text-neutral-950 tracking-tight group-hover:text-neutral-600 transition-colors flex items-center gap-2">
                    <span>{w.name}</span>
                    {w.link && (
                      <a href={w.link} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-neutral-950">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-xs font-delight-medium text-neutral-500 mt-1">{w.role}</p>
                </div>

                {/* Narrative Description */}
                <div className="lg:col-span-5 text-sm font-delight-light text-neutral-700 leading-relaxed">
                  <p>{w.desc}</p>
                  <p className="font-mono text-xs text-neutral-500 mt-3">{w.stack}</p>
                </div>

                {/* Timeline */}
                <div className="lg:col-span-3 lg:text-right font-mono text-xs text-neutral-500">
                  <span>{w.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* STUDIO PILLARS: 3-Column Editorial Grid (No Cards/Boxes)  */}
        {/* ========================================================= */}
        <section className="py-24 border-b border-neutral-200">
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Studio Disciplines
            </p>
            <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
              Foundational Tenets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div>
              <span className="font-mono text-xs text-neutral-400 block mb-4">01 / TYPOGRAPHY</span>
              <h3 className="text-xl font-delight-bold text-neutral-950 mb-3 tracking-tight">
                Typographic Hierarchy
              </h3>
              <p className="text-sm font-delight-light text-neutral-700 leading-relaxed mb-4">
                Typography constitutes 90% of web interface design. We compose mathematical typographic scales using optical weights of the Delight type family—from quiet, hairline annotations to monolithic headline anchors.
              </p>
              <p className="font-mono text-xs text-neutral-500">
                Delight 100 — 900 · Zero Layout Shift
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-neutral-400 block mb-4">02 / KINETICS</span>
              <h3 className="text-xl font-delight-bold text-neutral-950 mb-3 tracking-tight">
                60/120 FPS Responsiveness
              </h3>
              <p className="text-sm font-delight-light text-neutral-700 leading-relaxed mb-4">
                Micro-interactions must feel organic. We tune spring physics, cubic-bezier damping curves, and GPU layer compositing so that interfaces glide effortlessly under touch dynamics with sub-100ms response.
              </p>
              <p className="font-mono text-xs text-neutral-500">
                GPU Acceleration · 0.00 CLS Metric
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-neutral-400 block mb-4">03 / SOVEREIGNTY</span>
              <h3 className="text-xl font-delight-bold text-neutral-950 mb-3 tracking-tight">
                100% Commercial IP Ownership
              </h3>
              <p className="text-sm font-delight-light text-neutral-700 leading-relaxed mb-4">
                You pay for bespoke engineering—you own the outcome outright. Upon delivery, 100% of source code, vector assets, and signed binaries transfer to you under the Indian Copyright Act, 1957.
              </p>
              <p className="font-mono text-xs text-neutral-500">
                Full Git History · Zero Vendor Lock-in
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CLOSING: Direct Collaboration (Understated, No Dark Card) */}
        {/* ========================================================= */}
        <section className="pt-24 pb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl sm:text-6xl font-delight-extrabold text-neutral-950 tracking-tight mb-6 leading-tight">
              Ready to construct something enduring?
            </h2>
            <p className="text-lg sm:text-xl font-delight-light text-neutral-700 leading-relaxed mb-10">
              Whether you need verified B2B web infrastructure, industrial fleet branding, or an Android APK runtime, connect directly with Ashley.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20reviewed%20your%20studio%20profile%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-neutral-950 text-white hover:bg-neutral-800 px-7 h-12 rounded-lg font-delight-semibold text-xs sm:text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Ashley Direct (+91 90048 04043)</span>
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-delight-semibold text-neutral-900 hover:text-black transition-colors underline underline-offset-4"
              >
                <span>Browse Production Service Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
