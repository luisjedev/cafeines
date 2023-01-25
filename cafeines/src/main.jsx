import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Layout from './components/Layout'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense>
      <BrowserRouter>
        <Layout Children={<App/>}>
        </Layout>
      </BrowserRouter>
  </React.Suspense>
)
