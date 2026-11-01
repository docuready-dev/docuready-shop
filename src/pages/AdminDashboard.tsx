import { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getOrders, OrderRecord } from '@/services/orderService';
import { getAllIssues, updateIssueStatus, IssueRecord, IssueStatus } from '@/services/issueService';
import OrdersTable from '@/components/admin/OrdersTable';
import DiscountsManager from '@/components/admin/DiscountsManager';
import ServicesManager from '@/components/admin/ServicesManager';
import PaymentSettings from '@/components/admin/PaymentSettings';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  LayoutDashboard,
  Settings,
  Package,
  TrendingUp,
  IndianRupee,
  Clock,
  Tag,
  Layers,
  Lock,
  LogOut,
  RefreshCw,
  Search,
  AlertCircle,
  MessageCircle,
  Mail,
  KeyRound,
  ShieldAlert,
} from 'lucide-react';
import { toast } from 'sonner';

const ADMIN_REQUIRED_EMAIL = 'ashleyghose64@gmail.com';
const ADMIN_REQUIRED_PASS = 'Maybach@$#051995';

function StatCard({
  icon: Icon,
  label,
  value,
  color = 'text-primary',
}: {
  icon: any;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="glass-card rounded-2xl p-6 border border-white/70 shadow-md">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-primary/10 text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <p className="text-muted-foreground text-xs font-semibold">{label}</p>
      <p className={`text-2xl font-black mt-1 ${color}`}>{value}</p>
    </div>
  );
}

