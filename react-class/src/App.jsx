import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TablesBoots from "./pages/TablesBoots";
import ColorHooks from "./Hooks/UseStateHooks/ColorHooks";
import UseStateHooks2 from "./Hooks/UseStateHooks/UseStateHooks2";

import MainContext from "./Hooks/UseContextHooks/MainContext";
import { Route, Routes } from "react-router-dom";
import CountHooks from "./Hooks/UseStateHooks/CountHooks";
import Users from "./Hooks/UseEffectHooks/Users";
import Display from "./Display";
import StudentsDetails from "./Hooks/UseParamsHooks/StudentsDetails";
import StudentsView from "./Hooks/UseParamsHooks/StudentsView";
import YupOne from "./YUP/YupOne";
import YupTwo from "./YUP/YupTwo";
import Search from "./samples/Search";
import { lazy, Suspense } from "react";
const AsyncFun = lazy(() => import("./AsynchronousFun/AsyncFun"))


const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading lazy code</h2>} >

        <Routes>
          <Route path="/tablesBoots" element={<TablesBoots />} />
          <Route path="/usestate" element={<UseStateHooks2 />} />
          <Route path="/usecontext" element={<MainContext />} />
          <Route path="/useparams" element={<StudentsDetails />} />
          <Route path="/useparams/:id" element={<StudentsView />} />
          <Route path="/asyncfun" element={<AsyncFun />} />
          <Route path="/yupone" element={<YupOne />} />
          <Route path="/yupone/yuptwo" element={<YupTwo />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        
      </Suspense>
    </>
  );
};

export default App;
