import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/first2.jpg'
import image2 from '../assets/first1.jpg'
import image3 from '../assets/first3.jpg'
import Typography from '@mui/material/Typography'


const FirstPage = () => {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={image1}
                            alt="First slide"

                            style={{ width: "auto", height: "100vh" }}
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Second slide"

                            style={{ width: "auto", height: "100vh" }}
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="Third slide"

                            style={{ width: "auto", height: "100vh" }}
                        />

                    </Carousel.Item>

                </Carousel>

            </div>
        </>
    );
};

export default FirstPage;
