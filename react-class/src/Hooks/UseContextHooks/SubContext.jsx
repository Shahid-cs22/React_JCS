import React, { useContext } from 'react'
import { MyContext } from './MainContext'

const SubContext = () => {
    const c = useContext(MyContext)
    return (
        <>
            <div className="">{c} welcome to react</div>

        </>
    )
}

export default SubContext
