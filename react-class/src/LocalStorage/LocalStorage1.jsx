import React, { useEffect, useState } from 'react'

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




    return (
        <>
            <div className="p-6">

                <h1 className="">Count With Local Storage</h1>

                <p>Count:{count}</p>

                <button type="button" onClick={increase}>Increase it</button>

            </div>

        </>
    )
}

export default LocalStorage1