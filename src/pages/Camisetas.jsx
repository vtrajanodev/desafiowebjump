import { useContext, useEffect } from "react"
import Aside from "../components/MainContent/Aside"
import { CategoryApiContext } from "../context/CategoryApi"
import styles from '../styles/camisetas.module.scss'
import tshirtImg from '../assets/shirt-1.jpg'
import { CamisetaFilter } from "../components/Filters/CamisetaFilter"

export const Camisetas = () => {

  const { items, getItems } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(1)
  }, [])

  return (
    <div className="flex container">
      <CamisetaFilter />

      <section className={styles.camisetas}>
        {
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={tshirtImg} alt="Imagem da camiseta" />
              <span id="comprar-item">{camiseta.name}</span>
              <span id="comprar-item" className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name} preço: ${camiseta.price}`}>COMPRAR</button>
            </div>
          ))
        }
        {
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={tshirtImg} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name} preço: ${camiseta.price}`}>COMPRAR</button>
            </div>
          ))
        }

        {
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={tshirtImg} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name} preço: ${camiseta.price}`}>COMPRAR</button>
            </div>
          ))
        }

      </section>
    </div>
  )
}
