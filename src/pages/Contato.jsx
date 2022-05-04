import React from 'react'
import Aside from '../components/MainContent/Aside'
import styles from '../styles/contato.module.scss'

export const Contato = () => {
  return (
    <div className='flex container'>
      <Aside />
      <section className={styles.contato}>
        <h1>Desenvolvido por Victor Trajano</h1>
        <ul>
          <li>
            <a href="https://github.com/vtrajanodev" target="_blank">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/victor-trajano-dev/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://wa.me/5592982127867" target="_blank">WhatsApp</a>
          </li>
        </ul>
      </section>

    </div>
  )
}
