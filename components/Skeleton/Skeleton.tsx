// UTILS
import { cn } from "@/utils/helpers"
// STYLES
import styles from './styles.module.css'

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(`${styles.container}`, className)}
      {...props}
    />
  )
}