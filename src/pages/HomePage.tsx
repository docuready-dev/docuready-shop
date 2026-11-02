import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import AppComparisonSection from '@/components/home/AppComparisonSection';
import FeaturedPackages from '@/components/home/FeaturedPackages';
import FeaturesSection from '@/components/home/FeaturesSection';
import AmbientBackground from '@/components/home/AmbientBackground';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hairline Architectural Grid Background (Minimal VRAM, 60/120 FPS) */}
      <AmbientBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* 3 Core Categories */}
      <CategoriesSection />

      {/* Android vs Web App & Standard vs Premium Distinguishing Matrix */}
      <AppComparisonSection />

      {/* Featured Packages with wide cards and direct Cart buttons */}
      <FeaturedPackages />

      {/* Features & Reliability Section */}
      <FeaturesSection />

      {/* Bottom Monochromatic Studio CTA Banner */}
      <section className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-neutral-950 border border-neutral-800 p-10 sm:p-16 text-center text-white shadow-2xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-[10px] font-delight-bold uppercase tracking-widest text-neutral-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800 mb-4">
              Direct Dual Dispatch
            </span>
            <h2 className="text-3xl sm:text-5xl font-delight-black tracking-tight mb-4 text-white">
              Ready to launch your brand or application?
            </h2>
            <p className="text-neutral-400 font-delight-light text-sm sm:text-base leading-relaxed mb-8">
              Join founders and businesses who trust DocuReady Shop for bespoke design systems, high-converting websites, and production-ready Android mobile apps.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 rounded-xl px-8 font-delight-bold gap-2 shadow-xl h-13 transition-all">
                  Browse All Packages <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/919004804043" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-neutral-700 text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl px-8 font-delight-medium gap-2 h-13 transition-all">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
