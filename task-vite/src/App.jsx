import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Login from './LoginSignPage/Login';
import Signin from './LoginSignPage/Signin';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Display from './Display';




const App = () => {


  return (
    <>
      <div>






        <Routes>

          <Route path='/' element={<Display />} />
          <Route path='/' element={<Header />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sigin' element={<Signin />} />
        </Routes>

      </div>

    </>
  )
}

export default App
