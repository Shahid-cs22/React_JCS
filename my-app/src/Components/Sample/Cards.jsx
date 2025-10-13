import React from 'react'
import pic1 from "../../assets/pic1.jpg"
import pic2 from "../../assets/pic2.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic4 from "../../assets/pic4.jpg"  
import { Card, Col, Row, ListGroup } from 'react-bootstrap'

const Cards = () => {
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
      img: pic1
      
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
      img: pic2
     
    },
    {
      S_No: "3",
      Studentid: "2703",
      Roll_No: "22RUCSA003",
      Student_Name: "ABISH R",
      Section: "II Year III Sem A",
      DOB: "15-06-2005 (18)",
      Address: "Mugamathoor-629174",
      Blood_Group: "B+ve",
      Mobile_Number: "7092373996",
      img: pic3
      
    },
    {
      S_No: "4",
      Studentid: "2714",
      Roll_No: "22RUCSA004",
      Student_Name: "ABISH S",
      Section: "II Year III Sem A",
      DOB: "20-06-2005 (18)",
      Address: "PARAPATU-629252",
      Blood_Group: "O-ve",
      Mobile_Number: "93845 69903",
      img: pic4
      
    },
    {
      S_No: "5",
      Studentid: "2726",
      Roll_No: "22RUCSA005",
      Student_Name: "ABISHEK K",
      Section: "II Year III Sem A",
      DOB: "25-05-2004 (19)",
      Address: "KALKULAM-629802",
      Blood_Group: "B+ve",
      Mobile_Number: "77087 32676",
     
      
    },
    {
      S_No: "6",
      Studentid: "2716",
      Roll_No: "22RUCSA006",
      Student_Name: "ABISHEK M",
      Section: "II Year III Sem A",
      DOB: "16-10-2004 (18)",
      Address: "NAGERCOIL-629252",
      Blood_Group: "A1+ve",
      Mobile_Number: "63744 96486",
      
    },
    {
      S_No: "7",
      Studentid: "2682",
      Roll_No: "22RUCSA007",
      Student_Name: "ABITHA A.L",
      Section: "II Year III Sem A",
      DOB: "21-04-2005 (18)",
      Address: "Xavierpuram-629174",
      Blood_Group: "B+ve",
      Mobile_Number: "90421 07780",
      
    },
    {
      S_No: "8",
      Studentid: "2674",
      Roll_No: "22RUCSA008",
      Student_Name: "ADCHUTHAN J.R",
      Section: "II Year III Sem A",
      DOB: "03-10-2004 (19)",
      Address: "Azhaganparai-629252",
      Blood_Group: "O-ve",
      Mobile_Number: "94422 63837",
      
    },
    {
      S_No: "9",
      Studentid: "2710",
      Roll_No: "22RUCSA009",
      Student_Name: "AJIN S",
      Section: "II Year III Sem A",
      DOB: "16-04-2005 (18)",
      Address: "Allencode-629802",
      Blood_Group: "B+ve",
      Mobile_Number: "80727 68346",
      
    },
    {
      S_No: "10",
      Studentid: "2666",
      Roll_No: "22RUCSA010",
      Student_Name: "AJISH M",
      Section: "II Year III Sem A",
      DOB: "02-11-2004 (18)",
      Address: "Thickanamcode-629804",
      Blood_Group: "O+ve",
      Mobile_Number: "94896 55706",
    
    }
  ]

  return (
    <>
    <div className="cards2 p-5">
      <Row className="g-5">
        {cse.map((details) => (
          <Col key={details.S_No} xs={12} sm={6} md={4} lg={4}>
            <Card className="text-center shadow-sm h-100" style={{ borderRadius: '15px' }}>
              <Card.Img variant='top' src={details.img} style={{minHeight:"300px"}}/>
              
              <Card.Body>
                <Card.Title>
                  <strong>ID:</strong> {details.Studentid} </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">{details.Student_Name} </Card.Subtitle>
                
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Phone:</strong> {details.Mobile_Number}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>DOB:</strong> {details.DOB}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Address:</strong> {details.Address}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  )
}

export default Cards
