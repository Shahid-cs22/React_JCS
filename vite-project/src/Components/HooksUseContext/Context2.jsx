import React, { useContext } from 'react'
import { data } from './Context1'
const Context2 = () => {
    const a = useContext(data)
    return (
        <>
            <div className="">
                <h3>Hello My Name is Mohamed Shahid</h3>

              <p>{a}</p>

                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>

            </div>
        </>
    )
}

export default Context2
