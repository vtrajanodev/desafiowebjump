import { useContext, useEffect } from 'react'
import { CategoryApiContext } from '../context/CategoryApi'
import { CalcaFilter } from '../components/Filters/CalcaFilter'
import styles from '../styles/calcas.module.scss'

export const Calcas = () => {

  const { items, getItems, pantsFiltered } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(2)
  }, [])

  return (
    <div className="flex container">
      <CalcaFilter />

      <section className={styles.calcas}>
        {!pantsFiltered.length ?
          items.map(calca => (
            <div key={calca.id}>
              <img src={`/src/assets/${calca.image}`} alt="Imagem da caça" />
              <span>{calca.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calca.price)}
              </span>
              <button aria-label={` ${calca.name}. preço: ${calca.price}.`}>COMPRAR</button>
            </div>
          ))
          :
          pantsFiltered.map(calca => (
            <div key={calca.id}>
              <img src={`/src/assets/${calca.image}`} alt="Imagem da caça" />
              <span>{calca.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calca.price)}
              </span>
              <button aria-label={` ${calca.name}. preço: ${calca.price}.`}>COMPRAR</button>
            </div>
          ))
        }

      </section>
    </div>
  )
}
