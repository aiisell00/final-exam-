import { useState } from 'react'
import './App.css'
import Header from './layouts/Header'
import { Route, Routes } from 'react-router'
import Footer from './layouts/Footer'
import HomePage from './pages/HomePage'
import AddPrductPage from './pages/AddProductPage'
import FavoritesPage from './pages/FavoritesPage'
import FavoritesContext from "./Context/favoritesContext"
import BasketContext from "./Context/basketContext"
import BasketPage from './pages/BasketPage'

function App() {
 const [favs, setFavs] = useState(FavoritesContext)
 const [basket, setBasket] = useState(BasketContext)
  return (
    <>
    <BasketContext.Provider values={{basket,setBasket}}>
    <FavoritesContext.Provider  values={{favs,setFavs}}>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add-products' element={<AddPrductPage/>}/>
        <Route path='/favorites' element={<FavoritesPage/>}/>
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
      <Footer/>
    </FavoritesContext.Provider>
    </BasketContext.Provider>
    </>
  )
}

export default App
