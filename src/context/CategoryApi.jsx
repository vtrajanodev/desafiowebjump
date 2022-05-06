import { createContext, useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { api } from '../services/api'

export const CategoryApiContext = createContext('')

export const CategoryApiContextProvider = ({ children }) => {

  const [categoriesList, setCategoriesList] = useState([])
  const [items, setItems] = useState([])
  const [itemsFiltereds, setCamisasFiltradas] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    (async () => {
      const { data } = await api.get('/api/V1/categories/list')
      setCategoriesList(data.items)
      setLoading(false)
    })();
  }, []);


  const getItems = async (id) => {
    const { data } = await api.get(`/api/V1/categories/${id}`)
    setItems(data.items)
    setLoading(false)
  }

  const getItemsFilters = (filter) => {

    const itemsFiltered = items.filter((item) => item.filter[0].color === filter)
    setCamisasFiltradas(itemsFiltered)
    console.log(itemsFiltereds)
    setLoading(false)
  }

  if(loading) {
    return <Loading />
  }
 
  return (
    <CategoryApiContext.Provider value={{ categoriesList, items, getItems, getItemsFilters, itemsFiltereds }}>
      {children}
    </CategoryApiContext.Provider>
  );
}



