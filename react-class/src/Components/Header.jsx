import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary bg-dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#">React Class</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#action3">Home</Nav.Link>
                            <Nav.Link href="#action4">Link</Nav.Link>
                            <Nav.Link href="#action5">Home</Nav.Link>
                            <Nav.Link href="#action6">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
