import React, { useState } from 'react'

const Condition1 = () => {

    // const txt = document.getElementById("txt");
    // const para = document.getElementById("para");
    // const btn = document.getElementById("btn");

    const [studentDetails, setStudentDetail] = useState({
        name: "", email: "", phone: ""
    })
    const [para2, setPara2] = useState("");
    const [para, setPara] = useState("");
    const [txt, setTxt] = useState("");

    const handleChange = (e) => {
        setTxt(e.target.value);
    }

    const handleButtonClick = () => {

        // setPara(txt);

        setTxt("Welcome")



    }

    return (
        <>
            <div className="page1-1">

                <input type="text" name="" onChange={handleChange} value={txt} placeholder='enter the name' /> <br /><br />
                <button type="button" onClick={handleButtonClick} >click me</button>
                <p id="para">{para}</p>

            </div>

            <div className="contact">
                <h1>Student Details</h1>

                <label htmlFor="name"> Name: </label>
                <input type="text" name="name" id="" placeholder='Enter Your Name' onChange={(e) => setStudentDetail({ ...studentDetails, name: e.target.value })} />
                <br /><br />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="" placeholder='Enter Your Email' onChange={(e) => setStudentDetail({ ...studentDetails, email: e.target.value })} />
                <br /><br />

                <label htmlFor="number">Number: </label>
                <input type="number" name="number" id="" placeholder='Enter Your Number' onChange={(e) => setStudentDetail({ ...studentDetails, phone: e.target.value })} />
                <br /><br />

                <input type="button" value="Submit" onClick={() => alert(JSON.stringify(studentDetails))} />
            </div>
        </>
    )
}

export default Condition1