import React from 'react'
import Table1 from './Components/Sample/Table1'
import Cards from './Components/Sample/Cards'
import Fprops from './Components/Props/Fprops'
import Count from './Components/HooksUseState/Count'
import InputUseState from './Components/HooksUseState/InputUseState'
import Colour from './Components/HooksUseState/Colour'

const View = () => {
    return (
        <>
            <div className="text-center">
                <Colour />
                <Count />
                
                <Table1 />
                <Cards />
                <Fprops />

                <InputUseState />

            </div>

        </>
    )
}

export default View
