// CONFIG
import { featuresConfig } from '@/config/features';
// STYLES
import styles from './styles.module.css'

export async function Features() {
  return (
    <section className={`${styles.featuresSection}`}>
      <h1 className={`${styles.header}`}>What we offer?</h1>
      <div className={`${styles.features}`}>
        {featuresConfig.map(({ title, description, svgPath }) => (
          <div className={`${styles.feature}`} key={svgPath}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
            >
              <path d={svgPath} />
            </svg>
            <p className={`${styles.title}`}>{title}</p>
            <p className={`${styles.description}`}>{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}