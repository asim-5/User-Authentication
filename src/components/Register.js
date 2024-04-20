import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import home from "../assets/clipart.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate(); 
  
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === retypePassword) {
      // Passwords match, perform registration or further actions
      setPasswordMatch(true);
      
      // Add your registration logic here
      // console.log('First Name:', firstName);
      // console.log('Last Name:', lastName);
      // console.log('Email:', email);
      // console.log('Password:', password);
      axios.post('http://localhost:3001/Register',{firstName,lastName,email,password})
      .then(result=>{console.log(result)
      if( result.data === "Email is already in use"){
        alert('Email is already in use');
      }
      else{
        navigate('/Login');
      }
    }
    )
      .catch(err=> console.log(err))   
    } else {
      // Passwords do not match, display error message
      setPasswordMatch(false);
    }
  };

  return (
    <div className="app">
      <div className="left-pane">
        <div className="centered-content">
          <h2 className="welc text-center mb-3 " style={{ color: 'white' }}>Register to our network</h2>
          <p className="querys " >Provide details in order for us to register you to our network</p>
          <p className="quu text-center">For any queries contact us at maam@gmail.com</p>
        </div>
      </div>
      <div className="right-panes ">
        <div className="form-container">  
          <form className="form" onSubmit={handleSubmit}>
            <h3 className='heading_form mx-2 mb-3'>Provide details</h3>
            <div className="form-group">
              <div className="half">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} />
              </div>
              <div className="half2">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="retypePassword">Retype Password</label>
              <input type="password" id="retypePassword" name="retypePassword" value={retypePassword} onChange={handleRetypePasswordChange} required />
              {!passwordMatch && <p style={{ color: 'red' }}>Passwords do not match</p>}
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">Sign up</button>
            </div>
            <Link to="/Login" className="btn-sm mt-3 mb-2" style={{ fontSize: '12px' }}>
              Already have an account yet?
            </Link>
          </form>
          
          <div className="form-image">
            <img src={home} alt="Form" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
