import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Page1 from './Components/page1'
import Page2 from './Components/Page2'
import Condition from './Components/Condition'
import Condition2 from './Components/Condition2'
const App = () => {
  return (
    <div>

      <Navbar/>
      <Page1/>
      {/* <Condition/> */}
      <Condition2/>
      
      {/* <Page2/> */}
      <Footer/>
      
      
    </div>
  )
}

export default App
