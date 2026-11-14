import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MessageCircle, 
  Type, 
  Palette, 
  Copy, 
  Check 
} from 'lucide-react';
import { toast } from 'sonner';
import AmbientBackground from '@/components/home/AmbientBackground';

export default function AboutPage() {
  const [aestheticMode, setAestheticMode] = useState<'fonts' | 'colors'>('fonts');
  const [sampleText, setSampleText] = useState('Bespoke Architectural Engineering & Spatial Typography');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

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
      link: 'https://docuready-dev.github.io/LearnReady/',
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

  const signatureColors = [
    {
      name: 'Matte Charcoal',
      hex: '#18191E',
      rgb: 'rgb(24, 25, 30)',
      role: 'Primary Ink & Deep Anchor',
      desc: 'Subtly softer than eye-piercing pitch black. Replaces generic black throughout headings, borders, and dominant CTA triggers to prevent optical fatigue while maintaining crisp luxury contrast.',
      lightText: true,
    },
    {
      name: 'Atelier Canvas',
      hex: '#FAFAFA',
      rgb: 'rgb(250, 250, 250)',
      role: 'Atmospheric Warm Canvas',
      desc: 'A tailored off-white backdrop inspired by Swiss architectural books. Evokes natural paper texture with zero clinical glare, ensuring extended reading comfort.',
      lightText: false,
      border: true,
    },
    {
      name: 'Architectural Slate',
      hex: '#E2E2E8',
      rgb: 'rgb(226, 226, 232)',
      role: 'Hairline Grid & Structural Bounds',
      desc: 'Crisp, razor-thin boundary lines for card containers, divider rules, and technical matrices. Provides geometric clarity without visual noise.',
      lightText: false,
      border: true,
    },
    {
      name: 'Forest Dispatch Emerald',
      hex: '#1B7A43',
      rgb: 'rgb(27, 122, 67)',
      role: 'Direct WhatsApp Line & Verified Runtime',
      desc: 'The signature single-hop communication accent in a refined, deep forest emerald. Used selectively on live status indicators, verified checkout pills, and instant WhatsApp chat triggers.',
      lightText: true,
    },
    {
      name: 'Sub-surface Carbon',
      hex: '#2D2E36',
      rgb: 'rgb(45, 46, 54)',
      role: 'Elevated Dark Surface',
      desc: 'Used for hovering interaction layers, code block backgrounds, and secondary badges that sit above the matte charcoal foundation.',
      lightText: true,
    },
    {
      name: 'Muted Coordinates',
      hex: '#8E8E93',
      rgb: 'rgb(142, 142, 147)',
      role: 'Technical Metadata & Timelines',
      desc: 'The quiet baseline tone for monospaced timestamps, category indices, deliverable tags, and coordinate annotations.',
      lightText: true,
    },
  ];

  const fontSpecimens = [
    {
      weight: 'Delight Black 900',
      className: 'font-delight-black',
      size: 'text-3xl sm:text-4xl md:text-5xl',
      role: 'Monolithic Authority & Monumental Titles',
      desc: 'The heavyweight anchor of the studio. Features geometric punch with tight letter tracking, designed for monumental heroes, numerals, and nameplates.',
      sample: sampleText,
    },
    {
      weight: 'Delight ExtraBold 800',
      className: 'font-delight-extrabold',
      size: 'text-2xl sm:text-3xl md:text-4xl',
      role: 'Architectural Category Framing',
      desc: 'Used for domain titles and major section headings. Striking high-contrast presence without overwhelming adjacent text.',
      sample: sampleText,
    },
    {
      weight: 'Delight SemiBold 600',
      className: 'font-delight-semibold',
      size: 'text-xl sm:text-2xl',
      role: 'High-Impact Action Triggers & Navigation',
      desc: 'Calibrated specifically for interactive buttons, navigation items, and cards. Crisp readability at medium and small sizes.',
      sample: sampleText,
    },
    {
      weight: 'Delight Regular 400',
      className: 'font-delight-regular',
      size: 'text-base sm:text-lg',
      role: 'Effortless Editorial Prose & Descriptions',
      desc: 'The workhorse reading weight. Optimized for extended body text, long-form manifestos, and client documentation.',
      sample: 'Every platform I construct follows a tightly coupled roadmap where system architecture, UX micro-interactions, database performance, and brand typography evolve concurrently from day one.',
    },
    {
      weight: 'Delight Light 300',
      className: 'font-delight-light',
      size: 'text-sm sm:text-base text-neutral-600',
      role: 'Subtle Descriptions & Hairline Annotations',
      desc: 'Ultra-refined and airy. Adds architectural delicacy to package suitability, subheads, and secondary explanatory notes.',
      sample: 'Verified corporate digital footprints, RFQ calculators, and edge-routed enterprise B2B portals with zero bloated code.',
    },
    {
      weight: 'Creato Display',
      className: 'font-sans font-semibold tracking-wide',
      size: 'text-lg sm:text-xl',
      role: 'Modernist Geometric Display Companion',
      desc: 'The secondary modernist sans-serif companion font paired with Delight for UI badges and structural hierarchy.',
      sample: 'PRODUCTION SPECIFICATIONS // BENCHMARK TIERS // ARCHITECTURAL DOSSIER',
    },
    {
      weight: 'Monospace System Engine',
      className: 'font-mono text-sm tracking-wider text-neutral-800',
      size: 'text-xs sm:text-sm',
      role: 'Technical Specs, Pricing Tariffs & Deliverables',
      desc: 'Strict tabular numerals, timestamps, file sizes, and price tags. Provides exact scientific alignment across complex data tables.',
      sample: 'TIER-02 // INV: ₹45,000–₹80,000 // DELIVERY: 14-20 DAYS // CODE: TS-REACT-18',
    },
  ];

  const handleCopyColor = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    toast.success(`Copied ${name} (${hex}) to clipboard`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

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
        {/* SELECTED WORKS: Editorial Index With Live Links           */}
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
                {/* Number & Name with Clickable Diagonal Arrow */}
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-neutral-400 block mb-2">{w.num}</span>
                  <h3 className="text-2xl sm:text-3xl font-delight-bold text-neutral-950 tracking-tight group-hover:text-neutral-600 transition-colors">
                    {w.link ? (
                      <a 
                        href={w.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-2 hover:underline decoration-neutral-400 underline-offset-4"
                        title={`Open ${w.name} live in new tab`}
                      >
                        <span>{w.name}</span>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 transition-colors shrink-0" />
                      </a>
                    ) : (
                      <span>{w.name}</span>
                    )}
                  </h3>
                  <p className="text-xs font-delight-medium text-neutral-500 mt-1">{w.role}</p>
                </div>

                {/* Narrative Description */}
                <div className="lg:col-span-5 text-sm font-delight-light text-neutral-700 leading-relaxed">
                  <p>{w.desc}</p>
                  <p className="font-mono text-xs text-neutral-500 mt-3">{w.stack}</p>
                </div>

                {/* Timeline & Live Status */}
                <div className="lg:col-span-3 lg:text-right font-mono text-xs text-neutral-500 space-y-2">
                  <div>{w.year}</div>
                  {w.link && (
                    <a
                      href={w.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-neutral-700 hover:text-black font-semibold underline underline-offset-2"
                    >
                      <span>Explore Live Project</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* AESTHETICS & DESIGN SYSTEM: STANDOUT TWO-VIEW SPECIMEN   */}
        {/* ========================================================= */}
        <section className="py-24 border-b border-neutral-200" id="aesthetics">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Studio Aesthetics & Visual Language
              </p>
              <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
                Curated Typography & Signature Accents
              </h2>
              <p className="text-sm font-delight-light text-neutral-600 mt-3 max-w-2xl leading-relaxed">
                This section showcases Ashley's hand-picked font family (<span className="font-semibold text-neutral-900">Delight</span>) across its calibrated optical weights, paired with the atelier's matte charcoal and architectural material color tokens.
              </p>
            </div>

            {/* TWO-VIEW MODE CONTROLLER */}
            <div className="inline-flex items-center bg-neutral-100 p-1.5 rounded-2xl border border-neutral-300 shrink-0 shadow-2xs">
              <button
                onClick={() => setAestheticMode('fonts')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-delight-semibold transition-all ${
                  aestheticMode === 'fonts'
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                <Type className="w-3.5 h-3.5" />
                <span>Typographic Specimen (Fonts)</span>
              </button>

              <button
                onClick={() => setAestheticMode('colors')}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-delight-semibold transition-all ${
                  aestheticMode === 'colors'
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                <Palette className="w-3.5 h-3.5" />
                <span>Material & Accents (Colors)</span>
              </button>
            </div>
          </div>

          {/* VIEW MODE 1: TYPOGRAPHIC SPECIMEN */}
          {aestheticMode === 'fonts' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Interactive Sample Text Bar */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-300 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                    Live Type Tester · Edit to Preview Delight Weights
                  </label>
                  <input
                    type="text"
                    value={sampleText}
                    onChange={(e) => setSampleText(e.target.value)}
                    placeholder="Type customized text to test font weights..."
                    className="w-full font-delight-medium text-sm sm:text-base text-neutral-950 bg-transparent border-none outline-none focus:ring-0 placeholder:text-neutral-400"
                  />
                </div>
                <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-neutral-200 pt-3 sm:pt-0 sm:pl-4">
                  <span className="font-mono text-xs text-neutral-500">Family: Delight (100–900)</span>
                  <button
                    onClick={() => setSampleText('Ashley Ajoy Ghose · DocuReady Dev · Mumbai')}
                    className="text-[11px] font-mono text-neutral-600 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200 px-2.5 py-1 rounded transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Font Weight Stack */}
              <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
                {fontSpecimens.map((spec, i) => (
                  <div key={i} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline group">
                    <div className="lg:col-span-4">
                      <div className="font-mono text-xs text-neutral-950 font-bold mb-1 flex items-center gap-2">
                        <span>{spec.weight}</span>
                      </div>
                      <div className="text-xs font-delight-medium text-neutral-500 mb-2">{spec.role}</div>
                      <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">{spec.desc}</p>
                    </div>

                    <div className="lg:col-span-8 overflow-hidden">
                      <div className={`${spec.className} ${spec.size} tracking-tight text-neutral-950 transition-colors leading-tight`}>
                        {spec.sample}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Typographic Philosophy Note */}
              <div className="p-6 bg-white rounded-2xl border border-neutral-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-delight-bold text-neutral-950 mb-1">
                    Calibrated Optical Metrics & 0.00 CLS Guarantee
                  </h4>
                  <p className="text-xs font-delight-light text-neutral-600 leading-relaxed max-w-3xl">
                    Every Delight font file is served from local edge assets with deterministic CSS ascent and descent metrics, preventing jarring layout shifts during page hydration while ensuring surgical crispness on Apple Retina and high-DPI Android displays.
                  </p>
                </div>
                <div className="font-mono text-xs text-neutral-400 shrink-0">
                  <span>9 OPTICAL WEIGHTS</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW MODE 2: MATERIAL & COLOR ACCENTS */}
          {aestheticMode === 'colors' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Color Swatch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {signatureColors.map((col, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-2xs flex flex-col justify-between hover:border-neutral-400 transition-all group"
                  >
                    <div>
                      {/* Swatch Preview Block */}
                      <div
                        className="h-28 w-full relative flex items-end p-4 border-b transition-transform"
                        style={{
                          backgroundColor: col.hex,
                          borderColor: col.border ? '#E2E2E8' : 'transparent',
                        }}
                      >
                        <button
                          onClick={() => handleCopyColor(col.hex, col.name)}
                          className={`absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all shadow-xs ${
                            col.lightText
                              ? 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
                              : 'bg-black/10 hover:bg-black/20 text-neutral-900 backdrop-blur-sm'
                          }`}
                          title="Copy Hex Code"
                        >
                          {copiedColor === col.hex ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-[10px]">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span className="text-[10px]">Copy</span>
                            </>
                          )}
                        </button>

                        <div className={`font-mono text-xs font-bold ${col.lightText ? 'text-white' : 'text-neutral-900'}`}>
                          {col.hex}
                        </div>
                      </div>

                      {/* Token Details */}
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base font-delight-bold text-neutral-950">
                            {col.name}
                          </h3>
                          <span className="font-mono text-[10px] text-neutral-400">
                            {col.rgb}
                          </span>
                        </div>
                        <div className="font-mono text-xs text-neutral-500 mb-3">{col.role}</div>
                        <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                          {col.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Live UI Harmonization Preview Card */}
              <div className="bg-[#18191E] text-white rounded-3xl p-8 sm:p-10 border border-neutral-800 shadow-xl relative overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-neutral-800 pb-6 mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      Live Composition Preview
                    </span>
                    <h3 className="text-2xl font-delight-bold tracking-tight text-white">
                      Matte Charcoal Architecture in Production
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-[#1B7A43]/20 border border-[#1B7A43]/30 px-3 py-1 rounded-full text-xs font-mono text-[#1B7A43]">
                    <span className="w-2 h-2 rounded-full bg-[#1B7A43] animate-pulse" />
                    <span>Signature High-Contrast Palette</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-delight-light text-neutral-300">
                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 block mb-1">01 / CONTRAST RATIO</span>
                    <div className="text-lg font-delight-bold text-white mb-1">16.4 : 1 WCAG AAA</div>
                    <p className="text-neutral-400 leading-relaxed">
                      Matte charcoal (#18191E) exceeds highest accessibility thresholds against white without harsh pitch-black eye glare.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 block mb-1">02 / BRAND IDENTITY</span>
                    <div className="text-lg font-delight-bold text-white mb-1">Industrial Precision</div>
                    <p className="text-neutral-400 leading-relaxed">
                      Subtle slate borders (#E2E2E8) divide functional modules with zero aesthetic clutter or distracting drop shadows.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 block mb-1">03 / WHATSAPP DISPATCH</span>
                    <div className="text-lg font-delight-bold text-white mb-1">#1B7A43 Forest Trigger</div>
                    <p className="text-neutral-400 leading-relaxed">
                      Instant single-hop access directly to Ashley's personal line (+91 90048 04043) with verified zero-intermediary routing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
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
                className="inline-flex items-center gap-2.5 bg-neutral-950 text-white hover:bg-neutral-800 px-7 h-12 rounded-lg font-delight-semibold text-xs sm:text-sm transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Ashley Direct (+91 90048 04043)</span>
              </a>

              <Link
                to="/rate-card"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-delight-semibold text-neutral-900 hover:text-black transition-colors underline underline-offset-4"
              >
                <span>View Landscape Client Rate Card</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
