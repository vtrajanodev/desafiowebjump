import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { SearchBar } from '../components/SearchBar'
import { CategoryApiContextProvider } from '../context/CategoryApi'
import { Camisetas } from '../pages/Camisetas'
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
            <Route path='*' element={
              <Navigate to="/home"/>
            } />
          </Routes>
          <Footer />
        </CategoryApiContextProvider>
      </BrowserRouter>
    </>
  )
}
