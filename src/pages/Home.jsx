import React from 'react'
import { Navbar } from '../components/Navbar'
import { SearchBar } from '../components/SearchBar'

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
    </div>
  )
}
