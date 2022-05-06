import { useContext } from 'react'
import { CategoryApiContext } from '../../context/CategoryApi'
import styles from '../../styles/aside.module.scss'



export const CamisetaFilter = () => {

  const { getItemsFilters } = useContext(CategoryApiContext)

  return (
    <>
      <aside className={styles['aside-camisetas-filter']}>
        <h2>FILTRE POR</h2>

        <h3>Cores</h3>

        <div className={styles.colors}>
          <button onClick={() => getItemsFilters("Preta")} className={styles.black}></button>
          <button onClick={() => getItemsFilters("Laranja")} className={styles.orange}></button>
          <button onClick={() => getItemsFilters("Amarela")} className={styles.yellow}></button>
          <button onClick={() => getItemsFilters("Rosa")} className={styles.pink}></button>
        </div>

        <div>
          <h3>Tipo</h3>
          <ul>
            <li>
              <a href="#">Social</a>
            </li>
            <li>
              <a href="#">Regata</a>
            </li>
            <li>
              <a href="#">Camiseta</a>
            </li>
            <li>
              <a href="#">Casual</a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
