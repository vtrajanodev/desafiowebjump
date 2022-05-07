import { useContext } from 'react'
import { CategoryApiContext } from '../../context/CategoryApi'
import { X } from 'phosphor-react'
import styles from '../../styles/aside.module.scss'



export const CamisetaFilter = () => {

  const { getItemsFilters } = useContext(CategoryApiContext)

  return (
    <>
      <aside className={styles['aside-camisetas-filter']}>
        <h2>FILTRE POR</h2>


        <div className={styles['close-button']}>
          <h3>Cores</h3>
          <button aria-label='remover filtros'>
            <X weight='bold' />
          </button>
        </div>

        <div className={styles.colors}>

          <button aria-label='Filtro por cor preta' onClick={() => getItemsFilters("Preta")} className={styles.black}></button>
          <button aria-label='Filtro por cor laranja' onClick={() => getItemsFilters("Laranja")} className={styles.orange}></button>
          <button aria-label='Filtro por cor amarela' onClick={() => getItemsFilters("Amarela")} className={styles.yellow}></button>
          <button aria-label='Filtro por cor rosa' onClick={() => getItemsFilters("Rosa")} className={styles.pink}></button>
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
