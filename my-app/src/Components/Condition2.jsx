import React from 'react'

const Condition2 = () => {

    const login = true;

    const fruit = ["mango", "banana", "grapes", "apple", "orange"];

    return (
        
        <>
            <div className="conditiontwo-2">

                <h1>{login ? "Welcome" : "Please Login"}</h1>
            </div>


            <br />

            <ul>
                {fruit.map((item, index) => (<li key={item}>{item}</li>))}
            </ul>


        </>
    )
}

export default Condition2