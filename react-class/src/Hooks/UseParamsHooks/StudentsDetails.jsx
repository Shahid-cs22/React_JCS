import React from 'react'
import { stu } from '../../../SMCE-CSE-2022'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../../../public/intro/logo.jpg"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const StudentsDetails = () => {
    const usenavi = useNavigate();

    const goToHome = () => {
        usenavi('/tablesBoots');
    }

    // const goToDetails = () => {
    //     usenavi('/studentsView');
    // }
    return (
        <>
            <div className="d-flex gap-4 flex-wrap justify-content-center mt-4 mb-4">
                {stu.map((data) => (

                    <Card style={{ width: '18rem' }}>

                        <Card.Img variant="top" src={logo} />
                        <Card.Body className='text-center'>
                            <Card.Title><strong className='text-danger align-center'>{data.Student_Name}</strong></Card.Title>
                            <Card.Subtitle className='text-muted'><strong>{data.Roll_No}</strong></Card.Subtitle>
                            <Card.Text className='text-start pt-2'>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <div className="d-flex justify-content-center gap-4">
                                <Button variant="primary" onClick={goToHome}>Home</Button>
                                <Link to={`/useparams/${data.id}`} className="btn btn-success btn-sm" > Details </Link>
                            </div>
                        </Card.Body>
                    </Card>

                ))}


            </div>
        </>
    )
}

export default StudentsDetails
