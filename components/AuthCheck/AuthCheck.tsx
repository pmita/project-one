"use client"

// HOOKS
import { useAuth } from '@/hooks/useAuth';
// TYPES
import { AuthCheckProps } from './types';


export const AuthCheck = ({ children, fallback }: AuthCheckProps) => {
  // STATE && VARIABLES
  const { user } = useAuth();

  return user ? <>{children}</> : fallback || null;
}