import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { addItem,removeItem, increaseQty, decreaseQty,clearCart } from "./Cart";

const Shop = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/donors")
      .then((res) => {
        setDonors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load donors.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4"> Loading donors... </div>;
  if (error) return <div className="p-4 text-danger">{error}</div>;



  return (
    <div className="container py-4">
      <h1 className="mb-4">Donors</h1>

      <div className="row">
        {donors.map((d) => (
          <div key={d.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                
                <h5 className="card-title">{d.name}</h5>
              
                <p className="card-text mb-1"><strong>Price:</strong> {d.price}</p>
                <p className="card-text mb-1"><strong>Blood:</strong> {d.bloodGroup}</p>
                <p className="card-text mb-1"><strong>Location:</strong> {d.location}</p>
                <p className="card-text mb-1"><strong>DOB:</strong> {new Date(d.dob).toLocaleDateString()}</p>
                <p className="card-text mb-1"><strong>Phone:</strong> {d.phone}</p>
                <p className="card-text"><strong>Email:</strong> {d.email}</p>
                <Button variant="primary" onClick={()=>dispatch(addItem(id))}>Contact</Button>
                
                <Button variant="success" className="ms-2">Donate</Button>
                <Button variant="warning" className="ms-2">Donate</Button>

              </div>
              <div className="card-footer text-muted">
                Added: {new Date(d.addedAt).toLocaleString()}
              </div>

            </div>
          </div>
        ))}
      </div>
      {<div> {console.log(addItem) }</div>}
    </div>
  );
};

export default Shop;
