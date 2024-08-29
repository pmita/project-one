"use client"

// HOOKS
import { useAuth } from '@/hooks/useAuth';

interface AuthCheckProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const AuthCheck = ({ children, fallback }: AuthCheckProps) => {
  // STATE && VARIABLES
  const { user } = useAuth();

  return user ? <>{children}</> : fallback || null;
}