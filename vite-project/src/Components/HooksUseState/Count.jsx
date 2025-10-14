import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Count = () => {

    const [count, setCount] = useState(0);

    const increase = (e) => {
        setCount(count + 1);
    }
    return (
        <>

            <div className=" text-center p-4">
                <h1>Count:{count}</h1>
                <Button onClick={increase} >BTN</Button>

            </div>

        </>
    )
}

export default Count
