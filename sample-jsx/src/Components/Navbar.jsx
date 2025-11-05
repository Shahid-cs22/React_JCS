import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Navbar() {


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Material UI
                    </Typography>
                    <Typography>
                        <ul  className='navlist'>
                            <li> <a href="/">Home</a></li>
                            <li> <a href="/home">About</a> </li>
                            <li> <a href="/portfolio">Portfolio</a></li>
                            <li> <a href="/contact">Contact</a></li>
                        </ul>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav>

            </nav>

        </Box>
    );
}



export default Navbar;
