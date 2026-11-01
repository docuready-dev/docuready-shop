import { getItem, setItem, STORAGE_KEYS } from './storageService';

export interface SettingRecord {
  id: string;
  key: string;
  value: string;
  description?: string;
}

export async function getSettings(): Promise<{ settings: SettingRecord[] }> {
  const settings = getItem<SettingRecord[]>(STORAGE_KEYS.SETTINGS, [
    {
      id: 'set_wa',
      key: 'whatsapp_number',
      value: '919004804043',
      description: 'Official WhatsApp business number for orders',
    },
    {
      id: 'set_rzp_id',
      key: 'razorpay_key_id',
      value: '',
      description: 'Razorpay Live / Test Key ID',
    },
    {
      id: 'set_rzp_secret',
      key: 'razorpay_key_secret',
      value: '',
      description: 'Razorpay Key Secret',
    },
  ]);
  return { settings };
}

export async function updateSettings(input: {
  key: string;
  value: string;
  description?: string;
}): Promise<{ success: boolean }> {
  const settings = getItem<SettingRecord[]>(STORAGE_KEYS.SETTINGS, []);
  const existingIndex = settings.findIndex((s) => s.key === input.key);

  if (existingIndex >= 0) {
    settings[existingIndex] = {
      ...settings[existingIndex],
      value: input.value,
      description: input.description ?? settings[existingIndex].description,
    };
  } else {
    settings.push({
      id: `set_${Date.now()}`,
      key: input.key,
      value: input.value,
      description: input.description,
    });
  }

  setItem(STORAGE_KEYS.SETTINGS, settings);
  return { success: true };
}
