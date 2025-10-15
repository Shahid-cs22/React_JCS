import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom';
import Display from './Pages/Display';
import Contact from './Pages/Contact';
import Header from './Components/Header';


const App = () => {


  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />



      </Routes>
    </>
  )
}

export default App
