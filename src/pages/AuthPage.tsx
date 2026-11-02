import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, User, Phone, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';

export default function AuthPage() {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'register' ? 'register' : 'login';
  const [isRegister, setIsRegister] = useState(initialMode === 'register');

  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // If already authenticated, redirect
  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter your email and password');
      return;
    }

    setLoading(true);
    try {
      if (isRegister) {
        if (!name || !phone) {
          toast.error('Please provide your full name and mobile number.');
          setLoading(false);
          return;
        }
        await register(name, email, phone, password);
      } else {
        await login(email, password);
      }
      navigate('/dashboard');
    } catch (err: any) {
      toast.error(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-6 sm:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full border border-slate-200/90 shadow-[0_12px_40px_-12px_rgba(109,40,217,0.12)] relative"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
        </Link>

        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mx-auto mb-4 text-violet-700">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
            {isRegister ? 'Create Your Account' : 'Welcome Back'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {isRegister
              ? 'Sign up to track your deliverables, invoices & raise support issues.'
              : 'Sign in to access your orders, payments, and project tickets.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <div>
                <Label htmlFor="authName" className="text-xs font-bold mb-1.5 block">
                  Full Name / Business Name *
                </Label>
                <div className="relative">
                  <User className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    id="authName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="rounded-xl pl-9 text-xs sm:text-sm h-11 bg-white/90"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="authPhone" className="text-xs font-bold mb-1.5 block">
                  WhatsApp Contact Number *
                </Label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    id="authPhone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="rounded-xl pl-9 text-xs sm:text-sm h-11 bg-white/90"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="authEmail" className="text-xs font-bold mb-1.5 block">
              Email Address *
            </Label>
            <div className="relative">
              <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                id="authEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="rounded-xl pl-9 text-xs sm:text-sm h-11 bg-white/90"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="authPassword" className="text-xs font-bold mb-1.5 block">
              Password *
            </Label>
            <div className="relative">
              <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                id="authPassword"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="rounded-xl pl-9 text-xs sm:text-sm h-11 bg-white/90"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl font-bold h-11 gap-2 shadow-lg shadow-primary/20 mt-2"
          >
            {loading ? 'Please wait...' : isRegister ? 'Create Account' : 'Sign In'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </form>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          {isRegister ? (
            <p>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-primary font-bold hover:underline"
              >
                Sign in here
              </button>
            </p>
          ) : (
            <p>
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-primary font-bold hover:underline"
              >
                Create one now
              </button>
            </p>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Accounts are automatically generated when placing orders.</span>
        </div>
      </motion.div>
    </div>
  );
}
