import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
                                                                                                                                                                                                                                                                                                                                                                   
function App() {                                                                                                                                                 
return(
    <Router>
    <Routes>
      <Route path="/" element={<MainPage/>} /> 
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
)
} 

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
