import { motion } from 'framer-motion';
import { Check, ShoppingCart, Clock, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Package } from '@/data/packages';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface Props {
  pkg: Package;
  index: number;
  discountPercent?: number;
}

export default function PackageCard({ pkg, index, discountPercent = 0 }: Props) {
  const { addItem, removeItem, items } = useCart();
  const inCart = items.some((i) => i.package.id === pkg.id);
  const isPremium = pkg.tier === 'Premium';
  const hasDiscount = discountPercent > 0;

  const discountedPrice = hasDiscount
    ? Math.round(pkg.price * (1 - discountPercent / 100))
    : null;
  const discountedDisplay = discountedPrice
    ? `₹${discountedPrice.toLocaleString('en-IN')}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className={`relative rounded-3xl flex flex-col h-full card-hover transition-all ${
        isPremium
          ? 'bg-primary text-primary-foreground shadow-2xl border-2 border-primary/20 ring-1 ring-primary/40'
          : 'glass-card border border-white/70 shadow-lg'
      }`}
    >
      {/* Most Popular Badge matching screenshot 2 */}
      {pkg.popular && (
        <div
          className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-lg tracking-wide ${
            isPremium ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'
          }`}
        >
          Most Popular
        </div>
      )}

      {/* Discount Percentage Pill */}
      {hasDiscount && (
        <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground text-xs font-black px-2.5 py-0.5 rounded-full shadow">
          {discountPercent}% OFF
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Tier Label */}
        <div
          className={`text-xs font-extrabold uppercase tracking-widest mb-1.5 ${
            isPremium ? 'text-white/80' : 'text-primary'
          }`}
        >
          {pkg.tier}
        </div>

        {/* Package Title */}
        <h3 className={`text-xl font-extrabold mb-2 tracking-tight ${isPremium ? 'text-white' : 'text-foreground'}`}>
          {pkg.name}
        </h3>

        {/* Description */}
        <p className={`text-xs leading-relaxed mb-4 ${isPremium ? 'text-white/80' : 'text-muted-foreground'}`}>
          {pkg.description}
        </p>

        {/* Distinguishing Factor Highlight Box (Important for App Development & Tiers) */}
        {pkg.distinguishingFactor && (
          <div
            className={`p-2.5 rounded-xl text-xs mb-4 flex items-start gap-2 border ${
              isPremium
                ? 'bg-white/10 border-white/20 text-white/95'
                : 'bg-primary/5 border-primary/20 text-primary font-medium'
            }`}
          >
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5 opacity-80" />
            <span className="leading-snug">{pkg.distinguishingFactor}</span>
          </div>
        )}

        {/* Price & Note */}
        <div className="mb-2 flex items-baseline gap-2.5 flex-wrap">
          {hasDiscount ? (
            <>
              <span className={`text-3xl font-black ${isPremium ? 'text-white' : 'text-foreground'}`}>
                {discountedDisplay}
              </span>
              <span className={`text-base line-through font-semibold ${isPremium ? 'text-white/50' : 'text-muted-foreground'}`}>
                {pkg.priceDisplay}
              </span>
            </>
          ) : (
            <span className={`text-3xl font-black ${isPremium ? 'text-white' : 'text-foreground'}`}>
              {pkg.priceDisplay}
            </span>
          )}

          {pkg.priceNote && (
            <span className={`text-xs font-medium ${isPremium ? 'text-white/70' : 'text-muted-foreground'}`}>
              {pkg.priceNote}
            </span>
          )}
        </div>

        {/* Delivery Timeline Pill */}
        <div className={`flex items-center gap-1 text-xs mb-5 font-semibold ${isPremium ? 'text-white/75' : 'text-muted-foreground'}`}>
          <Clock className="w-3.5 h-3.5" />
          <span>{pkg.deliveryDays}-day delivery</span>
        </div>

        {/* Features Checklist */}
        <ul className="space-y-2.5 flex-1 mb-6 border-t border-border/40 pt-4">
          {pkg.features.map((f) => (
            <li
              key={f}
              className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                isPremium ? 'text-white/95' : 'text-foreground/80'
              }`}
            >
              <Check
                className={`w-4 h-4 flex-shrink-0 mt-0.5 font-bold ${
                  isPremium ? 'text-white' : 'text-primary'
                }`}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <Button
          onClick={() => {
            if (inCart) {
              removeItem(pkg.id);
              toast.info(`${pkg.name} removed from cart`);
            } else {
              addItem(pkg);
              toast.success(`${pkg.name} (${pkg.tier}) added to cart!`);
            }
          }}
          variant={isPremium ? 'secondary' : 'default'}
          className={`rounded-xl gap-2 w-full font-bold shadow-md transition-all ${
            isPremium
              ? 'bg-white text-primary hover:bg-white/90 active:scale-[0.98]'
              : 'active:scale-[0.98]'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </div>
    </motion.div>
  );
}
