import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import React from 'react'
import { InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

    const naviLogin = useNavigate();

    const goToLogin = () =>{
        naviLogin("/login")
    }


    return (
        <>

            <div className='signPg'>
                <Container  >
                    <Row lg={12} sm={12} >
                        <Col>
                            <h2 className='text-center pb-3'>Sign in</h2>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-circle-user"></i> </InputGroup.Text>
                                <Form.Control
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col className='d-none'></Col>
                    </Row>
                    <Row lg={12} sm={12}>
                        <Col>
                            <InputGroup className="mb-3">
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
                    <Row lg={12} sm={12}>
                        <Col>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="fa-solid fa-envelope"></i> </InputGroup.Text>
                                <Form.Control
                                    type="rmail"
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Col>
                        <Col className='d-none'></Col>
                    </Row>
                    <Row lg={12} sm={12}>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputPassword5"><i class="fa-solid fa-unlock"></i></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </InputGroup>
                        </Col>
                        <Col className='d-none'></Col>
                    </Row>
                    <Row lg={12} sm={12}>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputPassword5"><i class="fa-solid fa-unlock"></i></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Conform Password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                />
                            </InputGroup>
                        </Col>
                        <Col className='d-none'></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{ width: "300px" }} className='signbutn'>Sign Up</Button>
                        </Col>

                         <Col className='d-flex signbutn1'>
                         <p className='mx-3 pt-2'>Already Have an Acount? </p>
                            <Button variant='link' className='pb-2' onClick={goToLogin}  >Sign Up</Button>
                        </Col>

                    </Row>
                </Container>



            </div>

        </>
    )
}

export default Signin
