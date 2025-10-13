import React from 'react';

const LoopMap = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

    return (
        <>
            <div className='m-5 text-primary'>
                <h2>Fruits List</h2>
                <ul>
                    {fruits.map((fruit, index) => (
                        <li key={index}> {fruit}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default LoopMap;

