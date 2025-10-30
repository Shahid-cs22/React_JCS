import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
    palette: {

        primary: {
            main: '#5e174eff',

        },
        text: {
            main: '#0be0fcff',
            secondary: '#0a3a23c7',

        },
        secondary: {
            main: '#462307ff',
        },
        error: {
            main: '#ffa600ff',
            light:'#bbff0091'
           
        }
    },

    typography: {
        fontFamily: 'ariel, sans-serif',
        h2: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#c9abb9ff',
        },
        h6: {
            fontWeight: 'bold',
            fontSize: '16px',
        }
    },
});
