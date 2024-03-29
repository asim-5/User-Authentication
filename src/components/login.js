import {React,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { FiLogIn } from 'react-icons/fi';
// import Register from './Register';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const emails=['asim@gmail.com','1'];
  const pass=['asim','1'];

  const handleSignIn = () => {
    const index = emails.indexOf(email);
    if (index !== -1 && pass[index] === password) {
      // Navigate to home page if email and password match
      navigate('/Home');
    } else {
      // Show error message if email or password is incorrect
      alert('Incorrect email or password. Please try again.');
    }
  };

  return (
    <> 
       <div className="app">
       <div className="left-pane">
        <div className="centered-content">
          <h2 className="welc text-center mb-3 " style={{ color: 'white' }}>Welcome</h2>
          <p className="query text-center" >This is a user authentication website designed for the purpose of 
          implementing socket programming to authenticate user with the highest security possible
          </p>
          <p className="qu text-center">
          For any queries contact us at maam@gmail.com
          </p>
        </div>
      </div>
        <div className="right-pane">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <h2 className='log mb-3 text-center'>Login Account </h2>
                <p className='mini text-center mb-3' style={{fontSize: '11px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fuga ad aspernatur aut aliquam ratione, illo ullam qui
                </p>
                <div className='mob'>
                <Form>
                  <Form.Group controlId="formBasicEmail" className='blue-line mb-3'>
                    <Form.Label className='cred mx-2 text-center'>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className='blue-line mb-4'>
                    <Form.Label className='cred mx-2 text-center'>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>

                  <Button variant="primary" type="button" className="btn-oval" onClick={handleSignIn}>
                      <FiLogIn className='mx-1' /> Sign In
                    </Button>
                  
                  <Link to="/Register" className="btn-sm mt-3 mb-2" style={{ fontSize: '12px' }}>
                    Don't have an account yet?
                  </Link>
                 
                </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Login;
