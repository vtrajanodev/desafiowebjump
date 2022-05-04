import { useContext } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/home">Página inicial</Link>
          </li>
          {categoriesList &&
            categoriesList.map(category => (
              <li key={category.id}>
                <Link to={category.path}>{category.name}</Link>
              </li>
            ))
          }
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
