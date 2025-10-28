import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const ColorHooks = () => {
    const [colour, setColour] = useState("red");
    const changeColor = () => {
        // const colors = ["blue", "green", "yellow", "pink", "orange", "purple", "gray"];
        // const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // setColour(randomColor);
        setColour(colour === "red" ? "blue" : "red");
    }
    return (
        <>
            <div className="container">
                <h1 className='mt-5'>My Favourite Color is <span style={{ backgroundColor: "gray", color: 'whitesmoke', padding:"10px " }}> {colour}</span> </h1>
                <Button onClick={changeColor}>Change Colour</Button>
            </div>
        </>
    )
}

export default ColorHooks
