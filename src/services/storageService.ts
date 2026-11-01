/**
 * Universal client-side data store for DocuReady Shop.
 * Completely replaces proprietary Zite database with resilient,
 * persistent local storage and standard schema models.
 */

export const STORAGE_KEYS = {
  ORDERS: 'docuready_orders',
  DISCOUNTS: 'docuready_discounts',
  CUSTOM_SERVICES: 'docuready_custom_services',
  DELETED_BUILTINS: 'docuready_deleted_builtins',
  SETTINGS: 'docuready_settings',
  ADMIN_SESSION: 'docuready_admin_session',
};

export function getItem<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return defaultValue;
    return JSON.parse(raw) as T;
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return defaultValue;
  }
}

export function setItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error saving ${key} to storage:`, err);
  }
}
