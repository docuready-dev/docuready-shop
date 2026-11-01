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
        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Our Core Expertise</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Everything you need to <span className="gradient-text">scale digitally</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
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
                  className={`rounded-3xl p-8 card-hover cursor-pointer group h-full flex flex-col relative ${
                    cat.highlight
                      ? 'glass-card border-2 border-primary/40 shadow-xl'
                      : 'glass-card border border-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    {cat.badge && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary font-bold text-xs px-3 py-1">
                        {cat.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                    {cat.title}
                  </h3>

                  <p className="text-primary font-bold text-sm mb-3">
                    {cat.priceFrom}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-primary text-sm font-bold pt-4 border-t border-border/60">
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
