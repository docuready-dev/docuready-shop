import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code2,
  Layers,
  Terminal,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  Github,
  CheckCircle2,
  Smartphone,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AmbientBackground from '@/components/home/AmbientBackground';

export default function AboutPage() {
  const techStack = [
    {
      category: 'Frontend & Web',
      icon: Globe,
      skills: ['React 18', 'Tailwind CSS', 'Vite', 'TypeScript & JS', 'HTML5 / Modern CSS'],
      color: 'from-blue-500/10 to-indigo-500/10 text-indigo-600',
    },
    {
      category: 'Mobile & Backend',
      icon: Smartphone,
      skills: ['Android (Native / Cross)', 'Node.js', 'Express', 'MongoDB Atlas', 'REST APIs & Webhooks'],
      color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600',
    },
    {
      category: 'Design & Prototyping',
      icon: Layers,
      skills: ['Figma UI/UX', 'Adobe Illustrator', 'Canva Pro', 'Framer Motion', 'Vector Iconography'],
      color: 'from-violet-500/10 to-indigo-500/10 text-violet-700',
    },
    {
      category: 'Workflow & Deployment',
      icon: Terminal,
      skills: ['VS Code', 'Git & GitHub', 'Vercel', 'Render', 'CI/CD Automated Deployments'],
      color: 'from-amber-500/10 to-orange-500/10 text-amber-600',
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-24 overflow-hidden">
      {/* Moving Ambient Blur & Line-art Background */}
      <AmbientBackground />

      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 max-w-6xl relative z-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-violet-50/90 border border-violet-200/80 shadow-sm rounded-full px-4 py-1.5 mb-5 text-xs font-semibold text-violet-900">
            <Code2 className="w-4 h-4 text-violet-700" />
            <span>Developer Profile & Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 font-delight">
            DocuReady <span className="gradient-text">Dev</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Building high-performance web apps, Android solutions, and digital production systems with clean code and intuitive design.
          </p>

          {/* GitHub Status & Visitor Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <img
              src="https://komarev.com/ghpvc/?username=docuready-dev&style=flat-square&color=blue"
              alt="Visitor Count"
              className="h-6 rounded shadow-sm"
            />
            <img
              src="https://img.shields.io/badge/Status-Building_Digital_Products-success?style=flat-square"
              alt="Status"
              className="h-6 rounded shadow-sm"
            />
          </div>
        </motion.div>

        {/* About Me Section Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] mb-12 relative overflow-hidden"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-700" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-delight">About Me</h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              I specialize in end-to-end digital engineering: bridging the gap between brand identity, conversion-oriented UX, and rock-solid native/web code. Every project is crafted for production readiness, rapid load times, and effortless client scalability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clean, Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pixel-Perfect Design</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Technical Lock-in</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack & Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-delight">
              Tech Stack & Tooling
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Modern frameworks and infrastructure backing DocuReady products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStack.map((stack) => {
              const Icon = stack.icon;
              return (
                <div
                  key={stack.category}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-white/70 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground font-delight">{stack.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/80 hover:bg-white text-foreground font-medium text-xs px-3 py-1 rounded-xl border border-border/40 shadow-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Repositories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-14"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground font-delight">
              Featured Repositories
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Production solutions deployed and actively maintained on GitHub
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] hover:border-violet-300 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-700 shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/docuready-dev/leadpulse"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl font-black text-slate-900 hover:text-violet-700 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      LeadPulse
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <Badge className="bg-violet-50 text-violet-800 border-violet-200 text-[10px] font-bold">Featured</Badge>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">docuready-dev/leadpulse</p>
                </div>
              </div>

              <a
                href="https://github.com/docuready-dev/leadpulse"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="sm" variant="outline" className="rounded-xl gap-2 font-bold text-xs h-10 border-violet-300 text-violet-800 hover:bg-violet-50">
                  <Github className="w-4 h-4" /> View on GitHub
                </Button>
              </a>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
              Full-stack autonomous lead discovery engine, B2B revenue intelligence, and sales funnel web/desktop application built with React, Vite, Node.js, and MongoDB Atlas.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <Badge variant="outline" className="rounded-lg bg-slate-50 border-slate-200 text-slate-700">React 18</Badge>
              <Badge variant="outline" className="rounded-lg bg-slate-50 border-slate-200 text-slate-700">Vite</Badge>
              <Badge variant="outline" className="rounded-lg bg-slate-50 border-slate-200 text-slate-700">Node.js / Express</Badge>
              <Badge variant="outline" className="rounded-lg bg-slate-50 border-slate-200 text-slate-700">MongoDB Atlas</Badge>
              <Badge variant="outline" className="rounded-lg bg-slate-50 border-slate-200 text-slate-700">Tailwind CSS</Badge>
            </div>
          </div>
        </motion.div>

        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-16"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] inline-block max-w-full">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
              GitHub Engineering Metrics
            </h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=docuready-dev&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="rounded-2xl max-w-full mx-auto shadow-sm"
            />
          </div>
        </motion.div>

        {/* Bottom Contact / Work With Us Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-3xl bg-gradient-to-br from-[#4C1D95] via-[#5B21B6] to-[#1E1B4B] border border-violet-400/25 p-8 sm:p-12 text-center text-white shadow-[0_24px_60px_-15px_rgba(76,29,149,0.35)] relative overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 font-delight">
              Ready to build something exceptional?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Whether you need high-converting branding, a custom business web app, or an Android APK, let's bring it to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-violet-950 hover:bg-slate-100 rounded-xl px-6 font-extrabold gap-2 shadow-lg h-12">
                  Browse Packages <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a
                href="https://wa.me/919004804043?text=Hi%20DocuReady%20Dev%2C%20I%20reviewed%20your%20developer%20profile%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 rounded-xl px-6 font-bold gap-2 h-12">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Direct
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
