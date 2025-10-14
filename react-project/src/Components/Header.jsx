import React from 'react'
import img1 from '../assets/logo.jpg'
import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <div className="nav " >



        <div className="nav-logo">
          <img src={img1} alt="" style={{ height: "60px", borderRadius: '50px' }} />
        </div>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <div className="nav-items">

            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        {/* </Navbar.Collapse> */}
      </div>



    </>
  )
}

export default Header

// import { Navbar, Nav, Container, Image, Stack, Button } from 'react-bootstrap';
// import img1 from '../assets/logo.jpg';


// const Header = () => {
//   return (
//     <>
//       <Navbar bg="light" expand="lg" className="shadow-sm py-3">
//         <Container>
//           {/* Logo */}
//           <Navbar.Brand href="#">
//             <Image
//               src={img1}
//               alt="logo"
//               roundedCircle
//               style={{ height: "60px", width: "60px", objectFit: "cover", justifyContent: 'start' }}
//             />
//           </Navbar.Brand>

//           {/* Mobile Toggle */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           {/* Menu Items */}
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto fw-semibold">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#about">About</Nav.Link>
//               <Nav.Link href="#portfolio">Portfolio</Nav.Link>
//               <Nav.Link href="#services">Services</Nav.Link>
//               <Nav.Link href="#contact">Contact</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Stack direction="horizontal" gap={2}>
//         <Button as="a" variant="primary">
//           Button as link
//         </Button>
//         <Button as="a" variant="success">
//           Button as link
//         </Button>
//       </Stack>;
//     </>
//   );
// };

// export default Header;
