import { motion } from 'framer-motion';
import { Trash2, ShoppingBag, ArrowRight, Tag, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { items, removeItem, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[85vh] pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass-card rounded-3xl p-12 sm:p-16 max-w-md w-full shadow-2xl border border-white/70"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-primary opacity-80" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Explore our Graphic Design, Web Development, and Android & Web App packages to get started.
          </p>
          <Link to="/services">
            <Button size="lg" className="rounded-xl font-bold px-8 shadow-lg shadow-primary/20">
              Browse Services
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Continue browsing services
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">Your Shopping Cart</h1>
          <p className="text-muted-foreground text-sm">
            {items.length} service {items.length === 1 ? 'package' : 'packages'} ready for confirmation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.package.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-start justify-between gap-5 border border-white/70 shadow-md"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[11px] font-extrabold text-primary uppercase tracking-wider">
                      {item.package.category}
                    </span>
                    <span className="text-[11px] bg-secondary text-secondary-foreground font-bold px-2 py-0.5 rounded-full">
                      {item.package.tier}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{item.package.name}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3 max-w-md">
                    {item.package.description}
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>Estimated {item.package.deliveryDays}-day delivery</span>
                  </p>
                </div>

                <div className="text-right flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-border/50">
                  <div className="text-2xl font-extrabold text-primary">
                    {item.package.priceDisplay}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item.package.id)}
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive gap-1.5 rounded-xl text-xs h-8 px-3 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Remove
                  </Button>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-between items-center pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-muted-foreground hover:text-destructive text-xs rounded-xl"
              >
                Clear Entire Cart
              </Button>
            </div>
          </div>

          {/* Sticky Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="glass-card rounded-3xl p-7 border border-white/80 shadow-xl h-fit sticky top-28"
          >
            <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" /> Order Breakdown
            </h2>

            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.package.id} className="flex justify-between text-xs sm:text-sm">
                  <span className="text-muted-foreground truncate max-w-[180px]">
                    {item.package.name} ({item.package.tier})
                  </span>
                  <span className="font-bold text-foreground">{item.package.priceDisplay}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border/80 pt-4 mb-6 space-y-1">
              <div className="flex justify-between items-baseline font-extrabold text-xl">
                <span>Total Amount</span>
                <span className="text-primary text-2xl font-black">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                All revision rounds & initial setup included.
              </p>
            </div>

            <Link to="/checkout">
              <Button size="lg" className="w-full rounded-xl gap-2 font-bold shadow-lg shadow-primary/25">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <div className="mt-4 p-3 rounded-xl bg-muted/40 border border-border/60 text-[11px] text-muted-foreground text-center">
              🔒 Instant WhatsApp confirmation directly with our core engineering team.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
