import { useState } from "react"
import './style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Categories from './components/categories/Categories'

function App() {
  const greeting = "Bienvenido/a, en esta tienda encontraras ropa, accesorios y mangas para satisfacer tus necesidades."
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting}/>
      <Categories/>
    </>
  )
}

export default App
