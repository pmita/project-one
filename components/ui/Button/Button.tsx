// COMPONENTS
import { buttonVariants } from "./buttonVariants";
// TYPES
import { IButton } from "./types";
// UTILS
import { cn } from "@/utils/helpers";

export const Button = ({ className, variant, size, ...props }: IButton) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}