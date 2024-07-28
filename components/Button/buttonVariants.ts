// PACKAGES
import { cva } from "class-variance-authority";
// STYLES
import style from './style.module.css';

export const buttonVariants = cva(
  `${style.button}`, {
    variants: {
      variant: {
        primary: `${style.primary}`,
        primaryOutlined: `${style.primaryOutlined}`,
        secondary: `${style.secondary}`,
        secondaryOutlined: `${style.secondaryOutlined}`,
      },
      size: {
        default: `${style.default}`,
        sm: `${style.small}`,
        lg: `${style.large}`
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);