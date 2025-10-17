import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import React from 'react'
import { InputGroup } from 'react-bootstrap'


const Login = () => {
    return (
        <>


            <div className='loginPg'>
                <Container >
                    <Row lg={12} sm={12}>
                        <Col>
                            <h2 className='text-center pb-4 pt-3'>Login</h2>
                            <InputGroup className="mb-5">
                                <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-user"></i> </InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col className='d-none'></Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-4">
                                <InputGroup.Text id="inputPassword5"><i class="fa-solid fa-unlock"></i></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </InputGroup>
                        </Col>
                        <Col className='d-none'></Col>
                    </Row>
                    <div>
                        <Button variant="link">Forgot Password?</Button> <Button variant="link">SignIn</Button></div>
                </Container>



            </div>
        </>
    )
}

export default Login

