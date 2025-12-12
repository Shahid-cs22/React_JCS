import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Shop from './pages/Shop';
import Contact from './pages/Contact';


const App = () => {


  return (
    <>
   <Routes>
    <Route path='/cart' element={<Shop/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
     
    </>
  )
}

export default App
