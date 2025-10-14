import React from 'react'
import pic1 from '../assets/pic1.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="nav">
                <div className="nav-logo">
                    <Link to="/"><img src={pic1} alt="logo" />Logo</Link>
                </div>
                <div className="nav-items">

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
    )
}

export default Home