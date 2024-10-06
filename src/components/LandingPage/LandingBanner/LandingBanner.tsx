// NEXT
import Link from "next/link";
// COMPONENTS
import { buttonVariants } from "@/src/components/ui/Button";
// UTILS
import { cn } from "@/src/utils/helpers";
// STYLES
import styles from './styles.module.css';


export async function LandingBanner() {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.content}`}>
          <h1 className={`${styles.header}`}>We paint. We fix. We build.</h1>

          <p className={`${styles.subheader}`}>
            We make all your ideas come to life hustle free. We are your friendly neighbourhood handy person to help you with your daily chores.
          </p>

          <div className={`${styles.cta}`}>
            <Link
              href="/contact"
              className={cn(buttonVariants({
                variant: "secondary",
                size: "lg",
              }))}
            >
              Get in Touch
            </Link>
        </div>
      </div>
    </section>
  )
}