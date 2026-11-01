import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getSettings, updateSettings } from '@/services/settingsService';
import { CreditCard, Eye, EyeOff, Save, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function PaymentSettings() {
  const [keyId, setKeyId] = useState('');
  const [keySecret, setKeySecret] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getSettings().then((res) => {
      const find = (k: string) => res.settings.find((s) => s.key === k)?.value ?? '';
      setKeyId(find('razorpay_key_id'));
      setKeySecret(find('razorpay_key_secret'));
      setWhatsapp(find('whatsapp_number') || '919004804043');
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await Promise.all([
        updateSettings({ key: 'razorpay_key_id', value: keyId, description: 'Razorpay Live/Test Key ID' }),
        updateSettings({ key: 'razorpay_key_secret', value: keySecret, description: 'Razorpay Key Secret' }),
        updateSettings({ key: 'whatsapp_number', value: whatsapp, description: 'Official WhatsApp Orders Desk' }),
      ]);
      toast.success('Settings updated successfully!');
    } catch {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass-card rounded-3xl p-8 border border-white/70 shadow-xl space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <CreditCard className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-extrabold text-lg text-foreground">Payments & Gateway Configuration</h2>
          <p className="text-muted-foreground text-xs">Manage your WhatsApp order recipient and Razorpay keys</p>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 space-y-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <p className="text-xs font-bold text-foreground uppercase tracking-wider">WhatsApp Orders Phone Desk</p>
        </div>
        <div>
          <Label htmlFor="whatsapp">WhatsApp Business Number (with country code, no + or spaces)</Label>
          <Input
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="919004804043"
            className="mt-1.5 rounded-xl font-mono text-sm bg-white/90"
          />
          <p className="text-[11px] text-muted-foreground mt-1">
            Current default: 919004804043. All checkout orders trigger direct WhatsApp messages to this phone.
          </p>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-muted/40 border border-border/60 space-y-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-primary" />
          <p className="text-xs font-bold text-foreground uppercase tracking-wider">Razorpay Gateway Integration</p>
        </div>

        <div>
          <Label htmlFor="keyId">Razorpay Key ID</Label>
          <Input
            id="keyId"
            value={keyId}
            onChange={(e) => setKeyId(e.target.value)}
            placeholder="rzp_live_xxxxxxxxxxxx or rzp_test_xxxxxxxxxxxx"
            className="mt-1.5 rounded-xl font-mono text-sm bg-white/90"
          />
        </div>

        <div>
          <Label htmlFor="keySecret">Razorpay Key Secret</Label>
          <div className="relative mt-1.5">
            <Input
              id="keySecret"
              type={showSecret ? 'text' : 'password'}
              value={keySecret}
              onChange={(e) => setKeySecret(e.target.value)}
              placeholder="••••••••••••••••"
              className="rounded-xl font-mono text-sm pr-10 bg-white/90"
            />
            <button
              type="button"
              onClick={() => setShowSecret(!showSecret)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <Button onClick={handleSave} disabled={saving} className="w-full rounded-xl gap-2 font-bold h-11 shadow-lg shadow-primary/20">
        <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Configuration'}
      </Button>
    </motion.div>
  );
}
