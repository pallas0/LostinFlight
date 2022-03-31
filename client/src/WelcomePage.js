import React from 'react'
import SignUp from './SignUp.js';
import Login from './Login.js';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function WelcomePage( { onLogin, welcomeNewUser } ) {

  function handleNewSignUp(newUser) {
    welcomeNewUser(newUser)
  }
  return (

  <div id="clouds">
      <div class="cloud x1"></div>
	    <div class="cloud x2"></div>
    <Container>
      <Row>
       <h1 id='WelcomePageTitle' >Lost in Flight</h1>
      </Row>
      <Row>
        <Col>
          <Card>
            <Login onLogin={onLogin}/>
         </Card>
	    <div class="cloud x6"></div>
	    <div class="cloud x7"></div>
        </Col>
        <Col>
          <Card>
            <SignUp onNewSignUp={handleNewSignUp}/>
          </Card>
        </Col>
       </Row>
   </Container>
	    <div class="cloud x3"></div>
    	<div class="cloud x4"></div>
	    <div class="cloud x5"></div>
  </div>
  )
}

export default WelcomePage


