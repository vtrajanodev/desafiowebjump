import styles from '../../styles/aside.module.scss'


export const CalcaFilter = () => {
  return (
    <>
      <>
        <aside className={styles['aside-calcas-filter']}>
          <h2>FILTRE POR</h2>

          <h3>Gênero</h3>

          <div className={styles.male}>
            <label htmlFor="male">Masculino</label>
            <input id='male' type="checkbox" />
          </div>

          <div  className={styles.female}>
            <label htmlFor="female">Feminino</label>
            <input id='female' type="checkbox" />
          </div>

          <div>
            <h3>Tipo</h3>
            <ul>
              <li>
                <a href="#">Social</a>
              </li>
              <li>
                <a href="#">Jeams</a>
              </li>
              <li>
                <a href="#">Skinny</a>
              </li>
              <li>
                <a href="#">Balão</a>
              </li>
            </ul>
          </div>
        </aside>
      </>

    </>
  )
}
