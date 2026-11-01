import { getItem, setItem, STORAGE_KEYS } from './storageService';

export type OrderStatus = 'Pending' | 'Confirmed' | 'In Progress' | 'Completed' | 'Cancelled';

export interface OrderRecord {
  id: string;
  orderNumber: number;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  packageName: string;
  packageId: string;
  category: string;
  totalAmount: number;
  status: OrderStatus;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface CreateOrderInput {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  packageName: string;
  packageId: string;
  category: string;
  totalAmount: number;
  notes?: string;
}

export async function createOrder(input: CreateOrderInput): Promise<{ orderId: string; orderNumber: number; success: boolean }> {
  const existingOrders = getItem<OrderRecord[]>(STORAGE_KEYS.ORDERS, []);
  
  // Calculate next order number starting at 1040
  const nextOrderNumber = existingOrders.length > 0 
    ? Math.max(...existingOrders.map((o) => o.orderNumber || 1040)) + 1
    : 1041;

  const newOrder: OrderRecord = {
    id: `dr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    orderNumber: nextOrderNumber,
    clientName: input.clientName,
    clientEmail: input.clientEmail.toLowerCase().trim(),
    clientPhone: input.clientPhone.trim(),
    packageName: input.packageName,
    packageId: input.packageId,
    category: input.category,
    totalAmount: input.totalAmount,
    status: 'Pending',
    notes: input.notes,
    createdAt: new Date().toISOString(),
  };

  setItem(STORAGE_KEYS.ORDERS, [newOrder, ...existingOrders]);

  return {
    orderId: newOrder.id,
    orderNumber: newOrder.orderNumber,
    success: true,
  };
}

export async function getOrders(params?: { email?: string }): Promise<{ orders: OrderRecord[] }> {
  let orders = getItem<OrderRecord[]>(STORAGE_KEYS.ORDERS, []);

  if (params?.email) {
    const searchEmail = params.email.toLowerCase().trim();
    orders = orders.filter((o) => o.clientEmail.includes(searchEmail));
  }

  return { orders };
}

export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<{ success: boolean }> {
  const orders = getItem<OrderRecord[]>(STORAGE_KEYS.ORDERS, []);
  const updated = orders.map((o) => {
    if (o.id === orderId) {
      return { ...o, status, updatedAt: new Date().toISOString() };
    }
    return o;
  });

  setItem(STORAGE_KEYS.ORDERS, updated);
  return { success: true };
}
