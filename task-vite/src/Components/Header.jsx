import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Shahid</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login <i className="fa-solid fa-user-plus" style={{color: "#dfdddd;"}}></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default Header
