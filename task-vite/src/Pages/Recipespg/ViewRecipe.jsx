import React from 'react'
import { useParams } from 'react-router-dom'

const ViewRecipe = ({ foodList }) => {

    const { id } = useParams();
    const food = foodList.find((foodresep) => foodresep.id === Number(id))

    if (!foodresep) {
        return <h4>Product is NOT Fount</h4>
    }
    return (
        <>
            <div>
                <p>{food.id}</p>
                <p>{food.name}</p>
            </div>

        </>
    )
}

export default ViewRecipe