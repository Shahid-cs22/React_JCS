import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { data } from '../HooksUseContext/Context1'

const Colour = () => {

  const a = useContext(data)

  const [change, useChange] = useState("Morning")

  const clicked = () => {
    useChange("Evening")
    alert(`Hello ${Date()}`)
  }


  return (
    <>
      <div className="demo">
        <h1>Good {change} ! </h1>
        <Button variant='warning' onClick={clicked}>Click ME</Button>


      </div>
      

    </>

  )
}

export default Colour
