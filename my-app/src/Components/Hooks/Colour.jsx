import React, { useState } from "react"
import { Button } from "react-bootstrap";

const Colour = () => {

    const [color, setColor] = useState("morning")

    const clicked = (e) => {
        setColor("evening");

    }

    return (


        <>
            <div className="text-center pt-5 text-capitalize">
                <h1 >good {color}</h1>

                <Button onClick={clicked} > Button Clicked</Button>

            </div>
        </>
    )
}

export default Colour;
