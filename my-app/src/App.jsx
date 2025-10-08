import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Page1 from './Components/page1'
import Page2 from './Components/Page2'
import Condition2 from './Components/Condition2'
import Condition1 from './Components/Condition1'
import Sample1 from './Sample/sample1'
import Inline from './Components/Inline'
import Student from './Components/Student'
import Sample2 from './Components/Sample2';
import Tables from './Components/Tables';
import Cards from './Components/Cards';



const App = () => {
  return (
    <div>

      {/* <Navbar/>
      <Page1/>
      <Condition1/>
      <Condition2/> 
      
      
       <Page2/>
       <Footer/> 
      
       <Inline/>

       <Sample1/> 
      <Student />
      <Sample2/>
      <Tables/> */}
      <Cards />


    </div>
  )
}

export default App
