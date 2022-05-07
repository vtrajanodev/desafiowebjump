import { X } from 'phosphor-react';
import { useContext, useState } from 'react'
import { CategoryApiContext } from '../../context/CategoryApi';
import styles from '../../styles/aside.module.scss'


export const CalcaFilter = () => {

  const { getPantsFilters, setPantsFiltered } = useContext(CategoryApiContext)

  return (

    <>
      <aside className={styles['aside-calcas-filter']}>
        <h2>FILTRE POR</h2>

        <div className={styles['close-button-calcas']}>
          <h3>Gênero</h3>
          <button onClick={() => setPantsFiltered([])} aria-label='remover filtros'>
            <X weight='bold' />
          </button>
        </div>

        <div className={styles.male}>
          <label htmlFor="male">Masculino</label>
          <input name='checkGender' onClick={() => getPantsFilters('Masculina')} id='male' type="radio" />
        </div>

        <div className={styles.female}>
          <label htmlFor="female">Feminino</label>
          <input name='checkGender' onClick={() => getPantsFilters('Feminina')} id='female' type="radio" />
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
  )
}
