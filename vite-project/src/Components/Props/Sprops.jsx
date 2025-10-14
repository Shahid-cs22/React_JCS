import React from 'react'
import { Col } from 'react-bootstrap'

const Sprops = (props) => {


    return (
        <>

            <div className='  border p-4 bg-light m-4 mb-3 p-1 justify-content-center ' style={{ display: "inline-block", minWidth: "200px" }}>
                <Col sm={12} md={12} lg={12} xl={12} xxl={12} className="text-center">
                    <strong className='text-center fs-3'>Students Details</strong>
                    <div className="" style={{ margin: "auto" }}>
                        <p>Name: {props.name}</p>
                        <h4>Age: {props.age}</h4>
                        <h4>College: {props.college}</h4>
                        <h4>Branch: {props.branch || 'NaN'}</h4>
                    </div>
                </Col>
            </div>

        </>
    )
}

export default Sprops
