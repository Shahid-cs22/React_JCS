import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Colour = () => {
    const [change, useChange]= useState("Morning")

    const clicked =()=>{
        useChange("Evening")
        alert(`Hello ${Date()}`)
    }

  return (
    
    <div className="demo">
        <h1>Good {change} ! </h1>
        <Button variant='warning' onClick={clicked}>Click ME</Button>
    </div>
  )
}

export default Colour
