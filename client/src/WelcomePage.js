import React from 'react'
import SignUp from './SignUp.js';
import Login from './Login.js';




function WelcomePage( { onLogin, welcomeNewUser } ) {

  function handleNewSignUp(newUser) {
    welcomeNewUser(newUser)
  }
  return (

  <div id="clouds">
      <div class="cloud x1"></div>
	    <div class="cloud x2"></div>
       <h1 id='WelcomePageTitle' >Lost in Flight</h1>
            <Login onLogin={onLogin}/>
	    <div class="cloud x6"></div>
	    <div class="cloud x7"></div>
            <SignUp onNewSignUp={handleNewSignUp}/>
	    <div class="cloud x3"></div>
    	<div class="cloud x4"></div>
	    <div class="cloud x5"></div>
  </div>
  )
}

export default WelcomePage


