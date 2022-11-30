import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="full-screen bg-landing">
      <div className="container">
        <RegisterForm />
        <center>
          <h4>Already a Member?</h4>
          <button className="btn btn_sizeSm" onClick={onLogin}>
            Login
          </button>
        </center>
      </div>
    </div>
  );
}

export default LandingPage;
