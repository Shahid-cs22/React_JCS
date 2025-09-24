import React from 'react'

const Condition = () => {
    var user = document.getElementById("user").value;
    var username;

    var user = (username) => {
        return
        { username ? "Welcome" : "Please Login" }
    }


    return (
        <>
            <div className="Firstcondition">
                <input type="text" name="" id="user" /> <br /> <br />

                <button type="button" id='btn'>Click Me</button>


            </div>






        </>
    )
}

export default Condition
