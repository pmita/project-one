// PACKAGES
import { cva } from "class-variance-authority";
// STYLES
import styles from './styles.module.css';

export const buttonVariants = cva(
  `${styles.button}`, {
    variants: {
      variant: {
        primary: `${styles.primary}`,
        primaryOutlined: `${styles.primaryOutlined}`,
        secondary: `${styles.secondary}`,
        secondaryOutlined: `${styles.secondaryOutlined}`,
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
);