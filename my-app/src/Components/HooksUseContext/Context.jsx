import React, { useContext } from 'react'
import { providerr } from './providerr'

const Context = () => {
    const a = useContext(providerr)
    return (
        <>
            <div className="">

                <h2>Welcome to REACT</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ipsam.</p>
                <h1>{a}</h1>

            </div>
        </>
    )
}

export default Context