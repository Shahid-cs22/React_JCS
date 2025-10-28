import React, { useState, useEffect } from 'react';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <>
            <div className="pt-5 px-5" style={{ width: "30%", margin: "auto" }}>
                {users.map((user) => (
                    <div key={user.id} className="border p-3 mb-2 bg-light text-dark">


                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Phone:</strong> {user.phone} <br />

                    </div>
                ))
                }
            </div>
        </>
    );
}
export default Users;