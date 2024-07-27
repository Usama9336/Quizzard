//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
import Result from "./pages/result"
import { CreateQuiz } from './pages/createquiz';
import QuizFrontPage from './pages/frontpage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#dc004e', // Red
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
  },
  typography: {
    h2: {
      fontFamily: 'Comic Sans MS',
      color: '#ff4081', // Pink
    },
    h5: {
      fontFamily: 'Arial',
      color: '#651fff', // Purple
    },
  },
});


function App() {
  return (
    <Router>
    <div className=" h-screen">
     <Routes>
     <Route path="/" element={ 
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizFrontPage />
    </ThemeProvider>
      } />
         <Route path="/login" element={ <Login/> } />
         <Route path="/signup" element={ <Signup/> }/>
         <Route path="/quiz/:passcode" element={<Quiz />} />
          <Route path="/result" element={ <Result/> } />
           <Route path="/create" element={<CreateQuiz/>}/>
               </Routes>
               </div>
    </Router>
  );
}

export default App;
