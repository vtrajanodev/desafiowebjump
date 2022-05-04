import { useContext, useEffect, useState } from "react"
import Aside from "../components/MainContent/Aside"
import { CategoryApiContext } from "../context/CategoryApi"

export const Camisetas = () => {

  const { items, getItems } = useContext(CategoryApiContext)

  useEffect(() => {
    getItems(1)  
  }, [])

  return (
    <section>
      <Aside />
      {
        items.map(camiseta => (
          <li>{camiseta.name}</li>
        ))
      }
    </section>
  )
}
