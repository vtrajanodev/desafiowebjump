import React from 'react'
import { Content } from '../components/MainContent/Content'
import { Navbar } from '../components/Navbar'
import { SearchBar } from '../components/SearchBar'

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Navbar />
      <Content />
    </div>
  )
}
