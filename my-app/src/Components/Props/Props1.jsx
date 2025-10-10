import React from 'react'
import College from './College'

const Props1 = () => {

    const name = "Shahid";
    const dept = "Computer Science";

    return (
        <>
            <div className="text-center pt-5">

                <h3>  My Name is  {name} and my Department is {dept} </h3>
                <College hello={name} clg ={dept} />
            </div>

        </>
    )
}

export default Props1