"use client"

// NEXT
import Link from 'next/link';
// COMPONENTS
import { Button, buttonVariants } from '@/components/Button';
// HOOKS
import { useSignOut } from '@/hooks/useSignout';
// UTILS
import { cn } from '@/utils/helpers';
// STYLES
import styles from './styles.module.css';

export const AdminNavbar = () => {
  // STATE && VARIABLES
  const { signOut } = useSignOut();


  return (
    <nav className={`${styles.navbar}`}>
      <Link 
        href="/" 
        className={`${styles.brand}`}
      >
        Dashboard
      </Link>

      <Button 
        className={cn(
          buttonVariants({ variant: 'primary', size: 'lg' }), 
          "item-stretch"
        )}
        onClick={signOut}
      >
        Sign Out
      </ Button>
    </nav>
  );
}