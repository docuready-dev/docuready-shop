import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle2, Palette, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] hero-gradient flex items-center overflow-hidden pt-24 sm:pt-28 pb-20">
      {/* Hardware-accelerated low-VRAM ambient glow orbs */}
      <div className="absolute top-16 right-10 w-96 h-96 radial-glow-purple animate-float-1 pointer-events-none" />
      <div className="absolute bottom-16 left-10 w-80 h-80 radial-glow-indigo animate-float-2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 radial-glow-pink animate-float-3 pointer-events-none" />

      {/* Main Container with generous lateral padding so it never sticks to the far left */}
      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 text-left">
            {/* Trust Badge Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/70 shadow-sm rounded-full px-4 py-2 mb-6 text-xs sm:text-sm font-semibold text-primary"
            >
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span>Trusted by 500+ businesses & ambitious creators</span>
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] tracking-tight mb-6 text-foreground font-delight"
            >
              We don't just design or code.{' '}
              <span className="gradient-text block mt-1">We make you look ready.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl font-normal"
            >
              Stunning graphic design, conversion-focused websites, and high-performance Android & Web Apps starting at just{' '}
              <span className="font-bold text-foreground">₹3,599</span>. Built for founders who want real impact without bloated agency rates.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <Link to="/services">
                <Button size="lg" className="rounded-2xl gap-2.5 px-8 text-base font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all h-14">
                  Explore Services <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-8 text-base font-semibold glass-card border-white/70 hover:bg-white/90 text-foreground h-14"
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
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground"
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
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-12 max-w-xl border-t border-border/60 pt-6"
            >
              {[
                ['500+', 'Projects Delivered'],
                ['98%', 'Client Satisfaction'],
                ['24hr', 'Avg Response Time'],
                ['₹3,599', 'Starting App Tiers'],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight font-delight">{num}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">{label}</div>
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
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/50 pb-4 mb-5">
                <div>
                  <h3 className="text-base font-extrabold text-foreground font-delight">Production Suite</h3>
                  <p className="text-xs text-muted-foreground">Digital deliverables ready for market</p>
                </div>
                <Badge className="bg-emerald-500/15 text-emerald-700 border-emerald-500/30 text-[11px] font-bold gap-1 px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live & Ready
                </Badge>
              </div>

              {/* Service Cards inside Showcase */}
              <div className="space-y-3.5">
                <Link to="/services?category=Graphic Design" className="block group">
                  <div className="rounded-2xl p-4 bg-white/70 hover:bg-white border border-white/80 transition-all hover:shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                        <Palette className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Graphic Design & Logos</h4>
                        <p className="text-xs text-muted-foreground">Logos, style guides, creative assets</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-primary">From ₹1,499</span>
                  </div>
                </Link>

                <Link to="/services?category=Web Design" className="block group">
                  <div className="rounded-2xl p-4 bg-white/70 hover:bg-white border border-white/80 transition-all hover:shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-indigo-600 transition-colors">High-Converting Websites</h4>
                        <p className="text-xs text-muted-foreground">Landing pages, stores & web portals</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-primary">From ₹3,499</span>
                  </div>
                </Link>

                <Link to="/services?category=App Development" className="block group">
                  <div className="rounded-2xl p-4 bg-purple-50/80 hover:bg-purple-50 border border-primary/30 transition-all hover:shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Android & Web Apps</h4>
                          <span className="bg-primary text-white text-[10px] font-black px-1.5 py-0.2 rounded">Hot</span>
                        </div>
                        <p className="text-xs text-muted-foreground">APK & Universal PWA editions</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-primary block">₹3,599</span>
                      <span className="text-[10px] text-muted-foreground">Premium ₹8,999</span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Direct WhatsApp Checkout
                </span>
                <Link to="/about" className="text-primary font-bold hover:underline flex items-center gap-1 text-[11px]">
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
