import { createContext, useEffect, useState } from 'react'
import { Loading } from '../components/Loading'
import { api } from '../services/api'

export const CategoryApiContext = createContext('')

export const CategoryApiContextProvider = ({ children }) => {

  const [categoriesList, setCategoriesList] = useState([])
  const [items, setItems] = useState([])
  const [itemsFiltereds, setCamisasFiltradas] = useState([])
  const [pantsFiltered, setPantsFiltered] = useState([])
  const [shoesFiltereds, setShoesFiltereds] = useState([])
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
    const itemsFiltered = items.filter(item => item.filter[0].color === filter)
    setCamisasFiltradas(itemsFiltered)
    console.log(itemsFiltereds)
    setLoading(false)
  }

  const getShoesFilters = (filter) => {
    const shoesFiltered = items.filter(item => item.filter[0].color === filter)
    setShoesFiltereds(shoesFiltered)
    console.log(shoesFiltered)
    setLoading(false)
  }

  const getPantsFilters = (gender) => {
    if (gender === 'Masculina') {
      const pantsFiltered = items.filter(pant => pant.filter[0].gender === gender)
      setPantsFiltered(pantsFiltered)
      console.log(pantsFiltered)
    }
    else if (gender === 'Feminina') {
      const pantsFiltered = items.filter(pant => pant.filter[0].gender === gender)
      setPantsFiltered(pantsFiltered)
      console.log(pantsFiltered)
    }
  }

  if (loading) {
    return <Loading />
  }

  return (
    <CategoryApiContext.Provider value={{ categoriesList, items, getItems, getItemsFilters, itemsFiltereds, pantsFiltered, getPantsFilters, getShoesFilters, shoesFiltereds }}>
      {children}
    </CategoryApiContext.Provider>
  );
}



