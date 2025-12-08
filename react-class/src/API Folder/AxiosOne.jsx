import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AxiosOne = () => {
    const [user, setUser] = useState([]);

    const navigate = useNavigate();
    const goTo = () => {
        navigate("/fetchapi")
    }

    useEffect(() => {
        axios.get("https://http.cat/2")
            .then(res => setUser(res.data))
            .catch(error => console.log(error))
    }, []);



    return (
        <>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-5">
                    Fetch Data from API
                </h1>

                <Button onClick={goTo}>hello</Button>

                <div>
                    {user && user.map((users) => (
                        <div
                            key={users.id}
                            className="mb-4 p-4 border rounded-md shadow-md w-3/5"
                        >
                            <img src={users.image} alt="" />
                            <h3>{users.title}</h3>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default AxiosOne;
