import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Globe, Smartphone } from 'lucide-react';

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
        className="text-center mb-16"
      >
        <p className="font-delight-medium text-xs uppercase tracking-widest text-neutral-500 mb-3">Our Core Expertise</p>
        <h2 className="text-3xl sm:text-5xl font-delight-extrabold tracking-tight mb-4 text-neutral-950">
          Everything you need to <span className="font-delight-light text-neutral-500">scale digitally</span>
        </h2>
        <p className="font-delight-regular text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
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
                  className={`rounded-2xl p-8 sm:p-10 card-hover cursor-pointer group h-full flex flex-col relative transition-all ${
                    cat.highlight
                      ? 'bg-white border-2 border-neutral-950 shadow-md ring-1 ring-neutral-950/10'
                      : 'bg-white border border-neutral-200 shadow-xs hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-950 group-hover:bg-neutral-950 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    {cat.badge && (
                      <span className="border border-neutral-200 bg-neutral-50 text-neutral-800 font-delight-medium text-xs px-3 py-1 rounded">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-delight-bold mb-2 group-hover:text-black transition-colors text-neutral-950">
                    {cat.title}
                  </h3>

                  <p className="font-delight-bold text-sm mb-3 text-neutral-900">
                    {cat.priceFrom}
                  </p>

                  <p className="font-delight-regular text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-neutral-900 text-sm font-delight-semibold pt-4 border-t border-neutral-100">
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
