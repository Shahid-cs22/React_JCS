import React, { useState } from 'react'

const Condition2 = () => {

    const login = true;

    const fruit = ["mango", "banana", "grapes", "apple", "orange"];


    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (!password || !repassword) {
            setMessage("❌ Please fill both fields");
        } else if (password !== repassword) {
            setMessage("❌ Passwords do not match");
        } else {
            setMessage("✅ Passwords matched successfully!");
        }
    };

    return (

        <>
            <div className="conditiontwo-2">

                <h1>{login ? "Welcome" : "Please Login"}</h1>
            </div>


            <br />

            <ul>
                {fruit.map((item, index) => (<li key={item}>{item}</li>))}
            </ul>
            <br />


            {/* <div>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />

                <label htmlFor="repassword">Re-enter Password: </label>
                <input
                    type="password"
                    id="repassword"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                />
                <br /><br />

                <input type="button" value="Submit" onClick={handleSubmit} />

                <p >{message}</p>
            </div> */}

        </>
    )
}

export default Condition2