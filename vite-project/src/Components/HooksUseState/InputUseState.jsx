import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const InputUseState = () => {

    const [data, setData] = useState({
        name: "",
        email: ""
    });

    const updateData = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.name}. My email is ${data.email}`);
        console.log(data);
    }

    return (
        <>
            <div className="main m-5 botder p-5 bg-secondary text-warning" style={{ width: "400px" }}>

                <form  >

                    <div className="pb-2">
                        <label htmlFor="name">Name: </label >
                        <input type="text" name="name" id="" onChange={updateData} style={{ border: "none" }} />
                    </div>

                    <div className="pb-2">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="" onChange={updateData} style={{ border: "none" }} />
                    </div >

                </form>
                <Button className='text-center ' onClick={handleSubmit}  >Submit</Button>
            </div>


        </>
    )
}

export default InputUseState
