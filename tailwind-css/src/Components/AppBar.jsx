import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const AppBar = () => {
    return (

        <>

            <Navbar Navbar expand="lg" className="bg-body-tertiary" >
                
                    <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/cart">GoCart</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </ >
    )
}

export default AppBar


