import React, { createContext, useContext, useState, useEffect } from 'react';
import { Package } from '@/data/packages';

export interface CartItem {
  package: Package;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (pkg: Package) => void;
  removeItem: (packageId: string) => void;
  clearCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('docuready_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('docuready_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to sync cart:', e);
    }
  }, [items]);

  const addItem = (pkg: Package) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.package.id === pkg.id);
      if (existing) return prev;
      return [...prev, { package: pkg, quantity: 1 }];
    });
  };

  const removeItem = (packageId: string) => {
    setItems((prev) => prev.filter((i) => i.package.id !== packageId));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.package.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
