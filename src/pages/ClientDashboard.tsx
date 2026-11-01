import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getOrders, OrderRecord } from '@/services/orderService';
import { createIssue, getUserIssues, IssueRecord, IssueStatus } from '@/services/issueService';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import {
  Package,
  AlertCircle,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Search,
  LogOut,
  Send,
  PlusCircle,
  User,
} from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const statusColors: Record<string, string> = {
  Pending: 'bg-amber-100 text-amber-800 border-amber-300',
  Confirmed: 'bg-blue-100 text-blue-800 border-blue-300',
  'In Progress': 'bg-purple-100 text-purple-800 border-purple-300',
  Completed: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  Cancelled: 'bg-rose-100 text-rose-800 border-rose-300',
};

const issueStatusColors: Record<IssueStatus, string> = {
  Open: 'bg-amber-100 text-amber-800 border-amber-300',
  'In Review': 'bg-blue-100 text-blue-800 border-blue-300',
  Resolved: 'bg-emerald-100 text-emerald-800 border-emerald-300',
};

export default function ClientDashboard() {
  const { user, isAuthenticated, logout } = useAuth();
  
  // State for guest lookup
  const [guestEmail, setGuestEmail] = useState('');
  const [activeEmail, setActiveEmail] = useState(user?.email || '');
  
  // Orders & Issues
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [issues, setIssues] = useState<IssueRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Issue modal / form state
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);
  const [issueType, setIssueType] = useState<any>('Revision Request');
  const [issueSubject, setIssueSubject] = useState('');
  const [issueDesc, setIssueDesc] = useState('');
  const [submittingIssue, setSubmittingIssue] = useState(false);

  const loadData = useCallback(async (emailToQuery: string) => {
    if (!emailToQuery.trim()) return;
    setLoading(true);
    try {
      const [orderRes, issueRes] = await Promise.all([
        getOrders({ email: emailToQuery }),
        getUserIssues(emailToQuery),
      ]);
      setOrders(orderRes.orders);
      setIssues(issueRes);
      setSearched(true);
    } catch {
      toast.error('Failed to load records. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user?.email) {
      setActiveEmail(user.email);
      loadData(user.email);
    }
  }, [user, loadData]);

  const handleGuestSearch = () => {
    if (!guestEmail.trim()) {
      toast.error('Please enter the email address used during order placement.');
      return;
    }
    setActiveEmail(guestEmail.trim());
    loadData(guestEmail.trim());
  };

  const openIssueForOrder = (order: OrderRecord) => {
    setSelectedOrder(order);
    setIssueSubject(`Revision / Issue for #DR-${order.orderNumber}`);
    setShowIssueModal(true);
  };

  const handleIssueSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueSubject.trim() || !issueDesc.trim()) {
      toast.error('Please fill in the subject and description.');
      return;
    }

    setSubmittingIssue(true);
    try {
      const userEmail = activeEmail || user?.email || 'client@docuready.shop';
      const userName = user?.name || selectedOrder?.clientName || 'Client';
      const userPhone = user?.phone || selectedOrder?.clientPhone || '';

      await createIssue({
        orderId: selectedOrder?.id,
        orderNumber: selectedOrder?.orderNumber,
        userEmail,
        userName,
        userPhone,
        issueType,
        subject: issueSubject,
        description: issueDesc,
      });

      toast.success('Issue logged successfully! Our team will review it shortly.');
      
      // WhatsApp notification option
      const waText = encodeURIComponent(
        `*Support Ticket Raised*\n👤 ${userName}\n📧 ${userEmail}\n📦 Order: #DR-${selectedOrder?.orderNumber || 'General'}\n🚨 Type: ${issueType}\n📝 Subject: ${issueSubject}\n${issueDesc}`
      );
      
      setShowIssueModal(false);
      setIssueSubject('');
      setIssueDesc('');
      setSelectedOrder(null);
      loadData(activeEmail);

      // Offer opening WhatsApp
      setTimeout(() => {
        if (confirm('Would you also like to notify our team directly on WhatsApp for faster response?')) {
          window.open(`https://wa.me/919004804043?text=${waText}`, '_blank');
        }
      }, 500);
    } catch {
      toast.error('Could not submit ticket. Please try again.');
    } finally {
      setSubmittingIssue(false);
    }
  };

  const totalSpent = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Package className="w-5 h-5" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {isAuthenticated ? `Welcome, ${user?.name}` : 'Client Orders & Support Portal'}
                </h1>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {isAuthenticated
                  ? `Logged in as ${user?.email} · Manage your deliverables, payments & revision requests`
                  : 'Track your deliverables, check payment statuses, and raise support tickets.'}
              </p>
            </div>

            {isAuthenticated ? (
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="rounded-xl gap-1.5 text-xs font-semibold text-muted-foreground hover:text-destructive"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </Button>
            ) : (
              <Link to="/login">
                <Button size="sm" className="rounded-xl gap-2 text-xs font-bold shadow-md shadow-primary/20">
                  <User className="w-4 h-4" /> Sign In / Register
                </Button>
              </Link>
            )}
          </div>

          {/* If NOT Authenticated and has not searched yet, show Sign In or Quick Lookup */}
          {!isAuthenticated && !searched && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1: Sign in */}
              <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Have a Client Account?</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    Accounts are automatically created when you place an order. Sign in with your email & password to access all payments, orders, and raise issues directly.
                  </p>
                </div>
                <Link to="/login">
                  <Button className="w-full rounded-xl font-bold">
                    Sign In with Email & Password
                  </Button>
                </Link>
              </div>

              {/* Card 2: Quick Lookup by email */}
              <div className="glass-card rounded-3xl p-8 border border-white/80 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Quick Lookup by Email</h2>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Enter the email address you used at checkout to immediately review current production status and invoices.
                  </p>
                  <div className="mb-4">
                    <Label htmlFor="guestEmail" className="text-xs font-bold mb-1.5 block">
                      Order Email Address
                    </Label>
                    <Input
                      id="guestEmail"
                      type="email"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="e.g. client@company.com"
                      className="rounded-xl text-xs h-11 bg-white/90"
                      onKeyDown={(e) => e.key === 'Enter' && handleGuestSearch()}
                    />
                  </div>
                </div>
                <Button
                  onClick={handleGuestSearch}
                  disabled={loading}
                  variant="outline"
                  className="w-full rounded-xl font-bold border-emerald-500/30 text-emerald-800 hover:bg-emerald-50"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {loading ? 'Searching...' : 'Search Orders'}
                </Button>
              </div>
            </div>
          )}

          {/* Authenticated or Active Search Results */}
          {(isAuthenticated || searched) && (
            <div>
              {/* Quick Summary Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass-card rounded-2xl p-4 border border-white/70">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Total Orders
                  </span>
                  <span className="text-2xl font-black text-foreground">{orders.length}</span>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-white/70">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Total Paid Value
                  </span>
                  <span className="text-2xl font-black text-primary">
                    ₹{totalSpent.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="glass-card rounded-2xl p-4 border border-white/70 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                    Active Support Issues
                  </span>
                  <span className="text-2xl font-black text-amber-600">
                    {issues.filter((i) => i.status !== 'Resolved').length}
                  </span>
                </div>
              </div>

              {/* Main Tabs */}
              <Tabs defaultValue="orders">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                  <TabsList className="glass-card border border-white/60 shadow-sm rounded-2xl p-1.5 h-auto gap-1">
                    <TabsTrigger
                      value="orders"
                      className="rounded-xl px-4 py-2 text-xs sm:text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-1.5"
                    >
                      <Package className="w-4 h-4" /> Orders & Payments ({orders.length})
                    </TabsTrigger>
                    <TabsTrigger
                      value="issues"
                      className="rounded-xl px-4 py-2 text-xs sm:text-sm font-bold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-1.5"
                    >
                      <AlertCircle className="w-4 h-4" /> Support Tickets ({issues.length})
                    </TabsTrigger>
                  </TabsList>

                  <Button
                    onClick={() => {
                      setSelectedOrder(null);
                      setIssueSubject('');
                      setShowIssueModal(true);
                    }}
                    size="sm"
                    className="rounded-xl gap-1.5 text-xs font-bold shadow-sm"
                  >
                    <PlusCircle className="w-4 h-4" /> Raise New Issue
                  </Button>
                </div>

                {/* Orders Content */}
                <TabsContent value="orders">
                  {orders.length === 0 ? (
                    <div className="text-center glass-card rounded-3xl p-12 border border-white/60">
                      <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-40" />
                      <p className="font-bold text-base mb-1">No orders on record</p>
                      <p className="text-muted-foreground text-xs max-w-xs mx-auto mb-6">
                        No orders have been recorded under {activeEmail}.
                      </p>
                      <Link to="/services">
                        <Button className="rounded-xl font-bold text-xs">Browse Services</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div
                          key={order.id}
                          className="glass-card rounded-2xl p-6 border border-white/70 shadow-md hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                            <div>
                              <span className="text-xs font-bold text-primary mb-1 block">
                                #DR-{order.orderNumber}
                              </span>
                              <h3 className="font-extrabold text-base sm:text-lg text-foreground">
                                {order.packageName}
                              </h3>
                            </div>
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${
                                statusColors[order.status] ?? 'bg-muted text-muted-foreground'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-3 border-t border-border/50">
                            <div>
                              <p className="text-muted-foreground">Category</p>
                              <p className="font-semibold text-foreground truncate">{order.category || 'N/A'}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Payment Value</p>
                              <p className="font-bold text-primary">₹{order.totalAmount?.toLocaleString('en-IN') ?? '0'}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Date Placed</p>
                              <p className="font-medium text-foreground">
                                {order.createdAt ? format(new Date(order.createdAt), 'dd MMM yyyy') : 'Recent'}
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Payment Status</p>
                              <p className="font-bold text-emerald-600 flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5" /> Verified
                              </p>
                            </div>
                          </div>

                          {order.notes && (
                            <div className="mt-3.5 p-3 rounded-xl bg-muted/40 border border-border/40 text-xs text-muted-foreground">
                              <span className="font-semibold text-foreground">Brief:</span> {order.notes}
                            </div>
                          )}

                          <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border/40">
                            <span className="text-[11px] text-muted-foreground">
                              Need an update, revision, or scope change on this order?
                            </span>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => openIssueForOrder(order)}
                                className="rounded-xl gap-1 text-xs font-bold h-8 border-amber-500/40 text-amber-800 hover:bg-amber-50"
                              >
                                <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Raise Issue / Revision
                              </Button>
                              <a
                                href={`https://wa.me/919004804043?text=Hi%20DocuReady%2C%20inquiring%20about%20my%20order%20%23DR-${order.orderNumber}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Button size="sm" variant="ghost" className="rounded-xl gap-1 text-xs font-bold h-8 text-emerald-700 hover:bg-emerald-50">
                                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                                </Button>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>

                {/* Support Issues Content */}
                <TabsContent value="issues">
                  {issues.length === 0 ? (
                    <div className="text-center glass-card rounded-3xl p-12 border border-white/60">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3 opacity-60" />
                      <p className="font-bold text-base mb-1">No open issues</p>
                      <p className="text-muted-foreground text-xs max-w-sm mx-auto mb-6">
                        Everything looks clear! If you ever need a revision, file update, or technical clarification, you can raise a ticket here anytime.
                      </p>
                      <Button
                        onClick={() => setShowIssueModal(true)}
                        className="rounded-xl font-bold text-xs"
                      >
                        <PlusCircle className="w-4 h-4 mr-1.5" /> Raise an Issue
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {issues.map((iss) => (
                        <div
                          key={iss.id}
                          className="glass-card rounded-2xl p-6 border border-white/70 shadow-md"
                        >
                          <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[11px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                  {iss.issueType}
                                </span>
                                {iss.orderNumber && (
                                  <span className="text-[11px] text-muted-foreground font-semibold">
                                    Linked Order: #DR-{iss.orderNumber}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-bold text-base text-foreground">{iss.subject}</h3>
                            </div>
                            <span
                              className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${
                                issueStatusColors[iss.status]
                              }`}
                            >
                              {iss.status}
                            </span>
                          </div>

                          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                            {iss.description}
                          </p>

                          <div className="flex items-center justify-between pt-3 border-t border-border/50 text-[11px] text-muted-foreground">
                            <span>Logged on {format(new Date(iss.createdAt), 'dd MMM yyyy, h:mm a')}</span>
                            <a
                              href={`https://wa.me/919004804043?text=Hi%20DocuReady%2C%20following%20up%20on%20my%20support%20ticket%20(${encodeURIComponent(
                                iss.subject
                              )})`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-primary font-bold hover:underline flex items-center gap-1"
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> Follow up on WhatsApp →
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </motion.div>
      </div>

      {/* Raise Issue / Support Modal */}
      <AnimatePresence>
        {showIssueModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-white/80 shadow-2xl relative bg-white/95"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <h3 className="font-extrabold text-lg">Raise Issue or Revision Request</h3>
                </div>
                <button
                  onClick={() => setShowIssueModal(false)}
                  className="text-muted-foreground hover:text-foreground text-sm font-bold p-1 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleIssueSubmit} className="space-y-4">
                {selectedOrder && (
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/60 text-xs">
                    <span className="text-muted-foreground">Order Reference:</span>{' '}
                    <strong className="text-foreground">#DR-{selectedOrder.orderNumber}</strong> ({selectedOrder.packageName})
                  </div>
                )}

                <div>
                  <Label className="text-xs font-bold mb-1.5 block">Issue Category *</Label>
                  <Select value={issueType} onValueChange={(v) => setIssueType(v)}>
                    <SelectTrigger className="rounded-xl text-xs h-10 bg-white">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Revision Request">Design / Code Revision Request</SelectItem>
                      <SelectItem value="Delivery Update">Delivery Schedule / Milestone Update</SelectItem>
                      <SelectItem value="Payment Query">Invoice / Payment Query</SelectItem>
                      <SelectItem value="Technical Issue">Bug or Technical Correction</SelectItem>
                      <SelectItem value="Other">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-xs font-bold mb-1.5 block">
                    Subject Summary *
                  </Label>
                  <Input
                    id="subject"
                    value={issueSubject}
                    onChange={(e) => setIssueSubject(e.target.value)}
                    placeholder="e.g. Please update brand color to royal violet in logo"
                    className="rounded-xl text-xs sm:text-sm h-10 bg-white"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="desc" className="text-xs font-bold mb-1.5 block">
                    Detailed Notes & Feedback *
                  </Label>
                  <Textarea
                    id="desc"
                    value={issueDesc}
                    onChange={(e) => setIssueDesc(e.target.value)}
                    placeholder="Describe specific changes, feedback, or queries in detail..."
                    className="rounded-xl text-xs sm:text-sm bg-white"
                    rows={4}
                    required
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowIssueModal(false)}
                    className="flex-1 rounded-xl font-semibold text-xs"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={submittingIssue}
                    className="flex-1 rounded-xl font-bold text-xs gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {submittingIssue ? 'Submitting...' : 'Submit Ticket'}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
