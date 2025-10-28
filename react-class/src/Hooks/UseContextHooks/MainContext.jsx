import React from 'react'
import SubContext from './SubContext';
import { createContext } from 'react';
import CountHooks from '../UseStateHooks/CountHooks';

export const MyContext = createContext();
const MainContext = () => {

    const a = "Hello World";
    const b = "Good Morning"
    return (
        <>
        {/* view CounterHooks.jsx */}

            <MyContext.Provider value={a}>
                <CountHooks />
                <SubContext />
            </MyContext.Provider>

            <MyContext.Provider value={b}>
                <SubContext />
            </MyContext.Provider>
        </>
    )
}

export default MainContext
