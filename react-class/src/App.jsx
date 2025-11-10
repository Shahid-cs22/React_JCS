import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TablesBoots from './pages/TablesBoots';
import ColorHooks from './Hooks/UseStateHooks/ColorHooks';
import UseStateHooks2 from './Hooks/UseStateHooks/UseStateHooks2';

import MainContext from './Hooks/UseContextHooks/MainContext';
import { Route, Routes } from 'react-router-dom';
import CountHooks from './Hooks/UseStateHooks/CountHooks';
import Users from './Hooks/UseEffectHooks/Users';
import Display from './Display';
import StudentsDetails from './Hooks/UseParamsHooks/StudentsDetails';
import StudentsView from './Hooks/UseParamsHooks/StudentsView';
import AsyncFun from './pages/asyncFun';

const App = () => {


  return (
    <>
      {/* <TablesBoots/> */}
      {/* <UseHooks2/> */}
      {/* <UseStateHooks2/> */}
      {/* <CountHooks/> */}
      {/* <MainContext/> */}
      {/* <Users/> */}
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/tablesBoots' element={<TablesBoots />} />
        <Route path='/usestate' element={<UseStateHooks2 />} />
        <Route path='/usecontext' element={<MainContext />} />
        <Route path='/useparams' element={<StudentsDetails />} />
        <Route path='/useparams/:id' element={<StudentsView />} />
        <Route path='/asyncfun' element={<AsyncFun />} />


      </Routes>

    </>
  )
}

export default App
