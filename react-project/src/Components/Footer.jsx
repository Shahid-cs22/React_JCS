import React from 'react'
import { Col, Row } from 'react-bootstrap'
const Footer = () => {
    return (
        <>


            <div className="container-fluid text-center pt-3 footer-footer-1">
                <Row>
                    <Col xs={2}>
                        <h6 className='text-warning'  >AbeBooks</h6>
                        <div className="text-secondary footer-link ">
                            <p>Lorem, ipsum.</p>
                            <p>Books, art & collectibles</p>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </Col>
                    <Col xs={2}>
                        <h6 className='text-warning' > Amazon Web Services</h6>
                        <div className="text-secondary footer-link">
                            <p>Scalable Cloud</p>
                            <p>Computing Services</p>

                        </div>
                    </Col>
                    <Col xs={2}>

                        <h6 className='text-warning'>Audible</h6>
                        <div className="text-secondary footer-link">
                            <p>Download Audio Books</p>
                            <p>Movies</p>

                        </div>
                    </Col>
                    <Col xs={2}>

                        <h6 className='text-warning'>Amazon Prime Music</h6>
                        <div className="text-secondary footer-link">
                            <p>100 million songs, ad-free</p>
                            <p>Over 15 million podcast episodes</p>

                        </div>
                    </Col>
                    <Col xs={2}>
                        <h6 className='text-warning'>Shopbop</h6>
                        <div className="text-secondary footer-link">
                            <p>Designer Fashion Brands</p>

                        </div>
                    </Col>
                    <Col xs={2}>
                        <h6 className='text-warning'>Shopbop</h6>
                        <div className="text-secondary footer-link">
                            <p>Designer Fashion Brands</p>

                        </div>
                    </Col>


                </Row>



            </div>
            <p className='footer-footer-2 text-center ' container-fluid>&copy; {new Date().getFullYear()} Mohamed Shahid. All rights reserved.</p>

        </>
    )
}

export default Footer
