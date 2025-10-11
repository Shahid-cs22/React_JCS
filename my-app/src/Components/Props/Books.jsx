import React from 'react'

//props 2-2

const Books = (props) => {
    const text = `My Department is ${props.dpt} and my College is ${props.cg}+`;
    return (
        <>
            <h1>{text}</h1>
        </>
    )
}

export default Books
