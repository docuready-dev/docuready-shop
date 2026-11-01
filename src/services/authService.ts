import { getItem, setItem } from './storageService';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  createdAt: string;
}

export interface UserSession {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const USERS_KEY = 'docuready_users';
const SESSION_KEY = 'docuready_user_session';

// Simple client-side hash for demo/mock security
function hashPassword(password: string): string {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return `hash_${Math.abs(hash)}_${password.length}`;
}

export function getCurrentSession(): UserSession | null {
  return getItem<UserSession | null>(SESSION_KEY, null);
}

export function getAllUsers(): UserAccount[] {
  return getItem<UserAccount[]>(USERS_KEY, []);
}

export async function registerUser(input: {
  name: string;
  email: string;
  phone: string;
  password: string;
}): Promise<{ user: UserSession; success: boolean; message?: string }> {
  const users = getAllUsers();
  const cleanEmail = input.email.toLowerCase().trim();

  const existing = users.find((u) => u.email === cleanEmail);
  if (existing) {
    throw new Error('An account with this email already exists. Please log in.');
  }

  const newUser: UserAccount = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    name: input.name.trim(),
    email: cleanEmail,
    phone: input.phone.trim(),
    passwordHash: hashPassword(input.password),
    createdAt: new Date().toISOString(),
  };

  setItem(USERS_KEY, [...users, newUser]);

  const session: UserSession = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
  };
  setItem(SESSION_KEY, session);

  return { user: session, success: true };
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<{ user: UserSession; success: boolean }> {
  const users = getAllUsers();
  const cleanEmail = input.email.toLowerCase().trim();
  const inputHash = hashPassword(input.password);

  const matched = users.find(
    (u) => u.email === cleanEmail && u.passwordHash === inputHash
  );

  if (!matched) {
    throw new Error('Invalid email or password. Please check your credentials.');
  }

  const session: UserSession = {
    id: matched.id,
    name: matched.name,
    email: matched.email,
    phone: matched.phone,
  };
  setItem(SESSION_KEY, session);

  return { user: session, success: true };
}

export function logoutUser(): void {
  localStorage.removeItem(SESSION_KEY);
}

/**
 * Handles automatic account creation or linking during checkout
 */
export async function autoRegisterOrLoginAtCheckout(input: {
  name: string;
  email: string;
  phone: string;
  password?: string;
}): Promise<{ user: UserSession; isNewAccount: boolean }> {
  const users = getAllUsers();
  const cleanEmail = input.email.toLowerCase().trim();

  const existing = users.find((u) => u.email === cleanEmail);
  if (existing) {
    // Account already exists: log them in and attach order
    const session: UserSession = {
      id: existing.id,
      name: existing.name || input.name,
      email: existing.email,
      phone: existing.phone || input.phone,
    };
    setItem(SESSION_KEY, session);
    return { user: session, isNewAccount: false };
  }

  // Auto-generate password if user didn't enter one
  const chosenPassword = input.password && input.password.length >= 4 
    ? input.password 
    : `DocuReady@${input.phone.slice(-4) || '2026'}`;

  const newUser: UserAccount = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    name: input.name.trim(),
    email: cleanEmail,
    phone: input.phone.trim(),
    passwordHash: hashPassword(chosenPassword),
    createdAt: new Date().toISOString(),
  };

  setItem(USERS_KEY, [...users, newUser]);

  const session: UserSession = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
  };
  setItem(SESSION_KEY, session);

  return { user: session, isNewAccount: true };
}
