import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { CategoryApiContextProvider } from '../context/CategoryApi'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { SearchBar } from '../components/SearchBar'
import { Calcados } from '../pages/Calcados'
import { Calcas } from '../pages/Calcas'
import { Camisetas } from '../pages/Camisetas'
import { Contato } from '../pages/Contato'
import { Home } from '../pages/Home'

export const LinkRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <CategoryApiContextProvider>
          <Header />
          <SearchBar />
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/camisetas' element={<Camisetas />} />
            <Route path='/calcas' element={<Calcas />} />
            <Route path='/calcados' element={<Calcados />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='*' element={
              <Navigate to="/home" />
            } />
          </Routes>
          <Footer />
        </CategoryApiContextProvider>
      </BrowserRouter>
    </>
  )
}
