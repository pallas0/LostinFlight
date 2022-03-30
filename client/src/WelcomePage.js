import React from 'react'
import Header from './Header.js';
import SignUp from './SignUp.js';
import Login from './Login.js';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import styled, {keyframes} from 'styled-components' 


function WelcomePage( {onLogin} ) {

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
            <SignUp/>
          </Card>
        </Col>
       </Row>
   </Container>
	    <div class="cloud x3"></div>
    	<div class="cloud x4"></div>
	    <div class="cloud x5"></div>

      {/* <div class="cloud x1"></div>
	    <div class="cloud x5"></div> */}
  
  </div>
  


  )
}

export default WelcomePage


