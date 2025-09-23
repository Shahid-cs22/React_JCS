import React from 'react'
import Welcome from './Components/Welcome'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Page1 from './Components/page1'
import Page2 from './Components/Page2'
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Welcome/> */}
      <Page1/>
      <Page2/>
      <Footer/>
      
    </div>
  )
}

export default App
