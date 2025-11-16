import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from '@mui/material/Button'


const YupOne = () => {
    const [formData, setFormData] = useState({ email: "", age: "" });
    const [error, setError] = useState({});

    const schema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email Required"),
        age: Yup.number().min(18, "Must be 18 or above").required("Age Required"),
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            await schema.validate(formData, { abortEarly: false });
            setError({});
            alert(`Email: ${formData.email}\n Age: ${formData.age}`)
            alert("Form Submitted Successfully!");
        } catch (err) {
            const errors = {};
            err.inner.forEach((e) => {
                errors[e.path] = e.message;
            });
            setError(errors);
        }
    };

    const navi = useNavigate();
    const goto = () => {
        navi("./YupTwo")
    }

    return (
        <div className="space-y-4 p-6 max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="border p-2 w-full"
                    value={formData.email}
                    onChange={handleChange}
                />
                {error.email && (
                    <p className="text-red-800">{error.email}</p>
                )}

                <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    className="border p-2 w-full mt-2"
                    value={formData.age}
                    onChange={handleChange}
                />
                {error.age && (
                    <p className="text-red-500">{error.age}</p>
                )}

                <button type="submit" className="bg-blue-500 text-center text-white mt-2 px-4 py-2 rounded">
                    Submit
                </button>
                <Button variant="contained" color="warning" onClick={goto}>
                  Click It
                </Button>
            </form>
        </div>
    );
};

export default YupOne;
