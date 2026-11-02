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
        <p className="font-delight-medium text-xs uppercase tracking-widest text-neutral-500 mb-3">Client Favorites</p>
        <h2 className="text-3xl sm:text-5xl font-delight-extrabold tracking-tight mb-4 text-neutral-950">
          Most requested <span className="font-delight-light text-neutral-400">packages</span>
        </h2>
        <p className="font-delight-regular text-neutral-600 max-w-md mx-auto text-sm sm:text-base">
          Proven packages trusted by hundreds of businesses across India.
        </p>
      </motion.div>

      {/* Spacious 2-Column Wide Architecture (Eliminating cramped thin boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((pkg, i) => {
          const inCart = items.some((item) => item.package.id === pkg.id);
          const isFeaturedDark = pkg.popular || pkg.id === 'android-app-premium';

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 sm:p-10 card-hover relative flex flex-col justify-between transition-all ${
                isFeaturedDark
                  ? 'bg-neutral-950 text-white border border-neutral-800 shadow-xl'
                  : 'bg-white text-neutral-950 border border-neutral-200 shadow-xs'
              }`}
            >
              {pkg.popular && (
                <div className={`absolute top-6 right-6 px-3 py-1 rounded text-xs font-delight-bold tracking-wider uppercase ${
                  isFeaturedDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  Popular Choice
                </div>
              )}

              <div>
                <div className={`text-xs font-delight-semibold uppercase tracking-widest mb-2 ${
                  isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  {pkg.category} · {pkg.tier}
                </div>

                <h3 className={`text-2xl sm:text-3xl font-delight-bold mb-2 tracking-tight ${
                  isFeaturedDark ? 'text-white' : 'text-neutral-950'
                }`}>
                  {pkg.name}
                </h3>

                <p className={`text-sm mb-6 leading-relaxed font-delight-regular max-w-lg ${
                  isFeaturedDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {pkg.description}
                </p>

                {/* Price and Delivery Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 mb-6 border-b border-neutral-200/20">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl sm:text-4xl font-delight-black tracking-tight ${
                      isFeaturedDark ? 'text-white' : 'text-neutral-950'
                    }`}>
                      {pkg.priceDisplay}
                    </span>
                    {pkg.priceNote && (
                      <span className={`text-xs font-delight-regular ${
                        isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>
                        {pkg.priceNote}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center gap-1.5 text-xs font-delight-medium px-3 py-1 rounded-md border ${
                    isFeaturedDark
                      ? 'border-neutral-800 bg-neutral-900 text-neutral-300'
                      : 'border-neutral-200 bg-neutral-50 text-neutral-700'
                  }`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{pkg.deliveryDays}-day committed delivery</span>
                  </div>
                </div>

                {/* Features Checklist in Generous 2-Column Subgrid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                  {pkg.features.slice(0, 6).map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-xs leading-relaxed font-delight-regular ${
                        isFeaturedDark ? 'text-neutral-200' : 'text-neutral-700'
                      }`}
                    >
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        isFeaturedDark ? 'text-white' : 'text-black'
                      }`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => {
                  addItem(pkg);
                  toast.success(`${pkg.name} (${pkg.tier}) added to cart!`);
                }}
                disabled={inCart}
                className={`rounded-lg gap-2 w-full font-delight-semibold text-sm h-12 transition-all shadow-sm ${
                  isFeaturedDark
                    ? 'bg-white hover:bg-neutral-100 text-neutral-950'
                    : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                {inCart ? 'Already in Cart' : 'Add to Cart'}
              </Button>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-14">
        <Link to="/services">
          <Button variant="outline" size="lg" className="rounded-lg gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm font-delight-semibold h-12 px-8 shadow-xs">
            View All Services & Packages <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
