import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const FormUseState = () => {


    const [name, setName] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`welcome ${name}`)
        console.log(name);
    }

    return (


        <>

            <Form onSubmit={handleSubmit} >
                <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
                <Button type='submit'>Submit</Button>
            </Form>

        </>
    )
}

export default FormUseState