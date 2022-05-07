import { useContext, useEffect } from "react"
import { CategoryApiContext } from "../context/CategoryApi"
import { CalcadosFilter } from "../components/Filters/CalcadosFilter"
import styles from '../styles/calcados.module.scss'


export const Calcados = () => {

  const { items, getItems, shoesFiltereds } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(3)
  }, [])


  return (
    <div className="flex container">
      <CalcadosFilter />

      <section className={styles.calcados}>
        {!shoesFiltereds.length ?
          items.map(calcado => (
            <div key={calcado.id}>
              <img src={`/src/assets/${calcado.image}`} alt="Imagem da calcado" />
              <span>{calcado.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calcado.price)}
              </span>
              <button title="comprar" aria-label={` ${calcado.name} preço: ${calcado.price}`}>COMPRAR</button>
            </div>
          ))
          :
          shoesFiltereds.map(calcado => (
            <div key={calcado.id}>
              <img src={`/src/assets/${calcado.image}`} alt="Imagem da calcado" />
              <span id="comprar-item">{calcado.name}</span>
              <span id="comprar-item" className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(calcado.price)}
              </span>
              <button title="comprar" aria-label={` ${calcado.name} preço: ${calcado.price}`}>COMPRAR</button>
            </div>
          ))
        }
      </section>
    </div>
  )
}