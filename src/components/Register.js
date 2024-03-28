import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/Login" className="btn-sm mt-3 mb-2" style={{ fontSize: '12px' }}>
                    Don't have an account yet?
                  </Link>
    </div>
  );
}

export default Register;
