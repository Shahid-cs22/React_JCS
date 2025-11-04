import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { myTheme } from './Theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Components/Header';
import Home from './pages/Homepg/Home';
import Secondpage from './pages/SecondPG/Secondpage';
import Thirdpage from './pages/Thirdpg/Thirdpage';
import Youtube from './pages/Youtube';
import TemporaryDrawer from './pages/TemporaryDrawer';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>

      <CssBaseline />
      <Header />
      <Home />

      <Thirdpage />
      {/* <Youtube/> */}
      <Secondpage />
      <TemporaryDrawer />
    </ThemeProvider>
  );
};

export default App;
