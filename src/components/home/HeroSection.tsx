import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Palette, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <div className="relative min-h-[88vh] hero-gradient flex items-center overflow-hidden pt-24 sm:pt-28 pb-20">
      {/* Directional Majestic Violet studio light */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] radial-glow-majestic pointer-events-none" />

      {/* Main Container with generous lateral padding */}
      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 text-left">
            {/* Trust Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 bg-violet-50/90 border border-violet-200/80 shadow-sm rounded-full px-4 py-1.5 mb-6 text-xs sm:text-sm font-semibold text-violet-900 tracking-wide"
            >
              <Star className="w-3.5 h-3.5 fill-violet-700 text-violet-700" />
              <span>Trusted by 500+ businesses & ambitious creators</span>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight mb-6 text-slate-900 font-delight"
            >
              We don't just design or code.{' '}
              <span className="gradient-text block mt-1">We make you look ready.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl font-normal"
            >
              Stunning graphic design, conversion-focused websites, and high-performance Android & Web Apps starting at just{' '}
              <span className="font-bold text-slate-900">₹3,599</span>. Built for founders who want real impact without bloated agency rates.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link to="/services">
                <Button size="lg" className="rounded-xl gap-2.5 px-8 text-base font-bold bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-lg shadow-violet-900/20 hover:shadow-xl hover:shadow-violet-900/30 transition-all h-13">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 text-base font-semibold glass-card border-slate-200/90 hover:bg-slate-50 text-slate-900 h-13 shadow-sm"
                >
                  Track My Order
                </Button>
              </Link>
            </motion.div>

            {/* Feature Checkmarks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp Direct Flow
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Transparent Pricing in INR
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Revisions Included
              </div>
            </motion.div>

            {/* Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 max-w-xl border-t border-slate-200/80 pt-6"
            >
              {[
                ['500+', 'Projects Delivered'],
                ['98%', 'Client Satisfaction'],
                ['24hr', 'Avg Response Time'],
                ['₹3,599', 'Starting App Tiers'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-violet-700 tracking-tight font-delight">{num}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(109,40,217,0.12)] relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 font-delight">Production Suite</h3>
                  <p className="text-xs text-slate-500">Digital deliverables ready for market</p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200/80 text-[11px] font-bold gap-1.5 px-2.5 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live & Ready
                </Badge>
              </div>

              {/* Service Cards inside Showcase */}
              <div className="space-y-3">
                <Link to="/services?category=Graphic Design" className="block group">
                  <div className="rounded-xl p-3.5 bg-slate-50/70 hover:bg-violet-50/60 border border-slate-200/70 hover:border-violet-300/70 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-violet-100/80 border border-violet-200/60 flex items-center justify-center text-violet-700 group-hover:scale-105 transition-transform">
                        <Palette className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">Graphic Design & Logos</h4>
                        <p className="text-xs text-slate-500">Logos, style guides, creative assets</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-violet-700">From ₹1,499</span>
                  </div>
                </Link>

                <Link to="/services?category=Web Design" className="block group">
                  <div className="rounded-xl p-3.5 bg-slate-50/70 hover:bg-violet-50/60 border border-slate-200/70 hover:border-violet-300/70 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-indigo-100/80 border border-indigo-200/60 flex items-center justify-center text-indigo-700 group-hover:scale-105 transition-transform">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">High-Converting Websites</h4>
                        <p className="text-xs text-slate-500">Landing pages, stores & web portals</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-violet-700">From ₹3,499</span>
                  </div>
                </Link>

                <Link to="/services?category=App Development" className="block group">
                  <div className="rounded-xl p-3.5 bg-violet-50/80 hover:bg-violet-100/60 border border-violet-200 hover:border-violet-300 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-[#6D28D9] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors">Android & Web Apps</h4>
                          <span className="bg-violet-700 text-white text-[10px] font-black px-1.5 py-0.2 rounded">Hot</span>
                        </div>
                        <p className="text-xs text-slate-500">APK & Universal PWA editions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-violet-700 block">₹3,599</span>
                      <span className="text-[10px] text-slate-500">Premium ₹8,999</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Direct WhatsApp Checkout
                </span>
                <Link to="/about" className="text-violet-700 font-bold hover:underline flex items-center gap-1 text-[11px]">
                  About DocuReady Dev <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
