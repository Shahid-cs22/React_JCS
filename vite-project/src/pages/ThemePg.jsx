import { createTheme, ThemeProvider } from '@mui/material'

const ThemePg = createTheme({
    palette: {
        primary: {
            main: '#4ccf50'
        },
        secondary: {
            main: '#e4cf7c'
        },
        text: {
            secondary: '#e2d'
        }

    },
    typography: {
        fontFamily: 'monospace',
        h4: {
            fontWeight: '600'
        },

    }
})


export default ThemePg