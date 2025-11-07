import React, { useState } from 'react'

const DarkLightMode = () => {
    const [dark, setDark] = useState(false);

    return (

        <>
            <div className={dark ? "dark" : " "} >
                <div className="mt-30n flex flex-col items-center justify-center bg-white 
                dark:bg-gray-900  text-black pt-45  text-5xl dark:text-white ">

                    <h1 className='font-bold mb-20'>Dark Mode</h1>

                    <button onClick={() => setDark(!dark)} className='px-6 bg-blue-500 text-white text-2xl
                          hover:bg-amber-300 hover:text-black border-0 transition rounded-4xl mb-30'>Change To {dark ? "Light" : "Dark"}
                    </button>

                </div>



            </div>





        </>
    )
}

export default DarkLightMode
