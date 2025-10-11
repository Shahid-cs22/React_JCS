import React from 'react'
import Books from './Books'

//props 2-1

const Courses = () => {

    const dept = "CSE";
    const clg = "SMCE";


    return (
        <>

            <div className="text-center pt-5">

                <h3> My Department is {dept} and my College is {clg} </h3> <hr />
                <Books dpt={clg} cg = {clg} />
                


            </div>
        </>
    )
}

export default Courses
