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


const App = () => {


  return (

    <>
      {/* <LoopMap />
      <Table1 />
      <Cards />
      <Fprops />
      <Count/>
      <InputUseState/> */}

      <Colour />

    </>

  )
}

export default App
