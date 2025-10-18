import { Col, Container, Row } from "react-bootstrap"
import food1 from '../assets/food1.jpg'

const Home = () => {
    return (
        <>

            <div>
                <Container fluid className="">
                    <Row>
                        <Col lg={12} className="p-0">
                            <div className="home-pic"><img src={food1} alt="" style={{ objectFit: "cover", height: "91vh", width: "100%" }} /></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home
