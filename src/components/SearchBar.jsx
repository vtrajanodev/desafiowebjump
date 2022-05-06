import logo from '../assets/webjump-logo.png'
import styles from '../styles/searchBar.module.scss'

export const SearchBar = () => {
  return (
    <div className={`${styles.searchBar} container`}>
      <img src={logo} alt="Logomarca da empresa webjump" />
      <div>
        <input type="text" title='Pesquisar categoria'/>
        <button>BUSCAR</button>
      </div>
    </div>
  )
}
