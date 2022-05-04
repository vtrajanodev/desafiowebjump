import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
          </Routes>
          <Footer />
        </CategoryApiContextProvider>
      </BrowserRouter>
    </>
  )
}
