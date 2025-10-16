import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const Count = () => {

    const [count, setCount] = useState(0);

    const increase = (e) => {
        setCount(count + 1);
    }

    useEffect(() => {
        document.title = `You Click ${count} times`
    }, [count])

    return (
        <>

            <div className=" text-center p-4">
                <h1>Count:{count}</h1>
                <Button onClick={increase} >Increase it</Button>

            </div>

        </>
    )
}

export default Count

