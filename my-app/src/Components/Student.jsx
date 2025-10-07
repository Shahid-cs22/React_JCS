import React from 'react'
// import img1 from '../assets/pic1.jpg'

const Student = () => {

    let stu = [
        {
            id: 1,
            name: "Shahid",
            age: 199,
            college: "SMCE",
            phone: 12345789
        },

        {
            id: 2,
       
            name: "Bathan",
            age: 299,
            college: "SMCE",
            phone: 2354851
        },

        {
            id: 3,
            
            name: "Rafeek",
            age: 499,
            college: "SMCE",
            phone: 2365788
        },
           {
            id: 3,
            
            name: "Rafeek",
            age: 999,
            college: "SMCE",
            phone: 2365788
        }
    ]


    return (
        <>

            <div className='stude'>
                {
                    stu.map((detail) => (
                        <div className='stud' ><h1 key={detail.id}> Name : {detail.name}</h1>
                            <h5>{detail.img}</h5>

                            <h2>price : {detail.age}</h2>
                            <h3>address : {detail.college}</h3>
                            <h4>phone : {detail.phone}</h4>
                        </div>

                    ))
                }
            </div>



        </>
    )
}

export default Student