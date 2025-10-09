import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const UseState1 = () => {

    const [name, setName] = useState({
        name: "",
        email: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is ${name.name} and My Email is ${name.email}`);
    }

    const updateForm = (e) => {
        setName((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit} >
                <div className="" style={{ width: "400px", margin: "auto", marginTop: "50px", paddingBottom: "20px" }}>
                    <div className=" pb-3">
                        <label htmlFor="name">Enter Your Name : </label>
                        <input type="text" name="name" id="" onChange={updateForm} /> <br />
                    </div>

                    <div className="">
                        <label htmlFor="email">Enter Your Email : </label>
                        <input type="email" name="email" id="" onChange={updateForm} />
                    </div>

                    <Button onClick={handleSubmit214} > Click ME</Button>
                </div>
            </Form>

        </>
    )
}

export default UseState1;