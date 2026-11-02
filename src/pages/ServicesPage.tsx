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
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 px-3.5 py-1.5 rounded-full text-xs font-delight-bold uppercase tracking-widest text-neutral-800 mb-4">
            Services & Pricing Architecture
          </div>
          <h1 className="text-4xl sm:text-6xl font-delight-black tracking-tight mb-4 text-neutral-950">
            Choose your <span className="font-delight-light text-neutral-500">production package</span>
          </h1>
          <p className="text-neutral-600 font-delight-regular text-sm sm:text-base leading-relaxed mb-6">
            Bespoke engineering with transparent pricing denominated in INR (₹). Every package includes revision rounds and direct WhatsApp architect communication.
          </p>

          {count > 0 && (
            <Link to="/cart">
              <Button className="rounded-xl gap-2 font-delight-bold px-6 bg-neutral-950 hover:bg-neutral-800 text-white shadow-lg">
                <ShoppingCart className="w-4 h-4" /> View Cart ({count} {count === 1 ? 'item' : 'items'})
              </Button>
            </Link>
          )}
        </motion.div>

        {/* Tab Switcher */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Category)}>
          <div className="overflow-x-auto pb-3 mb-10 flex justify-center">
            <TabsList className="bg-neutral-100 border border-neutral-200 rounded-2xl p-1.5 h-auto gap-2 w-max mx-auto flex">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-xl px-6 py-2.5 text-xs sm:text-sm font-delight-bold data-[state=active]:bg-neutral-950 data-[state=active]:text-white data-[state=active]:shadow-md transition-all text-neutral-600"
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
              className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center flex-shrink-0">
                  <Layers className="w-5 h-5 text-neutral-200" />
                </div>
                <div>
                  <p className="font-delight-bold text-neutral-950">Standard (₹3,599) vs. Premium (₹8,999)</p>
                  <p className="text-neutral-600 font-delight-regular text-xs">
                    Identical pricing for both Android & Web Apps. Standard provides lightweight catalog apps; Premium unlocks live databases, logins & Razorpay payments.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 flex-nowrap shrink-0 whitespace-nowrap">
                <span className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white border border-neutral-700 font-delight-bold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <Smartphone className="w-3.5 h-3.5 shrink-0" /> Android APK
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-neutral-200 text-neutral-900 border border-neutral-300 font-delight-bold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0">
                  <Globe className="w-3.5 h-3.5 shrink-0" /> Universal PWA
                </span>
              </div>
            </motion.div>
          )}

          {/* Category Packages Grids - Spacious & Generous */}
          {CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          className="mt-20 text-center bg-neutral-950 text-white rounded-3xl p-10 sm:p-14 border border-neutral-800 max-w-3xl mx-auto shadow-2xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 text-white">
            <MessageCircle className="w-7 h-7" />
          </div>
          <p className="text-neutral-400 font-delight-bold text-xs uppercase tracking-widest mb-2">Custom Architectural Scopes</p>
          <h3 className="text-2xl sm:text-4xl font-delight-extrabold mb-3 text-white">Need a specialized build or system?</h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 font-delight-regular">
            Have a custom mobile app architecture or bespoke identity project in mind? Chat directly with Ashley on WhatsApp for an instant technical brief and quote.
          </p>
          <a
            href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20need%20a%20custom%20service%20quote"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="lg" className="rounded-xl gap-2 font-delight-bold bg-white text-black hover:bg-neutral-200 px-8 h-12">
              <MessageCircle className="w-4 h-4" /> WhatsApp Ashley for Custom Scope
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
