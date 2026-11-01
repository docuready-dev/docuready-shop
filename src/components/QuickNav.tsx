import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Palette, Globe, Smartphone, ChevronRight } from 'lucide-react';
import { CATEGORIES, getPackagesByCategory, Category } from '@/data/packages';

const ICONS: Record<Category, React.ComponentType<{ className?: string }>> = {
  'Graphic Design': Palette,
  'Web Design': Globe,
  'App Development': Smartphone,
};

export default function QuickNav() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const collapseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (collapseTimer.current) clearTimeout(collapseTimer.current);
  };

  const startTimer = useCallback(() => {
    clearTimer();
    collapseTimer.current = setTimeout(() => {
      setOpen(false);
      setActiveCategory(null);
    }, 2800);
  }, []);

  useEffect(() => {
    if (open) {
      startTimer();
    }
  }, [open, startTimer]);

  const handleMouseEnter = () => {
    clearTimer();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    startTimer();
  };

  const handleTriggerClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
      setActiveCategory(null);
    }
  };

  const activePackages = activeCategory ? getPackagesByCategory(activeCategory) : [];

  return (
    <div
      className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="flex gap-2 mr-1"
          >
            {/* Services submenu */}
            <AnimatePresence>
              {activeCategory && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{ duration: 0.16 }}
                  className="glass-card rounded-2xl shadow-2xl border border-white/60 py-3 w-56 max-h-80 overflow-y-auto"
                >
                  <p className="text-xs font-bold text-primary uppercase tracking-widest px-4 mb-2">
                    {activeCategory}
                  </p>
                  {activePackages.map((pkg) => (
                    <Link
                      key={pkg.id}
                      to={`/services?category=${encodeURIComponent(pkg.category)}`}
                      className="flex items-center justify-between px-4 py-2 text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <span className="truncate">{pkg.name}</span>
                      <span className="text-primary font-bold ml-1">{pkg.priceDisplay}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Categories panel */}
            <div className="glass-card rounded-2xl shadow-2xl border border-white/60 py-3 w-48">
              <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest px-4 mb-2">
                Quick Navigation
              </p>
              {CATEGORIES.map((cat) => {
                const Icon = ICONS[cat];
                return (
                  <button
                    key={cat}
                    onMouseEnter={() => setActiveCategory(cat)}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold transition-colors text-left ${
                      activeCategory === cat
                        ? 'bg-primary/15 text-primary'
                        : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0 text-primary" />
                    <span className="flex-1 truncate">{cat}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                  </button>
                );
              })}
              <div className="border-t border-border/80 mt-2 pt-2 px-4 space-y-1">
                <Link
                  to="/services"
                  className="text-xs text-primary font-bold hover:underline block"
                >
                  Browse all packages →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger tab button on screen edge */}
      <motion.div
        className={`flex items-center justify-center w-11 rounded-l-2xl cursor-pointer shadow-xl transition-all duration-200 ${
          open ? 'bg-primary h-24' : 'bg-[#121118] hover:bg-primary h-16'
        }`}
        title="Quick Navigation"
        onClick={handleTriggerClick}
      >
        <LayoutGrid className="w-5 h-5 text-white transition-colors" />
      </motion.div>
    </div>
  );
}
