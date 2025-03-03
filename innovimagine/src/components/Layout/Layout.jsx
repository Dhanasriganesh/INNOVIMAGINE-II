import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../Routers/Routers'
import Herosection from '../comp/Herosection'
const Layout = () => {
  return (
    <Router>
      <Header/>
<Herosection/>
      <Routers/>
      <Footer/>
    </Router>
  )
}

export default Layout