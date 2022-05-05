import { useContext, useEffect } from 'react'
import Aside from '../components/MainContent/Aside'
import { CategoryApiContext } from '../context/CategoryApi'
import pantsImg from '../assets/pants-4.jpg'
import styles from '../styles/calcas.module.scss'

export const Calcas = () => {

  const { items, getItems } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(2)
  }, [])

  return (
    <div className="flex container">
      <Aside />

      <section className={styles.calcas}>
        {
          items.map(calca => (
            <div key={calca.id}>
              <img src={pantsImg} alt="Imagem da calca" />
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
        {
          items.map(calca => (
            <div key={calca.id}>
              <img src={pantsImg} alt="Imagem da calca" />
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

        {
          items.map(calca => (
            <div key={calca.id}>
              <img src={pantsImg} alt="Imagem da calca" />
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
