import styles from '../styles/header.module.scss'


export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="#">Acesse sua conta</a></li>
          <span>ou</span>
          <li><a href="#">Cadastre-se</a></li>
        </ul>
      </nav>
    </header>
  )
}
