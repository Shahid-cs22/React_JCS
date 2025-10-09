import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Count = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className="text-center mt-5">
                <h1>Count: {count}</h1>
                <Button  onClick={increase}>Click Me</Button>
            </div>
        </>
    )
}

export default Count;
