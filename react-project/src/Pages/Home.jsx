// import React from 'react'
// import { Carousel } from 'react-bootstrap'
// import ExampleCarouselImage from '../assets/img1.png';
// const Home = () => {
//     return (
//         <>
//             <Carousel>
//                 <Carousel.Item>
//                     <ExampleCarouselImage text="First slide" />
//                     <Carousel.Caption>
//                         <h3>First slide label</h3>
//                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage text="Second slide" />
//                     <Carousel.Caption>
//                         <h3>Second slide label</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <ExampleCarouselImage text="Third slide" />
//                     <Carousel.Caption>
//                         <h3>Third slide label</h3>
//                         <p>
//                             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//                         </p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>

//         </>
//     )
// }

// export default Home

import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/corasel1.jpg';
import img2 from '../assets/corasel2.jpg';
import img3 from '../assets/corasel3.jpg';
import Header from '../Components/Header';

const Home = () => {
    return (
        <>
        
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        style={{ height: '500px', objectFit: 'cover' }}
                    />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Home;

