import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Palette, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="relative min-h-[85vh] bg-[#FAFAFA] flex items-center overflow-hidden pt-24 sm:pt-28 pb-20 border-b border-neutral-200">
      {/* Main Container with generous lateral padding */}
      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 text-left">
            {/* Editorial Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-neutral-300 bg-white shadow-xs px-3.5 py-1 mb-6 rounded-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span className="text-xs font-delight-medium uppercase tracking-widest text-neutral-800">
                Trusted by 500+ businesses & ambitious creators
              </span>
            </motion.div>

            {/* Hero Headline - Editorial Varied Delight Weights */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-delight-extrabold leading-[1.06] tracking-tight mb-6 text-neutral-950"
            >
              We don't just design or code.{' '}
              <span className="block font-delight-light text-neutral-400 mt-1">We make you look ready.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-600 mb-8 leading-relaxed max-w-xl font-delight-regular"
            >
              Stunning graphic design, conversion-focused websites, and high-performance Android & Web Apps starting at just{' '}
              <span className="font-delight-bold text-neutral-950">₹3,599</span>. Built for founders who want real impact without bloated agency rates.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link to="/services">
                <Button size="lg" className="rounded-lg gap-2.5 px-8 text-sm font-delight-semibold bg-neutral-950 hover:bg-neutral-800 text-white shadow-sm transition-all h-12">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg px-8 text-sm font-delight-medium border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 h-12 shadow-xs"
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
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-600 font-delight-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950" /> WhatsApp Direct Flow
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950" /> Transparent Pricing in INR
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950" /> Free Revisions Included
              </div>
            </motion.div>

            {/* Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 max-w-xl border-t border-neutral-200 pt-6"
            >
              {[
                ['500+', 'Projects Delivered'],
                ['98%', 'On-Time Verification'],
                ['24hr', 'Technical Response'],
                ['₹1,999', 'Starting Vector Tier'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950 tracking-tight">{num}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-neutral-300 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-5">
                <div>
                  <h3 className="text-base font-delight-semibold text-neutral-950">Architectural Suite</h3>
                  <p className="text-xs font-delight-extralight text-neutral-500">Verified multi-tier production catalog</p>
                </div>
                <div className="border border-neutral-300 bg-neutral-100 text-neutral-800 text-[10px] font-mono font-light uppercase tracking-wider px-2.5 py-1 rounded">
                  SYS://READY
                </div>
              </div>

              {/* Service Cards inside Showcase */}
              <div className="space-y-3">
                <Link to="/services?category=Web%20Infrastructure%20%26%20Engineering" className="block group">
                  <div className="rounded-lg p-3.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-delight-semibold text-neutral-900 group-hover:text-black transition-colors">Web Infrastructure & Engineering</h4>
                        <p className="text-[11px] font-delight-light text-neutral-500">Corporate sites, RFQ maps, B2B suites</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-900 shrink-0 ml-2">₹18,000+</span>
                  </div>
                </Link>

                <Link to="/services?category=Brand%20Identity%20%26%20Industrial%20Systems" className="block group">
                  <div className="rounded-lg p-3.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-delight-semibold text-neutral-900 group-hover:text-black transition-colors">Brand Identity & Industrial Systems</h4>
                        <p className="text-[11px] font-delight-light text-neutral-500">Geometric marks, stationery, fleet livery</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-900 shrink-0 ml-2">₹1,999+</span>
                  </div>
                </Link>

                <Link to="/services?category=Software%20%26%20Application%20Builds" className="block group">
                  <div className="rounded-lg p-3.5 bg-neutral-950 text-white transition-all flex items-center justify-between shadow-xs border border-neutral-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-delight-semibold text-white">Software & Application Builds</h4>
                          <span className="bg-neutral-800 text-neutral-200 font-mono text-[9px] px-1.5 py-0.5 rounded border border-neutral-700">ACTIVE</span>
                        </div>
                        <p className="text-[11px] font-delight-extralight text-neutral-300">Android APK, PWA & Full-Stack SPAs</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-xs font-mono font-semibold text-white block">₹3,999+</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-delight-light">
                <span className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" /> Direct WhatsApp Checkout
                </span>
                <Link to="/about" className="text-neutral-900 font-delight-semibold hover:underline flex items-center gap-1 text-[11px]">
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
