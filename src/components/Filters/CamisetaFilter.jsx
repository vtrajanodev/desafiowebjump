import styles from '../../styles/aside.module.scss'



export const CamisetaFilter = () => {

  return (
    <>
      <aside className={styles['aside-camisetas-filter']}>
        <h2>FILTRE POR</h2>

        <h3>Cores</h3>

        <div className={styles.colors}>
          <button className={styles.red}></button>
          <button className={styles.orange}></button>
          <button className={styles.blue}></button>
          <button className={styles.pink}></button>
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
