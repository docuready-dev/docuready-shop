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
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-purple-600 to-indigo-600 p-10 sm:p-16 text-center text-white shadow-2xl"
        >
          {/* Subtle glow blobs */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready to launch your brand or app?
            </h2>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-8">
              Join 500+ businesses and founders who trust DocuReady Shop for professional graphic design, high-converting websites, and mobile applications.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-2xl px-8 font-extrabold gap-2 shadow-xl h-14">
                  Browse All Packages <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="https://wa.me/919004804043" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 rounded-2xl px-8 font-bold gap-2 h-14">
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
