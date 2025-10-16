import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, CardImg, Col, Row } from 'react-bootstrap';
// import img1 from '.../assets/pic1.jpg/'

import { data } from '../HooksUseContext/Context1'

const Cards = () => {

    const stu = [
        {
            S_No: "6",
            Studentid: "2716",
            Roll_No: "22RUCSA006",
            Student_Name: "ABISHEK  M",
            Section: "II Year III Sem  A",
            DOB: "16-10-2004 (18)",
            Address: "5/29\nKUNNANKADU\nNAGERCOIL-629252",
            Blood_Group: "A1+ve",
            img: "img1"
        },
        {
            S_No: "7",
            Studentid: "2682",
            Roll_No: "22RUCSA007",
            Student_Name: "ABITHA  A.L",
            Section: "II Year III Sem  A",
            DOB: "21-04-2005 (18)",
            Address: "6/94\nvalan vilai\nxavierpuram-629174",
            Blood_Group: "B+ve",
            Mobile_Number: "90421 07780",
        },
        {
            S_No: "8",
            Studentid: "2674",
            Roll_No: "22RUCSA008",
            Student_Name: "ADCHUTHAN  J.R",
            Section: "II Year III Sem  A",
            DOB: "03-10-2004 (19)",
            Address: "8-12\nKATTUVILAI\naZHAGANPARAI-629252",
            Blood_Group: "O-ve",
            Mobile_Number: "94422 63837",
        },
        {
            S_No: "23",
            Studentid: "2715",
            Roll_No: "22RUCSA023",
            Student_Name: "CHRISTOBHA  T",
            Section: "II Year III Sem  A",
            DOB: "01-01-2005 (18)",
            Address: "13-22\nr.c.street\nMEKKAMANDAPAM-629166",
            Blood_Group: "B+ve",
            Mobile_Number: "99523 14034"
        }

    ];
    const a = useContext(data)
    return (
        <div className="p-4">
            <h2 className="mb-4 text-center text-primary fw-bold">Students Details !{a}</h2>
            <Row className="g-4">
                {stu.map((mem) => (
                    <Col key={mem.S_No} xs={12} sm={6} md={4} lg={3}>
                        <Card className='shadow-lg border-0 rounded-3 h-100 text-center'>
                            <CardImg variant="top" src={mem.img} alt={mem.Student_Name} />
                            <CardBody>
                                <h5>{mem.Student_Name}</h5>

                                <p><strong>Roll No:</strong> {mem.Roll_No}</p>
                                <p><strong>Mobile:</strong> {mem.Mobile_Number}</p>
                                <p><strong>Blood Group:</strong> {mem.Blood_Group}</p>
                            </CardBody>
                            <CardFooter>{mem.Section}</CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Cards;
