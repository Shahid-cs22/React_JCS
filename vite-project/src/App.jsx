import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { myTheme } from './Theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Components/Header';
import Home from './pages/Homepg/Home';
import Secondpage from './pages/SecondPG/Secondpage';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>

      <CssBaseline />
      <Header />
      <Secondpage />
      <Home />

    </ThemeProvider>
  );
};

export default App;
