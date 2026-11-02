import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PackageCard from '@/components/services/PackageCard';
import ProjectInquiryModal from '@/components/services/ProjectInquiryModal';
import { CATEGORIES, getPackagesByCategory, Category, ALL_PACKAGES, Package, CATEGORY_DESCRIPTIONS } from '@/data/packages';
import { ShoppingCart, MessageCircle, Terminal, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getDiscounts } from '@/services/discountService';
import { getCustomServices } from '@/services/customServicesService';

interface DiscountMap {
  [serviceId: string]: number;
}

export default function ServicesPage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<Category>('Web Infrastructure & Engineering');
  const { count } = useCart();
  const [discounts, setDiscounts] = useState<DiscountMap>({});
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [customPkgs, setCustomPkgs] = useState<Package[]>([]);

  // State for Project Inquiry Modal
  const [selectedInquiryPackage, setSelectedInquiryPackage] = useState<Package | null>(null);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const handleInquire = (pkg: Package) => {
    setSelectedInquiryPackage(pkg);
    setIsInquiryModalOpen(true);
  };

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
        deliveryTimeline: `${s.deliveryDays} Business Days`,
        deliveryDays: s.deliveryDays,
        suitability: s.description,
        description: s.description,
        features: s.featuresJson.split('\n').filter(Boolean),
        deliverables: ['Production Source Build', 'Handoff Documentation'],
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
    <div className="min-h-screen pt-32 pb-24">
      {/* Project Inquiry Modal with auto-selected package */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        selectedPackage={selectedInquiryPackage}
        onSelectPackage={setSelectedInquiryPackage}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 max-w-7xl">
        {/* Header with Monospaced Tech Styling */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-300 px-3.5 py-1.5 rounded text-xs font-mono font-bold tracking-wider text-neutral-800 uppercase mb-4">
            <Terminal className="w-3.5 h-3.5 text-neutral-900" />
            <span>ARCHITECTURAL SERVICE CATALOG // 2026.Q4</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-delight-black tracking-tight mb-4 text-neutral-950">
            System Specifications & <span className="font-delight-light text-neutral-500">Tier Pricing</span>
          </h1>

          <p className="text-neutral-600 font-delight-regular text-sm sm:text-base leading-relaxed mb-6">
            Engineered solutions across three dedicated practice categories: Web Infrastructure, Industrial Brand Systems, and Software Runtimes. Fixed INR deliverables with milestone-gated deployment.
          </p>

          {count > 0 && (
            <Link to="/cart">
              <Button className="rounded-lg gap-2 font-mono text-xs px-6 bg-neutral-950 hover:bg-neutral-800 text-white shadow-sm h-10">
                <ShoppingCart className="w-4 h-4" /> View Selected Scopes ({count} {count === 1 ? 'Tier' : 'Tiers'})
              </Button>
            </Link>
          )}
        </motion.div>

        {/* 3 Distinct Category Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Category)}>
          <div className="overflow-x-auto pb-2 mb-8 flex justify-center">
            <TabsList className="bg-neutral-100/90 border border-neutral-300 rounded-lg p-1.5 h-auto gap-1.5 w-max mx-auto flex">
              {CATEGORIES.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded px-5 py-2.5 text-xs sm:text-sm font-delight-bold data-[state=active]:bg-neutral-950 data-[state=active]:text-white data-[state=active]:shadow-sm transition-all text-neutral-600 whitespace-nowrap"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Category Scope Meta Banner */}
          <div className="max-w-4xl mx-auto mb-10 p-4 rounded-lg bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-none bg-neutral-950 shrink-0" />
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                  Active Domain: <strong className="text-neutral-900 font-delight-bold">{activeTab}</strong>
                </p>
                <p className="text-neutral-600 font-delight-regular text-xs mt-0.5">
                  {CATEGORY_DESCRIPTIONS[activeTab]}
                </p>
              </div>
            </div>
            <div className="font-mono text-[11px] text-neutral-500 shrink-0">
              [ {getPackages(activeTab).length} AVAILABLE TIERS ]
            </div>
          </div>

          {/* Packages Grids */}
          {CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              >
                <div className={`grid gap-8 ${
                  getPackages(cat).length === 4
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {getPackages(cat).map((pkg, i) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      index={i}
                      discountPercent={discounts[pkg.id] ?? 0}
                      onInquire={handleInquire}
                    />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Custom Scope / RFQ Technical Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl bg-neutral-950 text-white p-8 sm:p-12 border border-neutral-800 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded border border-neutral-800 mb-3">
                <Cpu className="w-3 h-3 text-neutral-300" />
                <span>BESPOKE TECHNICAL DISCOVERY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-delight-extrabold text-white mb-2 tracking-tight">
                Require a custom multi-system deployment?
              </h3>
              <p className="text-neutral-400 font-delight-regular text-xs sm:text-sm leading-relaxed">
                Connect directly with our Lead Architect for hybrid fleet telemetry, multi-branch ERP sync, custom API webhooks, or localized factory floor mobile deployments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20am%20reviewing%20the%20technical%20catalog%20and%20require%20a%20custom%20architectural%20scope%20brief."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="rounded-lg gap-2 font-mono text-xs font-bold bg-white text-neutral-950 hover:bg-neutral-200 px-6 h-11 w-full">
                  <MessageCircle className="w-4 h-4" /> Dispatch RFQ via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
