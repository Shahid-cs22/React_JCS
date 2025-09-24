import React from 'react'

const Condition2 = (const islogin = true) => {
    return (
        <>
            <div className="conditiontwo-2">

                <h1>{login ? "Welcome" : "Please Login"}</h1>
            </div>
        </>
    )
}

export default Condition2