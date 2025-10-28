import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const UseStateHooks2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  const updateForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Username: ${formData.username}\nEmail: ${formData.email}`);
  };

  return (
    <div
      className="border p-5 mt-5"
      style={{
        boxShadow: "0 0 10px gray",
        borderRadius: "10px",
        backgroundColor: "whitesmoke",
        width: "50%",
        margin: "auto"
       


      }}
    >
      <Form className="container mt-3" onSubmit={handleSubmit}  >
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={updateForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={updateForm}
          />
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UseStateHooks2;
