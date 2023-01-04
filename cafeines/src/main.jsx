import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './main.css'
import { ProductsContextProvider } from './context/ProductsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense>
    <ProductsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsContextProvider>
  </React.Suspense>
)
