import { Col, Container, Row } from "react-bootstrap"
import food from '../assets/food.jpg'

const Home = () => {
    return (
        <>

            <div>
                <Container fluid className="">

                    <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundImage: `url(${food})`, backgroundSize: 'cover', backgroundPosition: 'center', textShadow:"2px 2px 3px yellow", filter: "brightness(0.7)" }}>
                        <Col lg={8} className="text-center text-white">
                            <h1 className="display-4 fw-bold" style={{filter: "brightness(101%)"}}>Welcome to FoodHUB</h1>
                            <p className="lead">Discover delicious recipes and culinary inspiration for every occasion.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home
