import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const LocalStorage1 = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const savedCount = localStorage.getItem("count")
        if (savedCount) {
            setCount(Number(savedCount));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    const increase = () => {
        setCount(count + 1);
    };

    const navigation = useNavigate();

    const goToLocalStorage2 = () => {
        navigation('/LocalStorage2');
    }
    return (
        <>
            <div className="p-6">

                <h1 className="">Count With Local Storage</h1>

                <p>Count:{count}</p>

                <Button variant="primary" onClick={increase}>Increase it</Button>
                <Button variant='danger' className='font-bold ms-2' onClick={goToLocalStorage2}>Local Storage TWO</Button>
            </div>

        </>
    )
}

export default LocalStorage1