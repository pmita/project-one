// UTILS
import { cn } from "@/src/utils/helpers"
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