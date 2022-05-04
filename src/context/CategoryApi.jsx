import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const CategoryApiContext = createContext()

export const CategoryApiContextProvider = ({ children }) => {

  const [categoriesList, setCategoriesList] = useState([])

  useEffect(() => {
    const getCategories = async () => {

      const { data } = await api.get('/api/V1/categories/list')
      setCategoriesList(data.items)

    }
    getCategories()
  }, []);


  return (
    <CategoryApiContext.Provider value={{categoriesList}}>
      {children}
    </CategoryApiContext.Provider>
  );
}



