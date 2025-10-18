import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
  return (
    <>

      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container className='p-0'>
          <Navbar.Brand as={Link} to="/" className='nav-logo'>FoodHUB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 header-menu">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/sigin">Sigin <i className="fa-solid fa-user-plus" style={{ color: "#dfdddd;" }}></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}

export default Header
