import { Col, Container, Row } from "react-bootstrap"
import food from '../assets/food.jpg'

const Home = () => {
    return (
        <>

            <div>
                <Container fluid className="">

                    <Row className="justify-content-center " style={{ minHeight: '100vh',alignContent:"center" , backgroundImage: `url(${food})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <Col lg={8} className="text-center text-white justify-content-center ">
                            <h1 className="display-4 fw-bold" >Welcome to <span style={{ color: "yellow" }}>FoodHUB</span> </h1>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home
