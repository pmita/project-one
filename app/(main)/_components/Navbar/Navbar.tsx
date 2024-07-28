// NEXT
import Link from 'next/link'
// STYLES
import styles from './styles.module.css';

export const Navbar = async () => {
  return (
    <nav className={`container ${styles.navbar}`}>
      <Link href="/" className={`${styles.brand}`}>OurBrand</Link>
      <Link href="/contact" className={`${styles.link}`}>Contact</Link>
    </nav>
  )
}