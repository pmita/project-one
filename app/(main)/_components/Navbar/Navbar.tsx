// NEXT
import Link from 'next/link'
// COMPONENTS
import { buttonVariants } from '@/components/Button';
// UTILS
import { cn } from '@/utils/helpers';
// STYLES
import styles from './styles.module.css';

export const Navbar = async () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <Link href="/" className={`${styles.brand}`}>OurBrand</Link>
      <Link
        href="/contact"
        className={cn(buttonVariants({
          variant: "secondary",
          size: "lg",
          }))}
      >
        Contact
      </Link>
    </nav>
  )
}