export default function AdminDashboard() {
  // Purely ephemeral state - credentials and session never persist to localStorage
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [issues, setIssues] = useState<IssueRecord[]>([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamic visual alphanumeric captcha generator with noise & distortion
  const generateCaptcha = useCallback(() => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaInput('');

    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bgGrad.addColorStop(0, '#f5f3ff');
      bgGrad.addColorStop(1, '#ede9fe');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Noise lines
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 120 + 80)}, ${Math.floor(
          Math.random() * 60
        )}, ${Math.floor(Math.random() * 200 + 55)}, 0.35)`;
        ctx.lineWidth = Math.random() * 1.5 + 1;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
      }

      // Noise dots
      for (let i = 0; i < 28; i++) {
        ctx.fillStyle = `rgba(124, 58, 237, ${Math.random() * 0.35 + 0.1})`;
        ctx.beginPath();
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render distorted characters
      const charSpacing = canvas.width / (code.length + 0.8);
      ctx.font = 'bold 24px monospace, sans-serif';
      ctx.textBaseline = 'middle';

      for (let i = 0; i < code.length; i++) {
        ctx.save();
        const x = (i + 0.6) * charSpacing;
        const y = canvas.height / 2 + (Math.random() * 6 - 3);
        const angle = (Math.random() * 32 - 16) * (Math.PI / 180);
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = i % 2 === 0 ? '#6d28d9' : '#4338ca';
        ctx.fillText(code[i], 0, 0);
        ctx.restore();
      }
    }, 25);
  }, []);

  // Initialize captcha on component mount
  useEffect(() => {
    if (!authenticated) {
      generateCaptcha();
    }
  }, [authenticated, generateCaptcha]);

  const fetchOrders = useCallback(async () => {
    setOrdersLoading(true);
    try {
      const [orderRes, issueRes] = await Promise.all([getOrders(), getAllIssues()]);
      setOrders(orderRes.orders);
      setIssues(issueRes);
    } catch {
      toast.error('Failed to load records');
    } finally {
      setOrdersLoading(false);
    }
  }, []);

  const handleIssueStatus = async (issueId: string, status: IssueStatus) => {
    try {
      await updateIssueStatus(issueId, status);
      toast.success(`Ticket status updated to ${status}`);
      fetchOrders();
    } catch {
      toast.error('Could not update ticket status');
    }
  };

  useEffect(() => {
    if (authenticated) {
      fetchOrders();
    }
  }, [authenticated, fetchOrders]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Verify Captcha
    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      toast.error('Incorrect captcha code. Please verify the characters.');
      generateCaptcha();
      return;
    }

    // 2. Verify strict admin credentials
    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPass = passwordInput.trim();

    if (cleanEmail === ADMIN_REQUIRED_EMAIL && cleanPass === ADMIN_REQUIRED_PASS) {
      setAuthenticated(true);
      toast.success('Admin authorization granted');
    } else {
      toast.error('Access denied. Invalid administrative credentials.');
      setPasswordInput('');
      generateCaptcha();
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setEmailInput('');
    setPasswordInput('');
    setCaptchaInput('');
    toast.info('Signed out from admin desk');
  };

  // Auth Gate
  if (!authenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-2xl border border-white/80 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-extrabold mb-1 tracking-tight">Restricted Admin Access</h1>
          <p className="text-muted-foreground text-xs mb-6">
            Administrative credentials and visual verification required to access operational controls.
          </p>

          {/* Form with anti-autofill and zero-save measures */}
          <form
            onSubmit={handleLogin}
            autoComplete="off"
            className="space-y-4 text-left"
          >
            {/* Hidden dummy fields to neutralize aggressive browser autofill heuristics */}
            <input type="text" name="prevent_autofill_user" style={{ display: 'none' }} tabIndex={-1} />
            <input type="password" name="prevent_autofill_pwd" style={{ display: 'none' }} tabIndex={-1} />

            {/* Email Field */}
            <div>
              <Label htmlFor="admEmail" className="text-xs font-bold mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" /> Admin Email
              </Label>
              <Input
                id="admEmail"
                type="email"
                required
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                data-lpignore="true"
                data-1p-ignore="true"
                placeholder="name@docuready.shop"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="rounded-xl h-11 text-sm bg-white/95"
              />
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="admPassword" className="text-xs font-bold mb-1.5 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-primary" /> Passkey
              </Label>
              <Input
                id="admPassword"
                type="password"
                required
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                data-lpignore="true"
                data-1p-ignore="true"
                placeholder="Enter root admin password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="rounded-xl h-11 text-sm bg-white/95"
              />
            </div>

            {/* Captcha Section */}
            <div className="pt-1">
              <Label className="text-xs font-bold mb-1.5 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-primary" /> Security Verification
              </Label>

              <div className="flex items-center gap-3 mb-2">
                <div className="rounded-xl border border-primary/20 overflow-hidden bg-purple-50/50 shadow-inner p-1">
                  <canvas
                    ref={canvasRef}
                    width={150}
                    height={44}
                    className="rounded-lg block cursor-pointer"
                    onClick={generateCaptcha}
                    title="Click to reload captcha"
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={generateCaptcha}
                  className="rounded-xl h-10 px-3 text-xs gap-1 border-white/60 hover:bg-primary/10"
                  title="Generate new captcha"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-primary" />
                </Button>
              </div>

              <Input
                type="text"
                required
                maxLength={6}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="characters"
                spellCheck={false}
                data-lpignore="true"
                placeholder="Enter characters from box"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="rounded-xl h-11 text-sm bg-white/95 uppercase font-mono tracking-widest"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl font-bold h-11 shadow-lg shadow-primary/20 mt-2"
            >
              Verify & Unlock Desk
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  const totalRevenue = orders.reduce((s, o) => s + (o.totalAmount ?? 0), 0);
  const pendingCount = orders.filter((o) => o.status === 'Pending').length;
  const inProgressCount = orders.filter((o) => o.status === 'In Progress').length;
  const completedCount = orders.filter((o) => o.status === 'Completed').length;

  const filteredOrders = searchQuery
    ? orders.filter(
        (o) =>
          o.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.clientEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
          o.clientPhone.includes(searchQuery) ||
          String(o.orderNumber).includes(searchQuery)
      )
    : orders;

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-7xl">
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <LayoutDashboard className="w-6 h-6 text-primary" />
              <h1 className="text-3xl font-extrabold tracking-tight">Admin Operations Desk</h1>
            </div>
            <p className="text-muted-foreground text-xs">
              Live orders management, pricing rules, custom services and payment endpoints
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="rounded-xl gap-1.5 text-xs font-bold text-muted-foreground hover:text-destructive"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
          <StatCard icon={Package} label="Total Orders" value={String(orders.length)} />
          <StatCard icon={Clock} label="Pending Review" value={String(pendingCount)} color="text-amber-600" />
          <StatCard icon={TrendingUp} label="In Production" value={String(inProgressCount)} color="text-purple-600" />
          <StatCard icon={TrendingUp} label="Completed" value={String(completedCount)} color="text-emerald-600" />
          <StatCard icon={IndianRupee} label="Total Revenue" value={`₹${totalRevenue.toLocaleString('en-IN')}`} />
        </div>

        {/* Tabs Control */}
        <Tabs defaultValue="orders">
          <div className="overflow-x-auto pb-2 mb-6">
            <TabsList className="glass-card border border-white/60 shadow-md rounded-2xl p-1.5 h-auto gap-2 flex w-max">
              {[
                { value: 'orders', icon: Package, label: `Orders (${orders.length})` },
                { value: 'issues', icon: AlertCircle, label: `Support Tickets (${issues.length})` },
                { value: 'discounts', icon: Tag, label: 'Discounts & Sales' },
                { value: 'services', icon: Layers, label: 'Manage Services' },
                { value: 'settings', icon: Settings, label: 'Gateway & Phone' },
              ].map(({ value, icon: Icon, label }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-xl px-4 py-2 text-xs sm:text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-1.5 whitespace-nowrap transition-all"
                >
                  <Icon className="w-4 h-4" /> {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Orders Content */}
          <TabsContent value="orders">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input
                  placeholder="Search by client name, email, order #..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="rounded-xl pl-9 text-xs h-10 bg-white/90"
                />
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={fetchOrders}
                disabled={ordersLoading}
                className="rounded-xl gap-1.5 text-xs font-bold h-10"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${ordersLoading ? 'animate-spin' : ''}`} />
                {ordersLoading ? 'Refreshing...' : 'Refresh Orders'}
              </Button>
            </div>

            <OrdersTable orders={filteredOrders} onRefresh={fetchOrders} />
          </TabsContent>

          {/* Support Tickets Content */}
          <TabsContent value="issues">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-extrabold mb-1">Customer Support & Revision Tickets</h2>
                <p className="text-xs text-muted-foreground">
                  Review client-submitted issues, revision requests, and queries.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchOrders}
                className="rounded-xl gap-1.5 text-xs font-bold"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refresh
              </Button>
            </div>

            {issues.length === 0 ? (
              <div className="glass-card rounded-3xl p-12 text-center border border-white/60">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="font-bold text-base mb-1">No support tickets</p>
                <p className="text-muted-foreground text-xs">No client has raised an issue or revision request yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {issues.map((iss) => (
                  <div
                    key={iss.id}
                    className="glass-card rounded-2xl p-6 border border-white/70 shadow-md"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                            {iss.issueType}
                          </span>
                          {iss.orderNumber && (
                            <span className="text-xs font-extrabold text-foreground">
                              Order: #DR-{iss.orderNumber}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-base text-foreground mb-1">{iss.subject}</h3>
                        <p className="text-xs text-muted-foreground mb-3">
                          From: <strong>{iss.userName}</strong> ({iss.userEmail} · {iss.userPhone})
                        </p>
                        <div className="p-3.5 rounded-xl bg-muted/40 border border-border/50 text-xs leading-relaxed max-w-2xl">
                          {iss.description}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2.5">
                        <div className="w-36">
                          <Select
                            value={iss.status}
                            onValueChange={(v: string) => handleIssueStatus(iss.id, v as IssueStatus)}
                          >
                            <SelectTrigger className="rounded-xl text-xs h-9 bg-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Open">Open</SelectItem>
                              <SelectItem value="In Review">In Review</SelectItem>
                              <SelectItem value="Resolved">Resolved</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {iss.userPhone && (
                          <a
                            href={`https://wa.me/${iss.userPhone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(
                              iss.userName
                            )}%2C%20DocuReady%20Support%20here%20regarding%20your%20ticket%3A%20${encodeURIComponent(
                              iss.subject
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Button size="sm" variant="outline" className="rounded-xl gap-1.5 text-xs font-bold h-8 border-emerald-500/30 text-emerald-800 hover:bg-emerald-50">
                              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Client
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Discounts Content */}
          <TabsContent value="discounts">
            <div className="mb-6">
              <h2 className="text-xl font-extrabold mb-1">Discounts & Promo Tags</h2>
              <p className="text-xs text-muted-foreground">
                Set a global site-wide discount banner or toggle individual package percentage discounts.
              </p>
            </div>
            <DiscountsManager />
          </TabsContent>

          {/* Services Content */}
          <TabsContent value="services">
            <div className="mb-6">
              <h2 className="text-xl font-extrabold mb-1">Service Catalog Manager</h2>
              <p className="text-xs text-muted-foreground">
                Create new services or hide default offerings. All modifications sync directly to the live site.
              </p>
            </div>
            <ServicesManager />
          </TabsContent>

          {/* Payment & Settings Content */}
          <TabsContent value="settings">
            <PaymentSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
