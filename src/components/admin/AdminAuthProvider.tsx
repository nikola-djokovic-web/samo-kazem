"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
      const storedAuth = localStorage.getItem('isAdminLoggedIn');
      setIsAuthenticated(storedAuth === 'true');
    } catch (error) {
      console.error("Could not access localStorage");
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    if (!loading && !isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
    if (!loading && isAuthenticated && pathname === '/admin/login') {
      router.push('/admin');
    }
  }, [loading, isAuthenticated, pathname, router]);

  const login = (user: string, pass: string) => {
    if (user === 'admin' && pass === 'admin') {
      try {
        localStorage.setItem('isAdminLoggedIn', 'true');
      } catch (error) {
         console.error("Could not access localStorage");
      }
      setIsAuthenticated(true);
      router.push('/admin');
      return true;
    }
    return false;
  };

  const logout = () => {
    try {
        localStorage.removeItem('isAdminLoggedIn');
    } catch (error) {
        console.error("Could not access localStorage");
    }
    setIsAuthenticated(false);
    router.push('/admin/login');
  };
  
  if (loading) {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }


  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAdminAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
