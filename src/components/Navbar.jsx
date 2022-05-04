import { useContext } from 'react'
import { CategoryApiContext } from '../context/CategoryApi'
import styles from '../styles/navbar.module.scss'


export const Navbar = () => {

  const { categoriesList } = useContext(CategoryApiContext)

  console.log(categoriesList)

  return (
    <div className={`${styles.navbar}`}>
      <nav className='containerMenu'>
        <ul>
          <li>
            <a href="#">Página inicial</a>
          </li>
          {categoriesList &&
            categoriesList.map(category => (
              <li key={category.id}>
                <a href="#">{category.name}</a>
              </li>
            ))
          }
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
