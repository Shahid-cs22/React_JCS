import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoopMap from './Components/Sample/LoopMap'
import Table1 from './Components/Sample/Table1';
import Cards from './Components/Sample/Cards';
import Fprops from './Components/Props/Fprops';
import Count from './Components/HooksUseState/Count';
import InputUseState from './Components/HooksUseState/InputUseState';
import Colour from './Components/HooksUseState/Colour';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/TTitle/Header';
import View from './View';
import Context1 from './Components/HooksUseContext/Context1';



const App = () => {


  return (

    <>
      {/* <LoopMap />
      <Table1 />
      <Cards />
      <Fprops />
      <Count/>
      <InputUseState/>
      <Colour />
      */}

      <div>
        <Routes>
          <Route path='/' element={<View />} />
          <Route path='/about' element={<InputUseState />} />
          <Route path='/session' element={<Count />} />
          <Route path='/blog' element={<LoopMap />} />
          <Route path='/footer' element={<Cards />} />
          <Route path='/dash' element={<Fprops />} />
          <Route path='/context' element={<Context1 />} />


        </Routes>
      </div>
    </>

  )
}

export default App
