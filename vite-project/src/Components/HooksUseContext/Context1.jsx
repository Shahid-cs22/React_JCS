import React, { createContext } from 'react'
import Context2 from './Context2';
import LoopMap from '../Sample/LoopMap';
import Cards from '../Sample/Cards';


//view in LoopMap.jsx

export const data = createContext();


const Context1 = props => {
    const a = "SHahid"
    return (
        <>
            <div className="text-center">
                <data.Provider value={a}>
                   <Context2/>
                   <LoopMap/>
                   <Cards/>
                </data.Provider>
            </div>
        </>
    )
}



export default Context1
