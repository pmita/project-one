//PACKAGES
import { VariantProps } from "class-variance-authority";
// COMPONENTS
import { statusVariants } from "./statusVariants";


export interface IStatus extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusVariants> {
  status: string;
}