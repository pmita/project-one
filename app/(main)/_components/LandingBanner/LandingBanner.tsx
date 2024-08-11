// NEXT
import Link from "next/link";
// COMPONENTS
import { buttonVariants } from "@/components/Button";
// UTILS
import { cn } from "@/utils/helpers";
// STYLES
import styles from './styles.module.css';


export const LandingBanner = async () => {
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
            <Link
              href="/services"
              className={cn(buttonVariants({
                variant: "secondaryOutlined",
                size: "lg",
              }))}
            >
              What do we offer
            </Link>
        </div>
      </div>
    </section>
  )
}