// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
  
    primary: {
      main: '#9621dfff',
      light: '#9c4dcc',
      dark: '#4a0d5a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#47af0bff',
      light: '#7bd84c',
      dark: '#2e7207',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fcf3f3ff',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#47af0bff',
      disabled: '#9e9e9e',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
    divider: '#e0e0e0',
  },

  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: 18,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#b11cd6af',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      color: '#6c1283ff',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#d61010ff',
    },
    body1: {
      fontSize: '1.125rem',
      color: '#2c2c2c',
    },
    body2: {
      fontSize: '1rem',
      color: '#2c2c2c',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 15,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
         
          textTransform: 'none',
          padding: '10px 20px',
          fontWeight: 600,
        },
        containedPrimary: {
          color: '#e00606ff',
        },
      },
    },
 
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#6c1283ff',
        },
      },
    },
  },

  shadows: Array(25).fill('none'),
});

export default theme;
