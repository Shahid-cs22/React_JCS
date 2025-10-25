import React from 'react'
import { Button, Stack, ButtonGroup, Slider, Box } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

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
            <Stack direction={"row"} borderColor={"silver"} spacing={2}>
                <ButtonGroup orientation='vertical' variant="outlined" aria-label="Basic button group" size="small">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>
            <Button variant="outlined" startIcon={<SendIcon />}>
                Delete
            </Button>

            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                    orientation='vertical'
                />
            </Box>

        </>
    )
}

export default View
