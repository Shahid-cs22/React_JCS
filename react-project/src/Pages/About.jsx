import React from 'react'
import Header from '../Components/Header'
import { Form } from 'react-bootstrap'
import Footer from '../Components/Footer'


const About = () => {
    return (
        <>
            
       
            <div className="">
                <Form.Select size="lg">
                    <option>Large select</option>
                </Form.Select>
                <br />
                <Form.Select>
                    <option>Default select</option>
                </Form.Select>
                <br />
                <Form.Select size="sm">
                    <option>Small select</option>
                </Form.Select>
            </div>

            <Footer />
        </>
    )
}

export default About
