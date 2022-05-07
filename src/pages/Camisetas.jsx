import { useContext, useEffect } from "react"
import { CategoryApiContext } from "../context/CategoryApi"
import { CamisetaFilter } from "../components/Filters/CamisetaFilter"
import styles from '../styles/camisetas.module.scss'

export const Camisetas = () => {

  const { items, getItems, itemsFiltereds } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(1)
  }, [])

  return (
    <div className="flex container">
      <CamisetaFilter />

      <section className={styles.camisetas}>
        {!itemsFiltereds.length ?
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={`/src/assets/${camiseta.image}`} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name}. preço: ${camiseta.price}.`}>COMPRAR</button>
            </div>
          ))
          :
          itemsFiltereds.map(camiseta => (
            <div key={camiseta.id}>
              <img src={`/src/assets/${camiseta.image}`} alt="Imagem da camiseta" />
              <span id="comprar-item">{camiseta.name}</span>
              <span id="comprar-item" className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name}. preço: ${camiseta.price}.`}>COMPRAR</button>
            </div>
          ))
        }
        {!itemsFiltereds.length ?
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={`/src/assets/${camiseta.image}`} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name}. preço: ${camiseta.price}.`}>COMPRAR</button>
            </div>
          ))
          :
          itemsFiltereds.map(camiseta => (
            <div key={camiseta.id}>
              <img src={`/src/assets/${camiseta.image}`} alt="Imagem da camiseta" />
              <span id="comprar-item">{camiseta.name}</span>
              <span id="comprar-item" className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name}. preço: ${camiseta.price}.`}>COMPRAR</button>
            </div>
          ))
        }
        {!itemsFiltereds.length ?
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={`/src/assets/${camiseta.image}`} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name}. preço: ${camiseta.price}.`}>COMPRAR</button>
            </div>
          ))
          :
          itemsFiltereds.map(camiseta => (
            <div key={camiseta.id}>
              <img src={`/src/assets/${camiseta.image}`} alt="Imagem da camiseta" />
              <span id="comprar-item">{camiseta.name}</span>
              <span id="comprar-item" className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button title="comprar" aria-label={` ${camiseta.name}. preço: ${camiseta.price}.`}>COMPRAR</button>
            </div>
          ))
        }
      </section>
    </div>
  )
}
