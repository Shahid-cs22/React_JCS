import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FetchApi = () => {
    const [user, setUser] = useState([]);

    const navigate = useNavigate();
    const goToAxiosone = () => {
        navigate('/axiosone')
    }

    useEffect(() => {
        setTimeout(() => {


            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
                .then((data) => setUser(data))
                .catch((error) => console.error("Error Fetching:", error));
        }, 1000)
    }, []);

    return (
        <>
            <div className="p-6">
                <h1 className="text-xl font-bold mb-5">
                    Fetch Data from API
                </h1>
                <Button variant='secondary' className='' onClick={goToAxiosone}>Axios</Button>

                <div className='mt-5'>
                    {user.map((users) => (
                        <div key={users.id} className="mb-4 p-4 border rounded-md shadow-md w-3/5">
                            {users.name} - {users.email}
                        </div>
                    ))}
                </div>



            </div>

        </>
    );
};

export default FetchApi;
