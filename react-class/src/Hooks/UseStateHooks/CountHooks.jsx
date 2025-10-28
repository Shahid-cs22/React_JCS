import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import { MyContext } from '../UseContextHooks/MainContext';

const CountHooks = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    }
    const reset = () => {
        setCount(0);
    }

    const b= useContext(MyContext)
    return (
        <>
            <div className="text-center mt-5">
                <div className="pb-5">
<h1>View in From UseContext.jsx <span style={{color:"red", textDecoration:"underline"}}>'{b}'</span> </h1>

                </div>
                <h2>Count: {count}</h2>
                <div className="d-flex gap-3 justify-content-center mt-4">
                    <Button variant='success' onClick={increase}>Increase</Button>
                    <Button variant='primary' onClick={reset}>Reset</Button>
                    <Button variant='danger' onClick={decrease}>Decrease</Button>
                </div>
            </div>

        </>
    )
}

export default CountHooks
