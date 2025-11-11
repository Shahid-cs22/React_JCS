import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import Nav2 from './Components/Nav2';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Nav2/>
      <FirstPage/>
      <SecondPage/>
    </ThemeProvider>
  );
}

export default App;
