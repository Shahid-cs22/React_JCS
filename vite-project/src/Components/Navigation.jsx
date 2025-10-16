import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navig = useNavigate()

    const goSection = ()=>{
        navig("/session")
    }
  return (
    <div>
      <Button onClick={goSection}>GoTO Secctiom</Button>
    </div>
  )
}

export default Navigation
