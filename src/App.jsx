import { useState } from "react"
import './style.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import Categories from "./components/categories/Categories"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from "./components/products/ProductList"
import CategoriesProductList from "./components/categories/CategoriesProductList"


function App() {
  const greeting = "Bienvenido/a, en esta tienda encontraras ropa, accesorios y mangas para satisfacer tus necesidades."
  const [count, setCount] = useState(0)

  return (
    <>
    <ItemListContainer greeting={greeting}/>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path= "/" element={<Categories/>} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/category/:categoryId" element={<CategoriesProductList />} />
      </Routes>

    </Router>
      
    </>
  )
}

export default App
