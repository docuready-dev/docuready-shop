import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Globe, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const categories = [
  {
    id: 'Graphic Design',
    title: 'Graphic Design & Branding',
    icon: Palette,
    priceFrom: 'Starting at ₹1,499',
    description: 'Logo creation, brand style guides, social media creative packs, marketing banners, and high-impact vector artwork.',
    badge: 'Popular for Startups',
  },
  {
    id: 'Web Design',
    title: 'Web Design & Portals',
    icon: Globe,
    priceFrom: 'Starting at ₹3,499',
    description: 'Responsive business websites, high-converting landing pages, and interactive web stores with automated inquiry flows.',
    badge: 'Fast Turnaround',
  },
  {
    id: 'App Development',
    title: 'Android & Web App Development',
    icon: Smartphone,
    priceFrom: 'Standard: ₹3,599 | Premium: ₹8,999',
    description: 'Installable Android APKs and Universal Progressive Web Apps. Built with clear distinguishing tiers for affordable scale.',
    badge: 'New & Affordable',
    highlight: true,
  },
];

export default function CategoriesSection() {
  return (
    <section className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 py-24 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-violet-700 font-bold text-xs uppercase tracking-widest mb-3">Our Core Expertise</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          Everything you need to <span className="gradient-text">scale digitally</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
          From visual identity to enterprise-ready web platforms and native mobile apps, all at honest, upfront prices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <Link to={`/services?category=${encodeURIComponent(cat.id)}`}>
                <div
                  className={`rounded-3xl p-8 card-hover cursor-pointer group h-full flex flex-col relative transition-all ${
                    cat.highlight
                      ? 'bg-white border-2 border-violet-500/50 shadow-[0_12px_36px_-10px_rgba(109,40,217,0.12)] ring-1 ring-violet-500/20'
                      : 'bg-white border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] hover:border-violet-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-700 group-hover:bg-[#6D28D9] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    {cat.badge && (
                      <Badge variant="secondary" className="bg-violet-50 text-violet-800 border border-violet-200/70 font-bold text-xs px-3 py-1 rounded-full">
                        {cat.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-violet-700 transition-colors text-slate-900">
                    {cat.title}
                  </h3>

                  <p className="text-violet-700 font-bold text-sm mb-3">
                    {cat.priceFrom}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-violet-700 text-sm font-bold pt-4 border-t border-slate-100 group-hover:text-violet-800">
                    <span>View packages</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
