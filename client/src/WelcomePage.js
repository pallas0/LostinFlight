import React from 'react'
import Header from './Header.js';
import SignUp from './SignUp.js';
import Login from './Login.js';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WelcomePage({onLogin}) {
  return (
  <div>
    <Container>
      <Row>
       <h1>Lost in Flight</h1>
      </Row>
      <Row>
        <Col>
           <Login onLogin={onLogin}/>
        </Col>
        <Col>
          <SignUp/>
        </Col>
       </Row>
   </Container>
  </div>
  )
}

export default WelcomePage


