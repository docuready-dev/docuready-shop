import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { updateOrderStatus, OrderRecord, OrderStatus } from '@/services/orderService';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Mail, Phone, Calendar } from 'lucide-react';

const STATUSES: OrderStatus[] = ['Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled'];

const statusColors: Record<OrderStatus, string> = {
  Pending: 'bg-amber-100 text-amber-800 border-amber-300',
  Confirmed: 'bg-blue-100 text-blue-800 border-blue-300',
  'In Progress': 'bg-neutral-900 text-white border-neutral-700',
  Completed: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  Cancelled: 'bg-rose-100 text-rose-800 border-rose-300',
};

interface Props {
  orders: OrderRecord[];
  onRefresh: () => void;
}

export default function OrdersTable({ orders, onRefresh }: Props) {
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStatusChange = async (orderId: string, status: OrderStatus) => {
    setUpdating(orderId);
    try {
      await updateOrderStatus(orderId, status);
      toast.success(`Order status updated to ${status}`);
      onRefresh();
    } catch {
      toast.error('Failed to update status');
    } finally {
      setUpdating(null);
    }
  };

  if (orders.length === 0) {
    return (
      <div className="glass-card rounded-3xl p-12 text-center border border-white/60">
        <p className="text-muted-foreground text-sm">No orders recorded yet. As clients checkout, they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order, i) => (
        <motion.div
          key={order.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          className="glass-card rounded-2xl p-6 border border-white/70 shadow-md"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1 min-w-[240px]">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="font-extrabold text-sm text-primary">#DR-{order.orderNumber}</span>
                <span
                  className={`inline-flex items-center justify-center text-center leading-none text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    statusColors[order.status] ?? 'bg-muted text-muted-foreground'
                  }`}
                >
                  {order.status}
                </span>
                {order.createdAt && (
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(order.createdAt), 'dd MMM yyyy, h:mm a')}
                  </span>
                )}
              </div>

              <p className="font-bold text-base text-foreground mb-1">{order.clientName}</p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-primary" /> {order.clientEmail}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" /> {order.clientPhone}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-muted/40 border border-border/50 text-xs mb-3">
                <p className="font-semibold text-foreground">📦 Packages: {order.packageName}</p>
                {order.notes && (
                  <p className="text-muted-foreground mt-1">📝 Notes: {order.notes}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 min-w-[150px]">
              <div className="text-right">
                <span className="text-[11px] text-muted-foreground block">Order Total</span>
                <span className="font-black text-2xl text-primary">
                  ₹{order.totalAmount?.toLocaleString('en-IN') ?? '0'}
                </span>
              </div>

              {/* Status Selector */}
              <div className="w-36">
                <Select
                  value={order.status}
                  onValueChange={(v) => handleStatusChange(order.id, v as OrderStatus)}
                  disabled={updating === order.id}
                >
                  <SelectTrigger className="rounded-xl text-xs h-9 bg-white/90">
                    <SelectValue placeholder="Update Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUSES.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quick WhatsApp client */}
              <a
                href={`https://wa.me/${order.clientPhone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(
                  order.clientName
                )}%2C%20DocuReady%20here%20regarding%20order%20%23DR-${order.orderNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button size="sm" variant="outline" className="rounded-xl gap-1 text-xs h-8 border-emerald-500/30 text-emerald-700 hover:bg-emerald-50 font-bold">
                  <MessageCircle className="w-3.5 h-3.5" /> Message Client
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
