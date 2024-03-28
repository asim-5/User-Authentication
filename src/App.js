import './Style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';   
import Register from './components/Register';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route  path="/Login" element={<Login />}  />
        <Route  path="/Register"  element={<Register />} />        
      </Routes> 
    </Router>
    </>
  );
}

export default App;
