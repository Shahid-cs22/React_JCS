import React from 'react'
// import pic from '../assets/pic1'
import { Card, CardText, Col, ListGroup } from 'react-bootstrap'


const Cards = () => {

  const cse = [
    {
      S_No: "1",

      Studentid: "2688",
      Roll_No: "22RUCSA001",
      Student_Name: "ABINAYA  M",
      Section: "II Year III Sem  A",
      DOB: "05-10-2005 (17)",
      Address: "Thengamputhoor-629602",
      Blood_Group: "O+ve",
      Mobile_Number: "82206 47653",
      img: "./pic1.jpg"
    },
    {
      S_No: "2",
      Studentid: "2602",
      Roll_No: "22RUCSA002",
      Student_Name: "ABINAYA  R",
      Section: "II Year III Sem  A",
      DOB: "13-11-2004 (18)",
      Address: "TIRUPUR-633661",
      Blood_Group: "B+ve",
      Mobile_Number: "8778636441"
    },
    {
      S_No: "3",
      Studentid: "2703",
      Roll_No: "22RUCSA003",
      Student_Name: "ABISH  R",
      Section: "II Year III Sem  A",
      DOB: "15-06-2005 (18)",
      Address: "Mugamathoor-629174",
      Blood_Group: "B+ve",
      Mobile_Number: "7092373996"
    },
    {
      S_No: "4",
      Studentid: "2714",
      Roll_No: "22RUCSA004",
      Student_Name: "ABISH  S",
      Section: "II Year III Sem  A",
      DOB: "20-06-2005 (18)",
      Address: "PARAPATU-629252",
      Blood_Group: "O-ve",
      Mobile_Number: "93845 69903"
    },
    {
      S_No: "5",
      Studentid: "2726",
      Roll_No: "22RUCSA005",
      Student_Name: "ABISHEK  K",
      Section: "II Year III Sem  A",
      DOB: "25-05-2004 (19)",
      Address: " KALKULAM-629802",
      Blood_Group: "B+ve",
      Mobile_Number: "77087 32676"
    },
    {
      S_No: "6",
      Studentid: "2716",
      Roll_No: "22RUCSA006",
      Student_Name: "ABISHEK  M",
      Section: "II Year III Sem  A",
      DOB: "16-10-2004 (18)",
      Address: "NAGERCOIL-629252",
      Blood_Group: "A1+ve",
      Mobile_Number: "63744 96486"
    },
    {
      S_No: "7",
      Studentid: "2682",
      Roll_No: "22RUCSA007",
      Student_Name: "ABITHA  A.L",
      Section: "II Year III Sem  A",
      DOB: "21-04-2005 (18)",
      Address: "xavierpuram-629174",
      Blood_Group: "B+ve",
      Mobile_Number: "90421 07780"
    },
    {
      S_No: "8",
      Studentid: "2674",
      Roll_No: "22RUCSA008",
      Student_Name: "ADCHUTHAN  J.R",
      Section: "II Year III Sem  A",
      DOB: "03-10-2004 (19)",
      Address: "aZHAGANPARAI-629252",
      Blood_Group: "O-ve",
      Mobile_Number: "94422 63837"
    },
    {
      S_No: "9",
      Studentid: "2710",
      Roll_No: "22RUCSA009",
      Student_Name: "AJIN  S",
      Section: "II Year III Sem  A",
      DOB: "16-04-2005 (18)",
      Address: "allencode-629802",
      Blood_Group: "B+ve",
      Mobile_Number: "80727 68346"
    },
    {
      S_No: "10",
      Studentid: "2666",
      Roll_No: "22RUCSA010",
      Student_Name: "AJISH  M",
      Section: "II Year III Sem  A",
      DOB: "02-11-2004 (18)",
      Address: "THICKANAMCODE-629804",
      Blood_Group: "O+ve",
      Mobile_Number: "94896 55706"
    }
  ]
  return (
    <>

      <div className="card" style={{ border: '1px solid' }}>

        {
          cse.map((details) => (

            <div key={details.S_No}>
              <div className="card-1 text-center">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top"  src={details.img}   />
                  <Card.Body>
                    <Card.Title><strong> ID: </strong>{details.Studentid}</Card.Title>
                    <Card.Subtitle>{details.Student_Name}</Card.Subtitle>
                    <ListGroup.Item><strong>phone no :</strong>  {details.Mobile_Number}  </ListGroup.Item>
                    <ListGroup.Item><strong>DOB : {details.DOB}</strong> </ListGroup.Item>
                    <Card.Text><strong>Address :</strong>{details.Address}</Card.Text>


                  </Card.Body>
                </Card>

              </div>




            </div>

          ))
        }
      </div >

    </>
  )
}

export default Cards 