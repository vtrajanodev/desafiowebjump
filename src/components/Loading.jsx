import { CircleNotch } from 'phosphor-react'
import styles from '../styles/loading.module.scss'

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div>
        <CircleNotch weight='bold'/>
      </div>
    </div>
  )
}
