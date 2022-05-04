import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { CategoryApiContextProvider } from '../context/CategoryApi'
import { Home } from '../pages/Home'

export const LinkRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <CategoryApiContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </CategoryApiContextProvider>
      </BrowserRouter>
    </>
  )
}
