import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary bg-dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/" >React Class</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/tablesBoots">Home</Nav.Link>
                            <Nav.Link as={Link} to="/usestate">UseState</Nav.Link>
                            <Nav.Link as={Link} to="/usecontext">UseContext</Nav.Link>
                            <Nav.Link as={Link} to="/useparams">UseParams</Nav.Link>
                            <Nav.Link as={Link} to="/asyncfun">AsynFun</Nav.Link>
                            <Nav.Link as={Link} to="/yupone">YUP</Nav.Link>
                            <Nav.Link as={Link} to="/search">Search</Nav.Link>
                            <Nav.Link as={Link} to="/localstorage">LocalStorage</Nav.Link>
                            <Nav.Link as={Link} to="/fetchapi">Api</Nav.Link>
                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
