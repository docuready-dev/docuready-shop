import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { getCustomServices, saveCustomService, deleteService } from '@/services/customServicesService';
import { ALL_PACKAGES, CATEGORIES, Package, Category } from '@/data/packages';
import { Trash2, Plus, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface CustomSvc {
  id: string;
  name: string;
  category: string;
  tier: string;
  priceDisplay: string;
  description: string;
  isCustom: true;
}

interface BuiltinSvc extends Package {
  isCustom: false;
}

type AnyService = CustomSvc | BuiltinSvc;

const emptyForm = {
  name: '',
  category: 'App Development' as Category,
  tier: 'Standard',
  price: '',
  priceDisplay: '',
  priceNote: '',
  description: '',
  features: '',
  deliveryDays: '7',
};

export default function ServicesManager() {
  const [services, setServices] = useState<AnyService[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const { services: custom, deletedBuiltinIds } = await getCustomServices();
    const builtins: BuiltinSvc[] = ALL_PACKAGES.filter((p) => !deletedBuiltinIds.includes(p.id)).map((p) => ({
      ...p,
      isCustom: false as const,
    }));
    const customs: CustomSvc[] = custom.map((s) => ({
      id: s.id,
      name: s.name,
      category: s.category,
      tier: s.tier,
      priceDisplay: s.priceDisplay,
      description: s.description,
      isCustom: true as const,
    }));
    setServices([...builtins, ...customs]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (svc: AnyService) => {
    try {
      if (svc.isCustom) await deleteService({ customServiceId: svc.id });
      else await deleteService({ builtinId: svc.id });
      toast.success('Service removed from catalog');
      load();
    } catch {
      toast.error('Failed to remove service');
    }
  };

  const handleAdd = async () => {
    if (!form.name || !form.priceDisplay || !form.description) {
      toast.error('Please fill all required fields');
      return;
    }
    setSaving(true);
    try {
      await saveCustomService({
        name: form.name,
        category: form.category,
        tier: form.tier,
        price: Number(form.price) || 0,
        priceDisplay: form.priceDisplay,
        priceNote: form.priceNote || undefined,
        description: form.description,
        featuresJson: form.features,
        deliveryDays: Number(form.deliveryDays) || 5,
      });
      toast.success('Custom service added to live shop!');
      setForm(emptyForm);
      setShowForm(false);
      load();
    } catch {
      toast.error('Failed to save service');
    }
    setSaving(false);
  };

  const grouped = CATEGORIES.reduce(
    (acc, cat) => ({
      ...acc,
      [cat]: services.filter((s) => s.category === cat),
    }),
    {} as Record<string, AnyService[]>
  );

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {CATEGORIES.map(
        (cat) =>
          grouped[cat]?.length > 0 && (
            <div key={cat}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-primary uppercase tracking-widest">{cat}</span>
                <span className="text-xs text-muted-foreground">({grouped[cat].length} packages)</span>
              </div>
              <div className="space-y-2">
                {grouped[cat].map((svc) => (
                  <div
                    key={svc.id}
                    className="glass-card rounded-2xl px-5 py-3.5 flex items-center justify-between gap-4 border border-white/70"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-bold text-sm truncate text-foreground">{svc.name}</span>
                      <Badge variant="outline" className="text-xs font-semibold">
                        {svc.tier}
                      </Badge>
                      <span className="text-sm text-primary font-black">{svc.priceDisplay}</span>
                      {svc.isCustom ? (
                        <Badge className="text-xs bg-primary/10 text-primary border-0 font-bold">
                          Custom
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs text-emerald-700 bg-emerald-50 border-emerald-200 font-bold">
                          Core
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(svc)}
                      className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive rounded-xl flex-shrink-0 h-8 w-8 p-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )
      )}

      {/* Add Custom Service Form */}
      <div className="border-t border-border pt-6">
        <Button
          onClick={() => setShowForm(!showForm)}
          variant="outline"
          className="rounded-xl gap-2 w-full font-bold h-11 border-dashed border-primary/40 text-primary hover:bg-primary/5"
        >
          <Plus className="w-4 h-4" /> {showForm ? 'Close Add Form' : 'Add New Custom Service or App Tier'}
        </Button>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-card rounded-3xl p-6 sm:p-8 mt-4 space-y-4 border border-white/80 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Plus className="w-5 h-5 text-primary" />
                <h3 className="font-extrabold text-lg">Create New Service Package</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Service Name *</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 rounded-xl"
                    placeholder="e.g. Flutter Cross-Platform App"
                  />
                </div>

                <div>
                  <Label>Price Display (e.g. ₹3,599) *</Label>
                  <Input
                    value={form.priceDisplay}
                    onChange={(e) => setForm({ ...form, priceDisplay: e.target.value })}
                    className="mt-1.5 rounded-xl"
                    placeholder="₹3,599"
                  />
                </div>

                <div>
                  <Label>Category</Label>
                  <Select
                    value={form.category}
                    onValueChange={(v) => setForm({ ...form, category: v as Category })}
                  >
                    <SelectTrigger className="mt-1.5 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Tier</Label>
                  <Select
                    value={form.tier}
                    onValueChange={(v) => setForm({ ...form, tier: v })}
                  >
                    <SelectTrigger className="mt-1.5 rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Standard">Standard</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                      <SelectItem value="Starter">Starter</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Numeric Price (for cart calculations)</Label>
                  <Input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="mt-1.5 rounded-xl"
                    placeholder="3599"
                  />
                </div>

                <div>
                  <Label>Delivery Days</Label>
                  <Input
                    type="number"
                    value={form.deliveryDays}
                    onChange={(e) => setForm({ ...form, deliveryDays: e.target.value })}
                    className="mt-1.5 rounded-xl"
                    placeholder="7"
                  />
                </div>
              </div>

              <div>
                <Label>Description *</Label>
                <Textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="mt-1.5 rounded-xl"
                  rows={2}
                  placeholder="Short summary of what this deliverable offers..."
                />
              </div>

              <div>
                <Label>Features Checklist (One bullet per line)</Label>
                <Textarea
                  value={form.features}
                  onChange={(e) => setForm({ ...form, features: e.target.value })}
                  className="mt-1.5 rounded-xl font-mono text-xs"
                  rows={4}
                  placeholder={"Native Android APK file\nCustom branded splash screen\nWhatsApp integration\nOffline caching\n2 revision rounds"}
                />
              </div>

              <Button
                onClick={handleAdd}
                disabled={saving}
                className="w-full rounded-xl gap-2 font-bold h-11"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                Publish Service to Live Shop
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
