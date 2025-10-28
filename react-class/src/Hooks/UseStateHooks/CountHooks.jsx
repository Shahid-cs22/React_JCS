import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

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

    return (
        <>
            <div className="text-center mt-5">
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
