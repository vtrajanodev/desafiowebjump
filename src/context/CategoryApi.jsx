import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const CategoryApiContext = createContext()

export const CategoryApiContextProvider = ({ children }) => {

  const [categoriesList, setCategoriesList] = useState([])
  const [items, setItems] = useState([])

  const pathname = window.location.pathname

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/api/V1/categories/list')
      setCategoriesList(data.items)
    })();
  }, []);


  const getItems = async(id) => {
    const { data } = await api.get(`/api/V1/categories/${id}`)
      setItems(data.items)
  }

  return (
    <CategoryApiContext.Provider value={{ categoriesList, items, getItems, pathname }}>
      {children}
    </CategoryApiContext.Provider>
  );
}



