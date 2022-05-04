import { useContext } from "react"
import { CategoryApiContext } from "../../context/CategoryApi"
import styles from '../../styles/aside.module.scss'


const Aside = () => {

  const { categoriesList } = useContext(CategoryApiContext)

  return (
    <aside className={`${styles.aside} container`}>
      <nav>
        <ul>
          <li>
            <a href="#">Página inicial</a>
          </li>
          {categoriesList &&
            categoriesList.map(category => (
              <li key={category.id}>
                <a href="#">  {category.name}</a>
              </li>
            ))
          }
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside