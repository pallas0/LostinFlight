import React from 'react'
import Header from './Header.js';
import SignUp from './SignUp.js';
import Login from './Login.js';


function WelcomePage() {
  return (
    <div>
        <h1>WelcomePage</h1>
        <SignUp/>
        <Login />
    </div>
  )
}

export default WelcomePage


