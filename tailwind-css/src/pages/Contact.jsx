import React, { useState } from "react";

const Contact = () => {

    const [formInput, setFormInput] = useState({
        name: "",
        age: "",
        number: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormInput((currentInput) => ({
            ...currentInput,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formInput);
        alert("Form Submitted Successfully!");
    };

    return (
        <>
            <div className="bg-gray-300 min-h-screen flex items-center justify-center">
                <form
                    className="bg-indigo-200 w-full max-w-md p-6 rounded-lg shadow-md"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

                   
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-left font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 mt-1 rounded border border-gray-400"
                            placeholder="Enter your name"
                            name="name"
                            value={formInput.name}
                            onChange={handleChange}
                        />
                    </div>

                    
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-left font-semibold">Age:</label>
                        <input
                            type="number"
                            id="age"
                            placeholder="Enter your age"
                            className="w-full p-2 mt-1 rounded border border-gray-400"
                            name="age"
                            value={formInput.age}
                            onChange={handleChange}
                        />
                    </div>

                   
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-left font-semibold">Number:</label>
                        <input
                            type="number"
                            id="phone"
                            placeholder="Enter your number"
                            className="w-full p-2 mt-1 rounded border border-gray-400"
                            name="number"
                            value={formInput.number}
                            onChange={handleChange}
                        />
                    </div>

                    
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-left font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 mt-1 rounded border border-gray-400"
                            placeholder="Enter your email"
                            name="email"
                            value={formInput.email}
                            onChange={handleChange}
                        />
                    </div>

                   
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-left font-semibold">Message:</label>
                        <textarea
                            id="message"
                            className="w-full p-2 mt-1 rounded border border-gray-400"
                            rows="4"
                            placeholder="Write your message..."
                            name="message"
                            value={formInput.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Contact;
