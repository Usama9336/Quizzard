//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from "./pages/login"
import Signup from "./pages/signup"
import Quiz from "./pages/quiz"
import Result from "./pages/result"
function App() {
  return (
    <Router>
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen">
     <Routes>
         <Route path="/" element={ <Login/> } />
         <Route path="/signup" element={ <Signup/> }/>
          <Route path="/quiz" element={ <Quiz/> } />
          <Route path="/result" element={ <Result/> } />
           
               </Routes>
               </div>
    </Router>
  );
}

export default App;
