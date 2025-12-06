import React, { useEffect, useState } from 'react';

const LocalStorage2 = () => {
    const [name, setName] = useState("");


    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setName(savedName);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    const changeName = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="p-6">
            <h1 className="text-blue-600 mb-3">Local Storage Part TWO</h1>

            <input type="text" placeholder="Enter a Name" value={name} onChange={changeName} className="border px-3 py-2 rounded" />

            <p className="mt-3 text-lg">
                Vanakkam <span className="font-bold">{name || "Stranger"}</span>
            </p>
        </div>
    );
};

export default LocalStorage2;
