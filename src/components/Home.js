// src/components/Home.js
    
import React from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
    
function Home(props) {
    return (
        <div>
          <img src="https://res.cloudinary.com/andreahabib/image/upload/v1642026304/React_Bank_dk7n1a.png" alt="bank" />
          <h1>Bank of React</h1>

          <Link to="/userProfile">User Profile</Link>
          <AccountBalance accountBalance={props.accountBalance} />
          <Link to="/login">Login</Link>
        </div>
    );
  }

export default Home;