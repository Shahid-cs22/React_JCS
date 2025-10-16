
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      
        <div className="nav-items">
          <div className="nav-logo">
            <Link to='/'> Shahid</Link>
          </div>
          <div className="nav-content">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"> <li>About</li></Link>
              <Link to="/session"><li>Session</li></Link>
              <Link to="/blog"><li>Blog</li></Link>
              <Link to="/dash"><li>Teatinomal</li></Link>
              <Link to="/footer"><li>Footer</li></Link>
            </ul>
          </div>
        </div>
      
    </>
  )
}

export default Header
