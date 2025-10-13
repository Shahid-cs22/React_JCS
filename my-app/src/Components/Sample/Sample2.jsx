import React from 'react'
import { Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const Sample2 = () => {
    const mystyle = { backgroundColor: 'red' }
    return (

        <>
            <div className="">
                <Button variant='danger'>hello</Button>
            </div>
            <br />

            <div className="second">

                <Container fluid style={mystyle}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, atque.</p>
                </Container>

            <br /><br />
            <Row>
                <tr>
                <th>
                    No:1
                </th>
                 <th>
                    No:2
                </th>
                 <th>
                    No:3
                </th>
                </tr>
                
            </Row>
                <Row >
                    <Col>Welcome</Col>
                    <Col>To</Col>
                    <Col>React</Col>

                </Row>

            </div>
        </>
    )
}

export default Sample2