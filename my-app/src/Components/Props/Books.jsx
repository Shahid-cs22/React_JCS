import React from 'react'
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Button } from 'react-bootstrap'

const Books = (props) => {
    return (
        <>

            <div className="demo1 pt-4  " style={{ display: 'inline-block' }}>

                <Card border='1 shadow' className='text-center h-100 sm-2 mb-4 ' style={{ width: '18rem', margin: '10px', marginLeft: '40px' }}>
                    <CardTitle className='pt-2 text-danger'>{props.name}</CardTitle>
                    <CardBody >
                        <CardSubtitle className='text-secondary mb-2' >Course :{props.course}</CardSubtitle> <hr />
                        <CardText >Price: ${props.price}</CardText>
                        <Button className='btn btn-secondary fs-6'>Buy Now</Button>
                    </CardBody>
                    <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
                </Card>

            </div>

        </>
    )
}

export default Books
