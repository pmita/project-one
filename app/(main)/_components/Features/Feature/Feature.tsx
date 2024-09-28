// TYPES
import { FeatureProps } from './types'
// STYLES
import styles from './styles.module.css'


export const Feature = ({ svgPath, title, description }: FeatureProps) => {
  return (
    <div className={styles.feature}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px">
        <path d={svgPath} />
      </svg>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}