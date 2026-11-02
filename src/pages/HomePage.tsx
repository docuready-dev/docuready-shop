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
      {/* Moving Ambient Blur Background (Optimized for minimal VRAM & 60/120 FPS) */}
      <AmbientBackground />

      {/* Hero Section matching screenshot 1 */}
      <HeroSection />

      {/* 3 Core Categories */}
      <CategoriesSection />

      {/* Android vs Web App & Standard vs Premium Distinguishing Matrix */}
      <AppComparisonSection />

      {/* Featured Packages with direct Cart buttons */}
      <FeaturedPackages />

      {/* Features & Reliability Section */}
      <FeaturesSection />

      {/* Bottom CTA Banner */}
      <section className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4C1D95] via-[#5B21B6] to-[#1E1B4B] border border-violet-400/25 p-10 sm:p-16 text-center text-white shadow-[0_24px_60px_-15px_rgba(76,29,149,0.35)]"
        >
          {/* Subtle directional studio sheen */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to launch your brand or app?
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">
              Join 500+ businesses and founders who trust DocuReady Shop for professional graphic design, high-converting websites, and mobile applications.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-violet-950 hover:bg-slate-100 rounded-xl px-8 font-extrabold gap-2 shadow-xl h-13 transition-all">
                  Browse All Packages <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/919004804043" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 rounded-xl px-8 font-bold gap-2 h-13 transition-all">
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
