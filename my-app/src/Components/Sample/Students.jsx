import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

const Students = () => {

    const cse = [
        {
            S_No: "1",
            Studentid: "2688",
            Roll_No: "22RUCSA001",
            Student_Name: "IRSHATH A",
            Section: "II Year III Sem A",
            DOB: "05-10-1996 (28)",
            Address: "EATHAMOZHI",
            Blood_Group: "O+ve",
            Mobile_Number: "89034 26622",

        },
        {
            S_No: "2",
            Studentid: "2602",
            Roll_No: "22RUCSA002",
            Student_Name: "ABINAYA R",
            Section: "II Year III Sem A",
            DOB: "13-11-2004 (18)",
            Address: "TIRUPUR-633661",
            Blood_Group: "B+ve",
            Mobile_Number: "8778636441",

        }
    ];
    return (
        <>
            <div className="">
                <Row className='' xs={6}>
                    {cse.map((items) => (
                        <Col key={items.S_No}>
                            <Card className="text-center" style={{ borderRadius: '15px',  height:'100%'}}>
                                <CardBody>

                                    <CardTitle><h1>hello : {items.Blood_Group}</h1></CardTitle>

                                    <ListGroup variant='flush'>
                                        
                                        <ListGroupItem>STD : {items.Address}</ListGroupItem>
                                        <ListGroupItem>Location : {items.DOB}</ListGroupItem>
                                        <ListGroupItem>Location : {items.DOB}</ListGroupItem>
                                        <ListGroupItem>Location : {items.DOB}</ListGroupItem>
                                        <ListGroupItem>STD : {items.Address}</ListGroupItem>
                                        <ListGroupItem>STD : {items.Address}</ListGroupItem>
                                        <ListGroupItem>STD : {items.Address}</ListGroupItem>
                                        <ListGroupItem>STD : {items.Address}</ListGroupItem>
                                        <CardText>Vanakkam: {items.Roll_No}</CardText>
                                    </ListGroup>
                                </CardBody>


                            </Card>

                        </Col>
                    ))}

                </Row>

            </div>

        </>
    )
}

export default Students