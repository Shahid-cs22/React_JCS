import React from 'react'

const SecondProp = (props) => {
    return (
        <>
             <div
        style={{
          margin: 'auto',
          width: '200px',
          border: '1px solid red',
          display: 'inline-block',
          padding: '10px',
        }}>
                <div className="" style={{gap:'20px'}}>
                    <h1>name : {props.name} </h1>
                </div>
            </div>
        </>
    )
}

export default SecondProp
