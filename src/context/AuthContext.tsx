import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserSession,
  getCurrentSession,
  loginUser,
  registerUser,
  logoutUser,
} from '@/services/authService';
import { toast } from 'sonner';

interface AuthContextType {
  user: UserSession | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<void>;
  register: (name: string, email: string, phone: string, pass: string) => Promise<void>;
  logout: () => void;
  refreshSession: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(() => getCurrentSession());

  useEffect(() => {
    const session = getCurrentSession();
    setUser(session);
  }, []);

  const refreshSession = () => {
    setUser(getCurrentSession());
  };

  const login = async (email: string, pass: string) => {
    const res = await loginUser({ email, password: pass });
    setUser(res.user);
    toast.success(`Welcome back, ${res.user.name || 'Client'}!`);
  };

  const register = async (name: string, email: string, phone: string, pass: string) => {
    const res = await registerUser({ name, email, phone, password: pass });
    setUser(res.user);
    toast.success(`Account created! Welcome, ${res.user.name}!`);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    toast.info('You have been signed out.');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
