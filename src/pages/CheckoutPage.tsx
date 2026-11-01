import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/services/orderService';
import { autoRegisterOrLoginAtCheckout } from '@/services/authService';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowLeft, ShieldCheck, Copy, Check, Lock, UserCheck } from 'lucide-react';
import { toast } from 'sonner';

const WA_NUMBER = '919004804043';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  password?: string;
  notes?: string;
}

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const { user, isAuthenticated, refreshSession } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
    },
  });

  useEffect(() => {
    if (user) {
      if (user.name) setValue('name', user.name);
      if (user.email) setValue('email', user.email);
      if (user.phone) setValue('phone', user.phone);
    }
  }, [user, setValue]);

  if (items.length === 0 && !success) {
    return (
      <div className="min-h-[80vh] pt-32 flex items-center justify-center px-4">
        <div className="text-center glass-card p-12 rounded-3xl border border-white/70 shadow-xl max-w-sm">
          <p className="text-muted-foreground text-sm mb-4">No items in your cart to checkout.</p>
          <Link to="/services">
            <Button className="rounded-xl font-bold">Browse Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: CheckoutFormData) => {
    setLoading(true);
    try {
      // 1. Automatically register or log in the client
      const authResult = await autoRegisterOrLoginAtCheckout({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });
      refreshSession();

      if (authResult.isNewAccount) {
        toast.success(`Account created automatically for ${data.email}!`);
      }

      const packageSummary = items
        .map((i) => `${i.package.name} (${i.package.tier}) - ${i.package.priceDisplay}`)
        .join(', ');

      const result = await createOrder({
        clientName: data.name,
        clientEmail: data.email,
        clientPhone: data.phone,
        packageName: packageSummary,
        packageId: items.map((i) => i.package.id).join(','),
        category: items.map((i) => i.package.category).join(','),
        totalAmount: total,
        notes: data.notes,
      });

      const formattedOrderRef = `#DR-${result.orderNumber}`;
      setOrderRef(formattedOrderRef);
      setSuccess(true);
      clearCart();

      // Construct formatted WhatsApp message
      const msgLines = [
        `*🚀 New Order from DocuReady Shop*`,
        `━━━━━━━━━━━━━━━━━━`,
        `👤 *Client:* ${data.name}`,
        `📧 *Email:* ${data.email}`,
        `📱 *WhatsApp:* ${data.phone}`,
        `📦 *Selected Services:* ${packageSummary}`,
        `💰 *Total Amount:* ₹${total.toLocaleString('en-IN')}`,
        data.notes ? `📝 *Project Brief:* ${data.notes}` : '',
        `🆔 *Order Reference:* ${formattedOrderRef}`,
        `━━━━━━━━━━━━━━━━━━`,
        `Hi DocuReady team, I have placed this order on docuready.shop. Please confirm timeline and project kick-off!`,
      ]
        .filter(Boolean)
        .join('\n');

      toast.success('Order recorded successfully!');

      // Open WhatsApp window with pre-filled message
      setTimeout(() => {
        window.open(
          `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msgLines)}`,
          '_blank'
        );
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error('Could not process order. Please check details.');
    } finally {
      setLoading(false);
    }
  };

  const copyRef = () => {
    navigator.clipboard.writeText(orderRef);
    setCopied(true);
    toast.success('Order ID copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  // Order Placement Success Screen
  if (success) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-8 sm:p-14 max-w-md w-full text-center shadow-2xl border border-white/80"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 text-emerald-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-1 tracking-tight">Order Placed! 🎉</h2>
          <p className="text-xs text-muted-foreground mb-6">
            Your project details have been successfully logged in our system.
          </p>

          <div className="bg-muted/50 rounded-2xl p-4 mb-6 border border-border/60 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[11px] text-muted-foreground block font-medium">Order Reference:</span>
              <span className="font-extrabold text-primary text-lg">{orderRef}</span>
            </div>
            <Button size="sm" variant="ghost" onClick={copyRef} className="rounded-lg h-8 px-2.5">
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-6">
            We are opening WhatsApp so you can instantly verify details with the team. You can also view this order anytime under <strong>Track Orders</strong>.
          </p>

          <div className="flex flex-col gap-3">
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full rounded-xl gap-2 font-bold bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20">
                <MessageCircle className="w-5 h-5" /> Open WhatsApp Chat
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-xl font-bold"
              onClick={() => navigate('/dashboard')}
            >
              Track My Orders
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Cart
          </Link>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">Checkout & Kick-off</h1>
          <p className="text-muted-foreground text-sm mb-8">
            Enter your details. An order reference will be generated and dispatched immediately to our WhatsApp desk.
          </p>

          {/* Mini Summary */}
          <div className="glass-card rounded-2xl p-6 mb-6 border border-white/70 shadow-md">
            <h2 className="font-bold text-sm text-primary uppercase tracking-wider mb-3">Order Summary</h2>
            <div className="space-y-2 mb-3">
              {items.map((item) => (
                <div key={item.package.id} className="flex justify-between text-xs py-1 border-b border-border/40 last:border-0">
                  <span className="font-medium text-foreground">
                    {item.package.name} <span className="text-muted-foreground">({item.package.tier})</span>
                  </span>
                  <span className="font-bold">{item.package.priceDisplay}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-border/70 font-extrabold text-base">
              <span>Total Payable</span>
              <span className="text-primary text-xl font-black">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-lg">Your Information</h2>
              {!isAuthenticated && (
                <Link to="/login" className="text-xs font-bold text-primary hover:underline">
                  Already have an account? Sign In
                </Link>
              )}
            </div>

            {isAuthenticated && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 text-emerald-900 font-semibold">
                  <UserCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Signed in as <strong>{user?.name}</strong> ({user?.email})
                  </span>
                </div>
                <span className="text-[11px] text-emerald-700 font-medium hidden sm:inline">
                  Linked to your client portal
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <Label htmlFor="name">Full Name or Business Name *</Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  placeholder="e.g. Ramesh Kumar / Acme Inc."
                  className="mt-1.5 rounded-xl"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Valid email required for order tracking',
                    },
                  })}
                  placeholder="your@email.com"
                  className="mt-1.5 rounded-xl"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                <p className="text-[11px] text-muted-foreground mt-1">Used for order tracking, receipts, and support tickets.</p>
              </div>

              <div>
                <Label htmlFor="phone">WhatsApp Contact Number *</Label>
                <Input
                  id="phone"
                  {...register('phone', { required: 'WhatsApp number is required' })}
                  placeholder="+91 98765 43210"
                  className="mt-1.5 rounded-xl"
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                <p className="text-[11px] text-muted-foreground mt-1">Our designers and developers will connect with you here.</p>
              </div>

              {/* Automatic Account Creation Field for guest checkout */}
              {!isAuthenticated && (
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold text-foreground">Auto-Generated Client Portal Account</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    An account will be automatically generated with this email so you can log in, track project milestones, and raise revision requests anytime.
                  </p>
                  <div>
                    <Label htmlFor="password" className="text-xs font-semibold text-foreground mb-1 block">
                      Choose a Password (Optional)
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      {...register('password')}
                      placeholder="Enter a password (or we'll create a default one for you)"
                      className="rounded-xl text-xs bg-white/90"
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="notes">Project Brief or Specific Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  {...register('notes')}
                  placeholder="Any color preferences, target audience, reference URLs, or app requirements..."
                  className="mt-1.5 rounded-xl"
                  rows={3}
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl gap-2 font-bold text-base h-12 shadow-xl shadow-primary/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  {loading ? 'Generating Order...' : 'Confirm Order & Open WhatsApp'}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero spam. Direct conversation with dedicated project manager.</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
