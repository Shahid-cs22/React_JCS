import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffect1 = () => {

    const [count, setCount] = useState(0);

    const increase = (e) =>{
        setCount(count +1);
    }
    
    useEffect(()=>{
        document.title= `You Click ${count} times`
    }, [count])

    return (
        <>
         <div className='text-center'>

            <h2>Count : {count}</h2>
            <Button onClick={increase }>Click Me </Button>

         </div>
        </>
    )
}

export default UseEffect1
