import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Device from './Components/Device';





const App = () => {

  const a = "hello"
  return (
    <>


      <BrowserRouter>
        {/* <Device /> */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
