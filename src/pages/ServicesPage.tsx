import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PackageCard from '@/components/services/PackageCard';
import { CATEGORIES, getPackagesByCategory, Category, ALL_PACKAGES, Package } from '@/data/packages';
import { ShoppingCart, MessageCircle, Smartphone, Globe, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getDiscounts } from '@/services/discountService';
import { getCustomServices } from '@/services/customServicesService';

interface DiscountMap {
  [serviceId: string]: number;
}

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<Category>('Graphic Design');
  const { count } = useCart();
  const [discounts, setDiscounts] = useState<DiscountMap>({});
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [customPkgs, setCustomPkgs] = useState<Package[]>([]);

  // Sync tab with URL search parameter
  useEffect(() => {
    const cat = searchParams.get('category') as Category;
    if (cat && CATEGORIES.includes(cat)) {
      setActiveTab(cat);
    }
  }, [searchParams]);

  // Load active discounts and custom packages
  useEffect(() => {
    Promise.all([getDiscounts(), getCustomServices()]).then(([dRes, sRes]) => {
      const map: DiscountMap = {};
      const globalPct =
        dRes.discounts.find((d) => d.serviceId === 'all' && d.isActive)?.discountPercent ?? 0;
      
      if (globalPct > 0) {
        ALL_PACKAGES.forEach((p) => {
          map[p.id] = globalPct;
        });
      }

      dRes.discounts
        .filter((d) => d.serviceId !== 'all' && d.isActive)
        .forEach((d) => {
          map[d.serviceId] = d.discountPercent;
        });

      setDiscounts(map);
      setDeletedIds(sRes.deletedBuiltinIds);

      const mapped: Package[] = sRes.services.map((s) => ({
        id: s.id,
        name: s.name,
        category: s.category as Category,
        tier: s.tier as any,
        price: s.price,
        priceDisplay: s.priceDisplay,
        priceNote: s.priceNote,
        description: s.description,
        features: s.featuresJson.split('\n').filter(Boolean),
        deliveryDays: s.deliveryDays,
      }));
      setCustomPkgs(mapped);
    });
  }, []);

  const getPackages = (cat: Category) => {
    const builtins = getPackagesByCategory(cat).filter((p) => !deletedIds.includes(p.id));
    const key = (p: Package) => `${p.name}|${p.tier}`;
    const customKeys = new Set(customPkgs.filter((p) => p.category === cat).map(key));
    const dedupedBuiltins = builtins.filter((p) => !customKeys.has(key(p)));
    const customs = customPkgs.filter((p) => p.category === cat);
    return [...dedupedBuiltins, ...customs];
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header matching screenshot 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
            Services & Pricing
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Choose your <span className="gradient-text">perfect package</span>
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
            Professional services at transparent prices. Every package includes revision rounds and direct WhatsApp team support.
          </p>

          {count > 0 && (
            <Link to="/cart">
              <Button className="rounded-2xl gap-2 font-bold px-6 shadow-lg shadow-primary/20">
                <ShoppingCart className="w-4 h-4" /> View Cart ({count} {count === 1 ? 'item' : 'items'})
              </Button>
            </Link>
          )}
        </motion.div>

        {/* Tab Switcher matching screenshot 2 */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Category)}>
          <div className="overflow-x-auto pb-3 mb-10 flex justify-center">
            <TabsList className="glass-card border border-white/70 shadow-lg rounded-2xl p-1.5 h-auto gap-2 w-max mx-auto flex">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-xl px-6 py-2.5 text-xs sm:text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground shadow-sm transition-all"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* App Development Quick Clarifier Banner */}
          {activeTab === 'App Development' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-indigo-500/10 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Standard (₹3,599) vs. Premium (₹8,999)</p>
                  <p className="text-muted-foreground text-xs">
                    Identical pricing for both Android & Web Apps. Standard provides lightweight catalog apps; Premium unlocks live databases, logins & Razorpay payments.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 flex-nowrap shrink-0 whitespace-nowrap">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-800 font-bold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <Smartphone className="w-3.5 h-3.5 shrink-0" /> Android APK
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-primary/20 text-primary font-bold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <Globe className="w-3.5 h-3.5 shrink-0" /> Universal PWA
                </span>
              </div>
            </motion.div>
          )}

          {/* Category Packages Grids */}
          {CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {getPackages(cat).map((pkg, i) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      index={i}
                      discountPercent={discounts[pkg.id] ?? 0}
                    />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Custom Quote WhatsApp CTA matching bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-card rounded-3xl p-10 border border-white/70 max-w-3xl mx-auto shadow-xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-7 h-7 text-emerald-600" />
          </div>
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1.5">Custom Scopes Available</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Need a specialized package or feature?</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
            Have a custom mobile app architecture or a custom brand project in mind? Chat directly with our technical team on WhatsApp for an instant custom quote.
          </p>
          <a
            href="https://wa.me/919004804043?text=Hi%20DocuReady%2C%20I%20need%20a%20custom%20service%20quote"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" className="rounded-xl gap-2 font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us for Custom Scope
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
