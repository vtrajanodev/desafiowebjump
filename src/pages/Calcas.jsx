import { useContext, useEffect } from 'react'
import { CategoryApiContext } from '../context/CategoryApi'
import styles from '../styles/calcas.module.scss'
import { CalcaFilter } from '../components/Filters/CalcaFilter'

export const Calcas = () => {

  const { items, getItems } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(2)
  }, [])

  return (
    <div className="flex container">
      <CalcaFilter />

      <section className={styles.calcas}>
        {
          items.map(calca => (
            <div key={calca.id}>
              <img src={`/src/assets/${calca.image}`} alt="Imagem da calca" />
              <span>{calca.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calca.price)}
              </span>
              <button>COMPRAR</button>
            </div>
          ))
        }
   
      </section>
    </div>
  )
}
