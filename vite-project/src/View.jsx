import React from 'react'
import Table1 from './Components/Sample/Table1'
import Cards from './Components/Sample/Cards'
import Fprops from './Components/Props/Fprops'
import Count from './Components/HooksUseState/Count'
import InputUseState from './Components/HooksUseState/InputUseState'
import Colour from './Components/HooksUseState/Colour'
import Context1 from './Components/HooksUseContext/Context1'
import UseEffect1 from './Components/HooksUseEffect/UseEffect1'
import Navigation from './Components/Navigation'



const View = () => {
    return (
        <>
            <div className="text-center">
               
                <Colour />
                {/* <Count /> */}

                {/* <Table1 /> */}
                <Cards />
                <Fprops />
<Navigation/>
                <InputUseState />
                {/* <UseEffect1/> */}
               

                
                
            </div>

        </>
    )
}

export default View
