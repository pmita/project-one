// COMPONENTS
import { Feature } from './Feature';
// CONFIG
import { featuresConfig } from '@/config/features';
// STYLES
import styles from './styles.module.css'

export async function Features() {
  return (
    <section className={`${styles.featuresSection}`}>
      <h1 className={`${styles.header}`}>What we offer?</h1>
      <div className={`${styles.features}`}>
        {featuresConfig.map(({ title, description, svgPath }) => 
          <Feature 
            key={title} 
            title={title} 
            description={description} 
            svgPath={svgPath} 
          />
        )}
      </div>
    </section>
  )
}