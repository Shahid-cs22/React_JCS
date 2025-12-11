import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Shop from './pages/Shop';


const App = () => {


  return (
    <>
   <Routes>
    <Route path='/cart' element={<Shop/>}/>
   </Routes>
     
    </>
  )
}

export default App
