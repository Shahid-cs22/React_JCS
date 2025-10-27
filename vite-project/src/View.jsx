import React from 'react'
import { Button, Stack, ButtonGroup, Slider, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import MuiFirst from './Components/UmiComponent/MuiFirst';

// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

const View = () => {
    function valuetext(value) {
        return `${value}°C`;
    }

    return (
        <>
            <div className="text-center">

                <h1>Welcome To Home Page</h1>

            </div>
            <MuiFirst/>
           

        </>
    )
}

export default View
