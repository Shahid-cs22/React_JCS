import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navbar from './Components/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <FirstPage/>
      <SecondPage/>
    </ThemeProvider>
  );
}

export default App;
