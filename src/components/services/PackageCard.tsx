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
      className={`relative rounded-3xl flex flex-col h-full transition-all duration-300 ${
        isPremium
          ? 'bg-neutral-950 text-white border border-neutral-800 shadow-xl'
          : 'bg-white text-neutral-900 border border-neutral-200/90 shadow-sm hover:border-neutral-400'
      }`}
    >
      {/* Most Popular Badge */}
      {pkg.popular && (
        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-delight-bold flex items-center gap-1.5 shadow-md tracking-wider uppercase ${
          isPremium ? 'bg-white text-neutral-950' : 'bg-neutral-950 text-white'
        }`}>
          Most Popular
        </div>
      )}

      {/* Discount Percentage Pill */}
      {hasDiscount && (
        <div className="absolute top-4 right-4 bg-neutral-900 text-white text-[11px] font-delight-bold px-2.5 py-0.5 rounded-full border border-neutral-700 shadow">
          {discountPercent}% OFF
        </div>
      )}

      <div className="p-7 sm:p-8 flex flex-col flex-1">
        {/* Tier Label */}
        <div className={`text-[11px] font-delight-bold uppercase tracking-widest mb-1.5 ${
          isPremium ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
          {pkg.tier} Tier
        </div>

        {/* Package Title */}
        <h3 className={`text-xl sm:text-2xl font-delight-extrabold mb-2 tracking-tight ${
          isPremium ? 'text-white' : 'text-neutral-950'
        }`}>
          {pkg.name}
        </h3>

        {/* Description */}
        <p className={`text-xs sm:text-sm font-delight-regular leading-relaxed mb-4 ${
          isPremium ? 'text-neutral-400' : 'text-neutral-600'
        }`}>
          {pkg.description}
        </p>

        {/* Distinguishing Factor Highlight Box */}
        {pkg.distinguishingFactor && (
          <div
            className={`p-3 rounded-2xl text-xs font-delight-medium mb-5 flex items-start gap-2.5 border ${
              isPremium
                ? 'bg-neutral-900/90 border-neutral-800 text-neutral-300'
                : 'bg-neutral-50 border-neutral-200 text-neutral-800'
            }`}
          >
            <Info className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
              isPremium ? 'text-white' : 'text-neutral-900'
            }`} />
            <span className="leading-snug">{pkg.distinguishingFactor}</span>
          </div>
        )}

        {/* Price & Note */}
        <div className="mb-2 flex items-baseline gap-2.5 flex-wrap">
          {hasDiscount ? (
            <>
              <span className={`text-3xl sm:text-4xl font-delight-black ${
                isPremium ? 'text-white' : 'text-neutral-950'
              }`}>
                {discountedDisplay}
              </span>
              <span className="text-base line-through font-delight-medium text-neutral-400">
                {pkg.priceDisplay}
              </span>
            </>
          ) : (
            <span className={`text-3xl sm:text-4xl font-delight-black ${
              isPremium ? 'text-white' : 'text-neutral-950'
            }`}>
              {pkg.priceDisplay}
            </span>
          )}

          {pkg.priceNote && (
            <span className={`text-xs font-delight-medium ${
              isPremium ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              {pkg.priceNote}
            </span>
          )}
        </div>

        {/* Delivery Timeline Pill */}
        <div className={`flex items-center gap-1.5 text-xs mb-6 font-delight-medium ${
          isPremium ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
          <Clock className="w-3.5 h-3.5" />
          <span>{pkg.deliveryDays}-day production delivery</span>
        </div>

        {/* Features Checklist */}
        <ul className={`space-y-2.5 flex-1 mb-8 pt-5 border-t ${
          isPremium ? 'border-neutral-800' : 'border-neutral-100'
        }`}>
          {pkg.features.map((f) => (
            <li
              key={f}
              className={`flex items-start gap-2.5 text-xs sm:text-sm font-delight-regular leading-relaxed ${
                isPremium ? 'text-neutral-300' : 'text-neutral-700'
              }`}
            >
              <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                isPremium ? 'text-white' : 'text-neutral-950'
              }`} />
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
          className={`rounded-xl gap-2 w-full font-delight-bold shadow-md transition-all h-12 text-sm ${
            inCart
              ? 'bg-neutral-800 hover:bg-neutral-700 text-white'
              : isPremium
              ? 'bg-white hover:bg-neutral-200 text-neutral-950 active:scale-[0.98]'
              : 'bg-neutral-950 hover:bg-neutral-800 text-white active:scale-[0.98]'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </div>
    </motion.div>
  );
}
