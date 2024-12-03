import React from 'react'

import Header from './components/Header'
import { GlobalCss } from './styles'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
