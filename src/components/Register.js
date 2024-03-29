import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Container, Row, Col, Form, Button} from 'react-bootstrap';
// import { FiLogIn } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
import home from "../assets/clipart.png";

function Register() {
  return (
    <div className="app">
    <div className="left-pane">
     <div className="centered-content">
       <h2 className="welc text-center mb-3 " style={{ color: 'white' }}>Register to our network</h2>
       <p className="querys " >Provide details in order for us to register you to our network
       </p>
       <p className="qu text-center">
       For any queries contact us at maam@gmail.com
       </p>
     </div>
   </div>
  
     <div className="right-panes ">
     <div className="form-container">  
     <form className="form" >
        <h3 className='heading_form mx-2 mb-3'>Provide details</h3>
            <div className="form-group">
        
                <div className="half">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
                </div>
                <div className="half mx-2">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
                </div>
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
            <label htmlFor="country">Password</label>
            <input type="text" id="country" name="country" required />
            </div>
            <div className="form-group">
            <label htmlFor="explanation">Address</label>
            <textarea id="explanation" name="explanation" rows="4" required></textarea>
            </div>
            <div className="form-group">
            <button type="submit" className="submit-button">Submit</button>
            </div>
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
