"use client"

// NEXT
import Link from 'next/link';
// COMPONENTS
import { Button, buttonVariants } from '@/components/ui/Button';
// HOOKS
import { useSignOut } from '@/hooks/useSignout';
// UTILS
import { cn } from '@/utils/helpers';
// STYLES
import styles from './styles.module.css';

export const AdminNavbar = () => {
  // STATE && VARIABLES
  const { signout } = useSignOut();


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
        onClick={signout}
      >
        Sign Out
      </ Button>
    </nav>
  );
}