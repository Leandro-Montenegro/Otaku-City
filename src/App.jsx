import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const greeting = "Bienvenido/a, en esta tienda encontraras ropa, accesorios y mangas para satisfacer tus necesidades."
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={greeting}/>

    </>
  )
}

export default App
