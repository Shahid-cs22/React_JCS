import React from 'react'
import pics from '../assets/pic1.jpg'
import pics2 from '../assets/pic2.jpg'
import pics3 from '../assets/pic3.jpg'
import pics4 from '../assets/pic4.jpg'


const Page1 = () => {
    return (
        <>
            <div className='pic-content'>
                <img src={pics} alt="" />
                <br />
            </div>

            {/* <div className="display-content">
                <div className="images">
                    <img src={pics2} alt="" />
                    <img src={pics3} alt="" />
                    <img src={pics4} alt="" />
                </div>

                <div className="images2">
                    <img src={pics4} alt="" />
                    <img src={pics2} alt="" />
                    <img src={pics3} alt="" />
                </div>

            </div> */}



        </>
    )
}

export default Page1
