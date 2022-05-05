import { useContext, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { CategoryApiContext } from "../../context/CategoryApi"
import styles from '../../styles/aside.module.scss'


const Aside = () => {

  const { categoriesList, pathname } = useContext(CategoryApiContext)

  const isCamisetas = useMemo(() => pathname === "/camisetas", [pathname]) 

  return (
    
    <aside className={`${styles.aside} container`}>
      <nav>
      {isCamisetas && (<div>to na rota camisetas</div>)}
        <ul>
          <li>
            <Link to="/home">Página inicial</Link>
          </li>
          {categoriesList &&
            categoriesList.map(category => (
              <li key={category.id}>
                <Link to={`/${category.path}`}>{category.name}</Link>
              </li>
            ))
          }
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside