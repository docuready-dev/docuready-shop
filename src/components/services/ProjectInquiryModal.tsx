import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, MessageCircle, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package, ALL_PACKAGES } from '@/data/packages';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: Package | null;
  onSelectPackage?: (pkg: Package) => void;
}

const WA_CONTACT = '919004804043';

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  selectedPackage,
  onSelectPackage,
}: Props) {
  const { addItem, items } = useCart();
  const [currentPackage, setCurrentPackage] = useState<Package | null>(selectedPackage);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeline, setTimeline] = useState('Within 2 Weeks');
  const [requirements, setRequirements] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setCurrentPackage(selectedPackage);
    } else if (ALL_PACKAGES.length > 0 && !currentPackage) {
      setCurrentPackage(ALL_PACKAGES[0]);
    }
  }, [selectedPackage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !currentPackage) return null;

  const inCart = items.some((item) => item.package.id === currentPackage.id);

  const constructInquiryMessage = () => {
    const lines = [
      `*⚡ INQUIRY SPECIFICATION: ${currentPackage.name.toUpperCase()}*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `📦 *Package:* ${currentPackage.name} (${currentPackage.tier})`,
      `🏷️ *Category:* ${currentPackage.category}`,
      `💰 *Investment:* ${currentPackage.priceDisplay}`,
      `⏱️ *Committed Timeline:* ${currentPackage.deliveryTimeline}`,
      `🏢 *Company / Entity:* ${company.trim() || 'Direct Client'}`,
      `👤 *Contact Person:* ${name.trim() || 'Principal Inquirer'}`,
      `📧 *Email:* ${email.trim() || 'Not specified'}`,
      `📱 *Phone / WhatsApp:* ${phone.trim() || 'Direct Dispatch'}`,
      `📅 *Target Kick-off:* ${timeline}`,
      requirements.trim() ? `📝 *Operational Scope & Notes:*\n${requirements.trim()}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `*DocuReady Engineering Desk:* Requesting formal technical brief, scope review, and milestone execution plan.`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleWhatsAppDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim() && !email.trim()) {
      toast.error('Please enter at least your name and a contact channel (WhatsApp/Email).');
      return;
    }

    setIsSubmitting(true);
    const msg = constructInquiryMessage();
    const waUrl = `https://wa.me/${WA_CONTACT}?text=${encodeURIComponent(msg)}`;

    toast.success(`Inquiry for ${currentPackage.name} prepared. Opening WhatsApp dispatch...`);
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      onClose();
    }, 600);
  };

  const handleCopySpec = () => {
    const msg = constructInquiryMessage();
    navigator.clipboard.writeText(msg);
    setCopied(true);
    toast.success('Inquiry specification copied to clipboard.');
    setTimeout(() => setCopied(false), 2200);
  };

  const handleAddToCart = () => {
    addItem(currentPackage);
    toast.success(`${currentPackage.name} added to your project cart!`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/75 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window with Clean Tech Aesthetic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white border border-neutral-300 rounded-xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Top Architectural Header */}
          <div className="bg-neutral-950 text-white px-6 py-4 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-none bg-white" />
              <div>
                <h3 className="font-delight-bold text-sm tracking-wide uppercase text-white">
                  Technical Project Inquiry
                </h3>
                <p className="font-mono text-[11px] text-neutral-400">
                  REF://SPEC-{currentPackage.id.toUpperCase()}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {/* Auto-Selected Package Spec Card */}
            <div className="bg-neutral-50/80 border border-neutral-200 rounded-lg p-5 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-neutral-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-neutral-200 text-neutral-800 font-semibold">
                      {currentPackage.tier}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-tight">
                      {currentPackage.category}
                    </span>
                  </div>
                  <h4 className="font-delight-extrabold text-xl text-neutral-950 tracking-tight">
                    {currentPackage.name}
                  </h4>
                </div>

                <div className="text-left sm:text-right">
                  <div className="font-mono font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight">
                    {currentPackage.priceDisplay}
                  </div>
                  <div className="font-mono text-[11px] text-neutral-600 flex items-center sm:justify-end gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{currentPackage.deliveryTimeline}</span>
                  </div>
                </div>
              </div>

              {/* Package Selector Dropdown if client wants to switch */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 shrink-0">
                  Switch Scope:
                </span>
                <Select
                  value={currentPackage.id}
                  onValueChange={(id) => {
                    const found = ALL_PACKAGES.find((p) => p.id === id);
                    if (found) {
                      setCurrentPackage(found);
                      if (onSelectPackage) onSelectPackage(found);
                    }
                  }}
                >
                  <SelectTrigger className="h-8 text-xs font-mono bg-white border-neutral-300 rounded">
                    <SelectValue placeholder="Select another tier..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-64 font-mono text-xs">
                    {ALL_PACKAGES.map((pkg) => (
                      <SelectItem key={pkg.id} value={pkg.id}>
                        [{pkg.tier}] {pkg.name} — {pkg.priceDisplay}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Suitability Synopsis */}
              <p className="text-xs text-neutral-600 leading-relaxed font-delight-regular">
                <span className="font-delight-semibold text-neutral-900">Recommended For: </span>
                {currentPackage.suitability}
              </p>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleWhatsAppDispatch} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 block mb-1">
                    Representative Name *
                  </Label>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="h-10 text-xs sm:text-sm rounded border-neutral-300 focus:border-neutral-950"
                  />
                </div>

                <div>
                  <Label className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 block mb-1">
                    Company / Operation Name
                  </Label>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Freight Logistics"
                    className="h-10 text-xs sm:text-sm rounded border-neutral-300 focus:border-neutral-950"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 block mb-1">
                    Direct Email Address *
                  </Label>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="operations@company.in"
                    className="h-10 text-xs sm:text-sm rounded border-neutral-300 focus:border-neutral-950"
                  />
                </div>

                <div>
                  <Label className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 block mb-1">
                    WhatsApp / Direct Mobile *
                  </Label>
                  <Input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98200 XXXXX"
                    className="h-10 text-xs sm:text-sm rounded border-neutral-300 focus:border-neutral-950 font-mono"
                  />
                </div>
              </div>

              <div>
                <Label className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 block mb-1">
                  Target Kick-off Window
                </Label>
                <Select value={timeline} onValueChange={setTimeline}>
                  <SelectTrigger className="h-10 text-xs sm:text-sm rounded border-neutral-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="text-xs font-mono">
                    <SelectItem value="Immediate (Next 72 Hours)">Immediate (Next 72 Hours)</SelectItem>
                    <SelectItem value="Within 2 Weeks">Within 2 Weeks</SelectItem>
                    <SelectItem value="Within 30 Days">Within 30 Days</SelectItem>
                    <SelectItem value="Exploratory / Budget Planning">Exploratory / Budget Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="font-mono text-[11px] uppercase tracking-wider text-neutral-700 block mb-1">
                  Technical Requirements / Operational Scope
                </Label>
                <Textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Describe your current setup, expected users/traffic, domain status, or specific custom integrations..."
                  className="text-xs sm:text-sm rounded border-neutral-300 focus:border-neutral-950 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white font-delight-bold h-11 text-xs sm:text-sm gap-2 flex-1 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Dispatch Technical Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCopySpec}
                    className="rounded-lg border-neutral-300 hover:bg-neutral-50 h-11 text-xs font-mono gap-1.5 px-3"
                    title="Copy formatted specification to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                  </Button>

                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleAddToCart}
                    disabled={inCart}
                    className="rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-200 h-11 text-xs font-mono px-3"
                  >
                    {inCart ? 'In Cart' : '+ Add to Cart'}
                  </Button>
                </div>
              </div>
            </form>

            {/* Compliance & Privacy Footer */}
            <div className="mt-5 pt-3.5 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-700" />
                <span>NDA & Client IP Protected under IT Act, 2000 (India)</span>
              </span>
              <span>Ashley Ajoy Ghose · Lead Architect</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
