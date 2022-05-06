import { useContext, useEffect } from "react"
import Aside from "../components/MainContent/Aside"
import { CategoryApiContext } from "../context/CategoryApi"
import calcadosImg from '../assets/shoes-3.jpg'
import styles from '../styles/calcados.module.scss'
import { CalcadosFilter } from "../components/Filters/CalcadosFilter"


export const Calcados = () => {

  const { items, getItems } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(3)
  }, [])


  return (
    <div className="flex container">
      <CalcadosFilter />

      <section className={styles.calcados}>
        {
          items.map(calcados => (
            <div key={calcados.id}>
              <img src={`/src/assets/${calcados.image}`} alt="Imagem da calcados" />
              <span>{calcados.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calcados.price)}
              </span>
              <button>COMPRAR</button>
            </div>
          ))
        }
      </section>
    </div>
  )
}