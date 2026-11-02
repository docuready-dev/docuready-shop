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
                ['98%', 'Client Satisfaction'],
                ['24hr', 'Avg Response Time'],
                ['₹3,599', 'Starting App Tiers'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl sm:text-4xl font-delight-black text-neutral-950 tracking-tight">{num}</div>
                  <div className="text-[11px] font-delight-medium text-neutral-500 uppercase tracking-wider mt-1">{label}</div>
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <div>
                  <h3 className="text-base font-delight-bold text-neutral-950">Production Suite</h3>
                  <p className="text-xs font-delight-light text-neutral-500">Digital deliverables ready for market</p>
                </div>
                <div className="border border-neutral-300 bg-neutral-50 text-neutral-800 text-[11px] font-delight-medium px-2.5 py-1 rounded">
                  Live & Ready
                </div>
              </div>

              {/* Service Cards inside Showcase */}
              <div className="space-y-3">
                <Link to="/services?category=Graphic Design" className="block group">
                  <div className="rounded-xl p-3.5 bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-delight-bold text-neutral-900 group-hover:text-black transition-colors">Graphic Design & Logos</h4>
                        <p className="text-xs font-delight-regular text-neutral-500">Logos, style guides, creative assets</p>
                      </div>
                    </div>
                    <span className="text-xs font-delight-black text-neutral-900">From ₹1,499</span>
                  </div>
                </Link>

                <Link to="/services?category=Web Design" className="block group">
                  <div className="rounded-xl p-3.5 bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-delight-bold text-neutral-900 group-hover:text-black transition-colors">High-Converting Websites</h4>
                        <p className="text-xs font-delight-regular text-neutral-500">Landing pages, stores & web portals</p>
                      </div>
                    </div>
                    <span className="text-xs font-delight-black text-neutral-900">From ₹3,499</span>
                  </div>
                </Link>

                <Link to="/services?category=App Development" className="block group">
                  <div className="rounded-xl p-3.5 bg-neutral-950 text-white transition-all flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-white text-black flex items-center justify-center">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-delight-bold text-white">Android & Web Apps</h4>
                          <span className="bg-white/20 text-white text-[10px] font-delight-bold px-1.5 py-0.2 rounded">Hot</span>
                        </div>
                        <p className="text-xs font-delight-light text-neutral-300">APK & Universal PWA editions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-delight-black text-white block">₹3,599</span>
                      <span className="text-[10px] font-delight-regular text-neutral-400">Premium ₹8,999</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-delight-regular">
                <span className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900" /> Direct WhatsApp Checkout
                </span>
                <Link to="/about" className="text-neutral-900 font-delight-bold hover:underline flex items-center gap-1 text-[11px]">
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
