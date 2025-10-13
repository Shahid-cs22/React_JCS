import React from 'react'

const Inline = () => {

    const navstyle= {color:'brown', display:'flex', display:'inline'}
    


    return (
        <>

        <div className="nav" style={navstyle}>
            <div className="nav-itm">
                <li>inline</li>
            </div>
            <div className="nav-itm1">
                <li>About</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Services</li>
                <li>Contact</li>
            </div>
        </div>
        </>
    )
}

export default Inline