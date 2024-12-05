import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Product from './components/Product'
import ProductList from './components/ProductList'

const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" background="gray" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={route} />
    </>
  )
}

export default App
