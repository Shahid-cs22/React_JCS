import React, { useState } from 'react'
import * as Yup from "yup"
import Button from '@mui/material/Button'

const YupTwo = () => {

    const [formData, setFormData] = useState({ name: '', age: '', phone: '', address: '' })
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const schema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        age: Yup.number()
            .min(18, "Age must be at least 18")
            .required("Age is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
            .required("Phone number is required"),
        address: Yup.string().required("Address is required"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        alert(`Name: ${formData.name}\nAge: ${formData.age}\nPhone: ${formData.phone}\nAddress: ${formData.address}`);

        try {
            await schema.validate(formData, { abortEarly: false });
            setError({});
            alert("Form Submitted Successfully!");
        } catch (err) {
            const errors = {};
            err.inner.forEach((e) => {
                errors[e.path] = e.message;
            });
            setError(errors);
        }
    };

    return (
        <>
            <div className="text-center pt-30">

                <form className='space-y-4 p-6 max-w-sm mx-auto border border-green-950' onSubmit={handleSubmit}>
                    <h3 className="text-blue-500 text-2xl  font-light mb-8 ">Registration Form</h3>


                    <input type="text" name="name" id="name" placeholder='Enter Your Name' value={formData.name}
                        onChange={handleChange} className=' border p-2 w-full mb-2 text-fuchsia-950 mt-4' />

                    {error.name && (
                        <p className="text-red-800">{error.name}</p>
                    )}


                    <input type="number" name="age" id="age" placeholder='Enter Your Age' value={formData.age}
                        onChange={handleChange} className=' border p-2 w-full mb-2 text-fuchsia-950 ' />

                    {error.age && (
                        <p className="text-red-800">{error.age}</p>
                    )}


                    <input type="number" name="phone" id="phone" placeholder='Enter Your Phone No' value={formData.phone}
                        onChange={handleChange} className=' border p-2 w-full mb-2 text-fuchsia-950 ' />

                    {error.phone && (
                        <p className="text-red-800">{error.phone}</p>
                    )}


                    <input type="text" name="address" id="" maxLength={52} placeholder='Enter Your Address' value={formData.address}
                        onChange={handleChange} className=' border p-2 w-full mb-2 text-fuchsia-950 ' />

                    {error.address && (
                        <p className="text-red-800">{error.address}</p>
                    )}

                    <Button type='submit' variant="contained" color="error">
                        submit
                    </Button>
                </form>
            </div>
        </>
    )
}

export default YupTwo
