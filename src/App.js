import './Style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';   
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route  path="/" element={<Login />}  />
        <Route  path="/Register"  element={<Register />} />        
        <Route  path="/Home"  element={<Home />} />  
        <Route  path="/Login" element={<Login />}  />      
      </Routes> 
    </Router>
    </>
  );
}

export default App;
