import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Box, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ALL_PACKAGES, Package } from '@/data/packages';
import ProjectInquiryModal from '@/components/services/ProjectInquiryModal';

export default function FeaturedPackages() {
  const [selectedInquiryPackage, setSelectedInquiryPackage] = useState<Package | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Pick representative packages across categories
  const featured = [
    ALL_PACKAGES.find((p) => p.id === 'web-enterprise-grid')!,
    ALL_PACKAGES.find((p) => p.id === 'app-core-android-runtime')!,
    ALL_PACKAGES.find((p) => p.id === 'web-digital-nexus-core')!,
    ALL_PACKAGES.find((p) => p.id === 'brand-system-identity-matrix')!,
  ].filter(Boolean);

  const handleInquire = (pkg: Package) => {
    setSelectedInquiryPackage(pkg);
    setIsInquiryModalOpen(true);
  };

  return (
    <section className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 py-24 max-w-7xl">
      {/* Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedPackage={selectedInquiryPackage}
        onSelectPackage={setSelectedInquiryPackage}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-300 px-3 py-1 rounded text-[11px] font-mono uppercase tracking-wider text-neutral-800 mb-3">
          <Terminal className="w-3.5 h-3.5 text-neutral-900" />
          <span>PRODUCTION SPECIFICATIONS // BENCHMARK TIERS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-delight-extrabold tracking-tight mb-4 text-neutral-950">
          Most requested <span className="font-delight-light text-neutral-500">production tiers</span>
        </h2>
        <p className="font-delight-regular text-neutral-600 max-w-lg mx-auto text-sm sm:text-base">
          Proven architectural scopes deployed across manufacturing plants, freight networks, and digital enterprises.
        </p>
      </motion.div>

      {/* Spacious 2-Column Wide Tech Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((pkg, i) => {
          const isFeaturedDark = pkg.popular || pkg.id === 'web-enterprise-grid';

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-xl p-8 sm:p-10 relative flex flex-col justify-between transition-all backdrop-blur-md overflow-hidden ${
                isFeaturedDark
                  ? 'bg-neutral-950/95 text-white border border-neutral-800 shadow-xl'
                  : 'bg-white/85 text-neutral-950 border border-neutral-300/90 shadow-sm hover:border-neutral-900'
              }`}
            >
              {/* Popular System Indicator */}
              {pkg.popular && (
                <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase border-b border-l rounded-bl-lg ${
                  isFeaturedDark ? 'bg-white text-neutral-950 border-neutral-800' : 'bg-neutral-950 text-white border-neutral-300'
                }`}>
                  SYS://POPULAR
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    isFeaturedDark
                      ? 'bg-neutral-900 text-neutral-300 border-neutral-800'
                      : 'bg-neutral-100 text-neutral-800 border-neutral-200'
                  }`}>
                    {pkg.tier}
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-tight truncate ${
                    isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    {pkg.category}
                  </span>
                </div>

                {/* 1. Title */}
                <h3 className={`text-2xl sm:text-3xl font-delight-bold mb-3 tracking-tight ${
                  isFeaturedDark ? 'text-white' : 'text-neutral-950'
                }`}>
                  {pkg.name}
                </h3>

                {/* 2. Price & 3. Timeline */}
                <div className={`p-4 rounded-lg mb-6 border ${
                  isFeaturedDark
                    ? 'bg-neutral-900/80 border-neutral-800'
                    : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                    <span className={`font-mono text-[11px] uppercase tracking-wider font-medium ${
                      isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      Investment
                    </span>
                    <div className={`flex items-center gap-1 font-mono text-[11px] ${
                      isFeaturedDark ? 'text-neutral-300' : 'text-neutral-600'
                    }`}>
                      <Clock className="w-3 h-3" />
                      <span>{pkg.deliveryTimeline}</span>
                    </div>
                  </div>

                  <div className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${
                    isFeaturedDark ? 'text-white' : 'text-neutral-950'
                  }`}>
                    {pkg.priceDisplay}
                  </div>
                </div>

                {/* 4. Suitability / Purpose */}
                <div className="mb-6">
                  <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
                    isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Suitability / Target Scope
                  </div>
                  <p className={`text-xs font-delight-regular leading-relaxed ${
                    isFeaturedDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    {pkg.suitability}
                  </p>
                </div>

                {/* 5. Core Features Checklist */}
                <div className="mb-6">
                  <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-2.5 ${
                    isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Core Features Included
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-xs font-delight-regular leading-relaxed ${
                          isFeaturedDark ? 'text-neutral-300' : 'text-neutral-700'
                        }`}
                      >
                        <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          isFeaturedDark ? 'text-white' : 'text-neutral-950'
                        }`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. Key Deliverables */}
                <div className={`pt-4 pb-6 mb-6 border-t ${
                  isFeaturedDark ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                  <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5 ${
                    isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    <Box className="w-3 h-3" />
                    <span>Key Deliverables</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.deliverables.map((item) => (
                      <span
                        key={item}
                        className={`font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded border leading-tight ${
                          isFeaturedDark
                            ? 'bg-neutral-900 text-neutral-200 border-neutral-700'
                            : 'bg-neutral-100 text-neutral-800 border-neutral-200'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Primary Call to Action: Opens Project Inquiry Modal */}
              <Button
                onClick={() => handleInquire(pkg)}
                className={`w-full rounded-lg font-delight-bold text-xs sm:text-sm h-12 transition-all gap-2 shadow-sm ${
                  isFeaturedDark
                    ? 'bg-white hover:bg-neutral-200 text-neutral-950'
                    : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                }`}
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <Link to="/services">
          <Button variant="outline" size="lg" className="rounded-lg gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs sm:text-sm font-mono h-12 px-8 shadow-xs">
            <span>EXPLORE COMPLETE 3-CATEGORY CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
