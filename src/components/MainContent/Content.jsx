import Aside from "./Aside"

import styles from '../../styles/content.module.scss'
import { Main } from "./Main"

export const Content = () => {
  return (
    <div className={`${styles.content} container`}>
      <Aside />
      <Main />
    </div>
  )
}

