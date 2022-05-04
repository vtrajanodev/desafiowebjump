import { useContext, useEffect } from "react"
import Aside from "../components/MainContent/Aside"
import { CategoryApiContext } from "../context/CategoryApi"
import calcadosImg from '../assets/shoes-3.jpg'
import styles from '../styles/calcados.module.scss'


export const Calcados = () => {

  const { items, getItems } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(2)
  }, [])


  return (
    <div className="flex container">
      <Aside />

      <section className={styles.calcados}>
        {
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={calcadosImg} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button>COMPRAR</button>
            </div>
          ))
        }
        {
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={calcadosImg} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button>COMPRAR</button>

            </div>
          ))
        }

        {
          items.map(camiseta => (
            <div key={camiseta.id}>
              <img src={calcadosImg} alt="Imagem da camiseta" />
              <span>{camiseta.name}</span>
              <span className={styles.currency}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(camiseta.price)}
              </span>
              <button>COMPRAR</button>
            </div>
          ))
        }

      </section>
    </div>
  )
}