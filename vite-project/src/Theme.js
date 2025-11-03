import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
    palette: {

        primary: {
            main: '#5e174eff',

        },
        text: {
            main: '#0be0fcff',

        },
        secondary: {
            main: '#462307ff',
        },
        error: {
            main: '#ffa600ff',           
        }
    },

    typography: {
        fontFamily: 'ariel, sans-serif',
        h2: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#ffae00ff',
        },
        h6: {
            fontWeight: 'bold',
            fontSize: '16px',
        }
    },
});
