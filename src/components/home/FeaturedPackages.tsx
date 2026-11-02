import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ShoppingCart, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ALL_PACKAGES } from '@/data/packages';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export default function FeaturedPackages() {
  const { addItem, items } = useCart();
  
  // Pick featured packages representing each category + app tiers
  const featured = [
    ALL_PACKAGES.find((p) => p.id === 'android-app-standard')!,
    ALL_PACKAGES.find((p) => p.id === 'android-app-premium')!,
    ALL_PACKAGES.find((p) => p.id === 'web-design-premium')!,
    ALL_PACKAGES.find((p) => p.id === 'logo-premium')!,
  ].filter(Boolean);

  return (
    <section className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 py-24 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-violet-700 font-bold text-xs uppercase tracking-widest mb-3">Client Favorites</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
          Most requested <span className="gradient-text">packages</span>
        </h2>
        <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
          Proven packages trusted by hundreds of businesses across India.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((pkg, i) => {
          const inCart = items.some((item) => item.package.id === pkg.id);
          const isPremium = pkg.tier === 'Premium';

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-7 card-hover relative flex flex-col h-full transition-all ${
                isPremium
                  ? 'bg-gradient-to-b from-violet-50/70 via-white to-white border-2 border-violet-600/70 shadow-[0_16px_40px_-12px_rgba(109,40,217,0.16)] ring-1 ring-violet-500/20'
                  : 'bg-white border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md bg-[#6D28D9] text-white">
                  Popular Choice
                </div>
              )}

              <div className="text-xs font-bold uppercase tracking-widest mb-1.5 text-violet-700">
                {pkg.category} · {pkg.tier}
              </div>

              <h3 className="text-xl font-extrabold mb-1 text-slate-900">
                {pkg.name}
              </h3>

              <p className="text-xs mb-4 line-clamp-2 text-slate-600">
                {pkg.description}
              </p>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900">
                  {pkg.priceDisplay}
                </span>
                {pkg.priceNote && (
                  <span className="text-xs text-slate-500">
                    {pkg.priceNote}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs mb-5 font-semibold text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                <span>{pkg.deliveryDays}-day delivery</span>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-700"
                  >
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-violet-700" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  addItem(pkg);
                  toast.success(`${pkg.name} (${pkg.tier}) added to cart!`);
                }}
                disabled={inCart}
                className={`rounded-xl gap-2 w-full font-bold text-sm h-11 transition-all ${
                  isPremium
                    ? 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-md shadow-violet-900/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {inCart ? 'Already in Cart' : 'Add to Cart'}
              </Button>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <Button variant="outline" size="lg" className="rounded-xl gap-2 bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-900 text-sm font-bold shadow-sm h-12 px-8">
            View All Services & Packages <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
