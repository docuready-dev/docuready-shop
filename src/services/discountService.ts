import { getItem, setItem, STORAGE_KEYS } from './storageService';

export interface DiscountRecord {
  id: string;
  serviceId: string; // 'all' for global or specific packageId
  discountPercent: number;
  label: string;
  isActive: boolean;
}

export async function getDiscounts(): Promise<{ discounts: DiscountRecord[] }> {
  const discounts = getItem<DiscountRecord[]>(STORAGE_KEYS.DISCOUNTS, [
    // Pre-populate with a demo festive discount
    {
      id: 'disc_launch',
      serviceId: 'all',
      discountPercent: 10,
      label: 'Launch Special',
      isActive: true,
    },
  ]);
  return { discounts };
}

export async function upsertDiscount(input: {
  id?: string;
  serviceId: string;
  discountPercent: number;
  label: string;
  isActive: boolean;
}): Promise<{ id: string; success: boolean }> {
  const discounts = getItem<DiscountRecord[]>(STORAGE_KEYS.DISCOUNTS, []);

  if (input.id) {
    const updated = discounts.map((d) =>
      d.id === input.id
        ? {
            ...d,
            serviceId: input.serviceId,
            discountPercent: input.discountPercent,
            label: input.label,
            isActive: input.isActive,
          }
        : d
    );
    setItem(STORAGE_KEYS.DISCOUNTS, updated);
    return { id: input.id, success: true };
  }

  const newId = `disc_${Date.now()}`;
  const newRecord: DiscountRecord = {
    id: newId,
    serviceId: input.serviceId,
    discountPercent: input.discountPercent,
    label: input.label,
    isActive: input.isActive,
  };

  setItem(STORAGE_KEYS.DISCOUNTS, [...discounts, newRecord]);
  return { id: newId, success: true };
}

export async function deleteDiscount(id: string): Promise<{ success: boolean }> {
  const discounts = getItem<DiscountRecord[]>(STORAGE_KEYS.DISCOUNTS, []);
  const filtered = discounts.filter((d) => d.id !== id);
  setItem(STORAGE_KEYS.DISCOUNTS, filtered);
  return { success: true };
}
