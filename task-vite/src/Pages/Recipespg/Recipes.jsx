import React from 'react'
import { Card, ListGroup, Row, Col, CardFooter, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import {foodList} from '../../foodList'

const Recipes = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4  "> <i class="fa-solid fa-bowl-food"></i> <span className='nav-logo text-danger'> Our Special Recipes</span></h2>
            <Row className="g-4 mb-5">
                {foodList.map((item) => (
                    <Col key={item.id} md={4} lg={3} sm={6}>
                        <Card className="shadow-lg h-100">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <Card.Body className="text-center">
                                <Card.Title> <strong> {item.name} </strong></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {item.category}
                                </Card.Subtitle> <hr />
                                <Card.Text>Price: <i class="fa-solid fa-indian-rupee-sign"></i> {item.price}</Card.Text>
                                <ListGroup.Item>{item.description}</ListGroup.Item>
                            </Card.Body>
                            <CardFooter className='text-center' >
                                <Button variant='warning' size="sm" className='mx-1'>Buy Now</Button>
                                <Link to={`/recipies/${item.id}`} variant='secondary' size="sm">View</Link>

                            </CardFooter>

                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Recipes
