import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AxiosOne = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();
  const goTo = () => {
    navigate("/fetchapi");
  };

  useEffect(() => {
    axios.get("http://localhost:5000/data ")
      .then(res => setUser(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-5">
          Fetch Data from AXIOS API
        </h1>

        <Button variant='info' onClick={goTo} className="mb-4">Go to Fetch API</Button>

        <div className="container mt-5">
          <div className="row justify-content-center">
            {user.map((fruit) => (
              <div key={fruit.id} className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
                <div className="p-4 border rounded shadow text-center h-100">
                  <p><b>ID:</b> {fruit.id}</p>
                  <p><b>Family:</b> {fruit.order}</p>
                  <h5><b>Name:</b> {fruit.name}</h5>

                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="img-fluid mt-2"
                    style={{ maxHeight: "120px", objectFit: "contain", justifyItems: "center" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosOne;
