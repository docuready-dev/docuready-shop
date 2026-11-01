import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { getDiscounts, upsertDiscount, deleteDiscount } from '@/services/discountService';
import { ALL_PACKAGES } from '@/data/packages';
import { Tag, Globe, Save, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface DiscountRow {
  serviceId: string;
  name: string;
  label: string;
  percent: number;
  isActive: boolean;
  dbId?: string;
  saving?: boolean;
}

export default function DiscountsManager() {
  const [rows, setRows] = useState<DiscountRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDiscounts();
  }, []);

  const loadDiscounts = async () => {
    setLoading(true);
    const { discounts } = await getDiscounts();
    const dbMap = Object.fromEntries(discounts.map((d) => [d.serviceId, d]));

    const globalDb = dbMap['all'];
    const base: DiscountRow[] = [
      {
        serviceId: 'all',
        name: 'Global Site-Wide Promotion',
        label: globalDb?.label ?? 'Launch Festive Offer',
        percent: globalDb?.discountPercent ?? 10,
        isActive: globalDb?.isActive ?? true,
        dbId: globalDb?.id,
      },
      ...ALL_PACKAGES.map((p) => {
        const db = dbMap[p.id];
        return {
          serviceId: p.id,
          name: `${p.name} (${p.tier})`,
          label: db?.label ?? '',
          percent: db?.discountPercent ?? 0,
          isActive: db?.isActive ?? false,
          dbId: db?.id,
        };
      }),
    ];
    setRows(base);
    setLoading(false);
  };

  const update = (idx: number, patch: Partial<DiscountRow>) =>
    setRows((r) => r.map((row, i) => (i === idx ? { ...row, ...patch } : row)));

  const handleSave = async (idx: number) => {
    const row = rows[idx];
    update(idx, { saving: true });
    try {
      const res = await upsertDiscount({
        id: row.dbId,
        serviceId: row.serviceId,
        discountPercent: row.percent,
        label: row.label,
        isActive: row.isActive,
      });
      update(idx, { dbId: res.id, saving: false });
      toast.success('Discount saved and live on shop');
    } catch {
      update(idx, { saving: false });
      toast.error('Failed to save discount');
    }
  };

  const handleClear = async (idx: number) => {
    const row = rows[idx];
    if (row.dbId) {
      try {
        await deleteDiscount(row.dbId);
        toast.success('Discount removed');
      } catch {
        toast.error('Failed to remove');
        return;
      }
    }
    update(idx, { dbId: undefined, percent: 0, label: '', isActive: false });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {rows.map((row, idx) => (
        <motion.div
          key={row.serviceId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.015 }}
          className={`glass-card rounded-2xl p-4 flex flex-wrap items-center gap-4 border ${
            row.serviceId === 'all'
              ? 'border-2 border-primary/40 bg-primary/5 shadow-md'
              : 'border-white/70'
          }`}
        >
          <div className="flex items-center gap-2 min-w-[220px] flex-1">
            {row.serviceId === 'all' ? (
              <Globe className="w-5 h-5 text-primary flex-shrink-0" />
            ) : (
              <Tag className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
            <span
              className={`text-sm truncate ${
                row.serviceId === 'all' ? 'text-primary font-extrabold text-base' : 'font-semibold'
              }`}
            >
              {row.name}
            </span>
            {row.isActive && row.percent > 0 && (
              <Badge className="text-xs px-2.5 bg-primary/10 text-primary border-0 font-bold">
                {row.percent}% OFF
              </Badge>
            )}
          </div>

          <Input
            placeholder="Label (e.g. Festival Special)"
            value={row.label}
            onChange={(e) => update(idx, { label: e.target.value })}
            className="rounded-xl h-9 text-xs w-44 bg-white/90"
          />

          <div className="flex items-center gap-1.5">
            <Input
              type="number"
              min={0}
              max={100}
              value={row.percent}
              onChange={(e) => update(idx, { percent: Number(e.target.value) })}
              className="rounded-xl h-9 text-xs w-20 text-center font-bold bg-white/90"
            />
            <span className="text-xs font-bold text-muted-foreground">%</span>
          </div>

          <div className="flex items-center gap-2">
            <Switch
              checked={row.isActive}
              onCheckedChange={(v) => update(idx, { isActive: v })}
            />
            <span className="text-xs text-muted-foreground">{row.isActive ? 'Active' : 'Off'}</span>
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => handleSave(idx)}
              disabled={row.saving}
              className="rounded-xl h-9 gap-1.5 text-xs px-3.5 font-bold shadow-sm"
            >
              {row.saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
              Save
            </Button>
            {row.dbId && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleClear(idx)}
                className="rounded-xl h-9 px-2 text-muted-foreground hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
