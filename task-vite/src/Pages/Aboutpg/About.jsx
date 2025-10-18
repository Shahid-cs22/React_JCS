import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import "../Aboutpg/About.css"
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about4 from "../../assets/about4.jpg"
import about5 from "../../assets/about5.jpg"
const About = () => {
  return (
    <>
      <div className="about-full">

        <Container className='my-5 '>
          <Row className='align-items-center'>
            <Col md={6} sm={6}>
              <Image src={about1} fluid style={{ height: "500px", objectFit: "cover", width: "90%", borderRadius: "15px 0px 15px" }} className='about-pic1 shadow-lg' />
            </Col>
            <Col md={6} sm={6}>
              <h2 className="mb-3"><i class="fa-solid fa-hotel"></i> About <span style={{ color: '#ff8800ff' }}>FoodHUB</span></h2>
              <p style={{ textAlign: 'justify' }}>
                Welcome to <strong>FoodHUB</strong> — where passion for food meets quality and taste!
                We are a modern restaurant dedicated to serving fresh, flavorful, and
                handcrafted meals made with love and locally sourced ingredients.
              </p>
            </Col>
          </Row>

          <Row className='align-items-center pt-4 pb-3'>
            <Col md={6} sm={6} className='py-t'>
              <h2 className='mb-3 text-end'><span style={{ color: '#008cffff' }}> Delicious </span> Multi Dishes <i class="fa-solid fa-bell-concierge"></i></h2>
              <p style={{ textAlign: 'justify' }}>

                At FoodHUB, we serve <strong>delicious multi-cuisine </strong>  dishes crafted by our skilled chefs using the freshest ingredients. From traditional favorites to modern recipes, every meal is made with passion to give you a memorable dining experience.
              </p>
            </Col>
            <Col md={6} sm={6}>
              <Image src={about2} fluid style={{ height: "500px", objectFit: "cover", width: "90%", borderRadius: "0px 15px 0px 15px" }} className='about-pic1 shadow-lg fluid' />

            </Col>
            <hr className='pt-1 mt-4' style={{ width: "80%", backgroundColor: "lightgray", textAlign: "justify", margin: "auto" }} />
          </Row>

          <Row className='align-items-center text-center' style={{textAlign:"justify"}}>
            <h1 className='mb-4'>Our Amazing Team</h1>
            <Col md={6} sm={6} lg={4}>
              <Image src={about3} style={{ width: "250px",maxHeight:"250px", borderRadius: "50%" }} />
              <h3 className='mt-3'>Ahmed Fayas</h3>
              <h5 style={{color:"lightgray", fontWeight:"bold"}} className='pb-4'>General Manager</h5>

            </Col>
            <Col md={6} sm={6} lg={4}>
              <Image src={about4} style={{ width: "250px",maxHeight:"250px", borderRadius: "50%" }} />
              <h3 className='mt-3'>Kori Johnson</h3>
              <h5 style={{color:"lightgray", fontWeight:"bold"}} className='pb-4'>Human Resources</h5>

            </Col>
            <Col md={6} sm={6} lg={4}>
              <Image src={about5} style={{ width: "250px",maxHeight:"250px", borderRadius: "50%" }} />
              <h3 className='mt-3'>Kevin Sagobo</h3>
              <h5 style={{color:"lightgray", fontWeight:"bold"}} className='pb-4'>Food Manager</h5>

            </Col>

           
          </Row>


        </Container>
      </div>
    </>
  )
}

export default About
