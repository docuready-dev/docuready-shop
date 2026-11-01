import { getItem, setItem, STORAGE_KEYS } from './storageService';

export interface CustomServiceRecord {
  id: string;
  name: string;
  category: string;
  tier: string;
  price: number;
  priceDisplay: string;
  priceNote?: string;
  description: string;
  featuresJson: string;
  deliveryDays: number;
  isActive: boolean;
}

export async function getCustomServices(): Promise<{
  services: CustomServiceRecord[];
  deletedBuiltinIds: string[];
}> {
  const services = getItem<CustomServiceRecord[]>(STORAGE_KEYS.CUSTOM_SERVICES, []);
  const deletedBuiltinIds = getItem<string[]>(STORAGE_KEYS.DELETED_BUILTINS, []);
  return {
    services: services.filter((s) => s.isActive),
    deletedBuiltinIds,
  };
}

export async function saveCustomService(input: {
  name: string;
  category: string;
  tier: string;
  price: number;
  priceDisplay: string;
  priceNote?: string;
  description: string;
  featuresJson: string;
  deliveryDays: number;
}): Promise<{ id: string; success: boolean }> {
  const services = getItem<CustomServiceRecord[]>(STORAGE_KEYS.CUSTOM_SERVICES, []);
  const newId = `custom_${Date.now()}`;
  const record: CustomServiceRecord = {
    id: newId,
    name: input.name,
    category: input.category,
    tier: input.tier,
    price: input.price,
    priceDisplay: input.priceDisplay,
    priceNote: input.priceNote,
    description: input.description,
    featuresJson: input.featuresJson,
    deliveryDays: input.deliveryDays,
    isActive: true,
  };
  setItem(STORAGE_KEYS.CUSTOM_SERVICES, [...services, record]);
  return { id: newId, success: true };
}

export async function deleteService(input: {
  customServiceId?: string;
  builtinId?: string;
}): Promise<{ success: boolean }> {
  if (input.customServiceId) {
    const services = getItem<CustomServiceRecord[]>(STORAGE_KEYS.CUSTOM_SERVICES, []);
    const updated = services.map((s) =>
      s.id === input.customServiceId ? { ...s, isActive: false } : s
    );
    setItem(STORAGE_KEYS.CUSTOM_SERVICES, updated);
  } else if (input.builtinId) {
    const deleted = getItem<string[]>(STORAGE_KEYS.DELETED_BUILTINS, []);
    if (!deleted.includes(input.builtinId)) {
      deleted.push(input.builtinId);
      setItem(STORAGE_KEYS.DELETED_BUILTINS, deleted);
    }
  }
  return { success: true };
}
