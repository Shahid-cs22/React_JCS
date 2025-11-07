import { useState } from 'react'
import './App.css'
import DarkLightMode from './pages/DarkLightMode'

const App = () => {


  return (
    <>
      <div>
        <h1 className='text-2xl text-red-400 font-bold underline'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum nam laboriosam quo!</h1>
      </div> <br />
      <hr />

      <div className="mt-10 mx-10">
        <h1 className='text-sm md:text-3xl text-blue-700 font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
          similique obcaecati iure animi rem vero numquam illum corrupti? Nesciunt, tempora!
        </h1>

        <p className="mt-4 text-yellow-300">

          hello everyone
        </p>

      </div>
      <DarkLightMode/>
    </>
  )
}

export default App
