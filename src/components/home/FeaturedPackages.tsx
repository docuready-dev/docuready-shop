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
        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Client Favorites</p>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Most requested <span className="gradient-text">packages</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
          Proven packages trusted by hundreds of businesses across India.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((pkg, i) => {
          const inCart = items.some((item) => item.package.id === pkg.id);
          const isSolidPurple = pkg.tier === 'Premium';

          return (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-7 card-hover relative flex flex-col h-full ${
                isSolidPurple
                  ? 'bg-primary text-primary-foreground shadow-2xl border border-primary/20'
                  : 'glass-card border border-white/60 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-md ${
                    isSolidPurple ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'
                  }`}
                >
                  Popular Choice
                </div>
              )}

              <div
                className={`text-xs font-bold uppercase tracking-widest mb-1 ${
                  isSolidPurple ? 'text-white/75' : 'text-primary'
                }`}
              >
                {pkg.category} · {pkg.tier}
              </div>

              <h3 className={`text-xl font-extrabold mb-1 ${isSolidPurple ? 'text-white' : 'text-foreground'}`}>
                {pkg.name}
              </h3>

              <p
                className={`text-xs mb-4 line-clamp-2 ${
                  isSolidPurple ? 'text-white/80' : 'text-muted-foreground'
                }`}
              >
                {pkg.description}
              </p>

              <div className="mb-2 flex items-baseline gap-2">
                <span className={`text-3xl font-extrabold ${isSolidPurple ? 'text-white' : 'text-foreground'}`}>
                  {pkg.priceDisplay}
                </span>
                {pkg.priceNote && (
                  <span className={`text-xs ${isSolidPurple ? 'text-white/60' : 'text-muted-foreground'}`}>
                    {pkg.priceNote}
                  </span>
                )}
              </div>

              <div
                className={`flex items-center gap-1.5 text-xs mb-5 font-semibold ${
                  isSolidPurple ? 'text-white/70' : 'text-muted-foreground'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>{pkg.deliveryDays}-day delivery</span>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2 mb-6 flex-1">
                {pkg.features.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-xs leading-relaxed ${
                      isSolidPurple ? 'text-white/90' : 'text-muted-foreground'
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        isSolidPurple ? 'text-white' : 'text-primary'
                      }`}
                    />
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
                variant={isSolidPurple ? 'secondary' : 'default'}
                className={`rounded-xl gap-2 w-full font-bold text-sm ${
                  isSolidPurple
                    ? 'bg-white text-primary hover:bg-white/90 shadow-md'
                    : 'shadow-md'
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
          <Button variant="outline" size="lg" className="rounded-2xl gap-2 glass-card border-white/60 text-sm font-bold shadow-md">
            View All Services & Packages <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
