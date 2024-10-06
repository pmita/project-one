// PACKAGES
import { cva } from "class-variance-authority";
// STYLES
import styles from './styles.module.css';

export const itemStatusVariants = cva(
  `${styles.statusTag}`, 
  {
    variants: {
      variant: {
        primary: `${styles.primary}`,
        success: `${styles.success}`,
        accent: `${styles.accent}`,
        highlight: `${styles.highlight}`,
      },
      size: {
        default: `${styles.default}`,
        sm: `${styles.small}`,
        lg: `${styles.large}`
      }
    }, 
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)