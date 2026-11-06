import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Smartphone } from 'lucide-react';

const categories = [
  {
    id: 'Web Infrastructure & Engineering',
    title: 'Web Infrastructure & Engineering',
    icon: Globe,
    priceFrom: '₹18,000 – ₹1,60,000+',
    delivery: '7 to 35 Business Days',
    description: 'Corporate digital footprints, RFQ modules, multi-hub mapping, and enterprise B2B suites with CDN edge routing and role-gated client portals.',
    badge: 'Enterprise Architecture',
    highlight: false,
  },
  {
    id: 'Brand Identity & Industrial Systems',
    title: 'Brand Identity & Industrial Systems',
    icon: Layers,
    priceFrom: '₹1,999 – ₹12,499',
    delivery: '2 to 10 Business Days',
    description: 'Precision geometric marks, corporate stationery matrices, and vehicle/shipping container livery blueprints built for heavy industrial operations.',
    badge: 'Industrial Grade',
    highlight: false,
  },
  {
    id: 'Software & Application Builds',
    title: 'Software & Application Builds',
    icon: Smartphone,
    priceFrom: '₹3,999 – ₹9,999',
    delivery: '5 to 15 Business Days',
    description: 'Native Android APK runtimes, zero-install progressive edge PWAs, and full-stack operational back-office dashboards with real-time database sync.',
    badge: 'High Performance',
    highlight: true,
  },
];

export default function CategoriesSection() {
  return (
    <section className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 py-24 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-delight-extrabold tracking-tight mb-4 text-neutral-950">
          Engineered for <span className="font-delight-light text-neutral-500">production rigor</span>
        </h2>
        <p className="font-delight-regular text-neutral-600 max-w-xl mx-auto text-sm sm:text-base">
          From verified B2B web infrastructure to heavy industrial brand systems and native software runtimes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/services?category=${encodeURIComponent(cat.id)}`}>
                <div
                  className={`rounded-xl p-8 card-hover cursor-pointer group h-full flex flex-col relative transition-all backdrop-blur-md ${
                    cat.highlight
                      ? 'bg-neutral-950 text-white border border-neutral-800 shadow-xl'
                      : 'bg-white/85 text-neutral-950 border border-neutral-300/90 shadow-sm hover:border-neutral-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                      cat.highlight
                        ? 'bg-neutral-900 text-white border border-neutral-800'
                        : 'bg-neutral-100 text-neutral-950 border border-neutral-200 group-hover:bg-neutral-950 group-hover:text-white'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {cat.badge && (
                      <span className={`inline-flex items-center justify-center text-center leading-none font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                        cat.highlight
                          ? 'border-neutral-800 bg-neutral-900 text-neutral-300'
                          : 'border-neutral-200 bg-neutral-100 text-neutral-800'
                      }`}>
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-delight-bold mb-3 tracking-tight ${
                    cat.highlight ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {cat.title}
                  </h3>

                  <div className="mb-4">
                    <p className={`font-mono font-bold text-base sm:text-lg tracking-tight ${
                      cat.highlight ? 'text-white' : 'text-neutral-950'
                    }`}>
                      {cat.priceFrom}
                    </p>
                    <p className={`font-mono text-[11px] ${
                      cat.highlight ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      Turnaround: {cat.delivery}
                    </p>
                  </div>

                  <p className={`font-delight-regular text-xs sm:text-sm leading-relaxed mb-6 flex-1 ${
                    cat.highlight ? 'text-neutral-300' : 'text-neutral-600'
                  }`}>
                    {cat.description}
                  </p>

                  <div className={`flex items-center gap-2 text-xs sm:text-sm font-delight-semibold pt-4 border-t ${
                    cat.highlight ? 'border-neutral-800 text-white' : 'border-neutral-100 text-neutral-900'
                  }`}>
                    <span>Explore category tiers</span>
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
