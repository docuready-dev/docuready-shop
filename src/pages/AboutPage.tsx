import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Layers,
  Terminal,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Globe,
  ShieldCheck,
  Cpu,
  Zap,
  Compass,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AmbientBackground from '@/components/home/AmbientBackground';

export default function AboutPage() {
  const disciplines = [
    {
      title: 'Bespoke UI/UX & Design Systems',
      subtitle: 'From Figma artboards to pixel-perfect component trees',
      icon: Layers,
      description:
        'Crafted vector iconography, thoughtful typographic scales using the Delight type family, and fluid micro-interactions designed to convert without visual noise.',
      tags: ['Figma UI/UX', 'Delight Type System', 'Vector SVG', 'Micro-Interactions', 'Design Tokens'],
    },
    {
      title: 'High-Performance Web Engineering',
      subtitle: 'Sub-second TTFB & 60/120 FPS rendering',
      icon: Globe,
      description:
        'Modern, accessible, SEO-primed web applications built with React 18, TypeScript, Vite, and Tailwind CSS. Zero layout shifts and instant client-side routing.',
      tags: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Accessible DOM'],
    },
    {
      title: 'Native Android & Universal Web Apps',
      subtitle: 'Robust mobile architecture with offline resilience',
      icon: Smartphone,
      description:
        'Signed, installable Android APKs and Google Play-ready AAB packages alongside cross-platform Progressive Web Apps. Native device bridging with smooth touch dynamics.',
      tags: ['Android SDK', 'APK / AAB Builds', 'PWA Offline Cache', 'Responsive Touch', 'Webhooks'],
    },
    {
      title: 'Backend Microservices & Cloud Infrastructure',
      subtitle: 'Production-hardened APIs and data pipelines',
      icon: Terminal,
      description:
        'Scalable Node.js & Express REST backends, MongoDB Atlas document clustering, secure JWT authentication, and automated CI/CD deployment pipelines.',
      tags: ['Node.js', 'Express', 'MongoDB Atlas', 'RESTful APIs', 'Git CI/CD'],
    },
  ];

  const deliveryLifecycle = [
    {
      step: '01',
      title: 'Architectural Blueprint & Design Specification',
      description:
        'Every build begins with clear system design. We define user flows, functional requirements, color theory, and typographic hierarchy before writing a single line of code.',
      details: ['User journey wireframing', 'Typography & brand token definition', 'Technical scope & Indian compliance verification'],
    },
    {
      step: '02',
      title: 'Component-Driven Engineering',
      description:
        'Clean, modular code built from the ground up. Zero bloated third-party templates, no AI hallucinated scripts—strictly human-architected logic with full TypeScript type safety.',
      details: ['Modular component architecture', 'Accessible semantic HTML', 'Mobile-first responsive fluid layouts'],
    },
    {
      step: '03',
      title: 'Rigorous QA, Performance & Device Testing',
      description:
        'Comprehensive multi-device audits ensuring flawless rendering on Android viewports, iOS screens, and all major desktop browsers at 60 FPS.',
      details: ['Cross-browser rendering tests', 'Sub-second load optimization', 'Indian payment & WhatsApp dual dispatch verification'],
    },
    {
      step: '04',
      title: 'Turnkey Delivery & Complete Client Ownership',
      description:
        'We transfer complete ownership directly to you. All source code, vector assets, and deployment keys are handed over with zero vendor lock-in or recurring platform fees.',
      details: ['100% commercial IP transfer (Indian Copyright Act, 1957)', 'Clean Git repository & signed build handoff', 'Post-delivery warranty & revision window'],
    },
  ];

  const studioValues = [
    {
      icon: Zap,
      title: 'Zero AI Slop or Generic Templates',
      desc: 'Every project is authored with intentional design rigor and human craftsmanship tailored to your specific audience.',
    },
    {
      icon: ShieldCheck,
      title: '100% Commercial IP Ownership',
      desc: 'All source files, vector SVGs, and codebases transfer exclusively to you upon delivery. No monthly license traps.',
    },
    {
      icon: Cpu,
      title: 'Direct Architect Communication',
      desc: 'You collaborate directly with Ashley on WhatsApp and Email. No ticket queues, no account manager games.',
    },
    {
      icon: Compass,
      title: 'Statutory Indian Compliance & INR Transparency',
      desc: 'Transparent pricing in INR (₹) backed by formal tax invoicing, consumer protection guarantees, and clear milestone scopes.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden">
      {/* Moving Ambient Line-art Architectural Grid */}
      <AmbientBackground />

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 max-w-6xl relative z-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center text-center leading-none bg-neutral-900 text-neutral-200 rounded-full px-4 py-2 mb-6 text-xs font-delight-semibold border border-neutral-700 shadow-xs uppercase tracking-wider">
            Developer Profile & Studio Architecture
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-delight-black tracking-tight mb-5 text-neutral-950">
            Ashley Ajoy Ghose
          </h1>

          <p className="text-base sm:text-xl font-delight-light text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Lead Developer & UI Architect at DocuReady Dev. Engineering high-performance graphic identities, bespoke web applications, and native Android solutions from Mumbai, India.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-delight-medium text-neutral-600">
            <span className="inline-flex items-center justify-center text-center leading-none gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Mumbai, India · Available Globally
            </span>
            <span className="inline-flex items-center justify-center text-center leading-none gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200">
              Dual Dispatch: WhatsApp & Email
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
              100% Commercial IP Handoff
            </span>
          </div>
        </motion.div>

        {/* Engineering Philosophy & Studio Ethos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] mb-14 relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
              <h2 className="text-xl sm:text-2xl font-delight-extrabold text-neutral-950">
                Philosophy & Architectural Intent
              </h2>
            </div>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 font-delight-regular">
              DocuReady Shop is built on a straightforward principle: businesses shouldn't have to choose between exorbitant agency markups and fragile, generic templates. Every deliverable—from vector brand identities to full-scale Android APKs—is engineered with bespoke code, responsive layouts, and transparent pricing in Indian Rupees.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 font-delight-light">
              We bridge the gap between creative visual artistry and rock-solid software engineering. Zero AI hallucinations, no hidden fees, and no hostage code: once your milestone is delivered, you own every file, font token, and line of source code outright.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-100">
              <div className="flex items-center gap-2 text-xs font-delight-semibold text-neutral-900">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0" />
                <span>Bespoke Code Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-delight-semibold text-neutral-900">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0" />
                <span>Pixel-Perfect Component Trees</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-delight-semibold text-neutral-900">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 shrink-0" />
                <span>Zero Technical Lock-in</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Studio Disciplines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <p className="text-xs font-delight-bold tracking-widest text-neutral-500 uppercase mb-2">Core Competencies</p>
            <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950">
              Engineering Disciplines & Standards
            </h2>
            <p className="text-xs sm:text-sm font-delight-light text-neutral-500 mt-2 max-w-xl mx-auto">
              Precision craftsmanship applied across every layer of the modern digital stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:border-neutral-400 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-delight-bold text-base text-neutral-950">{item.title}</h3>
                      <p className="font-delight-light text-xs text-neutral-500">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm font-delight-regular leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-delight-medium text-xs px-2.5 py-1 rounded-lg border border-neutral-200 shadow-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 4-Stage Production Delivery Lifecycle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <p className="text-xs font-delight-bold tracking-widest text-neutral-500 uppercase mb-2">Process & Delivery</p>
            <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950">
              The Production Lifecycle
            </h2>
            <p className="text-xs sm:text-sm font-delight-light text-neutral-500 mt-2 max-w-xl mx-auto">
              How every commission moves from initial concept to turnkey production deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliveryLifecycle.map((stage) => (
              <div
                key={stage.step}
                className="bg-neutral-950 text-white rounded-3xl p-8 border border-neutral-800 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-delight-black text-2xl text-neutral-500 tracking-wider">
                    {stage.step}
                  </span>
                  <span className="inline-flex items-center justify-center text-center leading-none text-[10px] font-delight-bold uppercase tracking-widest text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-full border border-neutral-800">
                    Milestone Stage
                  </span>
                </div>

                <h3 className="font-delight-bold text-lg text-white mb-2">
                  {stage.title}
                </h3>

                <p className="font-delight-light text-sm text-neutral-400 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-neutral-800">
                  {stage.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-xs font-delight-medium text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Studio Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-3xl font-delight-extrabold text-neutral-950 mb-2">
                The DocuReady Standard
              </h2>
              <p className="text-xs sm:text-sm font-delight-light text-neutral-600">
                Core commitments guaranteed with every package and custom commission
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {studioValues.map((val) => {
                const Icon = val.icon;
                return (
                  <div key={val.title} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-delight-bold text-sm text-neutral-950 mb-2">{val.title}</h4>
                    <p className="font-delight-regular text-xs text-neutral-600 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Contact / Work With Us Monochromatic Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center text-center leading-none text-[10px] font-delight-bold uppercase tracking-widest text-neutral-400 bg-neutral-900 px-3.5 py-1.5 rounded-full border border-neutral-800 mb-4">
              Direct Dual Dispatch
            </span>
            <h2 className="text-3xl sm:text-5xl font-delight-black tracking-tight mb-4 text-white">
              Ready to build something exceptional?
            </h2>
            <p className="font-delight-light text-neutral-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you need high-impact brand identity, a custom business web app, or an Android APK, let's bring it to life with zero agency fluff.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-xl px-7 font-delight-bold gap-2 shadow-lg h-12">
                  Browse Packages <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20reviewed%20your%20developer%20profile%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="outline" className="border-neutral-700 text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl px-7 font-delight-medium gap-2 h-12">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Ashley Direct
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
