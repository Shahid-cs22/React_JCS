import React from 'react'

const College = (props) => {

    const text = `Name is Mohamed ${props.hello} dept is ${props.clg}`;
    return (
        <>
            <h2>{text}</h2>
        </>
    )
}

export default College