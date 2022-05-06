import { useContext } from 'react'
import { CategoryApiContext } from '../../context/CategoryApi'
import styles from '../../styles/aside.module.scss'


export const CalcadosFilter = () => {

  const { getShoesFilters } = useContext(CategoryApiContext)

  return (
    <>
      <aside className={styles['aside-camisetas-filter']}>
        <h2>FILTRE POR</h2>

        <h3>Cores</h3>

        <div className={styles.colors}>
          <button onClick={() => getShoesFilters("Preta")} className={styles.black}></button>
          <button onClick={() => getShoesFilters("Azul")} className={styles.blue}></button>
          <button onClick={() => getShoesFilters("Cinza")} className={styles.gray}></button>
          <button onClick={() => getShoesFilters("Rosa")} className={styles.pink}></button>
        </div>

        <div>
          <h3>Tipo</h3>
          <ul>
            <li>
              <a href="#">Corrida</a>
            </li>
            <li>
              <a href="#">Caminhada</a>
            </li>
            <li>
              <a href="#">Casual</a>
            </li>
            <li>
              <a href="#">Social</a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
