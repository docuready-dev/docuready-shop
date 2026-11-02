import { motion } from 'framer-motion';
import { Check, Clock, ArrowRight, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Package } from '@/data/packages';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface Props {
  pkg: Package;
  index: number;
  discountPercent?: number;
  onInquire?: (pkg: Package) => void;
}

export default function PackageCard({ pkg, index, discountPercent = 0, onInquire }: Props) {
  const { addItem, removeItem, items } = useCart();
  const inCart = items.some((i) => i.package.id === pkg.id);
  const isFeaturedDark = pkg.popular || pkg.tier === 'Tier 3' || pkg.tier === 'Tier 4';
  const hasDiscount = discountPercent > 0;

  const discountedPrice = hasDiscount
    ? Math.round(pkg.price * (1 - discountPercent / 100))
    : null;
  const discountedDisplay = discountedPrice
    ? `₹${discountedPrice.toLocaleString('en-IN')}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className={`relative rounded-xl flex flex-col h-full transition-all duration-200 backdrop-blur-md overflow-hidden ${
        isFeaturedDark
          ? 'bg-neutral-950/95 text-white border border-neutral-800 shadow-xl'
          : 'bg-white/85 text-neutral-950 border border-neutral-300/90 shadow-sm hover:border-neutral-900'
      }`}
    >
      {/* Top System Pill / Popular Flag */}
      {pkg.popular && (
        <div className={`absolute top-0 right-0 px-3.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase border-b border-l rounded-bl-lg ${
          isFeaturedDark
            ? 'bg-white text-neutral-950 border-neutral-800'
            : 'bg-neutral-950 text-white border-neutral-300'
        }`}>
          SYS://RECOMMENDED
        </div>
      )}

      {/* Discount Tag */}
      {hasDiscount && (
        <div className="absolute top-3 right-3 bg-neutral-900 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-700">
          -{discountPercent}%
        </div>
      )}

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Tier & Category Metric Bar */}
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

        {/* 1. Package Title */}
        <h3 className={`text-xl sm:text-2xl font-delight-extrabold tracking-tight mb-3 ${
          isFeaturedDark ? 'text-white' : 'text-neutral-950'
        }`}>
          {pkg.name}
        </h3>

        {/* 2. Investment / Price & 3. Delivery Timeline */}
        <div className={`p-4 rounded-lg mb-5 border ${
          isFeaturedDark
            ? 'bg-neutral-900/80 border-neutral-800'
            : 'bg-neutral-50 border-neutral-200'
        }`}>
          <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1.5">
            <span className={`font-mono text-[11px] uppercase tracking-wider font-medium ${
              isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Investment Range
            </span>
            <div className={`flex items-center gap-1 font-mono text-[11px] ${
              isFeaturedDark ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              <Clock className="w-3 h-3" />
              <span>{pkg.deliveryTimeline}</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2 flex-wrap">
            {hasDiscount ? (
              <>
                <span className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${
                  isFeaturedDark ? 'text-white' : 'text-neutral-950'
                }`}>
                  {discountedDisplay}
                </span>
                <span className="font-mono text-xs line-through text-neutral-400">
                  {pkg.priceDisplay}
                </span>
              </>
            ) : (
              <span className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight ${
                isFeaturedDark ? 'text-white' : 'text-neutral-950'
              }`}>
                {pkg.priceDisplay}
              </span>
            )}
          </div>
        </div>

        {/* 4. Suitability / Purpose */}
        <div className="mb-6">
          <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-1.5 ${
            isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            Suitability & Purpose
          </div>
          <p className={`text-xs font-delight-regular leading-relaxed ${
            isFeaturedDark ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            {pkg.suitability}
          </p>
        </div>

        {/* 5. Core Features */}
        <div className="mb-6 flex-1">
          <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-2.5 ${
            isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            Core Features
          </div>
          <ul className="space-y-2">
            {pkg.features.map((f) => (
              <li
                key={f}
                className={`flex items-start gap-2 text-xs font-delight-regular leading-relaxed ${
                  isFeaturedDark ? 'text-neutral-300' : 'text-neutral-800'
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
        <div className={`pt-4 pb-5 mb-5 border-t ${
          isFeaturedDark ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          <div className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-2.5 flex items-center gap-1.5 ${
            isFeaturedDark ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            <Box className="w-3 h-3" />
            <span>Key Deliverables</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {pkg.deliverables.map((item) => (
              <span
                key={item}
                className={`font-mono text-[11px] px-2.5 py-1 rounded border leading-tight ${
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

        {/* Action Button: Primary CTA triggers Inquiry Modal with auto-selected package */}
        <div className="space-y-2 pt-2">
          <Button
            onClick={() => {
              if (onInquire) {
                onInquire(pkg);
              }
            }}
            className={`w-full rounded-lg h-11 text-xs sm:text-sm font-delight-bold gap-2 transition-all shadow-sm ${
              isFeaturedDark
                ? 'bg-white hover:bg-neutral-200 text-neutral-950'
                : 'bg-neutral-950 hover:bg-neutral-800 text-white'
            }`}
          >
            <span>Initiate Project Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (inCart) {
                removeItem(pkg.id);
                toast.info(`${pkg.name} removed from cart`);
              } else {
                addItem(pkg);
                toast.success(`${pkg.name} (${pkg.tier}) added to cart!`);
              }
            }}
            className={`w-full h-8 text-[11px] font-mono tracking-tight rounded ${
              isFeaturedDark
                ? 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
            }`}
          >
            {inCart ? '✓ In Cart (Click to Remove)' : '+ Add to Quick Order Cart'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
