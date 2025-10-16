import React, { useContext } from 'react';
import { data } from '../HooksUseContext/Context1';

const LoopMap = () => {
    const a = useContext(data)

    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

    return (
        <>
            <div className='m-5 text-primary text-center'>
                <h2>Fruits List </h2>
                <ul >
                    {fruits.map((fruit, index) => (
                        <li key={index} style={{listStyle:"none"}}> {fruit}</li>
                    ))}
                </ul>
            </div>

            <div className="">{a} My name is Mohamed Shahid</div>
        </>
    );
};

export default LoopMap;

