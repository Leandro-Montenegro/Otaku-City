import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import products from "./mocks/products.json";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
