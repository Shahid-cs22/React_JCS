import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const FormUseState2 = () => {

    const [formData, setFormData] = useState({
        name: "",
        gmail: ""
    });

    const handleSubmit = (e) =>{
        const{name,value} = e.target;
        setFormData((prevState)=> ({
            ...prevState,
            [name]:value
        }))
    }


    return (
        <>

            <Form onSubmit={handleSubmit}>

                <div className="">

                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' onChange={update.name} />
                </div>


            </Form>

        </>
    )
}

export default FormUseState2