import logo from '../assets/webjump-logo.png'
import styles from '../styles/searchBar.module.scss'

export const SearchBar = () => {
  return (
    <div className={`${styles.searchBar} container`}>
      <img src={logo} alt="Logomarca da webjump" />
      <div>
        <input type="text" />
        <button>BUSCAR</button>
      </div>
    </div>
  )
}
