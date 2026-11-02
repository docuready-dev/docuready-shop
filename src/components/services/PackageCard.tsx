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
          ? 'bg-gradient-to-b from-violet-50/70 via-white to-white border-2 border-violet-600/70 shadow-[0_16px_40px_-12px_rgba(109,40,217,0.16)] ring-1 ring-violet-500/20'
          : 'bg-white border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)]'
      }`}
    >
      {/* Most Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md tracking-wide bg-[#6D28D9] text-white">
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
        <div className="text-xs font-extrabold uppercase tracking-widest mb-1.5 text-violet-700">
          {pkg.tier}
        </div>

        {/* Package Title */}
        <h3 className="text-xl font-extrabold mb-2 tracking-tight text-slate-900">
          {pkg.name}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed mb-4 text-slate-600">
          {pkg.description}
        </p>

        {/* Distinguishing Factor Highlight Box (Important for App Development & Tiers) */}
        {pkg.distinguishingFactor && (
          <div
            className={`p-2.5 rounded-xl text-xs mb-4 flex items-start gap-2 border ${
              isPremium
                ? 'bg-violet-100/70 border-violet-200 text-violet-950 font-medium'
                : 'bg-slate-50 border-slate-200 text-slate-800 font-medium'
            }`}
          >
            <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-violet-700 opacity-90" />
            <span className="leading-snug">{pkg.distinguishingFactor}</span>
          </div>
        )}

        {/* Price & Note */}
        <div className="mb-2 flex items-baseline gap-2.5 flex-wrap">
          {hasDiscount ? (
            <>
              <span className="text-3xl font-black text-slate-900">
                {discountedDisplay}
              </span>
              <span className="text-base line-through font-semibold text-slate-400">
                {pkg.priceDisplay}
              </span>
            </>
          ) : (
            <span className="text-3xl font-black text-slate-900">
              {pkg.priceDisplay}
            </span>
          )}

          {pkg.priceNote && (
            <span className="text-xs font-medium text-slate-500">
              {pkg.priceNote}
            </span>
          )}
        </div>

        {/* Delivery Timeline Pill */}
        <div className="flex items-center gap-1.5 text-xs mb-5 font-semibold text-slate-500">
          <Clock className="w-3.5 h-3.5" />
          <span>{pkg.deliveryDays}-day delivery</span>
        </div>

        {/* Features Checklist */}
        <ul className="space-y-2.5 flex-1 mb-6 border-t border-slate-100 pt-4">
          {pkg.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700"
            >
              <Check className="w-4 h-4 flex-shrink-0 mt-0.5 font-bold text-violet-700" />
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
          className={`rounded-xl gap-2 w-full font-bold shadow-md transition-all h-11 ${
            inCart
              ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground'
              : isPremium
              ? 'bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-violet-900/20 active:scale-[0.98]'
              : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-[0.98]'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </div>
    </motion.div>
  );
}
