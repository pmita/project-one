"use client"

// HOOKS
import { useAuth } from '@/src/hooks/useAuth';

export function withAuthCheck<T extends { children?: React.ReactNode }>(WrappedComponent: React.ComponentType<T>, fallback: React.ReactNode) {
  return (props: T) => {
      // STATE && VARIABLES
    const { user } = useAuth();

    return user ? <WrappedComponent {...props} /> : (fallback || null);
  }
}